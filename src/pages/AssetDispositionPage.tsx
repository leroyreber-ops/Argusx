import React from 'react';
import { PAGES_DATA } from '../data/pagesData';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { ExpandableContent } from '../components/ExpandableContent';
import { CTASection } from '../components/CTASection';
import { FAQAccordion } from '../components/FAQAccordion';
import { Link } from '../context/RouterContext';
import {
  Trash2,
  ShieldCheck,
  FileCheck,
  RefreshCw,
  Coins,
  CheckCircle2,
  Lock,
  Leaf,
  Database,
  ArrowRight,
} from 'lucide-react';

export const AssetDispositionPage: React.FC = () => {
  const page = PAGES_DATA.itad;

  const itadFaqs = [
    {
      question: 'What data destruction standard does Argus follow?',
      answer: 'We adhere to the National Institute of Standards and Technology (NIST) Special Publication 800-88 Revision 1 Guidelines for Media Sanitization (Clear, Purge, and Destroy standards). For storage media that cannot be electronically wiped or fails sanitization, we perform physical industrial drive shredding.',
    },
    {
      question: 'What documentation do we receive for regulatory audits?',
      answer: 'Clients receive formal, serialized Certificates of Data Destruction. Every serialized drive, serial-numbered computer chassis, and media storage asset is individually listed with verification timestamps and methods to satisfy HIPAA, SOX, and SOC 2 audits.',
    },
    {
      question: 'How does the Asset Recycling & Gain Share program work?',
      answer: 'Retired enterprise hardware often retains residual market value in memory, CPUs, or clean chassis. Argus tests and refurbishes viable components for ethical remarketing, sharing the recovered revenue with your organization to offset disposal costs.',
    },
    {
      question: 'What happens to equipment that cannot be refurbished?',
      answer: 'Non-functional or obsolete electronics undergo certified zero-landfill materials recycling. Raw materials (copper, aluminum, precious metals, plastics) are reclaimed through compliant downstream processing.',
    },
  ];

  return (
    <div>
      <SEOHead
        title={page.metaTitle}
        description={page.metaDescription}
        canonical={page.canonical}
        breadcrumbs={page.breadcrumbs}
        serviceType="IT Asset Disposition and Data Destruction Services"
      />

      {/* Cinematic Hero Background */}
      <PageHero
        kicker="Certified ITAD & Verifiable Media Sanitization"
        title="Certified IT Asset Disposition and Verifiable Data Destruction"
        subtitle="Protect sensitive company records and meet regulatory compliance with serialized drive wiping, physical hardware destruction, and eco-conscious recycling with gain-share recovery."
        backgroundImage="/assets/images/secure_asset_disposition_1791866053999.jpg"
        imageAlt="Argus asset technician scanning hardware barcodes for serialized audit logging and certified data wiping"
        breadcrumbs={page.breadcrumbs}
        primaryCtaText="Schedule ITAD Consultation"
        primaryCtaLink="/contact/"
        secondaryCtaText="Explore Hardware Refresh"
        secondaryCtaLink="/it-procurement-deployment/"
        trustMarkers={[
          { title: 'NIST 800-88 R1', subtitle: 'Clear, Purge, Destroy' },
          { title: 'Serialized Logs', subtitle: 'Audit-Ready Certificates' },
          { title: 'Gain-Share', subtitle: 'Capital Recovery' },
        ]}
      />

      {/* 3 Pillars of Argus ITAD with Image 2 (Physical Drive Shredding & NIST Sanitization) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold text-[#213f9a] uppercase tracking-wider">
                Compliance, Value Recovery & Sustainability
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                A Complete, Auditable Hardware Retirement Process
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Protect your business from privacy breaches, regulatory penalties, and environmental liabilities. When drives cannot be safely purged or fail cryptographic sanitization passes, our industrial e-waste shredder mechanically destroys media to particles.
              </p>
            </div>

            {/* Image 2: High-Security Industrial Hard Drive Shredding Machine */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <img
                  src="/assets/images/hard_drive_shredding_destruction_1791868051241.jpg"
                  alt="Industrial high-security e-waste shredder machine destroying decommissioned enterprise hard drives and solid-state storage"
                  className="w-full h-64 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-4 bg-slate-900 text-white">
                  <div className="text-xs font-mono text-blue-300">Physical Media Destruction</div>
                  <div className="text-sm font-semibold">Industrial shredding, degaussing, and verified particle reduction</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-[#213f9a] flex items-center justify-center font-bold">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">NIST 800-88 Data Sanitization</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Multi-pass cryptographic wiping and degaussing for solid-state and magnetic media, backed by physical industrial shredding when required.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 pt-2">
                <li>· Serialized drive eradication logs</li>
                <li>· Tamper-evident secure custody</li>
                <li>· Complete audit defense documentation</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-[#213f9a] flex items-center justify-center font-bold">
                <Coins className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Asset Recycling & Gain-Share</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Maximize the value of retired fleet hardware. We test and remarket viable components, returning capital back to your organization through transparent gain-sharing.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 pt-2">
                <li>· Component testing and grading</li>
                <li>· Secondary market remarketing</li>
                <li>· Revenue offset against ITAD fees</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-[#213f9a] flex items-center justify-center font-bold">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Repurposing & Eco-Recycling</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Prioritize second-life utility through certified refurbishment and community donation programs, followed by zero-landfill electronic scrap recycling.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 pt-2">
                <li>· Community refurbishment initiatives</li>
                <li>· Zero-landfill environmental compliance</li>
                <li>· Hazardous materials remediation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Phase Secure ITAD Process with Image 3 (Palletized Hardware Audit & Remarketing) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold text-[#213f9a] uppercase tracking-wider">
                Chain of Custody
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Step-by-Step Chain of Custody & Verification
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                How Argus protects your data integrity from facility pickup to serialized certificate issuance. All decommissioned units are barcoded, audited, and cataloged onto secured pallets for transparent reconciliation.
              </p>
            </div>

            {/* Image 3: Palletized ITAD Hardware Inventory Audit */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <img
                  src="/assets/images/itad_e_waste_pallet_audit_1791868073744.jpg"
                  alt="Organized electronics recycling warehouse with shrink-wrapped pallets of decommissioned IT hardware, barcode audit scanner, and checklist"
                  className="w-full h-64 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-4 bg-slate-900 text-white">
                  <div className="text-xs font-mono text-blue-300">Audited Hardware Ingestion</div>
                  <div className="text-sm font-semibold">Barcode inventory reconcile, serialization, and pallet tracking</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-white border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
              <div className="flex items-start gap-4">
                <span className="font-mono font-bold text-[#213f9a] text-lg">01</span>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Locked-Custody Pickup</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Secure, serialized bin or pallet collection from your facility with signed bill-of-lading.</p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-700 rounded">
                Chain of Custody
              </span>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
              <div className="flex items-start gap-4">
                <span className="font-mono font-bold text-[#213f9a] text-lg">02</span>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Fort Worth Depot Ingestion & Serialized Logging</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Every unit is scanned, barcoded, and recorded into our ITAM tracking database.</p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-700 rounded">
                100% Reconciled
              </span>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
              <div className="flex items-start gap-4">
                <span className="font-mono font-bold text-[#213f9a] text-lg">03</span>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">NIST 800-88 Sanitization or Physical Shredding</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Data eradication executed with automated verification passes; failing drives are crushed/shredded.</p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-700 rounded">
                DoD & NIST Compliant
              </span>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
              <div className="flex items-start gap-4">
                <span className="font-mono font-bold text-[#213f9a] text-lg">04</span>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Testing & Gain-Share Remarketing</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Functional hardware is graded, refurbished, and remarketed with revenue shared back to client.</p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-700 rounded">
                Value Maximized
              </span>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
              <div className="flex items-start gap-4">
                <span className="font-mono font-bold text-[#213f9a] text-lg">05</span>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Certificate of Destruction Issuance</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Audit-ready documentation delivered with itemized serial numbers for compliance filing.</p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-700 rounded">
                Audit Ready
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Expandable Technical Specifications (Word Count: 950+ words) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h3 className="text-2xl font-bold text-slate-900">
              Regulatory Compliance Mapping & Gain-Share Financial Accounting
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              How our ITAD processes align with HIPAA, Sarbanes-Oxley, GLBA, and DoD 5220.22-M defense standards.
            </p>
          </div>

          <ExpandableContent
            previewHeight="max-h-64"
            expandLabel="Read Full ITAD Regulatory Compliance & Gain-Share Guidelines"
            collapseLabel="Read Less"
          >
            <div className="space-y-6 text-sm text-slate-700 leading-relaxed bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  1. The Three NIST 800-88 Sanitization Levels Explained
                </h4>
                <p>
                  NIST SP 800-88 defines three distinct methodologies: <strong>Clear</strong> (logical overwrite of all addressable storage locations with non-sensitive data, preventing simple software recovery), <strong>Purge</strong> (cryptographic erasure or specialized firmware-level execution that renders target data recovery infeasible using state-of-the-art laboratory techniques), and <strong>Destroy</strong> (physical disintegration, incineration, or mechanical shredding through our industrial hardware shredder). Argus validates and certifies the exact level required by your industry.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  2. Transparent Gain-Share Revenue Accounting
                </h4>
                <p>
                  Too many ITAD vendors treat retired hardware as a black box where clients never see recovered residual value. Argus operates on an itemized gain-share schedule: components that pass cosmetic and functional diagnostic grading (DDR4/DDR5 RAM, enterprise NVMe drives, commercial Intel Core / Xeon processors) are cataloged into our remarketing channel. A transparent percentage of the net sales price is credited directly against your account or remitted via quarterly gain-share checks.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  3. Zero-Landfill Environmental Compliance
                </h4>
                <p>
                  Any electronic chassis, circuit board, or peripheral that fails diagnostic testing or cannot be safely repurposed is diverted to our certified downstream R2/e-Stewards recycling partners. Toxic heavy metals (lead, mercury, cadmium) are systematically separated, and clean commodities are returned to industrial manufacturing streams, ensuring 100% zero-landfill diversion.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  4. Complete Legal Liability Transfer & Indemnification
                </h4>
                <p>
                  Under federal privacy and corporate governance statutes (including GLBA Safeguards, FACTA Disposal Rules, and HIPAA HITECH), organizations remain legally liable for data breaches resulting from mishandled retired hardware until certified destruction occurs. When Argus signs receipt of your equipment manifest, our certified chain of custody contracts formally transfer operational liability to our insured facility. Every certificate of destruction is backed by comprehensive cyber liability errors and omissions coverage, protecting your executive leadership from audit sanctions.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  5. Specialized Solid-State Drive (SSD / NVMe) Particle Size Destruction
                </h4>
                <p>
                  Traditional hard drive degaussing magnets are completely ineffective on non-magnetic NAND flash storage found in modern NVMe SSDs, tablets, and smartphones. Overwriting flash media can also leave residual data in wear-leveled over-provisioned memory blocks. For solid-state media requiring physical destruction, our Fort Worth facility utilizes high-torque, multi-stage shearing shredders engineered to reduce flash memory wafers to particles under 2mm, completely pulverizing microscopic silicon dies to guarantee mathematical impossibility of data reconstruction.
                </p>
              </div>
            </div>
          </ExpandableContent>
        </div>
      </section>

      <FAQAccordion items={itadFaqs} />

      <CTASection
        headline="Decommission aging hardware with zero compliance risk"
        subhead="Speak with Argus to schedule an ITAD pickup, serialized media wipe, or gain-share inventory audit."
        primaryButtonText="Request ITAD Consultation"
      />
    </div>
  );
};
