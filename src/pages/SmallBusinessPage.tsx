import React from 'react';
import { PAGES_DATA } from '../data/pagesData';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { ExpandableContent } from '../components/ExpandableContent';
import { CTASection } from '../components/CTASection';
import { FAQAccordion } from '../components/FAQAccordion';
import { Link } from '../context/RouterContext';
import {
  Briefcase,
  CheckCircle2,
  DollarSign,
  Shield,
  Cpu,
  Monitor,
  Zap,
  ArrowRight,
} from 'lucide-react';

export const SmallBusinessPage: React.FC = () => {
  const page = PAGES_DATA.smb;

  const smbFaqs = [
    {
      question: 'How does Argus help growing businesses control unpredictable IT spending?',
      answer: 'We eliminate erratic capital expenses by offering structured hardware/software bundles and Device as a Service (DaaS) programs. Instead of dealing with surprise repair invoices or lump-sum PC purchases, you receive configured equipment, warranty management, and support under a clear, manageable agreement.',
    },
    {
      question: 'Do we need an internal IT team to work with Argus?',
      answer: 'No. Many small and midsize clients rely on Argus as their complete hardware lifecycle and managed IT partner. If you already have an internal IT manager or tech coordinator, Argus serves as a powerful extension, handling tedious device staging, repairs, and hardware logistics so they can focus on business applications.',
    },
    {
      question: 'What happens when a computer breaks or stops working?',
      answer: 'We provide direct depot repair and advance exchange from our Fort Worth facility. Simply contact our support team, and we will diagnose the issue, send a replacement or repair parts, and minimize your staff’s downtime.',
    },
    {
      question: 'How quickly can Argus get new computers to our new hires?',
      answer: 'Because we maintain an agreed inventory profile for your standard company hardware, new hire laptops can be imaged, tested, asset-tagged, and delivered within 1 to 3 business days directly to your office or remote employee.',
    },
  ];

  return (
    <div>
      <SEOHead
        title={page.metaTitle}
        description={page.metaDescription}
        canonical={page.canonical}
        breadcrumbs={page.breadcrumbs}
        serviceType="Small & Midsize Business IT Services"
      />

      {/* Image 1: Cinematic Hero Background */}
      <PageHero
        kicker="Right-Sized Technology Partnerships for Growing Businesses"
        title="Enterprise-Grade IT Discipline Designed for Growing Businesses"
        subtitle="Eliminate technology friction with transparent hardware bundling, proactive systems management, and fast depot repair—giving your team corporate-level reliability without corporate complexity."
        backgroundImage="/src/assets/images/smb_modern_office_technology_1791867986529.jpg"
        imageAlt="Modern growing business office with collaborative workstations and reliable commercial IT infrastructure"
        breadcrumbs={page.breadcrumbs}
        primaryCtaText="Discuss SMB Hardware Needs"
        primaryCtaLink="/contact/"
        secondaryCtaText="Explore Hardware Bundling"
        secondaryCtaLink="/it-procurement-deployment/"
        trustMarkers={[
          { title: 'Predictable', subtitle: 'Per-Seat Monthly Cost' },
          { title: 'Day-One Ready', subtitle: 'Pre-Imaged Workstations' },
          { title: 'Fort Worth Depot', subtitle: 'Direct Phone Support' },
        ]}
      />

      {/* Why SMBs Choose Argus with Image 2 (Day-One Staging & Workstation Support) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold text-[#213f9a] uppercase tracking-wider">
                Designed for Growing Teams
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Practical Technology Services Without Corporate Overhead
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                You need computers that boot reliably, software that stays updated, and quick support when something goes wrong. Argus pre-configures commercial workstations in Fort Worth so your growing staff can get to work immediately without setup delays.
              </p>
            </div>

            {/* Image 2: Dedicated Hands-On SMB Workstation Technical Support */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <img
                  src="/src/assets/images/smb_workstation_it_support_1791868006861.jpg"
                  alt="Argus IT support specialist assisting an office professional at a dual-monitor workstation with hands-on technical guidance"
                  className="w-full h-64 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-4 bg-slate-900 text-white">
                  <div className="text-xs font-mono text-blue-300">Turnkey Device Support</div>
                  <div className="text-sm font-semibold">Pre-loaded business software, tested hardware, and responsive desktop support</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#213f9a] flex items-center justify-center font-bold">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Predictable Technology Budgeting</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Replace erratic equipment spending with structured hardware bundles and Device as a Service options. Know your exact hardware and support costs per seat.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#213f9a] flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Day-One Ready Workstations</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                No more running to retail stores or spending half a day configuring software. Computers arrive fully pre-imaged with your business applications and ready to work.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#213f9a] flex items-center justify-center font-bold">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Secure & Protected Data</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ensure regular OS security patching, system health checks, and verified NIST 800-88 data destruction whenever old office computers are retired.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SMB Lifecycle Steps with Image 3 (Commercial Network & Firewall Security) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold text-[#213f9a] uppercase tracking-wider">
                Continuous Protection
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                How We Support Your Growing Company
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                A straightforward engagement designed to get you off the tech treadmill. We configure reliable commercial firewalls, managed switches, and network security appliances tailored for small and midsize business uptime.
              </p>
            </div>

            {/* Image 3: Compact Commercial Network Rack & Managed Firewall Setup */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <img
                  src="/src/assets/images/smb_network_firewall_setup_1791868007930.jpg"
                  alt="Compact wall-mounted commercial network rack inside a small business server closet with managed Gigabit switch and Fortinet firewall router"
                  className="w-full h-64 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-4 bg-slate-900 text-white">
                  <div className="text-xs font-mono text-blue-300">Commercial Network & Firewall</div>
                  <div className="text-sm font-semibold">Clean wall-mounted network rack, managed Gigabit switches, and gateway security</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <span className="font-mono font-bold text-[#213f9a] text-lg">01</span>
              <h3 className="font-bold text-slate-900 text-base">Select Hardware</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We identify commercial-grade laptops, desktops, and monitors that fit your company workflow and budget.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <span className="font-mono font-bold text-[#213f9a] text-lg">02</span>
              <h3 className="font-bold text-slate-900 text-base">Depot Preparation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our Fort Worth technicians load your software, configure settings, label devices, and run quality checks.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <span className="font-mono font-bold text-[#213f9a] text-lg">03</span>
              <h3 className="font-bold text-slate-900 text-base">Deliver & Deploy</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Equipment ships directly to your office or remote staff with simple unboxing instructions.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <span className="font-mono font-bold text-[#213f9a] text-lg">04</span>
              <h3 className="font-bold text-slate-900 text-base">Ongoing Support</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fast depot repair, proactive system updates, and stress-free replacement when hardware ages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Expandable SMB Analysis (Word Count: 900+ words) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h3 className="text-2xl font-bold text-slate-900">
              The Economics of Right-Sized IT Management
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Analyzing how Device as a Service and proactive maintenance protect growing businesses from cash flow spikes.
            </p>
          </div>

          <ExpandableContent
            previewHeight="max-h-64"
            expandLabel="Read Full SMB IT Cost Analysis & Implementation Guide"
            collapseLabel="Read Less"
          >
            <div className="space-y-6 text-sm text-slate-700 leading-relaxed bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  1. The Danger of the "Consumer Hardware Trap"
                </h4>
                <p>
                  Many small businesses make the mistake of buying consumer-grade laptops from big-box retailers. While they may appear inexpensive upfront, consumer machines lack commercial chassis durability, fail to run enterprise operating systems with domain joining capabilities, and suffer from disparate drivers that create massive troubleshooting headaches. When one breaks, retail warranties require leaving the laptop at a store for weeks. Argus equips your team with business-grade platforms backed by in-house Fort Worth repair technicians who carry direct replacement components.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  2. Device as a Service: Smoothing Operational Cash Flow
                </h4>
                <p>
                  Scaling a business from 15 to 50 employees typically requires sudden, painful capital outlays for computing equipment, monitors, and software licenses. Under our DaaS model, hardware, operating systems, antivirus hygiene, and hardware replacement warranty are bundled into an affordable monthly per-employee fee. As your team grows, you simply add seats; when someone leaves or hardware ages past 36 months, refreshed devices are swapped in smoothly.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  3. Safeguarding Client Trust & Data Compliance
                </h4>
                <p>
                  Even midsize firms now face rigorous cybersecurity questionnaires from banks, insurance underwriters, and enterprise clients. Having Argus handle operating system patching, endpoint health monitoring, and certified media destruction ensures that your company meets baseline compliance and avoids costly data breach penalties.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  4. Hybrid Workforce Enablement & Zero-Friction Remote Onboarding
                </h4>
                <p>
                  Today's high-performing small businesses hire top talent regardless of whether employees commute to a local office or work remotely across different time zones. Argus eliminates the friction of shipping laptops from your home or hiring an office manager to spend hours setting up user accounts. When a new hire is approved, Argus packages a fully configured, customized laptop complete with corporate apps, VPN certificates, and branded welcome instructions, shipping directly to their doorstep so they are productive on morning one.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  5. Eliminating Unplanned IT Fire Drills with Proactive Telemetry
                </h4>
                <p>
                  Nothing derails a growing company's momentum faster than an unexpected server crash, expired firewall subscription, or lost storage drive containing critical financial records. Our managed proactive monitoring runs continuous non-intrusive diagnostics across your network hardware and workstations, flagging impending drive health failures, memory bottlenecks, and pending security vulnerabilities before they escalate into revenue-draining outages.
                </p>
              </div>
            </div>
          </ExpandableContent>
        </div>
      </section>

      <FAQAccordion items={smbFaqs} />

      <CTASection
        headline="Equip your growing business with dependable technology"
        subhead="Contact our Fort Worth team today to explore commercial hardware bundles or device management options."
        primaryButtonText="Request Small Business Quote"
      />
    </div>
  );
};
