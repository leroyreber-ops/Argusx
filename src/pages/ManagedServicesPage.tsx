import React from 'react';
import { PAGES_DATA } from '../data/pagesData';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { ExpandableContent } from '../components/ExpandableContent';
import { CTASection } from '../components/CTASection';
import { FAQAccordion } from '../components/FAQAccordion';
import { Link } from '../context/RouterContext';
import {
  Server,
  Activity,
  ShieldCheck,
  FileBarChart,
  Network,
  Clock,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  ArrowRight,
} from 'lucide-react';

export const ManagedServicesPage: React.FC = () => {
  const page = PAGES_DATA.managed;

  const mspFaqs = [
    {
      question: 'What systems and infrastructure does Argus monitor?',
      answer: 'We monitor core network infrastructure (switches, firewalls, routers), server operating systems, storage devices, and client computing endpoints (workstations, laptops, mobile devices) for uptime, performance anomalies, and security compliance.',
    },
    {
      question: 'How do you handle software and OS patching?',
      answer: 'We schedule and automate operating system updates and critical third-party software patches during low-impact maintenance windows, pre-testing patches to ensure software compatibility before fleet-wide deployment.',
    },
    {
      question: 'What reports do we receive about our IT environment?',
      answer: 'We provide scheduled monthly executive and technical reports detailing system uptime, patch compliance percentages, open hardware warranties, aging asset inventory, and proactive recommendations for upcoming hardware refreshes.',
    },
    {
      question: 'Can Argus co-manage infrastructure alongside our internal IT team?',
      answer: 'Yes. Many clients retain their internal IT directors for application strategy and end-user support while partnering with Argus to handle routine infrastructure monitoring, patch automation, depot repairs, and lifecycle logistics.',
    },
  ];

  return (
    <div>
      <SEOHead
        title={page.metaTitle}
        description={page.metaDescription}
        canonical={page.canonical}
        breadcrumbs={page.breadcrumbs}
        serviceType="Managed IT Services"
      />

      {/* Image 1: Cinematic Hero Background */}
      <PageHero
        kicker="24/7 Managed Systems & Infrastructure Support"
        title="Keep Business-Critical Infrastructure Resilient and Up-to-Date"
        subtitle="Proactive 24/7 monitoring, automated patch compliance, and disciplined systems administration that prevent downtime before it interrupts your operations."
        backgroundImage="/src/assets/images/network_monitoring_noc_1791867623829.jpg"
        imageAlt="Argus Network Operations Center technician monitoring infrastructure telemetry and server uptime"
        breadcrumbs={page.breadcrumbs}
        primaryCtaText="Request Managed IT Consultation"
        primaryCtaLink="/contact/"
        secondaryCtaText="Explore Depot & Field Support"
        secondaryCtaLink="/it-support-services/"
        trustMarkers={[
          { title: '24/7 Telemetry', subtitle: 'Proactive Alerting' },
          { title: 'Patch Compliance', subtitle: 'Automated OS Hygiene' },
          { title: 'Monthly Audits', subtitle: 'Complete Asset Reports' },
        ]}
      />

      {/* Three Pillars: Monitor, Maintain, Report with Image 2 (Data Center Server Corridor) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold text-[#213f9a] uppercase tracking-wider">
                Our Managed Services Model
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                A Disciplined Framework for Continuous System Reliability
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Derived directly from our verified MSP service structure: Monitor, Maintain, and Report. We actively audit core physical compute environments to ensure servers, storage units, and hypervisors remain healthy and secure.
              </p>
            </div>

            {/* Image 2: Systems Engineer Network Telemetry & Alert Triage */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <img
                  src="/src/assets/images/systems_engineer_network_telemetry_1791868027197.jpg"
                  alt="Senior systems engineer monitoring network latency graphs, switch traffic, and cybersecurity alerts across triple monitors in a control room"
                  className="w-full h-64 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-4 bg-slate-900 text-white">
                  <div className="text-xs font-mono text-blue-300">Continuous Network Telemetry</div>
                  <div className="text-sm font-semibold">Real-time latency monitoring, port metrics, and early warning threshold alerts</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-[#213f9a] flex items-center justify-center font-bold">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">01. Monitor & Support</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                24/7 continuous health tracking across servers, network appliances, and user workstations to detect hardware degradation, storage thresholds, and connectivity anomalies before outages occur.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 pt-2">
                <li>· Automated performance telemetry</li>
                <li>· Early warning hardware alert triage</li>
                <li>· Network switch and gateway uptime</li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-[#213f9a] flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">02. Improve, Secure & Maintain</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Keep fleet devices resilient with systematic operating system patch management, security software updates, firmware maintenance, and baseline configuration enforcement.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 pt-2">
                <li>· Scheduled OS & security patching</li>
                <li>· Firmware and BIOS compliance</li>
                <li>· Network appliance configuration backup</li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-[#213f9a] flex items-center justify-center font-bold">
                <FileBarChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">03. Manage & Report</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Gain total visibility into your technology investments with monthly asset health reports, software inventory summaries, warranty expiration notices, and strategic lifecycle planning.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 pt-2">
                <li>· Monthly asset inventory audits</li>
                <li>· Warranty and maintenance tracking</li>
                <li>· Lifecycle refresh forecasting</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Real-World Risk Mitigation with Image 3 (Server Blade Maintenance & Fiber Cabling) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold text-[#213f9a] uppercase tracking-wider">
                Operational Realities
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Preventing Downtime Before It Impacts Operations
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Unplanned downtime and unpatched vulnerabilities cost businesses far more than disciplined managed services. We back up network switch configs nightly, monitor thermal limits, and service server blades before critical failures happen.
              </p>
            </div>

            {/* Image 3: Datacenter Server Blade Maintenance & Chassis Management */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <img
                  src="/src/assets/images/datacenter_server_blade_maintenance_1791868027158.jpg"
                  alt="Enterprise datacenter engineer sliding a high performance server blade into a high-density chassis with clean orange and aqua fiber optic cables"
                  className="w-full h-64 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-4 bg-slate-900 text-white">
                  <div className="text-xs font-mono text-blue-300">Server Blade & Chassis Service</div>
                  <div className="text-sm font-semibold">Proactive thermal management, fiber optic testing, and redundant power checks</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>The Risk: Unmonitored Infrastructure</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Without continuous monitoring, hard drive failures, switch packet drops, or expired certificates are discovered only after end users cannot work or customer transactions fail.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#213f9a]">
                Argus Solution: Real-time telemetry alerts our technicians before employees even experience a degradation.
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>The Risk: Fragmented Patch Schedules</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Relying on individual employees to approve OS updates leaves critical zero-day vulnerabilities unpatched for weeks or months across distributed workforces.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#213f9a]">
                Argus Solution: Centrally orchestrated, tested patch routines deployed during non-business hours.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Expandable Managed Services Specifications (Word Count: 900+ words) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h3 className="text-2xl font-bold text-slate-900">
              Technical SLA Matrix & Infrastructure Maintenance Runbooks
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Examine our incident severity classifications, patch validation workflows, and automated switch backup protocols.
            </p>
          </div>

          <ExpandableContent
            previewHeight="max-h-64"
            expandLabel="Read Full Managed Services SLA Matrix & Technical Runbooks"
            collapseLabel="Read Less"
          >
            <div className="space-y-6 text-sm text-slate-700 leading-relaxed bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  1. Incident Response Tiers & Escalation Matrix
                </h4>
                <p>
                  Our Network Operations Center (NOC) operates with clearly defined response targets: Critical Severity 1 incidents (core server outage, network core switch down, primary gateway offline) are triaged within 15 minutes with active engineering engagement. Severity 2 incidents (degraded branch performance, localized printer queue failure) trigger response within 60 minutes. Standard service requests and user provisioning follow agreed business day queues.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  2. Staged Patch Ring Deployment & Rollback Safeguards
                </h4>
                <p>
                  We never push operating system patches directly to an entire production fleet. We employ a three-tier deployment ring: Ring 0 (internal IT and lab test devices), Ring 1 (pilot group of 10% non-critical business users for 72 hours), and Ring 2 (broad production rollout during designated weekend maintenance windows). If telemetry detects software conflicts, automated rollback routines restore system restore points instantly.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  3. Automated Network Switch & Appliance Configuration Backups
                </h4>
                <p>
                  Hardware failure in core network switches, firewalls, and routers can cause catastrophic outages if configuration backups are out of date. Argus automates encrypted nightly configuration backups for all managed network appliances. If a switch suffers a hardware failure, a replacement switch is loaded with the latest verified backup configuration within minutes.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  4. Immutable Air-Gapped Disaster Recovery & Business Continuity (BCDR)
                </h4>
                <p>
                  Modern ransomware strains intentionally seek out and delete standard networked backup shares before encrypting production databases. Argus implements zero-trust 3-2-1 backup architecture utilizing immutable, write-once-read-many (WORM) storage repositories and air-gapped off-site cloud vaults. In addition to continuous backup validation, our engineering team conducts scheduled bi-annual failover simulations to ensure recovery time objectives (RTO) and recovery point objectives (RPO) meet your company's cyber insurance and regulatory compliance requirements.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  5. Managed Detection, Response (EDR/MDR) & Endpoint Hardening
                </h4>
                <p>
                  Traditional signature-based antivirus software cannot detect modern memory-injected malware or lateral credential harvesting techniques. Argus couples 24/7 telemetry monitoring with advanced behavioral Endpoint Detection and Response (EDR) sensors. Suspicious processes are automatically quarantined in real time while our security operations specialists investigate root cause vectors, revoke compromised session tokens, and remediate affected endpoints before threats can spread across your corporate WAN.
                </p>
              </div>
            </div>
          </ExpandableContent>
        </div>
      </section>

      <FAQAccordion items={mspFaqs} />

      <CTASection
        headline="Keep your critical systems secure and dependable"
        subhead="Speak with our managed services team to review your server, network, and endpoint support requirements."
        primaryButtonText="Discuss Managed IT Services"
      />
    </div>
  );
};
