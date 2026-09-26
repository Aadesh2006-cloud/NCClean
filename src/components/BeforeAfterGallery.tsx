import React, { useState } from 'react';
import { BEFORE_AFTER_ITEMS } from '../data/cleaningData';
import { Sparkles, Eye, CheckCircle2 } from 'lucide-react';

export const BeforeAfterGallery: React.FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)

  const activeItem = BEFORE_AFTER_ITEMS[selectedItemIndex];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-wider font-semibold text-amber-800 mb-2 flex items-center gap-1.5">
            <Eye className="w-4 h-4" />
            <span>Visible Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 font-medium tracking-tight">
            Visible from the moment you walk through the door.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-light">
            True excellence isn&apos;t just moving dust around—it is the crispness of clean glass, the absence of grease residue, and the radiant calm of thoroughly cared-for materials.
          </p>
        </div>

        {/* Tab selection */}
        <div className="flex flex-wrap gap-2 mb-8">
          {BEFORE_AFTER_ITEMS.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedItemIndex(index);
                setSliderPosition(50);
              }}
              className={`cursor-pointer px-4 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                selectedItemIndex === index
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-[#FAF9F5] text-slate-700 hover:bg-slate-200/60 border border-slate-200'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Comparison Viewport (8 cols) */}
          <div className="lg:col-span-8">
            <div className="relative w-full h-[360px] sm:h-[440px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 select-none bg-slate-950">
              {/* "AFTER" Layer (Full background) */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-tr from-slate-950 via-slate-900 to-amber-950/40 text-white">
                <div className="flex items-center justify-between z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-500/90 text-slate-950 font-bold text-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>NC CLEANUP STANDARD</span>
                  </div>
                </div>

                <div className="z-10 bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-white/10 max-w-md ml-auto">
                  <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1">
                    After NC Care:
                  </div>
                  <p className="text-xs text-white leading-relaxed">
                    {activeItem.afterLabel}
                  </p>
                </div>
              </div>

              {/* "BEFORE" Layer (Clipped to slider percentage) */}
              <div
                className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-tr from-slate-800 via-stone-800 to-zinc-900 text-stone-200 border-r-2 border-white overflow-hidden shadow-2xl"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="flex items-center justify-between z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-700/90 text-slate-200 font-medium text-xs">
                    <span>BEFORE</span>
                  </div>
                </div>

                <div className="z-10 bg-black/70 backdrop-blur-md p-4 rounded-xl border border-white/10 max-w-xs">
                  <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">
                    Initial State:
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {activeItem.beforeLabel}
                  </p>
                </div>
              </div>

              {/* Draggable Slider Control Line */}
              <div
                className="absolute top-0 bottom-0 z-30 pointer-events-none -translate-x-1/2 flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center font-bold text-xs border-2 border-slate-900">
                  ↔
                </div>
              </div>

              {/* Hidden Range Input overlay for easy dragging/scrubbing */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-40"
                aria-label="Drag before and after split slider"
              />
            </div>

            {/* Slider Instructions hint */}
            <div className="flex items-center justify-between text-xs text-slate-500 mt-3 px-1">
              <span>← Drag slider horizontally to compare before & after</span>
              <span className="font-mono text-slate-700">{sliderPosition}% Reveal</span>
            </div>
          </div>

          {/* Context & Protocol Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-slate-200 space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                  {activeItem.area}
                </span>
                <h3 className="font-serif text-xl font-bold text-slate-900 mt-1">
                  {activeItem.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeItem.description}
              </p>

              <div className="space-y-2.5 pt-2 border-t border-slate-200">
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>No chemical residues or artificial perfumes left behind</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Protective pads on vacuums to safeguard hardwood and moldings</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Insured handling of all fixtures and glass assemblies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
