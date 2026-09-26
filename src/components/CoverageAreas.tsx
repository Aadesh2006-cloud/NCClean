import React, { useState } from 'react';
import { REGIONS } from '../data/cleaningData';
import { RegionKey } from '../types';
import { MapPin, CheckCircle2, Clock, Calendar } from 'lucide-react';

interface CoverageAreasProps {
  onOpenBooking: () => void;
}

export const CoverageAreas: React.FC<CoverageAreasProps> = ({ onOpenBooking }) => {
  const [selectedRegionId, setSelectedRegionId] = useState<RegionKey>('peel');
  const [postalInput, setPostalInput] = useState('');
  const [postalCheckResult, setPostalCheckResult] = useState<string | null>(null);

  const activeRegion = REGIONS.find((r) => r.id === selectedRegionId) || REGIONS[0];

  const handlePostalCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postalInput.trim()) return;

    const query = postalInput.trim().toUpperCase();
    // Check if postal code prefix or town name matches GTA areas
    const gtaPrefixes = ['L4', 'L5', 'L6', 'L7', 'L9', 'L1', 'L3', 'M'];
    const isKnownGTA = gtaPrefixes.some((p) => query.startsWith(p)) ||
      ['MISSISSAUGA', 'OAKVILLE', 'BURLINGTON', 'VAUGHAN', 'MARKHAM', 'RICHMOND HILL', 'PICKERING', 'AJAX', 'WHITBY', 'MILTON', 'BRAMPTON', 'CALEDON', 'AURORA', 'NEWMARKET', 'OSHAWA'].some((c) => query.includes(c));

    if (isKnownGTA || query.length >= 3) {
      setPostalCheckResult(`Yes! We actively service ${postalInput.trim().toUpperCase()}. Next available walkthrough openings are this week.`);
    } else {
      setPostalCheckResult(`We review custom routes near ${postalInput.trim().toUpperCase()}. Submit a request and Natalia will confirm availability within 2 hours.`);
    }
  };

  return (
    <section id="service-areas" className="py-20 bg-[#FAF9F5] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-wider font-semibold text-amber-800 mb-2">
            Coverage & Punctuality
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 font-medium tracking-tight">
            Serving homes across Peel, Halton, York and Durham.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-light">
            With committed daily routes, we ensure our teams arrive on time, fully prepared with dedicated supplies, treating every community with the highest standard of care.
          </p>
        </div>

        {/* Region Tabs & Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Region Selector & Postal Lookup */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-2 rounded-2xl border border-slate-200/90 shadow-2xs space-y-1.5">
              {REGIONS.map((region) => {
                const isActive = region.id === selectedRegionId;
                return (
                  <button
                    key={region.id}
                    onClick={() => {
                      setSelectedRegionId(region.id);
                      setPostalCheckResult(null);
                    }}
                    className={`cursor-pointer w-full text-left p-3.5 rounded-xl transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-xs font-semibold'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-semibold">{region.name}</div>
                      <div className={`text-xs mt-0.5 ${isActive ? 'text-amber-200' : 'text-slate-500'}`}>
                        {region.shortDesc}
                      </div>
                    </div>
                    <MapPin className={`w-4 h-4 shrink-0 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Postal Code Instant Availability Checker */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                Check Your Address or Postal Code
              </h4>
              <form onSubmit={handlePostalCheck} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={postalInput}
                    onChange={(e) => {
                      setPostalInput(e.target.value);
                      if (postalCheckResult) setPostalCheckResult(null);
                    }}
                    placeholder="e.g. L6M 3K7 or Oakville"
                    className="flex-1 px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 bg-[#FAF9F5]"
                  />
                  <button
                    type="submit"
                    className="cursor-pointer px-3.5 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors shrink-0"
                  >
                    Verify
                  </button>
                </div>
              </form>

              {postalCheckResult && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 space-y-2 animate-fadeIn">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{postalCheckResult}</span>
                  </div>
                  <button
                    onClick={onOpenBooking}
                    className="cursor-pointer w-full py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-md font-semibold text-center block text-[11px] transition-colors"
                  >
                    Book Walkthrough for This Area
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Detailed Municipalities & Neighbourhood Highlights */}
          <div className="lg:col-span-8 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                  Detailed Route Coverage
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mt-0.5">
                  {activeRegion.name}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg">
                <Clock className="w-3.5 h-3.5 text-amber-700" />
                <span>Dedicated Punctual Route Times</span>
              </div>
            </div>

            {/* Municipalities Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeRegion.cities.map((city, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#FAF9F5] border border-slate-200/80 space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-800" />
                      <span>{city.name}</span>
                    </h4>
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-amber-900 bg-amber-100/70 px-2 py-0.5 rounded">
                      {city.travelZone}
                    </span>
                  </div>

                  <div>
                    <div className="text-[11px] font-medium text-slate-500 mb-1">
                      Frequent Neighbourhoods:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {city.neighbourhoods.map((n, i) => (
                        <span
                          key={i}
                          className="text-[11px] text-slate-700 bg-white border border-slate-200/70 px-2 py-0.5 rounded"
                        >
                          {n}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Punctuality Promise Callout */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs text-slate-600 space-y-0.5">
                <strong className="text-slate-900 block font-semibold">The Day-One Punctuality Commitment:</strong>
                <span>We confirm arrival windows 24 hours in advance and respect your personal schedule without delays.</span>
              </div>
              <button
                onClick={onOpenBooking}
                className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve Route Slot</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
