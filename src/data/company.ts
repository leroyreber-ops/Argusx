/**
 * Argus IT Services — Centralized Business Data & Information Architecture
 * All business details, verified contact information, navigation structures,
 * and SEO metadata are maintained here to avoid duplicate source of truth.
 */

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface ServiceDetail {
  slug: string;
  href: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  audience: string;
  lifecycleStage: 'Source' | 'Deploy' | 'Manage' | 'Support' | 'Retire';
  capabilities: string[];
  businessProblems: string[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  heroImage: string;
  heroImageAlt: string;
}

export const COMPANY = {
  name: 'Argus IT Services',
  legalName: 'Argus Connection, Inc. dba Argus IT Services',
  foundedYear: 1997,
  yearsInBusiness: 28,
  phone: '(469) 471-0035',
  phoneRaw: '+14694710035',
  email: 'Sales@argusx.com',
  address: {
    street: '14951 Kingsport Rd, Suite 200',
    city: 'Fort Worth',
    state: 'TX',
    zip: '76155',
    metro: 'Dallas / Fort Worth Metroplex',
    country: 'US',
  },
  productionUrl: 'https://www.argusx.com',
  tagline: 'Comprehensive Technology Lifecycle & IT Infrastructure Services',
  leadership: [
    {
      name: 'Thomas E. Howard',
      role: 'Executive Leadership & Founder',
      bio: 'Former IBM Executive and founder of T.E. Howard & Associates with over 35 years of enterprise corporate management and computing lifecycle experience.',
    },
    {
      name: 'Stanley Walter, PE',
      role: 'Technical & Operational Leadership',
      bio: 'Licensed Professional Engineer holding a BSME from Texas A&M and an MBA from University of Dallas (Highest Honors). Began career at Texas Instruments in 1984 with extensive hardware engineering leadership.',
    },
  ],
};

export const NAVIGATION: { main: NavItem[]; services: NavItem[]; solutions: NavItem[]; company: NavItem[] } = {
  main: [
    { label: 'Services', href: '/it-procurement-deployment/' },
    { label: 'Solutions', href: '/enterprise-it-services/' },
    { label: 'About', href: '/about/' },
    { label: 'Careers', href: '/careers/' },
  ],
  services: [
    {
      label: 'IT Procurement & Deployment',
      href: '/it-procurement-deployment/',
      description: 'Hardware sourcing, staging, OS imaging, asset tagging, and zero-touch rollout.',
    },
    {
      label: 'Managed IT Services',
      href: '/managed-it-services/',
      description: '24/7 proactive monitoring, infrastructure maintenance, security patching, and reporting.',
    },
    {
      label: 'IT Support, Depot & Field Services',
      href: '/it-support-services/',
      description: 'Certified DFW depot repair, advance device exchange, and on-site engineering dispatch.',
    },
    {
      label: 'IT Asset Disposition & Secure Data Destruction',
      href: '/it-asset-disposition/',
      description: 'NIST 800-88 data sanitization, serialized certificates, and environmentally responsible recycling.',
    },
    {
      label: 'IT Staffing & Project Services',
      href: '/it-staffing-project-services/',
      description: 'Data center moves, multi-site hardware rollouts, cabling, and project engineering.',
    },
  ],
  solutions: [
    {
      label: 'Enterprise IT Services',
      href: '/enterprise-it-services/',
      description: 'High-volume device lifecycle management, custom SLAs, and multi-location logistics.',
    },
    {
      label: 'Small & Midsize Business IT Services',
      href: '/small-business-it-services/',
      description: 'Flexible hardware bundling, device management, and responsive support without overhead.',
    },
  ],
  company: [
    { label: 'About Argus', href: '/about/' },
    { label: 'Careers', href: '/careers/' },
    { label: 'Contact Us', href: '/contact/' },
  ],
};

export const LIFECYCLE_STAGES = [
  {
    step: '01',
    name: 'Source',
    headline: 'Procurement & Device as a Service',
    description: 'We specify and source commercial-grade PCs, workstations, mobile endpoints, and data center hardware directly from authorized channels with flexible acquisition options.',
    link: '/it-procurement-deployment/',
    tag: 'Hardware & Licensing Bundles',
    details: [
      'Multi-vendor specification analysis',
      'Hardware and software bundling',
      'Device as a Service (DaaS) arrangements',
      'Volume purchasing and inventory warehousing',
    ],
  },
  {
    step: '02',
    name: 'Deploy',
    headline: 'Depot Staging, Imaging & Provisioning',
    description: 'Before a device reaches an employee desk, our Fort Worth facility pre-configures OS images, applies asset tags, tests hardware, and kits accessories for day-one productivity.',
    link: '/it-procurement-deployment/',
    tag: 'Zero-Touch Readiness',
    details: [
      'Custom gold master and cloud imaging',
      'Barcode and RFID asset tagging',
      'Specialized accessory kitting and packaging',
      'Direct-to-employee or office drop shipping',
    ],
  },
  {
    step: '03',
    name: 'Manage',
    headline: 'Continuous Monitoring & Maintenance',
    description: 'Argus maintains system health, patch baselines, endpoint security updates, and performance reporting to keep business networks steady and secure.',
    link: '/managed-it-services/',
    tag: 'Proactive Infrastructure',
    details: [
      '24/7 proactive infrastructure monitoring',
      'Operating system and third-party patch management',
      'Comprehensive monthly asset and health reporting',
      'Network and server maintenance routines',
    ],
  },
  {
    step: '04',
    name: 'Support',
    headline: 'Depot Repair & Field Engineering',
    description: 'When hardware malfunctions or multi-site moves take place, our Complete Care depot handles component-level repairs and advance exchange, backed by nationwide field dispatch.',
    link: '/it-support-services/',
    tag: 'Rapid Break-Fix & Dispatch',
    details: [
      'Certified repair depot in Fort Worth, TX',
      'Advance hardware exchange program',
      'White-glove on-site technician dispatch',
      'Data center and office technology relocations',
    ],
  },
  {
    step: '05',
    name: 'Retire',
    headline: 'Certified ITAD & Data Destruction',
    description: 'End-of-life hardware requires rigorous data sanitization, serialized reporting, certified destruction, and compliant material recycling with gain-share recovery.',
    link: '/it-asset-disposition/',
    tag: 'NIST 800-88 Compliant',
    details: [
      'NIST 800-88 and DoD data eradication',
      'Serialized certificates of data destruction',
      'Hardware refurbishment and community repurposing',
      'Zero-landfill compliant electronics recycling',
    ],
  },
];

export const CLIENT_VERIFIED_OUTCOMES = [
  {
    industry: 'Financial & Banking',
    headline: 'Multi-Branch Acquisition & Hardware Migration',
    challenge: 'A growing financial institution needed urgent technology integration across newly acquired bank branches without disrupting daily teller and customer operations.',
    solution: 'Argus deployed field engineers for scheduled weekend migrations, installed unified workstation images, refreshed branch networking racks, and decommissioned legacy gear.',
    outcome: 'Completed 100% on schedule across all branches with zero Monday morning downtime.',
  },
  {
    industry: 'Healthcare Network',
    headline: 'Fleet-Wide Device Refresh & HIPAA Compliant ITAD',
    challenge: 'A regional healthcare system required complete replacement of 2,400 clinical workstations with strict patient data privacy requirements.',
    solution: 'Argus staged, imaged, and delivered clinical carts on staggered shifts, concurrently retrieving retired units for locked-custody transit and NIST 800-88 certified drive wiping.',
    outcome: 'Audit-ready compliance reporting with serialized destruction certificates delivered for every device.',
  },
  {
    industry: 'Retail & Multi-Site Commercial',
    headline: 'Turnkey POS & Back-Office Staging Rollout',
    challenge: 'A national retailer undertook store remodels requiring new point-of-sale terminals, handheld scanners, and network switches staged and delivered on rigid remodel timelines.',
    solution: 'Our Fort Worth depot pre-kitted, configured, and labeled equipment packages matched to each store blueprint, providing dedicated technician dispatch for on-site cutovers.',
    outcome: 'Eliminated field configuration delays and cut on-site setup time by over 60%.',
  },
];
