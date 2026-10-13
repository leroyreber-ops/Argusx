import React from 'react';
import { COMPANY } from '../data/company';
import { PAGES_DATA } from '../data/pagesData';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { ExpandableContent } from '../components/ExpandableContent';
import { CTASection } from '../components/CTASection';
import { FAQAccordion } from '../components/FAQAccordion';
import { Link } from '../context/RouterContext';
import { Award, ShieldCheck, Cpu, MapPin, CheckCircle2, Building, Wrench, Clock, Users } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const page = PAGES_DATA.about;

  const aboutFaqs = [
    {
      question: 'When and how was Argus founded?',
      answer: 'Argus was originally established in 1997 as Argus Connection in the Dallas/Fort Worth metroplex. Over 28+ years of steady operation, the company expanded its capabilities to provide complete B2B technology lifecycle management as Argus IT Services.',
    },
    {
      question: 'Where is Argus based and how does its location benefit clients?',
      answer: 'Our headquarters and primary configuration depot are located at 14951 Kingsport Rd, Suite 200, Fort Worth, Texas 76155. Positioned adjacent to DFW International Airport and central freight crossroads, we provide 1- to 3-day ground transit times to over 90% of the continental United States.',
    },
    {
      question: 'What technical standards and certifications guide Argus operations?',
      answer: 'We adhere to NIST Special Publication 800-88 Revision 1 guidelines for media sanitization, follow zero-landfill e-scrap practices with compliant downstream processing partners, and maintain disciplined electronics repair standards overseen by licensed engineering leadership.',
    },
    {
      question: 'What differentiates Argus from remote-only IT consultancies?',
      answer: 'Argus maintains a physical, high-throughput depot in Fort Worth. We physically receive, inspect, image, test, micro-solder, repair, kit, and securely sanitize equipment. We combine hands-on electronics engineering with nationwide enterprise logistics.',
    },
  ];

  return (
    <div>
      <SEOHead
        title={page.metaTitle}
        description={page.metaDescription}
        canonical={page.canonical}
        breadcrumbs={page.breadcrumbs}
      />

      {/* Image 1: Cinematic Hero Background */}
      <PageHero
        kicker="28+ Years of Engineering Craftsmanship Since 1997"
        title="Engineered Precision in Hardware Lifecycle Management"
        subtitle="Formed in 1997 as Argus Connection in Fort Worth, Texas, Argus IT Services brings decades of hands-on electronics engineering, depot repair mastery, and logistics expertise to modern business technology."
        backgroundImage="/src/assets/images/argus_executive_leadership_boardroom_1791867969752.jpg"
        imageAlt="Argus IT Services executive leadership team and systems engineers strategizing enterprise technology lifecycle solutions"
        breadcrumbs={page.breadcrumbs}
        primaryCtaText="Contact Our Team"
        primaryCtaLink="/contact/"
        secondaryCtaText="Explore Depot Operations"
        secondaryCtaLink="/it-support-services/"
        trustMarkers={[
          { title: '1997', subtitle: 'Founded in DFW' },
          { title: 'Licensed PE', subtitle: 'Engineering Oversight' },
          { title: 'DFW Depot Hub', subtitle: '14951 Kingsport Rd' },
        ]}
      />

      {/* History & Company Heritage */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-bold text-[#213f9a] uppercase tracking-wider">
                Our Corporate Journey
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                From Electronics Connectivity to Full Lifecycle IT Operations
              </h2>
              <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                <p>
                  Formed in 1997 as <strong>Argus Connection</strong>, the business originally specialized in hardware components, specialized commercial cabling, and business computing connectivity across the Dallas/Fort Worth area. As enterprise IT transformed from standalone desktop workstations to distributed cloud-connected fleets, Argus expanded its physical facilities, technical tooling, and engineering staff.
                </p>
                <p>
                  Today operating as <strong>Argus IT Services</strong>, the company manages complete hardware lifecycles for organizations of all sizes. Centrally located in the DFW metroplex, we bridge the gap between initial hardware procurement, high-volume OS imaging, day-to-day managed maintenance, depot repair warranty fulfillment, and certified end-of-life retirement.
                </p>
                <p>
                  Our mission remains grounded in engineering discipline: providing transparent, dependable hardware execution so our clients’ internal teams can focus on their core business without getting bogged down in device staging or break-fix logistics.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm">North American Central Hub</div>
                  <p className="text-xs text-slate-600 mt-1">
                    Based in Fort Worth, Texas with direct freight access for same-day and next-day distribution nationwide.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm">Audit-Ready Compliance</div>
                  <p className="text-xs text-slate-600 mt-1">
                    Certified NIST 800-88 data destruction protocols protecting healthcare, finance, and corporate liabilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Image 2: Fort Worth Warehouse & Staging Facility */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <img
                  src="/src/assets/images/fort_worth_headquarters_facility_1791867969696.jpg"
                  alt="Argus IT logistics and commercial hardware staging warehouse facility in Fort Worth, Texas"
                  className="w-full h-64 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-4 bg-slate-900 text-white">
                  <div className="text-xs font-mono text-blue-300">Central Logistics Operations</div>
                  <div className="text-sm font-semibold">14951 Kingsport Rd Facility Operations Hub</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#213f9a] text-white space-y-3 shadow-md">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-200 uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-blue-300" />
                  <span>Depot Headquarters</span>
                </div>
                <div className="text-base font-bold">
                  14951 Kingsport Rd Suite 200, Fort Worth, TX 76155
                </div>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Centrally positioned adjacent to DFW International Airport, enabling rapid component and unit transit across North America.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership & Engineering Craftsmanship with Image 3 */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold text-[#213f9a] uppercase tracking-wider">
                Leadership Heritage
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Experienced Engineering & Corporate Management
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Argus combines decades of corporate enterprise computing experience with licensed professional engineering oversight. Our technical roots trace back to leadership from IBM and Texas Instruments, enforcing strict diagnostics standards.
              </p>
            </div>

            {/* Image 3: Client Consultation & Engineering Review */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <img
                  src="/src/assets/images/it_consultation_strategy_meeting_1791867985635.jpg"
                  alt="Argus systems engineering leadership reviewing corporate fleet infrastructure requirements with client"
                  className="w-full h-64 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-4 bg-slate-900 text-white">
                  <div className="text-xs font-mono text-blue-300">Engineering Consultation</div>
                  <div className="text-sm font-semibold">Strategic technology lifecycle architecture reviews</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPANY.leadership.map((leader, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col justify-between shadow-xs">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#213f9a] text-white flex items-center justify-center font-bold text-lg shadow-xs">
                    {leader.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
                    <div className="text-xs font-bold text-[#213f9a] uppercase tracking-wider mt-0.5">
                      {leader.role}
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Deep Expandable Editorial Content (800 - 1200 Words Total for Google SEO) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h3 className="text-2xl font-bold text-slate-900">
              Technical Heritage & Operational Philosophy
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              An inside look into our quality management systems, antistatic staging benchmarks, and logistics principles.
            </p>
          </div>

          <ExpandableContent
            previewHeight="max-h-64"
            expandLabel="Read Full Engineering Philosophy & Quality Standards"
            collapseLabel="Read Less"
          >
            <div className="space-y-6 text-sm text-slate-700 leading-relaxed bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  1. The Engineering-Led Advantage
                </h4>
                <p>
                  Most modern IT service providers operate primarily as software resellers or dispatch brokers. Argus was founded on hands-on electrical and electronics engineering principles. Having leadership with Professional Engineer (PE) credentialing and Texas Instruments engineering backgrounds means our depot approaches hardware failure modes at the component level. We understand bus speeds, thermal dynamics, memory timings, and firmware integrity, allowing us to diagnose faults that traditional tier-one support teams simply replace at exorbitant customer cost.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  2. Fort Worth Depot Calibration & Staging Bench Standards
                </h4>
                <p>
                  Our staging benches adhere strictly to ANSI/ESD S20.20 electrostatic discharge standards. Technicians work on grounded conductive mats with continuous monitoring. Every workstation and server undergoing gold master imaging undergoes burn-in stress testing to catch infant mortality failures before devices ship to remote end users or branch offices.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  3. Ethical Lifecycle Accountability & Community Stewardship
                </h4>
                <p>
                  Electronic waste is one of the fastest-growing hazardous waste streams in the world. Argus refuses to participate in irresponsible scrap dumping. Through our Asset Repurposing & Gain Share initiatives, equipment that has fulfilled its corporate utility is evaluated for educational and nonprofit re-use or systematically dismantled for raw material reclamation, returning financial value to our clients while protecting the planet.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  4. Nationwide Logistics & The DFW Strategic Freight Advantage
                </h4>
                <p>
                  Operating out of CentrePort Business Park adjacent to Dallas Fort Worth International Airport (DFW) and major interstate freight corridors gives Argus an unparalleled logistical edge. From our centralized Texas depot, overnight air shipments reach anywhere in the continental United States by 10:30 AM next business day, while standard ground freight reaches over 80 percent of the US population within two business days. This geographical advantage enables our 24-hour advance exchange warranty programs to deliver mission-critical replacement units faster and more cost-effectively than coastal providers.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  5. Verifiable Chain of Custody & Enterprise Quality Governance
                </h4>
                <p>
                  Every serial number entering our intake bay is logged into our secure enterprise resource tracking system with high-resolution photographic audit records. We maintain strict segregation of customer assets, dual-custody access controls for sensitive storage drives undergoing NIST 800-88 sanitization, and tamper-evident transit seals. Whether supporting commercial regional banks or distributed retail healthcare enterprises, Argus operates under auditable standard operating procedures that satisfy stringent third-party SOC, HIPAA, and PCI-DSS compliance scrutiny.
                </p>
              </div>
            </div>
          </ExpandableContent>
        </div>
      </section>

      <FAQAccordion items={aboutFaqs} />

      <CTASection
        headline="Partner with a proven hardware lifecycle team"
        subhead="Contact our Fort Worth facility to discuss your procurement, depot imaging, or fleet support needs."
        primaryButtonText="Talk to an Expert"
      />
    </div>
  );
};
