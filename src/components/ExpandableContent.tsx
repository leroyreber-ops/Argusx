import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableContentProps {
  children: React.ReactNode;
  previewHeight?: string; // e.g. "max-h-72"
  expandLabel?: string;
  collapseLabel?: string;
  className?: string;
}

export const ExpandableContent: React.FC<ExpandableContentProps> = ({
  children,
  previewHeight = 'max-h-72',
  expandLabel = 'Read More Technical Details & Case Specs',
  collapseLabel = 'Read Less',
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {/* Content wrapper */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          isExpanded ? 'max-h-[5000px]' : previewHeight
        }`}
      >
        {children}
      </div>

      {/* Fade overlay when collapsed */}
      {!isExpanded && (
        <div className="absolute bottom-12 left-0 right-0 h-28 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent pointer-events-none" />
      )}

      {/* Toggle button */}
      <div className="pt-4 flex justify-center relative z-10">
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-blue-900 bg-blue-50/90 hover:bg-blue-100 border border-blue-200 shadow-xs hover:shadow transition-all cursor-pointer"
          aria-expanded={isExpanded}
        >
          <span>{isExpanded ? collapseLabel : expandLabel}</span>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 text-blue-700" />
          ) : (
            <ChevronDown className="w-4 h-4 text-blue-700" />
          )}
        </button>
      </div>
    </div>
  );
};
