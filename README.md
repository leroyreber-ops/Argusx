# Argus IT Services — Web Application & Architecture

A complete, responsive, 11-page B2B website built for **Argus IT Services**, establishing a modern digital presence for their technology lifecycle and IT infrastructure services.

## Overview & Architecture

- **Brand Heritage**: Argus IT Services (originally formed in 1997 as Argus Connection).
- **Physical Headquarters & Depot**: 14951 Kingsport Rd, Suite 200, Fort Worth, TX 76155 (centrally located in the DFW metroplex).
- **Direct Phone**: (469) 471-0035
- **Verified Sales Email**: Sales@argusx.com
- **Core Positioning**: Full-lifecycle hardware partner: Source → Deploy → Manage → Support → Retire.

## The 11 Verified Public Pages

1. **Home (`/`)**: Complete lifecycle narrative, interactive lifecycle explorer, core capabilities bento grid, verified case outcomes, and introductory consultation CTA.
2. **About Argus (`/about/`)**: Founded in 1997, 28+ years of hardware excellence, Fort Worth staging depot, executive leadership (Thomas E. Howard, Stanley Walter, PE), and engineering philosophy.
3. **Enterprise IT Services (`/enterprise-it-services/`)**: High-volume hardware staging, zero-touch remote provisioning, advance exchange depot SLAs, and multi-site project coordination.
4. **Small & Midsize Business IT Services (`/small-business-it-services/`)**: Hardware & software bundling, Device as a Service (DaaS), proactive monitoring, and predictable IT budgeting without corporate complexity.
5. **IT Procurement & Deployment (`/it-procurement-deployment/`)**: Hardware specification, tier-one sourcing, custom OS imaging, barcode asset tagging, kitting, and direct drop-shipping.
6. **Managed IT Services (`/managed-it-services/`)**: The verified MSP model: 24/7 Monitor & Support; Improve, Secure & Maintain (patch management); and Manage & Report.
7. **IT Support, Depot & Field Services (`/it-support-services/`)**: The flagship Fort Worth Complete Care repair depot, same-day advance hardware exchange, and nationwide on-site field engineering dispatch.
8. **IT Asset Disposition & Secure Data Destruction (`/it-asset-disposition/`)**: NIST 800-88 compliant media sanitization, physical drive shredding, serialized certificates of destruction, and gain-share recycling.
9. **IT Staffing & Project Services (`/it-staffing-project-services/`)**: Data center relocations, bank acquisition branch cutovers, retail store remodels, structured cabling, and technical staff augmentation.
10. **Careers (`/careers/`)**: Engineering and depot culture in Fort Worth, technician disciplines, and direct application workflow (no fabricated job posts).
11. **Contact (`/contact/`)**: Verified Fort Worth address, click-to-call, sales email, service selection form with verified math challenge and SMS consent disclaimer.
*Utility*: **404 Not Found (`/404`)**: Contextual directory, direct call button, and search recovery links.

## Local Development & Build

### Prerequisites
- Node.js 18+
- npm 9+

### Commands
```bash
# Install dependencies
npm install

# Start development server on port 3000
npm run dev

# Check TypeScript validation
npm run lint

# Compile production build
npm run build
```

## Netlify Deployment

The project is pre-configured for seamless Netlify deployment:
1. **Build Command**: `npm run build`
2. **Publish Directory**: `dist`
3. **SPA Routing & 301 Redirects**: `public/_redirects` is copied to `dist/_redirects` during build. It maps all historical URLs from the WordPress site to the new 11 canonical pages and routes all unmatched URLs to `index.html 200`.
4. **Sitemap & Robots**: `public/sitemap.xml` and `public/robots.txt` are published directly at the root.

## Centralized Configuration

All editable company records, phone numbers, addresses, navigation links, and service offerings are centralized in:
- `src/data/company.ts`
- `src/data/pagesData.ts`
