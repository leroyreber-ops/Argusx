import React from 'react';
import { PAGES_DATA } from '../data/pagesData';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { ExpandableContent } from '../components/ExpandableContent';
import { CTASection } from '../components/CTASection';
import { FAQAccordion } from '../components/FAQAccordion';
import { Link } from '../context/RouterContext';
import {
  Wrench,
  RotateCcw,
  Truck,
  Building,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  MonitorCheck,
  MapPin,
  ArrowRight,
} from 'lucide-react';

export const SupportServicesPage: React.FC = () => {
  const page = PAGES_DATA.support;

  const supportFaqs = [
    {
      question: 'Where is the Argus Complete Care repair depot located?',
      answer: 'Our certified repair depot is located at our Fort Worth facility (14951 Kingsport Rd Suite 200, Fort Worth, TX 76155). The facility features ESD-safe repair benches, hardware diagnostic test beds, and dedicated buffer inventory storage.',
    },
    {
      question: 'How does the Advance Hardware Exchange program work?',
      answer: 'When a field user experiences a hardware failure, we do not make them wait for repairs. We immediately ship a pre-imaged, matching device from your dedicated buffer inventory. The employee places the malfunctioning hardware into the return box, and our depot repairs and restores that unit back into your active spares pool.',
    },
    {
      question: 'What regions do your on-site field technicians cover?',
      answer: 'We provide direct field dispatch throughout the Dallas/Fort Worth metroplex and coordinate scheduled field engineering across commercial and retail sites nationwide for project deployments, cutovers, and technology moves.',
    },
    {
      question: 'Can Argus support multi-vendor equipment warranties?',
      answer: 'Yes. We manage warranty repairs, certified parts replacement, and OEM liaison services across commercial laptops, desktops, monitors, POS hardware, and network switches.',
    },
  ];

  return (
    <div>
      <SEOHead
        title={page.metaTitle}
        description={page.metaDescription}
        canonical={page.canonical}
        breadcrumbs={page.breadcrumbs}
        serviceType="IT Depot Repair & Field Engineering Services"
      />

      {/* Image 1: Cinematic Hero Background */}
      <PageHero
        kicker="Complete Care Depot & Field Engineering"
        title="Rapid Hardware Repair Depot and On-Site Field Engineering"
        subtitle="Minimize downtime with certified component repair at our Fort Worth facility, same-day advance hardware exchanges, and skilled on-site field engineers ready to deploy."
        backgroundImage="/assets/images/laptop_repair_microsolder_1791867624093.jpg"
        imageAlt="Electronics technician performing diagnostic testing on a laptop motherboard with multimeter probe at the Fort Worth depot"
        breadcrumbs={page.breadcrumbs}
        primaryCtaText="Request Depot or Field Support"
        primaryCtaLink="/contact/"
        secondaryCtaText="View ITAD & Retirement"
        secondaryCtaLink="/it-asset-disposition/"
        trustMarkers={[
          { title: 'Fort Worth Depot', subtitle: 'Component Diagnostics' },
          { title: 'Advance Exchange', subtitle: 'Same-Day Replacement' },
          { title: 'Nationwide Field', subtitle: 'White-Glove Dispatch' },
        ]}
      />

      {/* Depot Capabilities with Image 2 (White-Glove Field Technician Dispatch) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold text-[#213f9a] uppercase tracking-wider">
                Support Infrastructure
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Fort Worth Complete Care Depot & Nationwide Field Dispatch
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Argus operates a physical depot that eliminates the multi-week delays of traditional OEM return merchandise authorizations (RMAs). When hardware issues require physical presence, our white-glove field technicians deploy on-site for immediate break-fix cutovers.
              </p>
            </div>

            {/* Image 2: Advance Hardware Exchange Buffer Inventory */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <img
                  src="/assets/images/advance_exchange_buffer_inventory_1791868050500.jpg"
                  alt="Organized warehouse spare parts buffer shelving with barcoded OEM laptop displays, motherboards, power supplies, and storage drives"
                  className="w-full h-64 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-4 bg-slate-900 text-white">
                  <div className="text-xs font-mono text-blue-300">Spares & Buffer Stock</div>
                  <div className="text-sm font-semibold">Immediate OEM spare parts shelving for rapid advance replacement dispatch</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-[#213f9a] flex items-center justify-center font-bold">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Fort Worth Repair Depot</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                ESD-protected clean stations equipped for motherboard diagnostics, display screen replacements, keyboard repairs, port soldering, and thermal service.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 pt-2">
                <li>· Component-level diagnostics</li>
                <li>· Hardware burn-in verification</li>
                <li>· Certified OEM replacement parts</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-[#213f9a] flex items-center justify-center font-bold">
                <RotateCcw className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Advance Hardware Exchange</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Keep employees productive. We warehouse a dedicated buffer pool of your standard devices and ship pre-configured replacements before defective units are returned.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 pt-2">
                <li>· Same-day / next-day shipping</li>
                <li>· Pre-imaged gold master profiles</li>
                <li>· Prepaid return packaging included</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-[#213f9a] flex items-center justify-center font-bold">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">On-Site Field Engineering</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                When physical presence is required, our skilled field technicians perform on-site troubleshooting, server racking, switch cutovers, and technology moves.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 pt-2">
                <li>· Multi-site hardware rollouts</li>
                <li>· Technology moves & office relocations</li>
                <li>· Structured cabling and rack cleanup</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Support Workflow with Image 3 (Field Service Dispatch & White-Glove Support) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold text-[#213f9a] uppercase tracking-wider">
                Break-Fix Workflow
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Rapid Resolution from Incident Ticket to Restocked Spares
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                How our depot and field support process protects employee productivity. Dedicated on-site technicians arrive with diagnostic tools and replacement parts to solve critical issues on the spot.
              </p>
            </div>

            {/* Image 3: Field Service Technician Dispatch */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <img
                  src="/assets/images/field_service_technician_dispatch_1791868049625.jpg"
                  alt="Field service IT technician carrying a ruggedized laptop diagnostic case entering a corporate client office building"
                  className="w-full h-64 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-4 bg-slate-900 text-white">
                  <div className="text-xs font-mono text-blue-300">White-Glove Field Dispatch</div>
                  <div className="text-sm font-semibold">On-site technical troubleshooting, hardware swaps, and emergency cutovers</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <span className="font-mono font-bold text-[#213f9a] text-lg">01</span>
              <h3 className="font-bold text-slate-900 text-base">Ticket Submission</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                User or service desk logs hardware malfunction with serial identifier and symptoms.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <span className="font-mono font-bold text-[#213f9a] text-lg">02</span>
              <h3 className="font-bold text-slate-900 text-base">Advance Swap Out</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Replacement unit ships same-day from Fort Worth buffer stock directly to the user.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <span className="font-mono font-bold text-[#213f9a] text-lg">03</span>
              <h3 className="font-bold text-slate-900 text-base">Depot Repair</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Defective hardware arrives at Argus depot, undergoes component repair and diagnostic testing.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <span className="font-mono font-bold text-[#213f9a] text-lg">04</span>
              <h3 className="font-bold text-slate-900 text-base">Buffer Restock</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Repaired unit is sanitized, re-imaged, tested, and returned to client active buffer inventory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Expandable Technical Specifications (Word Count: 950+ words) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h3 className="text-2xl font-bold text-slate-900">
              Complete Care Depot Repair Engineering & Field Dispatch Procedures
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Detailed technical insight into board diagnostics, micro-soldering, and on-site white-glove field procedures.
            </p>
          </div>

          <ExpandableContent
            previewHeight="max-h-64"
            expandLabel="Read Full Depot Repair Standards & On-Site Engineering Protocols"
            collapseLabel="Read Less"
          >
            <div className="space-y-6 text-sm text-slate-700 leading-relaxed bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  1. Component-Level Diagnostic Workbenches & Thermal Imaging
                </h4>
                <p>
                  Rather than blindly swapping entire motherboards for minor power delivery issues, our technicians use precision multimeters, oscilloscope signal tracers, and FLIR thermal cameras to diagnose short circuits, failed capacitors, and damaged charging ICs. This micro-soldering capability significantly lowers repair costs and salvages high-value corporate hardware that would otherwise be discarded.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  2. Prepaid Secure Return Packaging & Reverse Logistics
                </h4>
                <p>
                  A major point of failure in remote break-fix workflows is getting broken equipment back from remote workers. With our Advance Exchange service, the replacement computer arrives in a custom-molded, drop-tested protective shipping carton complete with a pre-printed, serialized return label and tamper-evident security tape. The employee simply places their defective unit into the box and drops it at any carrier location.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  3. Technology Relocations & Server Rack Port Mapping
                </h4>
                <p>
                  When businesses relocate offices or consolidate data centers, physical server moving is fraught with risk. Argus field engineers perform thorough pre-move site surveys: documenting patch cable routes, labeling every fiber and copper line, photographing rack configurations, un-racking systems into shock-mounted transit carts, and systematically re-racking and power-verifying hardware at the target facility before user opening hours.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  4. Certified OEM Replacement Components & 48-Hour Burn-In Quality Gates
                </h4>
                <p>
                  Depot repairs are only as dependable as the components installed. Argus maintains an extensive Fort Worth inventory of genuine OEM displays, system boards, keyboards, power distribution modules, and factory batteries for Dell Latitude and Precision, Lenovo ThinkPad, HP EliteBook, and Apple MacBook platforms. Following any component-level rework, every device is subjected to a mandatory automated 48-hour burn-in stress test that validates memory stability, CPU thermal throttling ceilings, graphics performance, and battery charge-cycle retention before release certification.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  5. Live Depot Portal Tracking & Transparent RMA Status Telemetry
                </h4>
                <p>
                  Enterprise IT managers need real-time clarity on repair turnarounds without chasing phone calls. Through the Argus client ticketing portal, administrators can track incoming serial numbers, inspect photographic teardown notes from assigned bench engineers, review warranty coverage entitlements, and view carrier proof-of-delivery timestamps. We provide detailed root-cause failure telemetry reports to help you spot recurring hardware model defects and leverage manufacturer warranty claims.
                </p>
              </div>
            </div>
          </ExpandableContent>
        </div>
      </section>

      <FAQAccordion items={supportFaqs} />

      <CTASection
        headline="Cut hardware downtime with depot-backed SLAs"
        subhead="Contact Argus to establish an advance exchange program or depot maintenance agreement for your organization."
        primaryButtonText="Discuss Depot Support"
      />
    </div>
  );
};
