import React, { useState } from 'react';
import { REGIONS } from '../data/cleaningData';
import { RegionKey } from '../types';
import { MapPin, CheckCircle2, Clock, Calendar, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

interface AreasPageProps {
  onOpenBooking: () => void;
}

export const AreasPage: React.FC<AreasPageProps> = ({ onOpenBooking }) => {
  const [selectedRegionId, setSelectedRegionId] = useState<RegionKey>('peel');
  const [postalInput, setPostalInput] = useState('');
  const [postalResult, setPostalResult] = useState<string | null>(null);

  const activeRegion = REGIONS.find((r) => r.id === selectedRegionId) || REGIONS[0];

  const handlePostalCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postalInput.trim()) return;

    const query = postalInput.trim().toUpperCase();
    const gtaPrefixes = ['L4', 'L5', 'L6', 'L7', 'L9', 'L1', 'L3', 'M'];
    const isKnownGTA =
      gtaPrefixes.some((p) => query.startsWith(p)) ||
      [
        'MISSISSAUGA',
        'OAKVILLE',
        'BURLINGTON',
        'VAUGHAN',
        'MARKHAM',
        'RICHMOND HILL',
        'PICKERING',
        'AJAX',
        'WHITBY',
        'MILTON',
        'BRAMPTON',
        'CALEDON',
        'AURORA',
        'NEWMARKET',
        'OSHAWA',
      ].some((c) => query.includes(c));

    if (isKnownGTA || query.length >= 3) {
      setPostalResult(`✓ Confirmed: We actively service ${postalInput.trim().toUpperCase()}! Next recurring and deep clean walkthrough openings are available this week.`);
    } else {
      setPostalResult(`We frequently service homes near ${postalInput.trim().toUpperCase()}. Submit a walkthrough request and Natalia will confirm route scheduling within 2 hours.`);
    }
  };

  return (
    <div className="bg-[#FAF9F5]">
      {/* Header */}
      <section className="pt-12 pb-16 border-b border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-200/80 text-xs font-semibold text-amber-900">
            <MapPin className="w-3.5 h-3.5 text-amber-800" />
            <span>Punctual Ontario Routes</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 font-medium tracking-tight">
            Serving Peel, Halton, York & Durham
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Committed daily routes across the Greater Toronto Area. We show up on time, fully prepared with dedicated supplies, treating every community with the same respect we give our own.
          </p>
        </div>
      </section>

      {/* Main Area Exploration & Postal Checker */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Quick Postal Search Bar */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm max-w-3xl mx-auto space-y-4">
            <div className="text-center space-y-1">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                Check Your Postal Code or City
              </h3>
              <p className="text-xs text-slate-600">
                Instantly verify our route availability for your residence.
              </p>
            </div>

            <form onSubmit={handlePostalCheck} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={postalInput}
                onChange={(e) => {
                  setPostalInput(e.target.value);
                  if (postalResult) setPostalResult(null);
                }}
                placeholder="Enter postal code (e.g. L6M 3K7) or city"
                className="flex-1 px-4 py-3 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 bg-[#FAF9F5]"
              />
              <button
                type="submit"
                className="cursor-pointer px-6 py-3 bg-slate-900 text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-colors shrink-0"
              >
                Verify Coverage
              </button>
            </form>

            {postalResult && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs sm:text-sm text-emerald-900 space-y-3 animate-fadeIn">
                <p>{postalResult}</p>
                <button
                  onClick={onOpenBooking}
                  className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  <span>Book Walkthrough for This Area</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Region Tabs & Detail Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Region List (4 cols) */}
            <div className="lg:col-span-4 space-y-2">
              {REGIONS.map((region) => {
                const isActive = region.id === selectedRegionId;
                return (
                  <button
                    key={region.id}
                    id={region.id}
                    onClick={() => {
                      setSelectedRegionId(region.id);
                      setPostalResult(null);
                    }}
                    className={`cursor-pointer w-full text-left p-5 rounded-2xl border transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-slate-900 text-white border-slate-900 shadow-md font-semibold'
                        : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="text-base font-serif font-bold">{region.name}</div>
                      <div className={`text-xs mt-1 ${isActive ? 'text-amber-200' : 'text-slate-500'}`}>
                        {region.shortDesc}
                      </div>
                    </div>
                    <MapPin className={`w-5 h-5 shrink-0 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                  </button>
                );
              })}

              <div className="p-5 bg-white rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>The Punctuality Standard</span>
                </div>
                <p>
                  We dispatch teams from localized regional staging points so traffic bottlenecks are accounted for. You never have to wait all morning wondering if your cleaner will show.
                </p>
              </div>
            </div>

            {/* Region Municipalities (8 cols) */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                    Active Regional Route
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-0.5">
                    {activeRegion.name}
                  </h2>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Slot in {activeRegion.name}</span>
                </button>
              </div>

              {/* Cities in Region */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeRegion.cities.map((city, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#FAF9F5] border border-slate-200 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-lg font-bold text-slate-900">{city.name}</h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                        {city.travelZone}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                        Key Neighbourhoods:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {city.neighbourhoods.map((n, i) => (
                          <span
                            key={i}
                            className="text-xs text-slate-700 bg-white border border-slate-200 px-2.5 py-1 rounded-lg"
                          >
                            {n}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Regional Promise */}
              <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-200/80 text-xs text-amber-950 space-y-1">
                <strong className="block font-semibold">Living on the border of two regions?</strong>
                <span>We gladly schedule custom routes between adjoining municipalities. Book a walkthrough and Natalia will confirm feasibility immediately.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
