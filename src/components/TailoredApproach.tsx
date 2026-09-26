import React, { useState } from 'react';
import { Check, ShieldCheck, Sparkles, Home, Layers, ArrowRight } from 'lucide-react';

interface TailoredApproachProps {
  onNavigateToEstimate: () => void;
}

export const TailoredApproach: React.FC<TailoredApproachProps> = ({ onNavigateToEstimate }) => {
  const [activeTab, setActiveTab] = useState<'routine' | 'deep' | 'move' | 'materials'>('routine');

  const tabs = [
    { id: 'routine' as const, label: '01. Routine Living Care', title: 'Routine Living Care (Weekly / Bi-Weekly)' },
    { id: 'deep' as const, label: '02. Architectural Deep Clean', title: 'Architectural Deep Clean' },
    { id: 'move' as const, label: '03. Move-In & Transitions', title: 'Move-In & Move-Out Perfection' },
    { id: 'materials' as const, label: '04. Material-Specific Protocols', title: 'Specialty Surfaces & Material Science' },
  ];

  return (
    <section id="the-standard" className="py-20 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-wider font-semibold text-amber-800 mb-2">
            The Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 font-medium tracking-tight">
            Why we do not offer one-size-fits-all packages.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-light">
            Cookie-cutter cleaning checklists ignore how your family actually lives. Some homes have heavy-traffic kitchens and active pets; others have delicate limestone and quiet guest suites. We listen, adapt, and build the scope around you.
          </p>
        </div>

        {/* Interactive Scope Navigator */}
        <div className="bg-white border border-slate-200/90 rounded-2xl shadow-sm overflow-hidden">
          {/* Segmented Control Header */}
          <div className="border-b border-slate-200 bg-slate-50/80 p-2 sm:p-3 overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-1 sm:gap-2 min-w-max">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`cursor-pointer px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-white text-slate-900 shadow-xs border border-slate-200/80'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/40'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Body */}
          <div className="p-6 sm:p-10">
            {activeTab === 'routine' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Consistent Weekly & Bi-Weekly Harmony</span>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-slate-900">
                    Effortless maintenance that resets your home every single visit.
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Rather than a cursory sweep, our ongoing visits are timed so that your main living areas, chef&apos;s kitchen, and personal suites stay continuously immaculate. We rotate secondary deep tasks (like interior microwave, stove vents, and entryway baseboards) so nothing ever piles up.
                  </p>

                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Complete kitchen degrease & streak-free island polish',
                      'Sanitized bath porcelain, faucets & frameless glass',
                      'Edge-to-edge vacuuming with 4-stage HEPA capture',
                      'Linen freshening & bed making with hotel crispness',
                      'High-touch door handles, switches & remotes sanitized',
                      'Furniture perimeter vacuuming without scuffing baseboards',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#FAF9F5] p-6 rounded-xl border border-slate-200 space-y-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Why Packages Fail Here
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Standard packages charge you for vacuuming 4 guest bedrooms every single week even when they are unoccupied, while ignoring your muddy mudroom or high-use kitchen prep counters.
                  </p>
                  <div className="p-3 bg-white rounded-lg border border-slate-200/80 text-xs text-slate-800 space-y-1">
                    <strong className="block text-slate-900 font-semibold">The Natalia Cassimiro Touch:</strong>
                    <span>We allocate time where your family actually gathers and lives, shifting focus seamlessly as your routines change.</span>
                  </div>
                  <button
                    onClick={onNavigateToEstimate}
                    className="cursor-pointer w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
                  >
                    <span>Estimate Routine Schedule</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'deep' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 uppercase tracking-wider">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Intensive Architectural Detail</span>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-slate-900">
                    The total reset: every edge, corner, and neglected trim restored.
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Recommended seasonally or before hosting. We scrub inside kitchen appliances, hand-wash baseboards and crown molding, de-scale primary bathroom tiles, and extract dust trapped deep behind heavy upholstery and heating return vents.
                  </p>

                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Inside oven baked-on carbon & racks degreased',
                      'Refrigerator shelves, bins & door gaskets washed',
                      'Window tracks vacuumed and interior glass shined',
                      'Every baseboard, door casing & trim wiped by hand',
                      'Bathroom grout lines treated with pH-safe oxygen agents',
                      'Light fixtures, pendants & ceiling fan blades dusted',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#FAF9F5] p-6 rounded-xl border border-slate-200 space-y-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Deep Clean Inspection
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A deep clean isn&apos;t just doing a routine clean faster—it requires specialized time, hands-and-knees labor, and dedicated equipment to remove months of accumulated micro-dust.
                  </p>
                  <div className="p-3 bg-white rounded-lg border border-slate-200/80 text-xs text-slate-800 space-y-1">
                    <strong className="block text-slate-900 font-semibold">Visible from the Front Door:</strong>
                    <span>You notice the absence of lingering odors, crisp baseboards, and radiant light reflections off every polished surface.</span>
                  </div>
                  <button
                    onClick={onNavigateToEstimate}
                    className="cursor-pointer w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
                  >
                    <span>Calculate Deep Clean Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'move' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 uppercase tracking-wider">
                    <Home className="w-3.5 h-3.5" />
                    <span>Real Estate & Possession Standards</span>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-slate-900">
                    A pristine blank canvas for your family&apos;s new chapter.
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Moving is stressful enough without discovering sticky kitchen drawers or hair in closet corners from previous owners. We deep-clean every square inch of the vacant residence before your furniture arrives.
                  </p>

                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'All kitchen cabinets & pantry drawers sanitized inside/out',
                      'Closet shelves, rods & organizers wiped and vacuumed',
                      'Bath vanities, medicine cabinets & exhaust fans cleaned',
                      'Washer/dryer exterior and lint traps detailed',
                      'Switch plates, doorknobs & baseboards scuff-treated',
                      'Ready for barefoot move-in the moment you take the keys',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#FAF9F5] p-6 rounded-xl border border-slate-200 space-y-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Trusted by GTA Homeowners & Realtors
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Whether you are handing keys over to a new buyer in Oakville or moving into your dream home in Vaughan, we ensure handover compliance that protects your security deposit and reputation.
                  </p>
                  <div className="p-3 bg-white rounded-lg border border-slate-200/80 text-xs text-slate-800 space-y-1">
                    <strong className="block text-slate-900 font-semibold">Guaranteed Move-In Ready:</strong>
                    <span>100% inspection guarantee with immediate same-day touch-up if any detail does not meet our standard.</span>
                  </div>
                  <button
                    onClick={onNavigateToEstimate}
                    className="cursor-pointer w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
                  >
                    <span>Check Move-In Availability</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'materials' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Material Science & Surface Preservation</span>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-slate-900">
                    Discerning homes require chemistry-aware care.
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Acidic store cleaners etch Italian marble, harsh degreasers strip wire-brushed hardwood finishes, and ammonia degrades matte black plumbing fixtures. We audit your home&apos;s materials during our walkthrough to formulate safe, effective protocols.
                  </p>

                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'pH-neutral stone cleaners for Carrara, Calacatta & Limestone',
                      'Microfiber mop systems with zero pooling moisture on wood',
                      'Non-abrasive microfiber techniques for matte black hardware',
                      'Hypoallergenic and 100% fragrance-free options upon request',
                      'Steam disinfection for chemical-free high-temperature care',
                      'Non-scratch ceramic stovetop polishes that leave zero swirls',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#FAF9F5] p-6 rounded-xl border border-slate-200 space-y-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Insured Protection
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    NC Cleanup is fully insured and bonded specifically for high-end residential interiors across Ontario. You never have to worry about improper chemical application or careless handling.
                  </p>
                  <div className="p-3 bg-white rounded-lg border border-slate-200/80 text-xs text-slate-800 space-y-1">
                    <strong className="block text-slate-900 font-semibold">Zero-Damage Commitment:</strong>
                    <span>We test every product on unobtrusive sample areas before full application whenever novel materials are encountered.</span>
                  </div>
                  <button
                    onClick={onNavigateToEstimate}
                    className="cursor-pointer w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
                  >
                    <span>Discuss Your Specialty Materials</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
