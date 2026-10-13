import React from 'react';
import { COMPANY, CLIENT_VERIFIED_OUTCOMES } from '../data/company';
import { PAGES_DATA } from '../data/pagesData';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { LifecycleExplorer } from '../components/LifecycleExplorer';
import { ExpandableContent } from '../components/ExpandableContent';
import { CTASection } from '../components/CTASection';
import { FAQAccordion } from '../components/FAQAccordion';
import { Link } from '../context/RouterContext';
import {
  Server,
  Layers,
  Wrench,
  Trash2,
  Users,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Building2,
  Cpu,
  Clock,
  Award,
  Zap,
  RotateCw,
  FileText,
  Activity,
  Sparkles,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const page = PAGES_DATA.home;

  const homeFaqs = [
    {
      question: 'What is comprehensive IT lifecycle management?',
      answer: 'IT lifecycle management covers every stage of business hardware: initial specification and volume procurement, depot staging and OS custom imaging, 24/7 proactive system monitoring, advance break-fix repair and warranty fulfillment, and certified NIST 800-88 data destruction and recycling.',
    },
    {
      question: 'Where is the Argus staging and repair depot located?',
      answer: 'Our operations hub is centrally located in the Dallas/Fort Worth metroplex at 14951 Kingsport Rd, Suite 200, Fort Worth, Texas 76155. Centrally positioned near DFW International Airport and national freight lines, we support client offices, branches, and remote staff across all 50 states.',
    },
    {
      question: 'How does Argus support both enterprise fleets and midsize companies?',
      answer: 'For large enterprises, we support multi-site deployments with buffer stock management, advance hardware exchange, and strict SLAs. For small and midsize businesses, we provide right-sized hardware bundles, proactive monitoring, and predictable depot support without corporate bloat.',
    },
    {
      question: 'What data destruction standards does Argus guarantee?',
      answer: 'We adhere strictly to National Institute of Standards and Technology (NIST) Special Publication 800-88 Revision 1 guidelines for media sanitization. We provide serialized, audit-ready Certificates of Destruction that document drive serial numbers, wipe methods, and timestamps for regulatory audits.',
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

      {/* Cinematic Hero with Background Image Blended Professionally */}
      <PageHero
        kicker="28 Years of Fast, Flexible, and Focused IT Infrastructure Solutions"
        title="Full Lifecycle IT Infrastructure Solutions for Growing & Enterprise Fleets"
        subtitle="Our passion is to provide technology solutions so our clients can deliver results. Argus IT Services manages hardware from procurement and custom depot staging through 24/7 maintenance, rapid break-fix repair, and certified NIST 800-88 retirement."
        backgroundImage="/assets/images/hero_it_depot_imaging_1791866053170.jpg"
        imageAlt="Argus IT Services technician staging and configuring business laptops inside the Fort Worth depot facility"
        primaryCtaText="Talk to an Expert"
        primaryCtaLink="/contact/"
        secondaryCtaText="Explore Our Services"
        secondaryCtaLink="/it-procurement-deployment/"
        trustMarkers={[
          { title: '28+ Years', subtitle: 'Founded 1997 in DFW' },
          { title: 'Fort Worth Depot', subtitle: '14951 Kingsport Rd' },
          { title: 'NIST 800-88', subtitle: 'Certified Destruction' },
        ]}
      />

      {/* "Why Choose Argus? Fast, Flexible, Focused" (Exact 3 Pillars from Reference Template) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold text-[#213f9a] uppercase tracking-wider mb-2">
              The Argus Advantage
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose Argus IT Services?
            </h2>
            <p className="mt-3 text-lg text-slate-600 leading-relaxed">
              We provide comprehensive services and support for the Desktop, Mobile, Network, and Data Center environments—backed by hands-on engineering craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1: Fast, Flexible, Focused (From Reference) */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-blue-500 hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#213f9a] flex items-center justify-center font-bold">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Fast, Flexible, Focused
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  With rapid response times, scalable solutions for any environment or timeline, and a dedicated team focused on reliable, proactive, customer-first service, we keep your business moving without delays, from a single location to a nationwide rollout.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-200/80 text-xs font-semibold text-slate-500">
                Direct technician contact · No call center runaround
              </div>
            </div>

            {/* Pillar 2: Decades of Proven Enterprise Experience (From Reference) */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-blue-500 hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#213f9a] flex items-center justify-center font-bold">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Decades of Proven Enterprise Experience
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Backed by decades of hands-on experience since our founding in 1997, our leadership brings former IBM corporate computing rigor and licensed professional engineering oversight to every client project.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-200/80 text-xs font-semibold text-slate-500">
                Operating continuously for over 28 years
              </div>
            </div>

            {/* Pillar 3: Entire Lifecycle from Purchase to Retire (From Reference) */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-blue-500 hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#213f9a] flex items-center justify-center font-bold">
                  <RotateCw className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Entire Lifecycle: Purchase to Retire
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our end-to-end approach keeps your technology supported, secure, and working efficiently throughout its entire lifecycle: Source, Deploy, Manage, Support, and Certified Retire.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-200/80 text-xs font-semibold text-slate-500">
                NIST 800-88 certified media sanitization
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Lifecycle Explorer Component */}
      <LifecycleExplorer />

      {/* Core Services Bento Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold text-[#213f9a] uppercase tracking-wider mb-2">
              Our Core Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Support Across Desktop, Mobile, Network, and Data Center Environments
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Explore how Argus connects hardware staging, proactive monitoring, depot repair, and certified disposition into a unified operational partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Computers and Mobile */}
            <div className="bg-white p-8 rounded-xl border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-[#213f9a] hover:shadow-md transition-all group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#213f9a] flex items-center justify-center group-hover:bg-[#213f9a] group-hover:text-white transition-colors">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Computers and Mobile Services
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Commercial hardware sourcing, custom OS gold master imaging, zero-touch enrollment, and accessory kitting drop-shipped directly to employee desks nationwide.
                </p>
                <ul className="text-xs text-slate-500 space-y-1.5 pt-2">
                  <li>· Volume PC & laptop procurement</li>
                  <li>· Custom BIOS & image configuration</li>
                  <li>· Device as a Service (DaaS) arrangements</li>
                </ul>
              </div>
              <div className="pt-6">
                <Link
                  to="/it-procurement-deployment/"
                  className="text-sm font-semibold text-[#213f9a] hover:text-blue-700 flex items-center gap-1.5"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 2: Network & Data Center */}
            <div className="bg-white p-8 rounded-xl border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-[#213f9a] hover:shadow-md transition-all group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#213f9a] flex items-center justify-center group-hover:bg-[#213f9a] group-hover:text-white transition-colors">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Network and Data Centers
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  24/7 proactive infrastructure telemetry, operating system patch compliance, network switch backups, and scheduled monthly health and warranty reports.
                </p>
                <ul className="text-xs text-slate-500 space-y-1.5 pt-2">
                  <li>· Continuous infrastructure monitoring</li>
                  <li>· Scheduled security patch routines</li>
                  <li>· Monthly asset health audits</li>
                </ul>
              </div>
              <div className="pt-6">
                <Link
                  to="/managed-it-services/"
                  className="text-sm font-semibold text-[#213f9a] hover:text-blue-700 flex items-center gap-1.5"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 3: Depot Services */}
            <div className="bg-white p-8 rounded-xl border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-[#213f9a] hover:shadow-md transition-all group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#213f9a] flex items-center justify-center group-hover:bg-[#213f9a] group-hover:text-white transition-colors">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Complete Care Depot Services
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our Fort Worth repair depot provides certified component diagnostics, motherboard repair, and same-day advance hardware exchange from client buffer inventory.
                </p>
                <ul className="text-xs text-slate-500 space-y-1.5 pt-2">
                  <li>· Component-level repair benches</li>
                  <li>· Same-day advance swap dispatch</li>
                  <li>· Buffer inventory warehousing</li>
                </ul>
              </div>
              <div className="pt-6">
                <Link
                  to="/it-support-services/"
                  className="text-sm font-semibold text-[#213f9a] hover:text-blue-700 flex items-center gap-1.5"
                >
                  <span>Explore Depot</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 4: Project and Field Services */}
            <div className="bg-white p-8 rounded-xl border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-[#213f9a] hover:shadow-md transition-all group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#213f9a] flex items-center justify-center group-hover:bg-[#213f9a] group-hover:text-white transition-colors">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Projects and Field Services
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Multi-site technical cutovers: corporate relocations, bank acquisition branch conversions, retail POS remodels, structured cabling, and technical staff augmentation.
                </p>
                <ul className="text-xs text-slate-500 space-y-1.5 pt-2">
                  <li>· On-site field technician dispatch</li>
                  <li>· Multi-branch hardware migrations</li>
                  <li>· Off-hours cutover execution</li>
                </ul>
              </div>
              <div className="pt-6">
                <Link
                  to="/it-staffing-project-services/"
                  className="text-sm font-semibold text-[#213f9a] hover:text-blue-700 flex items-center gap-1.5"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 5: IT Asset Disposition (ITAD) */}
            <div className="bg-white p-8 rounded-xl border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-[#213f9a] hover:shadow-md transition-all group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#213f9a] flex items-center justify-center group-hover:bg-[#213f9a] group-hover:text-white transition-colors">
                  <Trash2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  ITAD & Secure Data Destruction
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Decommission aging technology with total compliance. NIST 800-88 data sanitization, serialized destruction certificates, and gain-share remarketing recovery.
                </p>
                <ul className="text-xs text-slate-500 space-y-1.5 pt-2">
                  <li>· NIST 800-88 certified media wipe</li>
                  <li>· Serialized destruction certificates</li>
                  <li>· Gain-share revenue recovery</li>
                </ul>
              </div>
              <div className="pt-6">
                <Link
                  to="/it-asset-disposition/"
                  className="text-sm font-semibold text-[#213f9a] hover:text-blue-700 flex items-center gap-1.5"
                >
                  <span>Explore ITAD</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 6: Enterprise & SMB Fleet Solutions */}
            <div className="bg-[#213f9a] text-white p-8 rounded-xl shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-blue-800 text-white flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">
                  Solutions Tailored by Scale
                </h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Whether managing 5,000 distributed endpoints across retail branches or provisioning 50 workstations for a regional firm, our service models scale to your needs.
                </p>
                <div className="space-y-2 pt-2">
                  <Link
                    to="/enterprise-it-services/"
                    className="block p-2.5 rounded bg-blue-800/80 hover:bg-blue-800 text-xs font-semibold text-white transition-colors"
                  >
                    Enterprise IT Lifecycle Solutions →
                  </Link>
                  <Link
                    to="/small-business-it-services/"
                    className="block p-2.5 rounded bg-blue-800/80 hover:bg-blue-800 text-xs font-semibold text-white transition-colors"
                  >
                    Small & Midsize Business Solutions →
                  </Link>
                </div>
              </div>
              <div className="pt-6 text-xs text-blue-200">
                Fort Worth Logistics Hub · Direct Engineer Partnership
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Case Studies Section (Directly from Reference Template) with Read More / Read Less SEO Expandable Content */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold text-[#213f9a] uppercase tracking-wider mb-2">
              Verified Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Check Out the Latest in Technology Solutions
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Examining real operational engineering challenges solved by Argus across commercial, retail, and industrial environments.
            </p>
          </div>

          <ExpandableContent
            previewHeight="max-h-[580px]"
            expandLabel="Read More In-Depth Case Studies & Technical Specifications"
            collapseLabel="Read Less"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              
              {/* Case Study 1: Managed IT Services (From Reference) */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-xs">
                <div>
                  <div className="h-48 bg-slate-800 relative overflow-hidden">
                    <img
                      src="/assets/images/enterprise_server_datacenter_1791866053375.jpg"
                      alt="Managed IT Services Case Study"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#213f9a] text-white text-[11px] font-bold">
                      Case Study
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-xs font-mono text-slate-500">Retail & Commercial</span>
                    <h3 className="text-lg font-bold text-slate-900">
                      Case Study: Managed IT Services
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      <strong>The Challenge:</strong> A retail organization needed reliable IT support for its internal network, workstations, and store endpoints across multiple regional branches without escalating staffing costs.
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      <strong>The Argus Solution:</strong> Deployed 24/7 centralized infrastructure monitoring, automated vulnerability and patch schedules during non-trading hours, and provided advance depot hardware swaps.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-slate-100">
                  <div className="text-xs font-bold text-[#213f9a]">Outcome: 99.98% System Uptime Across Stores</div>
                </div>
              </div>

              {/* Case Study 2: Store Remodels (From Reference) */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-xs">
                <div>
                  <div className="h-48 bg-slate-800 relative overflow-hidden">
                    <img
                      src="/assets/images/retail_pos_field_deployment_1791867969416.jpg"
                      alt="Store Remodels and Retail Point of Sale Deployment Case Study"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#213f9a] text-white text-[11px] font-bold">
                      Case Study
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-xs font-mono text-slate-500">National Retail Remodel</span>
                    <h3 className="text-lg font-bold text-slate-900">
                      Case Study: Store Remodels
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      <strong>The Challenge:</strong> A national retail customer was experiencing operational inefficiencies due to staggered point-of-sale upgrades and uncoordinated vendor deliveries during rapid store remodels.
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      <strong>The Argus Solution:</strong> Argus staged, imaged, and packaged turnkey POS packages in Fort Worth, deploying on-site technicians for overnight cutovers before retail opening hours.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-slate-100">
                  <div className="text-xs font-bold text-[#213f9a]">Outcome: Cut On-Site Installation Time by 60%</div>
                </div>
              </div>

              {/* Case Study 3: Novar EMS Installation Project (From Reference) */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-xs">
                <div>
                  <div className="h-48 bg-slate-800 relative overflow-hidden">
                    <img
                      src="/assets/images/field_technician_collaboration_1791866053603.jpg"
                      alt="Novar EMS Installation Project Case Study"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#213f9a] text-white text-[11px] font-bold">
                      Case Study
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-xs font-mono text-slate-500">Commercial Energy Systems</span>
                    <h3 className="text-lg font-bold text-slate-900">
                      Case Study: Novar EMS Installation
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      <strong>The Challenge:</strong> Argus was contacted by a returning client to support a multi-facility Novar Energy Management System (EMS) hardware cutover requiring specialized cabling and telemetry controllers.
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      <strong>The Argus Solution:</strong> Coordinated licensed field technicians and structured cabling specialists to test sensor lines, mount controller racks, and verify telemetry communications with centralized building management.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-slate-100">
                  <div className="text-xs font-bold text-[#213f9a]">Outcome: Turnkey Execution Across All Facilities</div>
                </div>
              </div>

            </div>

            {/* Deep Additional Content (Google SEO Topical Depth: 950+ words total) */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-6 text-sm text-slate-700 leading-relaxed">
              <h4 className="text-xl font-bold text-slate-900">
                Detailed Engineering Lifecycle Framework: Managing TCO from Day One
              </h4>
              <p>
                In corporate computing, the capital expense of purchasing a computer or server represents only 20% to 25% of its total cost of ownership (TCO). The remaining 75% to 80% is consumed across software provisioning, imaging, user desk deployment, warranty break-fix cycles, inventory tracking, and eventual secure disposition.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <h5 className="font-bold text-slate-900">1. Staging Bench Quality Control</h5>
                  <p className="text-xs text-slate-600">
                    At our Fort Worth depot, every piece of hardware passes rigorous electrical and diagnostic burn-in tests. We verify memory integrity, run SSD read/write health diagnostics, flash BIOS configurations, and enroll systems into corporate cloud management profiles before physical shipment.
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-slate-900">2. Chain-of-Custody Asset Security</h5>
                  <p className="text-xs text-slate-600">
                    From locked warehouse staging to serialized barcode reconciliation, every endpoint is logged with its serial number, MAC address, and department allocation. When retiring equipment, our NIST 800-88 sanitization process provides audit-ready certificates for regulatory defense.
                  </p>
                </div>
              </div>
            </div>
          </ExpandableContent>

        </div>
      </section>

      {/* FAQ Section */}
      <FAQAccordion items={homeFaqs} />

      {/* High-Impact CTA Section (Matching Template Headline: Isn’t It Time for an IT Upgrade?) */}
      <CTASection
        headline="Isn’t It Time for an IT Upgrade? Our Team of Experts is Ready to Take on Your IT Needs."
        subhead="Schedule a brief conversation with our Fort Worth engineering team and discover how Argus can streamline your IT, improve efficiency, and provide solutions tailored to your business needs."
        primaryButtonText="Talk to an Expert"
      />
    </div>
  );
};
