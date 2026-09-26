import React from 'react';
import { BOOKING_SERVICES, BookingServiceItem } from '../data/cleaningData';
import { Eye, RefreshCw, Sparkles, Box, Hammer, Target, CheckCircle2, ChevronRight, Info } from 'lucide-react';

interface ServiceBarProps {
  selectedServiceId: string;
  onSelectService: (service: BookingServiceItem) => void;
  showDetails?: boolean;
}

export const ServiceBar: React.FC<ServiceBarProps> = ({
  selectedServiceId,
  onSelectService,
  showDetails = true,
}) => {
  const activeService = BOOKING_SERVICES.find((s) => s.id === selectedServiceId) || BOOKING_SERVICES[0];

  const renderServiceIcon = (icon: BookingServiceItem['icon'], className = 'w-4 h-4') => {
    switch (icon) {
      case 'walkthrough':
        return <Eye className={className} />;
      case 'routine':
        return <RefreshCw className={className} />;
      case 'deep':
        return <Sparkles className={className} />;
      case 'movein':
        return <Box className={className} />;
      case 'reno':
        return <Hammer className={className} />;
      case 'focus':
        return <Target className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <div className="space-y-3">
      {/* Service Selection Bar */}
      <div className="bg-[#FAF9F5] p-2.5 rounded-2xl border border-slate-200/90 shadow-inner">
        <div className="flex items-center justify-between px-1 pb-2">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-800">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>Service Bar &mdash; Choose Service</span>
          </div>
          <span className="text-[11px] font-semibold text-slate-500">
            Select service &bull; choose duration separately below
          </span>
        </div>

        {/* Responsive Bar Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {BOOKING_SERVICES.map((srv) => {
            const isSelected = selectedServiceId === srv.id;
            return (
              <button
                key={srv.id}
                type="button"
                onClick={() => onSelectService(srv)}
                className={`cursor-pointer p-3 rounded-xl text-left transition-all relative flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-md ring-2 ring-slate-900 -translate-y-0.5'
                    : 'bg-white text-slate-700 hover:bg-amber-50/60 border border-slate-200/80 hover:border-amber-300'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span
                    className={`p-1.5 rounded-lg transition-colors ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950 font-bold'
                        : 'bg-amber-100/70 text-amber-900 group-hover:bg-amber-200/80'
                    }`}
                  >
                    {renderServiceIcon(srv.icon, 'w-3.5 h-3.5')}
                  </span>
                  <span
                    className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ${
                      isSelected
                        ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                        : srv.id === 'walkthrough'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {srv.tag}
                  </span>
                </div>

                <div>
                  <div
                    className={`font-serif text-xs font-bold leading-tight ${
                      isSelected ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {srv.shortName}
                  </div>
                  {srv.badge && (
                    <div
                      className={`text-[10px] mt-0.5 font-medium truncate ${
                        isSelected ? 'text-amber-300/90' : 'text-slate-500'
                      }`}
                    >
                      {srv.badge}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Service Detailed Drawer */}
      {showDetails && activeService && (
        <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-amber-50/80 via-white to-amber-50/50 border border-amber-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-serif text-sm font-bold text-slate-900">
                {activeService.name}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-200 text-amber-950">
                {activeService.tag}
              </span>
              {activeService.id === 'walkthrough' && (
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  100% Free Consultation
                </span>
              )}
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
              {activeService.description}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-xs font-medium text-amber-900 bg-amber-100/70 border border-amber-200/80 px-3 py-1.5 rounded-lg self-stretch sm:self-auto justify-center">
            <Info className="w-3.5 h-3.5 text-amber-800 shrink-0" />
            <span>Select session duration separately below</span>
          </div>
        </div>
      )}
    </div>
  );
};
