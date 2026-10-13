import React from 'react';
import { Link } from '../context/RouterContext';
import { PageHero } from '../components/PageHero';
import { SEOHead } from '../components/SEOHead';
import { 
  Network, 
  Server, 
  Laptop, 
  ShieldCheck, 
  Users, 
  Building2, 
  Briefcase, 
  PhoneCall, 
  FileText, 
  Compass,
  ArrowRight,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

export const SitemapPage: React.FC = () => {
  return (
    <div className="bg-white">
      <SEOHead
        title="HTML Sitemap & Complete Architecture Guide | Argus IT Services"
        description="Comprehensive index and architectural sitemap of all Argus IT Services web pages, hardware lifecycle solutions, service categories, and depot facilities."
        canonical="/sitemap/"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Sitemap', path: '/sitemap/' },
        ]}
      />

      <PageHero
        kicker="Website Architecture & Directory"
        title="Complete Site Directory & Service Architecture"
        subtitle="Explore all 11 core pages, enterprise solutions, technical disciplines, and service pathways across the Argus IT Services digital platform."
        backgroundImage="/assets/images/footer_tech_circuit_bg_1791867621429.jpg"
        imageAlt="Argus IT Services technology architecture and sitemap navigation network"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Sitemap', path: '/sitemap/' },
        ]}
        primaryCtaText="Explore Core Services"
        primaryCtaLink="/enterprise-it-services/"
        secondaryCtaText="Contact Operations"
        secondaryCtaLink="/contact/"
        trustMarkers={[
          { title: '11 Core Pages', subtitle: 'Full Indexation' },
          { title: 'Google SEO Ready', subtitle: 'Structured Architecture' },
          { title: 'XML & HTML', subtitle: 'Dual Sitemap' },
        ]}
      />

      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold text-[#213f9a] uppercase tracking-wider mb-2">
              Structured Index
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Website Structure & Navigation Index
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mt-2">
              Designed for search engine spiders and human visitors alike, this directory outlines our complete hardware lifecycle model from procurement and staging to nationwide maintenance and certified ITAD.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Group 1: Core Company */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-3 text-[#213f9a]">
                <Compass className="w-6 h-6" />
                <h3 className="font-bold text-slate-900 text-lg">Company & Profile</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/" className="font-semibold text-slate-900 hover:text-[#213f9a] flex items-center justify-between">
                    <span>Homepage / Overview</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                  <p className="text-xs text-slate-500 mt-0.5">High-impact B2B hardware lifecycle overview and case studies</p>
                </li>
                <li className="pt-2 border-t border-slate-100">
                  <Link to="/about/" className="font-semibold text-slate-900 hover:text-[#213f9a] flex items-center justify-between">
                    <span>About Argus IT Services</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                  <p className="text-xs text-slate-500 mt-0.5">28+ year history, Fort Worth depot facility, leadership, and culture</p>
                </li>
                <li className="pt-2 border-t border-slate-100">
                  <Link to="/careers/" className="font-semibold text-slate-900 hover:text-[#213f9a] flex items-center justify-between">
                    <span>Careers in Fort Worth</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                  <p className="text-xs text-slate-500 mt-0.5">Hardware technician jobs, engineering positions, and application form</p>
                </li>
                <li className="pt-2 border-t border-slate-100">
                  <Link to="/contact/" className="font-semibold text-slate-900 hover:text-[#213f9a] flex items-center justify-between">
                    <span>Contact Operations Desk</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                  <p className="text-xs text-slate-500 mt-0.5">Facility address, direct phone lines, quote request, and shipping guidelines</p>
                </li>
              </ul>
            </div>

            {/* Group 2: Solutions by Organization Scale */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-3 text-[#213f9a]">
                <Building2 className="w-6 h-6" />
                <h3 className="font-bold text-slate-900 text-lg">Solutions by Scale</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/enterprise-it-services/" className="font-semibold text-slate-900 hover:text-[#213f9a] flex items-center justify-between">
                    <span>Enterprise IT Services</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                  <p className="text-xs text-slate-500 mt-0.5">High-volume corporate rollouts, dedicated buffer warehousing, and SLA support</p>
                </li>
                <li className="pt-2 border-t border-slate-100">
                  <Link to="/small-business-it-services/" className="font-semibold text-slate-900 hover:text-[#213f9a] flex items-center justify-between">
                    <span>Small & Midsize Business IT</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                  <p className="text-xs text-slate-500 mt-0.5">Comprehensive managed IT, cloud backup, cybersecurity, and helpdesk</p>
                </li>
              </ul>
            </div>

            {/* Group 3: Core Lifecycle Capabilities */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-3 text-[#213f9a]">
                <Server className="w-6 h-6" />
                <h3 className="font-bold text-slate-900 text-lg">Hardware Lifecycle</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/it-procurement-deployment/" className="font-semibold text-slate-900 hover:text-[#213f9a] flex items-center justify-between">
                    <span>Procurement & Deployment</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                  <p className="text-xs text-slate-500 mt-0.5">OEM hardware sourcing, gold master staging, zero-touch remote kitting</p>
                </li>
                <li className="pt-2 border-t border-slate-100">
                  <Link to="/managed-it-services/" className="font-semibold text-slate-900 hover:text-[#213f9a] flex items-center justify-between">
                    <span>Managed IT Services</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                  <p className="text-xs text-slate-500 mt-0.5">24/7 network monitoring, server administration, security patching</p>
                </li>
                <li className="pt-2 border-t border-slate-100">
                  <Link to="/it-support-services/" className="font-semibold text-slate-900 hover:text-[#213f9a] flex items-center justify-between">
                    <span>Depot Repair & Maintenance</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                  <p className="text-xs text-slate-500 mt-0.5">Advance exchange buffers, motherboard microsoldering, nationwide field dispatch</p>
                </li>
                <li className="pt-2 border-t border-slate-100">
                  <Link to="/it-asset-disposition/" className="font-semibold text-slate-900 hover:text-[#213f9a] flex items-center justify-between">
                    <span>Asset Disposition (ITAD)</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                  <p className="text-xs text-slate-500 mt-0.5">NIST 800-88 sanitization, hard drive shredding, EPA zero-landfill e-waste</p>
                </li>
                <li className="pt-2 border-t border-slate-100">
                  <Link to="/it-staffing-project-services/" className="font-semibold text-slate-900 hover:text-[#213f9a] flex items-center justify-between">
                    <span>Staffing & Project Moves</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                  <p className="text-xs text-slate-500 mt-0.5">Bank branch acquisitions, data center relocations, and engineer augmentation</p>
                </li>
              </ul>
            </div>

          </div>

          {/* Machine-Readable XML Link Card */}
          <div className="mt-12 bg-white p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Machine-Readable Index
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Google XML Search Console Sitemap
              </h3>
              <p className="text-sm text-slate-600 max-w-2xl">
                Argus IT Services provides an automated XML document formatted to sitemaps.org standards for Google Search Console, Bing Webmaster Tools, and search crawlers.
              </p>
            </div>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#213f9a] hover:bg-blue-800 text-white font-bold text-sm shadow-xs transition-colors shrink-0"
            >
              <span>View sitemap.xml</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};
