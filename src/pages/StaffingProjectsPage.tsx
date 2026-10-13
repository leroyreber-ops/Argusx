import React from 'react';
import { PAGES_DATA } from '../data/pagesData';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { ExpandableContent } from '../components/ExpandableContent';
import { CTASection } from '../components/CTASection';
import { FAQAccordion } from '../components/FAQAccordion';
import { Link } from '../context/RouterContext';
import {
  Users,
  Layers,
  Building2,
  Calendar,
  CheckCircle2,
  Server,
  ArrowRight,
  Workflow,
  Sparkles,
} from 'lucide-react';

export const StaffingProjectsPage: React.FC = () => {
  const page = PAGES_DATA.staffing;

  const projectFaqs = [
    {
      question: 'What types of infrastructure projects does Argus manage?',
      answer: 'We specialize in physical infrastructure transitions: corporate office technology relocations, data center rack migrations, bank branch acquisitions, nationwide retail store point-of-sale remodels, Novar energy management system installations, and large-scale workstation refresh rollouts.',
    },
    {
      question: 'How do you handle weekend or off-hours technology cutovers?',
      answer: 'Complex IT migrations cannot interrupt daily business. We plan and execute weekend cutovers with dedicated project leads, structured pre-migration port mapping, on-site staging, and Monday morning desk-side support to guarantee zero downtime.',
    },
    {
      question: 'Can Argus supply engineers for short-term technical projects?',
      answer: 'Yes. We provide technical staff augmentation, supplying experienced staging technicians, field deployment leads, and structured cabling specialists to reinforce your internal team during high-intensity rollouts.',
    },
    {
      question: 'How does Argus ensure accountability across multi-site projects?',
      answer: 'Every project is assigned a dedicated Argus project manager who coordinates logistics out of our Fort Worth operations hub, provides daily milestone reports, and delivers photographic sign-off documentation for every completed site.',
    },
  ];

  const projectTypes = [
    {
      title: 'Data Center & Server Relocations',
      desc: 'Systematic un-racking, specialized anti-static packaging, secure temperature-monitored transit, precision re-racking, cable dressing, and power-up verification.',
    },
    {
      title: 'Bank Branch Acquisitions & Migrations',
      desc: 'Weekend hardware overhauls across acquired retail banking branches, deploying standardized teller workstations, document scanners, and branch routers ready for opening bell.',
    },
    {
      title: 'Retail Store Remodels & POS Rollouts',
      desc: 'Staging, kitting, and overnight installation of point-of-sale terminals, receipt printers, barcode readers, and wireless access points across retail chains.',
    },
    {
      title: 'Structured Cabling & Server Rack Remediation',
      desc: 'Transform tangled server closets into cleanly dressed, labeled, and certified structured cabling networks with proper airflow and patch management.',
    },
  ];

  return (
    <div>
      <SEOHead
        title={page.metaTitle}
        description={page.metaDescription}
        canonical={page.canonical}
        breadcrumbs={page.breadcrumbs}
        serviceType="IT Project Engineering and Staff Augmentation Services"
      />

      {/* Cinematic Hero Background */}
      <PageHero
        kicker="Project Execution & Technical Staff Augmentation"
        title="Specialized Engineering for Complex Hardware Moves and Rollouts"
        subtitle="On-demand technical project teams for bank acquisitions, corporate headquarters relocations, multi-store point-of-sale cutovers, and specialized engineering augmentation."
        backgroundImage="/src/assets/images/field_technician_collaboration_1791866053603.jpg"
        imageAlt="Argus technical project team planning an infrastructure relocation schedule"
        breadcrumbs={page.breadcrumbs}
        primaryCtaText="Discuss Project Scope"
        primaryCtaLink="/contact/"
        secondaryCtaText="Explore Field Services"
        secondaryCtaLink="/it-support-services/"
        trustMarkers={[
          { title: 'Turnkey Moves', subtitle: 'Zero Downtime Relocations' },
          { title: 'Multi-Site', subtitle: 'Coordinated Branch Rollouts' },
          { title: 'Dedicated Leads', subtitle: 'Fort Worth Project PMs' },
        ]}
      />

      {/* Project Capabilities with Image 2 (Bank Branch Conversion & Cutover) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold text-[#213f9a] uppercase tracking-wider">
                Capabilities
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Turnkey Execution for Critical Technology Initiatives
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                When hardware transitions cannot fail, Argus provides seasoned technical field leadership and operational discipline. From commercial bank acquisition cutovers to national retail POS replacements, our teams handle all hardware staging, on-site cable dressing, and overnight conversions.
              </p>
            </div>

            {/* Image 2: Commercial Bank Branch IT Modernization Cutover */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <img
                  src="/src/assets/images/branch_conversion_cutover_project_1791868075194.jpg"
                  alt="Commercial bank branch IT modernization cutover during evening with IT specialists installing new cash recycler terminals and cabling"
                  className="w-full h-64 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-4 bg-slate-900 text-white">
                  <div className="text-xs font-mono text-blue-300">Multi-Site Branch Cutovers</div>
                  <div className="text-sm font-semibold">After-hours teller station conversions, cabling, and router cutovers</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectTypes.map((pt, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-[#213f9a] text-sm">0{idx + 1}.</span>
                  <h3 className="font-bold text-slate-900 text-lg">{pt.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pl-7">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven 4-Phase Migration Methodology with Image 3 (Dedicated Technical Staffing Squad) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold text-[#213f9a] uppercase tracking-wider">
                Methodology & Staffing
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Disciplined Project Architecture & Specialized Engineering Squads
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                How we guarantee zero surprise downtime during complex migrations. We supply dedicated tier-two and tier-three hardware systems engineers to augment internal teams during high-volume cutovers.
              </p>
            </div>

            {/* Image 3: Dedicated Technical Staffing & Senior Field Engineering Squad */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <img
                  src="/src/assets/images/it_staffing_engineering_team_1791868074700.jpg"
                  alt="Group of diverse professional IT technicians and systems engineers in uniform standing together confidently in a technology staging facility"
                  className="w-full h-64 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-4 bg-slate-900 text-white">
                  <div className="text-xs font-mono text-blue-300">Technical Staff Augmentation</div>
                  <div className="text-sm font-semibold">Vetted on-site systems engineers, deployment leads, and cable techs</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <span className="font-mono font-bold text-[#213f9a] text-lg">Phase 1</span>
              <h3 className="font-bold text-slate-900 text-base">Site Survey & Port Mapping</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Thorough audit of existing rack layouts, power requirements, VLAN assignments, and cable pathways.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <span className="font-mono font-bold text-[#213f9a] text-lg">Phase 2</span>
              <h3 className="font-bold text-slate-900 text-base">Depot Pre-Configuration</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All replacement hardware, switches, and workstations are pre-imaged and labeled in Fort Worth before transit.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <span className="font-mono font-bold text-[#213f9a] text-lg">Phase 3</span>
              <h3 className="font-bold text-slate-900 text-base">Controlled Cutover</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Execution during maintenance windows with structured checklist verification and rollback contingencies.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <span className="font-mono font-bold text-[#213f9a] text-lg">Phase 4</span>
              <h3 className="font-bold text-slate-900 text-base">Day-One Support & Sign-Off</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                On-site engineers provide white-glove floor support for opening hours, ensuring all systems operate smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Expandable Technical Specifications (Word Count: 900+ words) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h3 className="text-2xl font-bold text-slate-900">
              Project Governance Framework & Risk Mitigation Architecture
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Analyzing how Argus project managers structure bank branch cutovers and retail store remodels.
            </p>
          </div>

          <ExpandableContent
            previewHeight="max-h-64"
            expandLabel="Read Full Project Governance & Technical Cutover Architecture"
            collapseLabel="Read Less"
          >
            <div className="space-y-6 text-sm text-slate-700 leading-relaxed bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  1. The Bank Branch Acquisition Migration Playbook
                </h4>
                <p>
                  When a commercial financial institution acquires retail branches, every teller station, check scanner, receipt printer, and branch router must be switched to the acquiring institution's core banking network over a single 48-hour weekend window. Argus builds detailed chronological runbooks with 30-minute milestone intervals. Every cable drop is pre-tested, workstations are pre-imaged with core teller platforms, and rollback checkpoints are established before any physical switch is cut over.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  2. Retail Store Remodels: Overnight Turnkey Cutover
                </h4>
                <p>
                  In high-volume retail environments, closing a store for daytime IT maintenance is financially out of the question. Our field technicians execute between 9:00 PM and 6:00 AM: unboxing pre-kitted register bundles, pulling Cat6 structured drops, mounting handheld barcode scanner cradles, testing payment terminal encryptions, and performing end-to-end transaction test swipes with corporate IT before store managers arrive for morning shifts.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  3. Technical Staff Augmentation Standards
                </h4>
                <p>
                  Temporary staffing agencies often dispatch warm bodies without IT hardware literacy. Argus provides vetted technicians trained in our own Fort Worth depot. Our staff understand ESD grounding, cable dressing aesthetics, patch panel punch-downs, and corporate customer service etiquette, integrating seamlessly with your project leads.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  4. Structured Low-Voltage Cabling & BICSI Professional Standards
                </h4>
                <p>
                  Poorly organized, tangled network cabling accounts for a shocking percentage of intermittent packet loss and difficult troubleshooting during office moves. Argus technicians are trained to BICSI standards, adhering to exact cable bend radius guidelines, hook-and-loop velcro dressing, and systematic color coding for voice, data, wireless access points, and security cameras. Every newly pulled line is tested with calibrated Fluke cable analyzers, and itemized certification reports are delivered alongside comprehensive as-built port maps for your permanent facility records.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  5. Dedicated Project Management Office (PMO) & Daily Standup Cadence
                </h4>
                <p>
                  Complex enterprise rollouts fail when field technicians operate without unified central coordination. Every multi-site deployment is paired with a dedicated Argus project manager based at our Fort Worth operations depot. Your internal leadership receives daily milestone dashboards, risk mitigation registers, technician check-in and check-out logs, and immediate photo verification of completed installations across every branch, keeping all stakeholders aligned from kickoff through formal project sign-off.
                </p>
              </div>
            </div>
          </ExpandableContent>
        </div>
      </section>

      <FAQAccordion items={projectFaqs} />

      <CTASection
        headline="Plan your next technology rollout with certainty"
        subhead="Speak with our project engineering directors to review site blueprints, project schedules, or staffing requirements."
        primaryButtonText="Request Project Scoping"
      />
    </div>
  );
};
