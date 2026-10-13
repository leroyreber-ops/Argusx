# Argus IT Services — Production Launch Checklist

This checklist separates **Engineering & Design Completed** items from **Items Requiring Business Approval / External Configuration** prior to final DNS switchover.

---

## 1. Engineering & Design Completed (Verified & Ready)

- [x] **11 Canonical Public Marketing Pages Built**:
  - Home (`/`)
  - About Argus (`/about/`)
  - Enterprise IT Services (`/enterprise-it-services/`)
  - Small & Midsize Business IT Services (`/small-business-it-services/`)
  - IT Procurement & Deployment (`/it-procurement-deployment/`)
  - Managed IT Services (`/managed-it-services/`)
  - IT Support, Depot & Field Services (`/it-support-services/`)
  - IT Asset Disposition & Secure Data Destruction (`/it-asset-disposition/`)
  - IT Staffing & Project Services (`/it-staffing-project-services/`)
  - Careers (`/careers/`)
  - Contact (`/contact/`)
- [x] **Dedicated Utility 404 Page**: Built and tested with active links back to services and direct phone help.
- [x] **Interactive Lifecycle Component**: Built on the homepage (`Source → Deploy → Manage → Support → Retire`) with accessible interactive buttons and deep links to relevant service pages.
- [x] **Top Bar Contract Compliance**: 3 zones separated by `gap-8` (Brand text wordmark, clean text navigation links with keyboard accessibility, 1 primary CTA button).
- [x] **Zero-Pill Discipline & Anti-Slop Formatting**: Unboxed metadata with typographic `·` separators; no mechanical `//` code comments; no fake compiler statuses or telemetry tickers.
- [x] **Verified Business Facts Implemented**:
  - Legal & Heritage Name: Argus Connection, Inc. dba Argus IT Services (Founded 1997).
  - Physical Depot Address: 14951 Kingsport Rd, Suite 200, Fort Worth, TX 76155.
  - Direct Phone: (469) 471-0035 with `tel:+14694710035` click-to-call link.
  - Sales Email: `Sales@argusx.com` with `mailto:Sales@argusx.com` link.
  - Executive Leadership: Thomas E. Howard and Stanley Walter, PE.
- [x] **Technical SEO & Metadata**:
  - Page-specific `<title>` and `<meta name="description">` configured for every page.
  - OpenGraph & Twitter Card tags.
  - Self-referencing canonical URLs pointing to `https://www.argusx.com/`.
  - Schema.org JSON-LD structured data for Organization, WebSite, BreadcrumbList, and Services.
- [x] **Search Engine Discovery**:
  - `public/sitemap.xml` with all 11 canonical pages.
  - `public/robots.txt` declaring standard crawl allowances.
- [x] **Redirects & Preservation of Legacy URLs**:
  - `public/_redirects` maps historical URLs (`/source/`, `/retire/`, `/msp/`, `/complete-care/`, etc.) with HTTP 301 status codes to prevent search ranking drop-off.
- [x] **Visual Assets**:
  - High-resolution editorial photography generated and mapped in `IMAGE_MANIFEST.md`.
  - Responsive image tags with explicit dimensions, eager loading for hero visuals, and styled fallback containers.
- [x] **Contact & Form Security**:
  - Math security challenge ("What is 13 minus 6?") preventing automated spam.
  - SMS Consent Disclaimer aligned with verified legal terms.

---

## 2. Items Requiring Business Approval or External Configuration

- [ ] **DNS & Domain Cutover**: Point A/CNAME records from current WordPress host to Netlify / Cloud Run hosting when ready for public cutover.
- [ ] **Form Submission Backend / Webhook**:
  - The contact form is currently verified on the frontend.
  - To connect to Argus's CRM or ticketing desk (e.g. HubSpot, ConnectWise, Salesforce, or Netlify Forms), configure the webhook destination URL in `src/pages/ContactPage.tsx` or set up the Netlify form handler attribute.
- [ ] **Facility Photography Approval**:
  - Review the illustrative depot and data center photography in `IMAGE_MANIFEST.md`.
  - Determine if the client wants to replace any illustrative photos with in-house photography of the 14951 Kingsport Rd facility.
- [ ] **Google Analytics / Tag Manager**:
  - Add Google Tag Manager (GTM) or GA4 measurement ID in `index.html` once the Argus marketing team provides their container ID.
- [ ] **Google Search Console**:
  - Submit `https://www.argusx.com/sitemap.xml` in Google Search Console once DNS points to the new build.
