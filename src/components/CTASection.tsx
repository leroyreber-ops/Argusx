import React from 'react';
import { COMPANY } from '../data/company';
import { Link } from '../context/RouterContext';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';

interface CTASectionProps {
  headline?: string;
  subhead?: string;
  primaryButtonText?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  headline = 'Ready to streamline your hardware lifecycle?',
  subhead = 'Connect directly with our Fort Worth engineering team for equipment sourcing, depot repair SLAs, or secure asset disposition quotes.',
  primaryButtonText = 'Discuss Your IT Needs',
}) => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 mb-4 tracking-wider uppercase">
          <ShieldCheck className="w-4 h-4 text-blue-400" />
          <span>Fort Worth, TX Depot & Field Operations</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto text-balance">
          {headline}
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subhead}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact/"
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
          >
            <span>{primaryButtonText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-lg border border-slate-700 transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-blue-400" />
            <span>Call {COMPANY.phone}</span>
          </a>
        </div>

        <div className="mt-8 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span>Enterprise & Commercial Hardware</span>
          <span>·</span>
          <span>Complete Depot Warranty Management</span>
          <span>·</span>
          <span>NIST 800-88 Data Eradication</span>
        </div>
      </div>
    </section>
  );
};
