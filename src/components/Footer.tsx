import React, { useState } from 'react';
import { COMPANY, NAVIGATION } from '../data/company';
import { Link } from '../context/RouterContext';
import { MapPin, Phone, Mail, ArrowUpRight, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300 border-t border-slate-800 overflow-hidden">
      
      {/* Visible Background Hero Image for Footer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/src/assets/images/argus_footer_hero_tech_1791870038434.jpg"
          alt="Argus Enterprise Technology Infrastructure & Datacenter Network"
          className="w-full h-full object-cover object-center opacity-85 brightness-100 contrast-105"
          loading="lazy"
        />
        {/* Balanced gradient overlay so glowing servers and circuits shine through while keeping content crisp */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-slate-950/85" />
        <div className="absolute inset-0 bg-[#213f9a]/15 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        {/* Prominent Footer Hero Call-to-Action Banner */}
        <div className="mb-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-950/90 via-slate-900/85 to-[#213f9a]/80 border border-blue-400/30 backdrop-blur-md shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-cyan-300 text-xs font-semibold tracking-wider uppercase border border-cyan-400/30">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Fort Worth Depot & Nationwide Logistics Hub</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Modernize Your IT Asset Lifecycle?
            </h3>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal">
              Speak directly with our Fort Worth engineering team for volume hardware staging, advance exchange depot buffers, on-site field engineering, or certified NIST 800-88 data destruction.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 w-full sm:w-auto">
            <Link
              to="/contact/"
              className="px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl shadow-xl shadow-blue-950/60 hover:shadow-blue-500/40 transition-all text-center flex items-center justify-center gap-2 border border-blue-400/40 cursor-pointer"
            >
              <span>Request Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="px-6 py-4 bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl border border-white/20 backdrop-blur-md transition-all text-center flex items-center justify-center gap-2.5 shadow-md"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>{COMPANY.phone}</span>
            </a>
          </div>
        </div>

        {/* Main Columns Container with Translucent Frosted Glass Card for Perfect Readability */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950/85 sm:bg-slate-950/75 backdrop-blur-md border border-white/10 shadow-2xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
            
            {/* Column 1 & 2: Brand, Address & Verified Contact Info */}
            <div className="lg:col-span-2 space-y-5">
              <Link to="/" className="inline-flex items-center gap-2.5 text-xl font-bold tracking-tight text-white group">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-base shadow-md group-hover:bg-blue-500 transition-colors border border-blue-400/40">
                  AX
                </div>
                <span className="text-2xl font-extrabold tracking-tight">Argus IT Services</span>
              </Link>
              
              <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
                High-value, cost-efficient IT infrastructure solutions for over 28 years. Centrally located in the Dallas/Fort Worth metroplex with nationwide depot and field logistics.
              </p>

              <div className="space-y-3.5 pt-2 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                  <span>
                    {COMPANY.address.street}<br />
                    {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a href={`tel:${COMPANY.phoneRaw}`} className="hover:text-cyan-300 transition-colors font-bold text-white">
                    {COMPANY.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a href={`mailto:${COMPANY.email}`} className="hover:text-cyan-300 transition-colors font-medium">
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              {/* Social Media Links with Verified URLs */}
              <div className="pt-2 flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/argus-it-services/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 text-xs font-semibold text-white hover:text-cyan-300 hover:bg-blue-950/80 hover:border-cyan-400 transition-all shadow-md"
                  title="Follow Argus IT Services on LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current text-cyan-400" viewBox="0 0 448 512">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://www.facebook.com/ArgusITServices2020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 text-xs font-semibold text-white hover:text-cyan-300 hover:bg-blue-950/80 hover:border-cyan-400 transition-all shadow-md"
                  title="Follow Argus IT Services on Facebook"
                >
                  <svg className="w-4 h-4 fill-current text-cyan-400" viewBox="0 0 320 512">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Column 3: Core IT Services */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Our Services
              </h4>
              <ul className="space-y-2.5 text-sm">
                {NAVIGATION.services.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Solutions By Scale */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Company & Solutions
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/enterprise-it-services/" className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all block">
                    Enterprise IT Services
                  </Link>
                </li>
                <li>
                  <Link to="/small-business-it-services/" className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all block">
                    SMB IT Services
                  </Link>
                </li>
                <li>
                  <Link to="/about/" className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all block">
                    About Argus
                  </Link>
                </li>
                <li>
                  <Link to="/careers/" className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all block">
                    Careers in Fort Worth
                  </Link>
                </li>
                <li>
                  <Link to="/contact/" className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all block">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 5: Argus Newsletter */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Stay Ahead in IT
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sign up for the Argus newsletter. Get practical technology insights, hardware lifecycle strategies, and trends delivered to your inbox.
              </p>

              {subscribed ? (
                <div className="p-3.5 rounded-xl bg-blue-900/60 border border-blue-400/40 text-xs text-blue-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Thank you! You're subscribed to Argus IT updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Your Business Email"
                      className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-white/20 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                    />
                    <button
                      type="submit"
                      className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center justify-center"
                      title="Subscribe"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    No spam. Just practical technology insights.
                  </div>
                </form>
              )}

              <div className="pt-2">
                <Link
                  to="/contact/"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors border border-white/20 shadow-sm"
                >
                  <span>Talk to an Expert</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                </Link>
              </div>
            </div>

          </div>

          {/* Bottom Bar with Trademark & Verified Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              Argus Partners LLC, DBA Argus IT Services &trade; {new Date().getFullYear()}
            </div>
            <div className="flex items-center gap-4">
              <span>Operating continuously since {COMPANY.foundedYear}</span>
              <span>·</span>
              <span>Fort Worth, TX Depot Hub</span>
              <span>·</span>
              <Link to="/contact/" className="hover:text-white transition-colors">
                Support Policy
              </Link>
              <span>·</span>
              <Link to="/sitemap/" className="hover:text-cyan-300 transition-colors text-cyan-400 font-semibold">
                HTML Sitemap
              </Link>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};
