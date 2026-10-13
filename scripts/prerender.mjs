/**
 * Static HTML generator for Netlify / Static hosting
 * Injects route-specific SEO titles, meta descriptions, canonical URLs,
 * and OpenGraph tags into static HTML pages in dist/ for all 11 canonical routes.
 */

import fs from 'fs';
import path from 'path';

const distDir = path.resolve(process.cwd(), 'dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('dist/index.html does not exist. Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf-8');

const routes = [
  {
    path: '',
    title: 'Argus IT Services — Complete IT Asset Lifecycle & Support',
    description: 'Professional B2B technology lifecycle partner: equipment procurement, depot imaging, managed IT services, field engineering, and certified secure data destruction.',
    h1: 'Complete IT Asset Lifecycles. From First Boot to Secure Retirement.',
  },
  {
    path: 'about',
    title: 'About Argus IT Services — 28+ Years of Hardware Lifecycle Excellence',
    description: 'Founded in 1997 as Argus Connection in the Dallas/Fort Worth metroplex, Argus delivers reliable IT asset procurement, depot repair, field support, and secure disposition.',
    h1: 'Engineered Precision in Hardware Lifecycle Management',
  },
  {
    path: 'enterprise-it-services',
    title: 'Enterprise IT Services — High-Volume Fleet Lifecycle & Depot SLA | Argus',
    description: 'Turnkey enterprise IT lifecycle support: multi-site hardware rollouts, advance exchange depot programs, custom SLAs, and NIST 800-88 certified fleet disposition.',
    h1: 'Scale Your Technology Fleet Without Expanding IT Overhead',
  },
  {
    path: 'small-business-it-services',
    title: 'Small & Midsize Business IT Services — Dependable Hardware & Support | Argus',
    description: 'Accessible, right-sized IT services for growing businesses: hardware & software bundles, proactive monitoring, responsive depot support, and secure disposal.',
    h1: 'Enterprise-Grade IT Discipline Designed for Growing Businesses',
  },
  {
    path: 'it-procurement-deployment',
    title: 'IT Procurement & Deployment Services — Hardware Sourcing & Imaging | Argus',
    description: 'Commercial equipment procurement, Device as a Service (DaaS), custom imaging, asset tagging, and kitting delivered from our Fort Worth depot to end users nationwide.',
    h1: 'Zero-Touch Hardware Procurement, Staging & Rollout',
  },
  {
    path: 'managed-it-services',
    title: 'Managed IT Services — Proactive Monitoring, Patching & Security | Argus',
    description: 'Keep business systems stable with 24/7 infrastructure monitoring, operating system patch automation, endpoint hygiene, and scheduled asset health reporting.',
    h1: 'Keep Business-Critical Infrastructure Resilient and Up-to-Date',
  },
  {
    path: 'it-support-services',
    title: 'IT Support, Depot & Field Services — Fort Worth Depot & Field Dispatch | Argus',
    description: 'Our Fort Worth Complete Care depot provides component repair, advance hardware swaps, and nationwide white-glove field technician dispatch for mission-critical IT.',
    h1: 'Rapid Hardware Repair Depot and On-Site Field Engineering',
  },
  {
    path: 'it-asset-disposition',
    title: 'IT Asset Disposition & Secure Data Destruction — NIST 800-88 Certified | Argus',
    description: 'Audit-ready ITAD services: serialized NIST 800-88 data sanitization, physical drive shredding, destruction certificates, hardware refurbishing, and zero-landfill recycling.',
    h1: 'Certified IT Asset Disposition and Verifiable Data Destruction',
  },
  {
    path: 'it-staffing-project-services',
    title: 'IT Staffing & Project Services — Migrations, Moves & Rollouts | Argus',
    description: 'Execute technology projects on schedule: corporate data center moves, branch office acquisitions, retail store remodels, structured cabling, and technical staff augmentation.',
    h1: 'Specialized Engineering for Complex Hardware Moves and Rollouts',
  },
  {
    path: 'careers',
    title: 'Careers at Argus IT Services — Technical & Depot Roles in Fort Worth, TX',
    description: 'Join the Argus IT Services team in Fort Worth, Texas. Explore engineering, depot imaging, field services, and operations opportunities with a company founded in 1997.',
    h1: 'Build a Career in Practical Technology Operations',
  },
  {
    path: 'contact',
    title: 'Contact Argus IT Services — Fort Worth Facility & Direct Phone Support',
    description: 'Get in touch with Argus IT Services. Call (469) 471-0035, email Sales@argusx.com, or visit our facility at 14951 Kingsport Rd Suite 200, Fort Worth TX 76155.',
    h1: 'Discuss Your Hardware Lifecycle and Support Needs',
  },
];

console.log('Generating pre-rendered static HTML files for 11 routes...');

routes.forEach((route) => {
  let html = template;
  const canonicalUrl = `https://www.argusx.com/${route.path ? route.path + '/' : ''}`;

  // Replace title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);
  // Replace description
  html = html.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${route.description}" />`);
  // Replace OpenGraph title & description
  html = html.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${route.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${route.description}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${route.title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${route.description}" />`);

  // Add canonical
  const canonicalTag = `<link rel="canonical" href="${canonicalUrl}" />\n  </head>`;
  html = html.replace('</head>', canonicalTag);

  if (!route.path) {
    fs.writeFileSync(templatePath, html);
    console.log('✓ Updated root dist/index.html');
  } else {
    const routeDir = path.join(distDir, route.path);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.writeFileSync(path.join(routeDir, 'index.html'), html);
    console.log(`✓ Generated ${route.path}/index.html`);
  }
});

console.log('Static route HTML generation complete.');
