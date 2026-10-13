import React, { useEffect } from 'react';
import { COMPANY } from '../data/company';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  breadcrumbs?: { name: string; path: string }[];
  serviceType?: string;
  ogImage?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical,
  breadcrumbs,
  serviceType,
  ogImage = '/assets/images/hero_it_depot_imaging_1791866053170.jpg',
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Helper to set or create meta tag
    const setMeta = (nameAttr: string, attrVal: string, contentVal: string) => {
      let el = document.querySelector(`meta[${nameAttr}="${attrVal}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(nameAttr, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', contentVal);
    };

    const resolvedOgImage = ogImage.startsWith('http')
      ? ogImage
      : `${typeof window !== 'undefined' ? window.location.origin : 'https://www.argusx.com'}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', resolvedOgImage);
    setMeta('property', 'og:site_name', COMPANY.name);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', resolvedOgImage);

    // 3. Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // 4. Update JSON-LD structured data script
    const structuredDataId = 'argus-seo-structured-data';
    let scriptTag = document.getElementById(structuredDataId) as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = structuredDataId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemas: any[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: COMPANY.name,
        legalName: COMPANY.legalName,
        url: COMPANY.productionUrl,
        foundingDate: `${COMPANY.foundedYear}-01-01`,
        telephone: COMPANY.phone,
        email: COMPANY.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: COMPANY.address.street,
          addressLocality: COMPANY.address.city,
          addressRegion: COMPANY.address.state,
          postalCode: COMPANY.address.zip,
          addressCountry: COMPANY.address.country,
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: COMPANY.name,
        url: COMPANY.productionUrl,
      },
    ];

    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: b.name,
          item: `${COMPANY.productionUrl}${b.path.startsWith('/') ? b.path : '/' + b.path}`,
        })),
      });
    }

    if (serviceType) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: serviceType,
        provider: {
          '@type': 'Organization',
          name: COMPANY.name,
          url: COMPANY.productionUrl,
        },
        areaServed: {
          '@type': 'Country',
          name: 'United States',
        },
        description: description,
      });
    }

    scriptTag.textContent = JSON.stringify(schemas);
  }, [title, description, canonical, breadcrumbs, serviceType, ogImage]);

  return null;
};
