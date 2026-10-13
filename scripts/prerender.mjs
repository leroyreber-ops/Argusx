/**
 * Static HTML generator for Netlify / Static hosting
 * Injects route-specific SEO titles, meta descriptions, canonical URLs,
 * and OpenGraph tags into static HTML pages in dist/ for all 12 canonical routes.
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
    title: 'Argus IT Services | B2B Hardware Lifecycle & Managed IT',
    description: 'Complete B2B technology lifecycles: hardware procurement, depot staging, proactive managed IT, field engineering, and certified NIST 800-88 data destruction.',
    h1: 'Complete IT Asset Lifecycles. From First Boot to Secure Retirement.',
    image: '/assets/images/hero_it_depot_imaging_1791866053170.jpg',
  },
  {
    path: 'about',
    title: 'About Argus IT Services | 28+ Years Hardware Lifecycle DFW',
    description: 'Founded in 1997 in Fort Worth, TX, Argus IT Services provides precision IT procurement, certified depot repairs, nationwide dispatch, and secure ITAD solutions.',
    h1: 'Engineered Precision in Hardware Lifecycle Management',
    image: '/assets/images/argus_executive_leadership_boardroom_1791867969752.jpg',
  },
  {
    path: 'enterprise-it-services',
    title: 'Enterprise IT Services | Fleet Staging, Depot SLAs & ITAD',
    description: 'Turnkey enterprise IT lifecycle management: high-volume device imaging, advance exchange depot programs, custom SLAs, and NIST 800-88 audited asset retirement.',
    h1: 'Scale Your Technology Fleet Without Expanding IT Overhead',
    image: '/assets/images/enterprise_server_datacenter_1791866053375.jpg',
  },
  {
    path: 'small-business-it-services',
    title: 'Small Business IT Services | Hardware Bundling & Support',
    description: 'Accessible, enterprise-grade IT for SMBs: right-sized hardware bundles, proactive endpoint monitoring, fast depot repair, and secure device retirement.',
    h1: 'Enterprise-Grade IT Discipline Designed for Growing Businesses',
    image: '/assets/images/smb_modern_office_technology_1791867986529.jpg',
  },
  {
    path: 'it-procurement-deployment',
    title: 'IT Procurement & Deployment | Hardware Staging & Imaging',
    description: 'Commercial equipment procurement, Device as a Service (DaaS), custom imaging, asset tagging, and kitting delivered from our Fort Worth depot nationwide.',
    h1: 'Zero-Touch Hardware Procurement, Staging & Rollout',
    image: '/assets/images/hardware_procurement_warehouse_1791867622381.jpg',
  },
  {
    path: 'managed-it-services',
    title: 'Managed IT Services | 24/7 Monitoring, Patching & Support',
    description: 'Ensure system resilience with 24/7 proactive infrastructure monitoring, automated patch compliance, endpoint security, and executive asset health reporting.',
    h1: 'Keep Business-Critical Infrastructure Resilient and Up-to-Date',
    image: '/assets/images/network_monitoring_noc_1791867623829.jpg',
  },
  {
    path: 'it-support-services',
    title: 'IT Support & Depot Services | DFW Repair & Field Dispatch',
    description: 'Our Fort Worth Complete Care depot delivers component repair, advance hardware swaps, and nationwide white-glove on-site technician dispatch.',
    h1: 'Rapid Hardware Repair Depot and On-Site Field Engineering',
    image: '/assets/images/laptop_repair_microsolder_1791867624093.jpg',
  },
  {
    path: 'it-asset-disposition',
    title: 'IT Asset Disposition (ITAD) | NIST 800-88 Data Destruction',
    description: 'Audit-ready ITAD services: serialized NIST 800-88 data destruction, drive shredding, certificates of destruction, electronics refurbishing, and e-waste recycling.',
    h1: 'Certified IT Asset Disposition and Verifiable Data Destruction',
    image: '/assets/images/secure_asset_disposition_1791866053999.jpg',
  },
  {
    path: 'it-staffing-project-services',
    title: 'IT Staffing & Project Services | Moves, Cutovers & Cabling',
    description: 'Execute critical technology projects on time: data center moves, branch acquisitions, POS cutovers, structured cabling, and technical staff augmentation.',
    h1: 'Specialized Engineering for Complex Hardware Moves and Rollouts',
    image: '/assets/images/field_technician_collaboration_1791866053603.jpg',
  },
  {
    path: 'careers',
    title: 'Careers at Argus IT Services | Tech & Depot Jobs Fort Worth',
    description: 'Join the Argus IT Services team in Fort Worth, Texas. Explore engineering, depot imaging, field support, and technology operations careers founded in 1997.',
    h1: 'Build a Career in Practical Technology Operations',
    image: '/assets/images/argus_team_culture_workspace_1791868101884.jpg',
  },
  {
    path: 'contact',
    title: 'Contact Argus IT Services | Fort Worth Depot & Phone Support',
    description: 'Contact Argus IT Services at (469) 471-0035, email Sales@argusx.com, or visit our Fort Worth facility. Open Mon–Fri 7:00 AM – 5:00 PM Central Time.',
    h1: 'Discuss Your Hardware Lifecycle and Support Needs',
    image: '/assets/images/argus_fort_worth_facility_exterior_1791868131290.jpg',
  },
  {
    path: 'sitemap',
    title: 'HTML Sitemap & Site Directory | Argus IT Services',
    description: 'Browse the complete site architecture, service categories, hardware lifecycle solutions, and depot facilities of Argus IT Services.',
    h1: 'Complete Website Architecture & Directory',
    image: '/assets/images/footer_tech_circuit_bg_1791867621429.jpg',
  },
];

console.log('Generating pre-rendered static HTML files for 12 routes...');

routes.forEach((route) => {
  let html = template;
  const canonicalUrl = `https://www.argusx.com/${route.path ? route.path + '/' : ''}`;
  const fullImageUrl = `https://www.argusx.com${route.image || '/assets/images/hero_it_depot_imaging_1791866053170.jpg'}`;

  // Replace title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);
  // Replace description
  html = html.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${route.description}" />`);
  // Replace OpenGraph title & description & image
  html = html.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${route.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${route.description}" />`);
  html = html.replace(/<meta property="og:image" content=".*?" \/>/i, `<meta property="og:image" content="${fullImageUrl}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${route.title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${route.description}" />`);
  html = html.replace(/<meta name="twitter:image" content=".*?" \/>/i, `<meta name="twitter:image" content="${fullImageUrl}" />`);

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
