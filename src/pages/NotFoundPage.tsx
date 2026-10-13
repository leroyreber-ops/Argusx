import React from 'react';
import { COMPANY, NAVIGATION } from '../data/company';
import { SEOHead } from '../components/SEOHead';
import { Link } from '../context/RouterContext';
import { ArrowLeft, Phone, Search, FileQuestion } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 bg-white min-h-[70vh] flex items-center">
      <SEOHead
        title="Page Not Found (404) — Argus IT Services"
        description="The page you requested could not be found. Explore our IT lifecycle services or return to the Argus IT Services home page."
        canonical="https://www.argusx.com/404"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
          <FileQuestion className="w-8 h-8" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
            HTTP 404 Error
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            We couldn't locate that page.
          </h1>
          <p className="text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
            The page you are looking for may have been restructured as part of our technology lifecycle catalog. Please explore our core service areas below:
          </p>
        </div>

        {/* Helpful links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left max-w-2xl mx-auto pt-4">
          {NAVIGATION.services.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-500 transition-all block group"
            >
              <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600">
                {item.label}
              </div>
              <div className="text-[11px] text-slate-500 line-clamp-1 mt-1">
                {item.description}
              </div>
            </Link>
          ))}
          <Link
            to="/about/"
            className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-500 transition-all block group"
          >
            <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600">
              About Argus
            </div>
            <div className="text-[11px] text-slate-500 line-clamp-1 mt-1">
              Established 1997 in Fort Worth, TX
            </div>
          </Link>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-lg shadow-sm transition-all flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm rounded-lg transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-blue-600" />
            <span>Call Support: {COMPANY.phone}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
