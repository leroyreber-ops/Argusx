/**
 * Comprehensive page data, SEO metadata, and structured copy for all 11 pages.
 * Fully aligned with Argus IT Services' verified core offerings and B2B standards.
 */

export interface PageContent {
  slug: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  heroKicker: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  heroImageAlt: string;
  heroBadge?: string;
  serviceType?: string;
  breadcrumbs: { name: string; path: string }[];
}

export const PAGES_DATA: Record<string, any> = {
  home: {
    slug: 'home',
    path: '/',
    metaTitle: 'Argus IT Services — B2B Hardware Lifecycle & Managed IT Solutions',
    metaDescription: 'Argus IT Services manages complete technology lifecycles: hardware procurement, depot staging, proactive managed IT, field engineering, and secure ITAD.',
    canonical: 'https://www.argusx.com/',
    heroKicker: 'Technology Lifecycle Management Since 1997',
    heroTitle: 'Complete IT Asset Lifecycles. From First Boot to Secure Retirement.',
    heroSubtitle: 'Argus IT Services partners with enterprises and growing businesses across North America to procure, configure, support, and securely retire technology hardware with total operational precision.',
    heroImage: '/src/assets/images/hero_it_depot_imaging_1791866053170.jpg',
    heroImageAlt: 'Argus IT Services technician staging and configuring business laptops inside the Fort Worth depot facility',
    breadcrumbs: [{ name: 'Home', path: '/' }],
  },
  about: {
    slug: 'about',
    path: '/about/',
    metaTitle: 'About Argus IT Services — 28+ Years of Hardware Lifecycle Excellence',
    metaDescription: 'Founded in 1997 as Argus Connection in the Dallas/Fort Worth metroplex, Argus delivers reliable IT asset procurement, depot repair, field support, and secure disposition.',
    canonical: 'https://www.argusx.com/about/',
    heroKicker: '28+ Years of Engineering Heritage',
    heroTitle: 'Engineered Precision in Hardware Lifecycle Management',
    heroSubtitle: 'Originally formed in 1997 as Argus Connection in Fort Worth, Texas, Argus IT Services brings decades of hands-on electronics engineering, depot repair mastery, and logistics expertise to modern business technology.',
    heroImage: '/src/assets/images/hero_it_depot_imaging_1791866053170.jpg',
    heroImageAlt: 'Technicians at the Argus IT Services Fort Worth depot facility performing system testing and preparation',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'About Argus', path: '/about/' },
    ],
  },
  enterprise: {
    slug: 'enterprise-it-services',
    path: '/enterprise-it-services/',
    metaTitle: 'Enterprise IT Services — High-Volume Fleet Lifecycle & Depot SLA | Argus',
    metaDescription: 'Turnkey enterprise IT lifecycle support: multi-site hardware rollouts, advance exchange depot programs, custom SLAs, and NIST 800-88 certified fleet disposition.',
    canonical: 'https://www.argusx.com/enterprise-it-services/',
    heroKicker: 'Enterprise Lifecycle Operations',
    heroTitle: 'Scale Your Technology Fleet Without Expanding IT Overhead',
    heroSubtitle: 'High-volume staging, zero-touch employee deployments, SLA-backed hardware exchange, and audited asset retirement built for complex multi-location enterprises.',
    heroImage: '/src/assets/images/enterprise_server_datacenter_1791866053375.jpg',
    heroImageAlt: 'Enterprise data center server corridor managed by Argus infrastructure engineers',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Enterprise IT Services', path: '/enterprise-it-services/' },
    ],
  },
  smb: {
    slug: 'small-business-it-services',
    path: '/small-business-it-services/',
    metaTitle: 'Small & Midsize Business IT Services — Dependable Hardware & Support | Argus',
    metaDescription: 'Accessible, right-sized IT services for growing businesses: hardware & software bundles, proactive monitoring, responsive depot support, and secure disposal.',
    canonical: 'https://www.argusx.com/small-business-it-services/',
    heroKicker: 'Right-Sized Technology Partnerships',
    heroTitle: 'Enterprise-Grade IT Discipline Designed for Growing Businesses',
    heroSubtitle: 'Eliminate technology friction with transparent hardware bundling, proactive systems management, and fast depot repair—giving your team corporate-level reliability without corporate complexity.',
    heroImage: '/src/assets/images/field_technician_collaboration_1791866053603.jpg',
    heroImageAlt: 'IT consultants discussing small and midsize business technology architecture',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Small Business IT Services', path: '/small-business-it-services/' },
    ],
  },
  procurement: {
    slug: 'it-procurement-deployment',
    path: '/it-procurement-deployment/',
    metaTitle: 'IT Procurement & Deployment Services — Hardware Sourcing & Imaging | Argus',
    metaDescription: 'Commercial equipment procurement, Device as a Service (DaaS), custom imaging, asset tagging, and kitting delivered from our Fort Worth depot to end users nationwide.',
    canonical: 'https://www.argusx.com/it-procurement-deployment/',
    heroKicker: 'Source & Deploy',
    heroTitle: 'Zero-Touch Hardware Procurement, Staging & Rollout',
    heroSubtitle: 'From OEM specification and bulk hardware acquisition to custom image burning, peripheral kitting, and desk-side delivery—every computer arrives fully primed for your workforce.',
    heroImage: '/src/assets/images/hero_it_depot_imaging_1791866053170.jpg',
    heroImageAlt: 'Argus depot bench staging and custom imaging business laptops and desktop systems',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'IT Procurement & Deployment', path: '/it-procurement-deployment/' },
    ],
  },
  managed: {
    slug: 'managed-it-services',
    path: '/managed-it-services/',
    metaTitle: 'Managed IT Services — Proactive Monitoring, Patching & Security | Argus',
    metaDescription: 'Keep business systems stable with 24/7 infrastructure monitoring, operating system patch automation, endpoint hygiene, and scheduled asset health reporting.',
    canonical: 'https://www.argusx.com/managed-it-services/',
    heroKicker: 'Proactive Systems Management',
    heroTitle: 'Keep Business-Critical Infrastructure Resilient and Up-to-Date',
    heroSubtitle: 'Proactive 24/7 monitoring, automated patch compliance, and disciplined systems administration that prevent downtime before it interrupts your operations.',
    heroImage: '/src/assets/images/enterprise_server_datacenter_1791866053375.jpg',
    heroImageAlt: 'Network engineers monitoring server status and data center infrastructure performance',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Managed IT Services', path: '/managed-it-services/' },
    ],
  },
  support: {
    slug: 'it-support-services',
    path: '/it-support-services/',
    metaTitle: 'IT Support, Depot & Field Services — Fort Worth Depot & Field Dispatch | Argus',
    metaDescription: 'Our Fort Worth Complete Care depot provides component repair, advance hardware swaps, and nationwide white-glove field technician dispatch for mission-critical IT.',
    canonical: 'https://www.argusx.com/it-support-services/',
    heroKicker: 'Complete Care Depot & Field Engineering',
    heroTitle: 'Rapid Hardware Repair Depot and On-Site Field Engineering',
    heroSubtitle: 'Minimize downtime with certified component repair at our Fort Worth facility, same-day advance hardware exchanges, and skilled on-site field engineers ready to deploy.',
    heroImage: '/src/assets/images/field_technician_collaboration_1791866053603.jpg',
    heroImageAlt: 'Argus field service technicians performing on-site network rack maintenance',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'IT Support Services', path: '/it-support-services/' },
    ],
  },
  itad: {
    slug: 'it-asset-disposition',
    path: '/it-asset-disposition/',
    metaTitle: 'IT Asset Disposition & Secure Data Destruction — NIST 800-88 Certified | Argus',
    metaDescription: 'Audit-ready ITAD services: serialized NIST 800-88 data sanitization, physical drive shredding, destruction certificates, hardware refurbishing, and zero-landfill recycling.',
    canonical: 'https://www.argusx.com/it-asset-disposition/',
    heroKicker: 'Secure Retirement & ITAD',
    heroTitle: 'Certified IT Asset Disposition and Verifiable Data Destruction',
    heroSubtitle: 'Protect sensitive company records and meet regulatory compliance with serialized drive wiping, physical hardware destruction, and eco-conscious recycling with gain-share recovery.',
    heroImage: '/src/assets/images/secure_asset_disposition_1791866053999.jpg',
    heroImageAlt: 'Argus asset technician scanning hardware barcodes for serialized audit logging and certified data wiping',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'IT Asset Disposition', path: '/it-asset-disposition/' },
    ],
  },
  staffing: {
    slug: 'it-staffing-project-services',
    path: '/it-staffing-project-services/',
    metaTitle: 'IT Staffing & Project Services — Migrations, Moves & Rollouts | Argus',
    metaDescription: 'Execute technology projects on schedule: corporate data center moves, branch office acquisitions, retail store remodels, structured cabling, and technical staff augmentation.',
    canonical: 'https://www.argusx.com/it-staffing-project-services/',
    heroKicker: 'Project Execution & Technical Staffing',
    heroTitle: 'Specialized Engineering for Complex Hardware Moves and Rollouts',
    heroSubtitle: 'On-demand technical project teams for bank acquisitions, corporate headquarters relocations, multi-store point-of-sale cutovers, and specialized engineering augmentation.',
    heroImage: '/src/assets/images/field_technician_collaboration_1791866053603.jpg',
    heroImageAlt: 'Argus technical project team planning an infrastructure relocation schedule',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'IT Staffing & Projects', path: '/it-staffing-project-services/' },
    ],
  },
  careers: {
    slug: 'careers',
    path: '/careers/',
    metaTitle: 'Careers at Argus IT Services — Technical & Depot Roles in Fort Worth, TX',
    metaDescription: 'Join the Argus IT Services team in Fort Worth, Texas. Explore engineering, depot imaging, field services, and operations opportunities with a company founded in 1997.',
    canonical: 'https://www.argusx.com/careers/',
    heroKicker: 'Work With Us in Fort Worth, TX',
    heroTitle: 'Build a Career in Practical Technology Operations',
    heroSubtitle: 'Join an established, engineering-led organization dedicated to craftsmanship in hardware lifecycle management, depot operations, and nationwide client service.',
    heroImage: '/src/assets/images/hero_it_depot_imaging_1791866053170.jpg',
    heroImageAlt: 'Inside the Argus IT Services engineering and depot workshop in Fort Worth, Texas',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Careers', path: '/careers/' },
    ],
  },
  contact: {
    slug: 'contact',
    path: '/contact/',
    metaTitle: 'Contact Argus IT Services — Fort Worth Facility & Direct Phone Support',
    metaDescription: 'Get in touch with Argus IT Services. Call (469) 471-0035, email Sales@argusx.com, or visit our facility at 14951 Kingsport Rd Suite 200, Fort Worth TX 76155.',
    canonical: 'https://www.argusx.com/contact/',
    heroKicker: 'Direct Consultation & Quotes',
    heroTitle: 'Discuss Your Hardware Lifecycle and Support Needs',
    heroSubtitle: 'Connect with our Fort Worth engineering team for hardware procurement, depot repair programs, managed services, or certified asset disposition quotes.',
    heroImage: '/src/assets/images/field_technician_collaboration_1791866053603.jpg',
    heroImageAlt: 'Argus IT Services account and technical representatives ready to assist client inquiries',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact/' },
    ],
  },
};
