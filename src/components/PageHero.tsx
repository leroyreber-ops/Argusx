import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { Link } from '../context/RouterContext';
import { COMPANY } from '../data/company';
import { ShieldCheck, PhoneCall, ArrowRight, Award, CheckCircle2 } from 'lucide-react';

interface PageHeroProps {
  kicker?: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
  imageAlt: string;
  breadcrumbs?: { name: string; path: string }[];
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  trustMarkers?: { title: string; subtitle: string }[];
}

export const PageHero: React.FC<PageHeroProps> = ({
  kicker = '28 Years of Fast, Flexible, and Focused IT Infrastructure Solutions',
  title,
  subtitle,
  backgroundImage,
  imageAlt,
  breadcrumbs,
  primaryCtaText = 'Talk to an Expert',
  primaryCtaLink = '/contact/',
  secondaryCtaText = 'Explore Capabilities',
  secondaryCtaLink = '/it-procurement-deployment/',
  trustMarkers = [
    { title: '28+ Years', subtitle: 'Founded 1997 in DFW' },
    { title: 'Fort Worth Depot', subtitle: '14951 Kingsport Rd' },
    { title: 'NIST 800-88', subtitle: 'Certified Eradication' },
  ],
}) => {
  return (
    <section className="relative min-h-[520px] lg:min-h-[580px] flex items-center bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      
      {/* Background Hero Image - High Clarity & Visibility */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={imageAlt}
          className="w-full h-full object-cover object-center brightness-105 contrast-105 transform scale-100 transition-transform duration-700"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Directional gradient: darker on left to protect text, clear and vivid on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 to-slate-950/20 sm:to-transparent" />
        {/* Subtle top & bottom edge blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/70 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20 w-full">
        {breadcrumbs && (
          <div className="mb-4">
            <nav aria-label="Breadcrumb" className="inline-flex items-center py-1.5 px-3.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/15 text-xs text-blue-200 shadow-md">
              <ol className="flex items-center flex-wrap gap-2">
                {breadcrumbs.map((item, idx) => {
                  const isLast = idx === breadcrumbs.length - 1;
                  return (
                    <li key={item.path} className="flex items-center gap-2">
                      {idx > 0 && <span aria-hidden="true" className="text-blue-300/40">/</span>}
                      {isLast ? (
                        <span className="text-white font-medium" aria-current="page">
                          {item.name}
                        </span>
                      ) : (
                        <Link to={item.path} className="hover:text-white transition-colors text-blue-200">
                          {item.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          </div>
        )}

        <div className="max-w-3xl space-y-6 bg-slate-950/70 sm:bg-slate-950/55 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/20 shadow-2xl">
          {/* Subtle brand kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/30 border border-blue-400/40 text-blue-200 text-xs font-semibold backdrop-blur-md shadow-xs">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="tracking-wide">{kicker}</span>
          </div>

          {/* Primary H1 */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            {title}
          </h1>

          {/* Supporting Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-100 leading-relaxed font-normal max-w-2xl text-pretty drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {subtitle}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {primaryCtaLink.startsWith('tel:') || primaryCtaLink.startsWith('mailto:') ? (
              <a
                href={primaryCtaLink}
                className="px-7 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-xl hover:shadow-blue-500/40 transition-all text-center flex items-center justify-center gap-2 group cursor-pointer border border-blue-400/40"
              >
                <span>{primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            ) : primaryCtaLink.startsWith('#') ? (
              <button
                type="button"
                onClick={() => {
                  const targetId = primaryCtaLink.replace('#', '');
                  const el = document.getElementById(targetId);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                    if (typeof window !== 'undefined') {
                      window.history.pushState(null, '', primaryCtaLink);
                    }
                  }
                }}
                className="px-7 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-xl hover:shadow-blue-500/40 transition-all text-center flex items-center justify-center gap-2 group cursor-pointer border border-blue-400/40"
              >
                <span>{primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <Link
                to={primaryCtaLink}
                className="px-7 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-xl hover:shadow-blue-500/40 transition-all text-center flex items-center justify-center gap-2 group cursor-pointer border border-blue-400/40"
              >
                <span>{primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}

            {secondaryCtaLink.startsWith('tel:') || secondaryCtaLink.startsWith('mailto:') || secondaryCtaLink.startsWith('http') ? (
              <a
                href={secondaryCtaLink}
                className="px-6 py-3.5 text-sm font-semibold text-white hover:text-white bg-slate-900/80 hover:bg-slate-800 rounded-xl border border-white/20 backdrop-blur-md transition-all text-center shadow-md flex items-center justify-center"
              >
                {secondaryCtaText}
              </a>
            ) : secondaryCtaLink.startsWith('#') ? (
              <button
                type="button"
                onClick={() => {
                  const targetId = secondaryCtaLink.replace('#', '');
                  const el = document.getElementById(targetId);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                    if (typeof window !== 'undefined') {
                      window.history.pushState(null, '', secondaryCtaLink);
                    }
                  }
                }}
                className="px-6 py-3.5 text-sm font-semibold text-white hover:text-white bg-slate-900/80 hover:bg-slate-800 rounded-xl border border-white/20 backdrop-blur-md transition-all text-center shadow-md flex items-center justify-center cursor-pointer"
              >
                {secondaryCtaText}
              </button>
            ) : (
              <Link
                to={secondaryCtaLink}
                className="px-6 py-3.5 text-sm font-semibold text-white hover:text-white bg-slate-900/80 hover:bg-slate-800 rounded-xl border border-white/20 backdrop-blur-md transition-all text-center shadow-md flex items-center justify-center"
              >
                {secondaryCtaText}
              </Link>
            )}

            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="hidden xl:inline-flex items-center gap-2 px-4 py-3.5 text-xs font-bold text-cyan-300 hover:text-white transition-colors bg-slate-900/60 rounded-xl border border-white/10 backdrop-blur-sm"
            >
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              <span>{COMPANY.phone}</span>
            </a>
          </div>

          {/* Trust markers */}
          {trustMarkers && trustMarkers.length > 0 && (
            <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-4 text-xs text-slate-200">
              {trustMarkers.map((marker, i) => (
                <div key={i} className="space-y-0.5">
                  <div className="font-bold text-white text-sm sm:text-base font-mono drop-shadow-sm">
                    {marker.title}
                  </div>
                  <div className="text-slate-300 text-[11px] sm:text-xs">
                    {marker.subtitle}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
