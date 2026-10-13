import React, { useState } from 'react';
import { LIFECYCLE_STAGES } from '../data/company';
import { Link } from '../context/RouterContext';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const LifecycleExplorer: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const current = LIFECYCLE_STAGES[activeStageIndex];

  return (
    <section className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
            The Complete Technology Lifecycle
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Source → Deploy → Manage → Support → Retire
          </h2>
          <p className="mt-3 text-lg text-slate-600 leading-relaxed">
            Hardware lifecycle management is not a disconnected set of vendor tasks. Argus connects procurement, custom depot staging, proactive maintenance, break-fix repair, and certified disposition into a single, cohesive operational pipeline.
          </p>
        </div>

        {/* Step Selector Tabs - Functional segmented buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 p-1.5 bg-slate-100 rounded-xl mb-8">
          {LIFECYCLE_STAGES.map((stage, idx) => {
            const isActive = idx === activeStageIndex;
            return (
              <button
                key={stage.name}
                type="button"
                onClick={() => setActiveStageIndex(idx)}
                className={`flex flex-col text-left px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60 ring-1 ring-slate-900/5'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
                aria-pressed={isActive}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                    {stage.step}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                </div>
                <div className="text-sm font-bold tracking-tight">
                  {stage.name}
                </div>
                <div className="text-xs text-slate-500 truncate hidden sm:block mt-0.5">
                  {stage.tag}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail Showcase */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-10 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Stage Explanation & Capabilities */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-blue-100 text-blue-800">
                  Phase {current.step}
                </span>
                <span className="text-sm font-semibold text-slate-500">
                  {current.tag}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {current.headline}
              </h3>

              <p className="text-base text-slate-600 leading-relaxed">
                {current.description}
              </p>

              {/* Verified Capabilities Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {current.details.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Link to the specific service page */}
              <div className="pt-4">
                <Link
                  to={current.link}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
                >
                  <span>Explore {current.name} Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Architectural Lifecycle Map & Context */}
            <div className="lg:col-span-5 bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Argus Lifecycle Integration
              </h4>

              <div className="space-y-3">
                {LIFECYCLE_STAGES.map((s, idx) => {
                  const isCurrent = idx === activeStageIndex;
                  return (
                    <div
                      key={s.name}
                      onClick={() => setActiveStageIndex(idx)}
                      className={`cursor-pointer p-3 rounded-lg border transition-all flex items-center justify-between ${
                        isCurrent
                          ? 'border-blue-500 bg-blue-50/50 font-medium'
                          : 'border-slate-100 hover:border-slate-200 text-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-mono ${isCurrent ? 'text-blue-600 font-bold' : 'text-slate-400'}`}>
                          {s.step}
                        </span>
                        <span className="text-sm font-semibold text-slate-800">
                          {s.name}
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 truncate max-w-[150px]">
                        {s.tag}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 text-xs text-slate-500 leading-relaxed border-t border-slate-100">
                Operating out of Fort Worth, TX with complete nationwide deployment, warranty management, and audit-certified e-waste recycling.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
