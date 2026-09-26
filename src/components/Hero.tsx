import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Shield, Clock, HeartHandshake } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onNavigateToEstimate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onNavigateToEstimate }) => {
  const [activeSpot, setActiveSpot] = useState<number>(0);

  const inspectionSpots = [
    {
      id: 0,
      title: "Gourmet Kitchens & Surfaces",
      short: "Countertops & Range",
      desc: "Delicate marble, quartz, and stainless steel handled with pH-neutral agents. Zero abrasive scratch risk, pristine streak-free clarity.",
      icon: Sparkles,
      tag: "Deep Sanitized",
      x: "32%",
      y: "48%",
    },
    {
      id: 1,
      title: "Frameless Glass & Bath Tile",
      short: "Glass & Grout",
      desc: "Dissolving hard Ontario water scale and soap film without toxic fumes. Optical-grade clarity that lasts weeks.",
      icon: CheckCircle2,
      tag: "Hard-Water Scale Treated",
      x: "72%",
      y: "35%",
    },
    {
      id: 2,
      title: "Hand-Wiped Baseboards & Millwork",
      short: "Trim & Perimeter",
      desc: "Hands-and-knees perimeter care. We wash baseboards, trim, and doorframes rather than skimming with a feather duster.",
      icon: Clock,
      tag: "Detail Protocol",
      x: "24%",
      y: "78%",
    },
    {
      id: 3,
      title: "Whole-Home HEPA Airflow",
      short: "Dander & Dust Sealed",
      desc: "Four-stage sealed HEPA filtration capturing 99.97% of pet dander, pollen, and allergens instead of exhausting them back into your home.",
      icon: Shield,
      tag: "Allergen Capture",
      x: "80%",
      y: "74%",
    },
  ];

  return (
    <section className="relative pt-6 pb-20 md:pt-12 md:pb-28 overflow-hidden">
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Editorial Top Kicker & Clean Unboxed Metadata */}
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm font-medium text-amber-900/80 mb-6">
          <span className="font-semibold tracking-wide uppercase text-amber-800">NC Cleanup</span>
          <span aria-hidden="true" className="text-amber-800/40">·</span>
          <span>Founded by Natalia Cassimiro</span>
          <span aria-hidden="true" className="text-amber-800/40">·</span>
          <span>Peel · Halton · York · Durham</span>
          <span aria-hidden="true" className="text-amber-800/40">·</span>
          <span className="text-slate-700">Fully Insured & Bonded</span>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-slate-900 tracking-tight leading-[1.12] text-balance">
              The goal was never just to clean.
              <span className="block italic text-amber-800 font-normal mt-1.5">
                It was to create a space you feel truly good coming back to.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl font-light">
              Every client is different. Every home is different. That is why NC Cleanup rejects rigid one-size-fits-all packages. We listen, adapt, and deliver immaculate standards you can feel the moment you walk through the door.
            </p>

            {/* Core Values Strip - Unboxed & Clean */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-200">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                  <Clock className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Showing Up on Time</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Reliable arrival windows and committed schedules you can organize your life around.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                  <HeartHandshake className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>The Work Done Right</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Treating every room with the exact care and respect we would give our own home.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                  <Shield className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Fully Insured Protection</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Complete commercial liability and bonded coverage for total peace of mind every visit.
                </p>
              </div>
            </div>

            {/* Primary Action Zone */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <button
                onClick={onNavigateToEstimate}
                className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 active:scale-98 transition-all shadow-md group whitespace-nowrap"
              >
                <span>Build Your Custom Estimate</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenBooking}
                className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 active:scale-98 transition-all shadow-xs whitespace-nowrap"
              >
                <span>Book 15-Min Walkthrough</span>
              </button>
            </div>

            {/* Quiet reassurance label */}
            <div className="text-xs text-slate-600 flex items-center gap-2 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
              <span>Now booking ongoing slots & deep cleans for Peel, Halton, York and Durham homes.</span>
            </div>
          </div>

          {/* Right Column: Interactive Luxury Room Showcase Anchor */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden p-1">
              {/* Graphic Room Canvas */}
              <div className="relative w-full h-[360px] sm:h-[400px] bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 rounded-xl overflow-hidden flex flex-col justify-between p-6 select-none">
                {/* Architectural Room Silhouette / Depth Graphic */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none" fill="none">
                    <path d="M 0 320 L 400 320" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                    <path d="M 50 400 L 120 280 L 280 280 L 350 400" stroke="white" strokeWidth="1" />
                    <rect x="140" y="80" width="120" height="140" stroke="white" strokeWidth="1.5" />
                    <line x1="200" y1="80" x2="200" y2="220" stroke="white" strokeWidth="1" />
                    <line x1="140" y1="150" x2="260" y2="150" stroke="white" strokeWidth="1" />
                    <path d="M 0 0 L 140 80" stroke="white" strokeWidth="0.75" />
                    <path d="M 400 0 L 260 80" stroke="white" strokeWidth="0.75" />
                    <circle cx="200" cy="50" r="18" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="1" />
                  </svg>
                </div>

                {/* Top Overlay Badge */}
                <div className="relative z-10 flex items-center justify-between text-white/90">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-amber-200">
                      NC Cleanup Standards Map
                    </span>
                  </div>
                  <span className="text-xs text-white/60">Click touchpoints below</span>
                </div>

                {/* Interactive Hotspot pins */}
                <div className="absolute inset-0 z-20">
                  {inspectionSpots.map((spot) => {
                    const isSelected = activeSpot === spot.id;
                    return (
                      <button
                        key={spot.id}
                        onClick={() => setActiveSpot(spot.id)}
                        style={{ left: spot.x, top: spot.y }}
                        className={`cursor-pointer absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all ${
                          isSelected
                            ? 'scale-125 z-30'
                            : 'scale-100 hover:scale-110 z-20'
                        }`}
                        aria-label={`Inspect ${spot.title}`}
                      >
                        <span className={`relative flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                          isSelected ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/50' : 'bg-white/90 text-slate-900 shadow-md'
                        }`}>
                          <spot.icon className="w-4 h-4" />
                          {isSelected && (
                            <span className="absolute -inset-1 rounded-full border-2 border-amber-300 animate-ping opacity-75" />
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Bottom Room Callout Info Card */}
                <div className="relative z-20 bg-slate-950/85 backdrop-blur-md border border-white/15 rounded-xl p-4 text-white shadow-2xl">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="font-serif text-base font-semibold text-amber-100 flex items-center gap-2">
                      <span>{inspectionSpots[activeSpot].title}</span>
                    </h3>
                    <span className="text-[11px] text-amber-300 font-mono">
                      {inspectionSpots[activeSpot].tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {inspectionSpots[activeSpot].desc}
                  </p>
                </div>
              </div>

              {/* Segmented selector tabs below room */}
              <div className="grid grid-cols-4 gap-1 p-2 bg-slate-50 border-t border-slate-100 rounded-b-xl">
                {inspectionSpots.map((spot) => (
                  <button
                    key={spot.id}
                    onClick={() => setActiveSpot(spot.id)}
                    className={`cursor-pointer text-center py-2 px-1 rounded-md text-xs font-medium transition-colors ${
                      activeSpot === spot.id
                        ? 'bg-white text-slate-900 shadow-xs border border-slate-200/80 font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                    }`}
                  >
                    <span className="block truncate">{spot.short}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
