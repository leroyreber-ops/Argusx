import React, { useState, useRef, useEffect } from 'react';
import { COMPANY, NAVIGATION } from '../data/company';
import { Link, useRouter } from '../context/RouterContext';
import { ChevronDown, Menu, X, PhoneCall, MapPin, Search } from 'lucide-react';

export const Header: React.FC = () => {
  const { currentPath } = useRouter();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const servicesTimeout = useRef<number | null>(null);
  const solutionsTimeout = useRef<number | null>(null);
  const aboutTimeout = useRef<number | null>(null);

  // Close menus on route change
  useEffect(() => {
    setServicesOpen(false);
    setSolutionsOpen(false);
    setAboutOpen(false);
    setMobileMenuOpen(false);
  }, [currentPath]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setSolutionsOpen(false);
        setAboutOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 transition-colors shadow-xs">
      
      {/* Top Utility Bar with Verified Details from Template */}
      <div className="bg-[#213f9a] text-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-blue-200 transition-colors font-medium"
            >
              <PhoneCall className="w-3.5 h-3.5 text-blue-300" />
              <span>(469) 471-0035</span>
            </a>

            <a
              href="https://maps.google.com/?q=14951+Kingsport+Rd+Suite+200+Fort+Worth+TX+76155"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 hover:text-blue-200 transition-colors text-slate-200"
            >
              <MapPin className="w-3.5 h-3.5 text-blue-300" />
              <span>14951 Kingsport Rd Suite 200, Fort Worth TX 76155</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-slate-200">
            <span className="hidden sm:inline-block font-mono text-[11px] text-blue-200">
              28 Years of Proven IT Lifecycle Solutions
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/company/argus-it-services/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                title="Argus IT Services LinkedIn"
                aria-label="Argus IT Services LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/ArgusITServices2020"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                title="Argus IT Services Facebook"
                aria-label="Argus IT Services Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 320 512">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Top Navigation Bar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-20">
            
            {/* Zone 1: Brand Wordmark & Official Logo Style */}
            <Link
              to="/"
              className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900 hover:text-[#213f9a] transition-colors whitespace-nowrap shrink-0 group"
            >
              <div className="w-9 h-9 rounded bg-[#213f9a] flex items-center justify-center text-white font-black text-sm tracking-tighter group-hover:bg-blue-700 transition-colors shadow-xs">
                AX
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-tight text-slate-950 text-lg leading-tight">
                  Argus IT Services
                </span>
                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                  Lifecycle Solutions
                </span>
              </div>
            </Link>

            {/* Zone 2: Single-line Text Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700" aria-label="Main Navigation">
              
              <Link
                to="/"
                className={`py-2 hover:text-[#213f9a] transition-colors whitespace-nowrap shrink-0 ${
                  currentPath === '/' ? 'text-[#213f9a] font-bold' : ''
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => {
                  if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
                  setServicesOpen(true);
                }}
                onMouseLeave={() => {
                  servicesTimeout.current = window.setTimeout(() => setServicesOpen(false), 150);
                }}
              >
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`flex items-center gap-1 py-2 hover:text-[#213f9a] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    currentPath.includes('/it-') || currentPath.includes('/managed-') ? 'text-[#213f9a] font-bold' : ''
                  }`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {servicesOpen && (
                  <div className="absolute top-full left-0 w-84 p-2 bg-white rounded-xl shadow-2xl border border-slate-100 py-3 mt-1 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                    <div className="px-3 py-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Core Lifecycle Offerings
                    </div>
                    {NAVIGATION.services.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                        onClick={() => setServicesOpen(false)}
                      >
                        <div className="text-sm font-bold text-slate-800 group-hover:text-[#213f9a]">
                          {item.label}
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 leading-snug line-clamp-1">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => {
                  if (solutionsTimeout.current) clearTimeout(solutionsTimeout.current);
                  setSolutionsOpen(true);
                }}
                onMouseLeave={() => {
                  solutionsTimeout.current = window.setTimeout(() => setSolutionsOpen(false), 150);
                }}
              >
                <button
                  type="button"
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                  className={`flex items-center gap-1 py-2 hover:text-[#213f9a] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    currentPath.includes('-services') && !currentPath.includes('/it-') ? 'text-[#213f9a] font-bold' : ''
                  }`}
                  aria-expanded={solutionsOpen}
                  aria-haspopup="true"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
                </button>

                {solutionsOpen && (
                  <div className="absolute top-full left-0 w-80 p-2 bg-white rounded-xl shadow-2xl border border-slate-100 py-3 mt-1 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                    <div className="px-3 py-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Solutions By Scale
                    </div>
                    {NAVIGATION.solutions.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                        onClick={() => setSolutionsOpen(false)}
                      >
                        <div className="text-sm font-bold text-slate-800 group-hover:text-[#213f9a]">
                          {item.label}
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 leading-snug line-clamp-1">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* About Link */}
              <Link
                to="/about/"
                className={`py-2 hover:text-[#213f9a] transition-colors whitespace-nowrap shrink-0 ${
                  currentPath === '/about/' ? 'text-[#213f9a] font-bold' : ''
                }`}
              >
                About Us
              </Link>

              {/* Careers Link */}
              <Link
                to="/careers/"
                className={`py-2 hover:text-[#213f9a] transition-colors whitespace-nowrap shrink-0 ${
                  currentPath === '/careers/' ? 'text-[#213f9a] font-bold' : ''
                }`}
              >
                Careers
              </Link>

              {/* Contact Link */}
              <Link
                to="/contact/"
                className={`py-2 hover:text-[#213f9a] transition-colors whitespace-nowrap shrink-0 ${
                  currentPath === '/contact/' ? 'text-[#213f9a] font-bold' : ''
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Zone 3: 1 Primary Conversion Action */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <Link
                to="/contact/"
                className="px-5 py-2.5 text-sm font-bold text-white bg-[#213f9a] hover:bg-blue-800 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 hover:shadow"
              >
                Talk to an Expert
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center gap-3">
              <Link
                to="/contact/"
                className="px-3.5 py-2 text-xs font-semibold text-white bg-[#213f9a] rounded-lg sm:hidden whitespace-nowrap"
              >
                Contact
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-6 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">
            Core Services
          </div>
          <div className="space-y-1">
            {NAVIGATION.services.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213f9a]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {s.label}
              </Link>
            ))}
          </div>

          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 pt-2 border-t border-slate-100">
            Solutions
          </div>
          <div className="space-y-1">
            {NAVIGATION.solutions.map((sol) => (
              <Link
                key={sol.href}
                to={sol.href}
                className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213f9a]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {sol.label}
              </Link>
            ))}
          </div>

          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 pt-2 border-t border-slate-100">
            Company
          </div>
          <div className="space-y-1">
            <Link
              to="/about/"
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213f9a]"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/careers/"
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213f9a]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              to="/contact/"
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#213f9a]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <div className="text-xs text-slate-500 mb-2">Direct Phone Support</div>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-center gap-2 text-sm font-bold text-[#213f9a] mb-3"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{COMPANY.phone}</span>
            </a>
            <Link
              to="/contact/"
              className="block w-full py-2.5 text-center text-sm font-semibold text-white bg-[#213f9a] rounded-lg hover:bg-blue-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
