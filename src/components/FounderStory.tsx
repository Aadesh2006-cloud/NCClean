import React from 'react';
import { ShieldCheck, Award, CheckCircle, Heart, Clock, Sparkles } from 'lucide-react';

interface FounderStoryProps {
  onOpenBooking: () => void;
}

export const FounderStory: React.FC<FounderStoryProps> = ({ onOpenBooking }) => {
  return (
    <section id="our-story" className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-wider font-semibold text-amber-800 mb-2">
            The Origin & The Standard
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 font-medium tracking-tight">
            Built on a Canadian dream and an uncompromising standard of care.
          </h2>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Natalia's Personal Story Letter */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p className="font-serif text-xl sm:text-2xl text-slate-900 italic font-normal leading-snug border-l-2 border-amber-800 pl-4 py-1">
              &ldquo;The goal was never just to clean. It was to create an environment that people feel good coming back to.&rdquo;
            </p>

            <p>
              Natalia Cassimiro came to Canada with a dream and found in cleaning a way to transform spaces with real excellence and care. After years serving discerning families across the Greater Toronto Area who demanded the highest standards, she recognized a clear gap in the industry.
            </p>

            <p>
              Too many commercial cleaning franchises operate like assembly lines: rushing through rooms, rotating unfamiliar staff every week, cutting corners on delicate surfaces, and treating client residences like numbers on a spreadsheet. Natalia decided to start her own business to raise the bar for what a cleaning service could and should be.
            </p>

            <p>
              Today, <strong className="text-slate-900 font-semibold">NC Cleanup</strong> serves private residences across <strong className="text-slate-900 font-semibold">Peel, Halton, York, and Durham</strong> with a commitment that has remained steadfast since day one:
            </p>

            {/* Three Foundation Commitments */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FAF9F5] border border-slate-200/70">
                <Clock className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">1. Showing Up on Time</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Your time and calendar are sacred. We commit to consistent arrival windows, proactive communication, and never leaving you guessing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FAF9F5] border border-slate-200/70">
                <Sparkles className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">2. Doing the Work Right</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Treating every space with the exact same respect, mindfulness, and thoroughness we would give our own families and personal homes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FAF9F5] border border-slate-200/70">
                <ShieldCheck className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">3. Complete Insurance Protection</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    NC Cleanup is fully insured and bonded. From rare chandeliers to imported marble countertops, your home is thoroughly protected throughout every single visit.
                  </p>
                </div>
              </div>
            </div>

            {/* Founder Signoff */}
            <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-serif text-xl font-bold text-slate-900">Natalia Cassimiro</div>
                <div className="text-xs font-medium text-amber-800 tracking-wide">Founder & Owner, NC Cleanup</div>
              </div>
              <button
                onClick={onOpenBooking}
                className="cursor-pointer text-xs font-semibold px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                Meet Natalia for a Walkthrough
              </button>
            </div>
          </div>

          {/* Right: Architectural Profile & Verification Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF9F5] border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Service Guarantee</span>
                  <h3 className="font-serif text-xl font-semibold text-slate-900 mt-0.5">The NC Difference</h3>
                </div>
                <Award className="w-8 h-8 text-amber-700" />
              </div>

              {/* Checklist Comparison */}
              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-1" />
                  <span className="text-slate-700">
                    <strong className="text-slate-900">Consistent familiar personnel:</strong> The same vetted team cleans your home so they know every preference and delicate fixture.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-1" />
                  <span className="text-slate-700">
                    <strong className="text-slate-900">Cross-contamination prevention:</strong> Dedicated color-coded microfibers ensuring bathroom cloths never touch kitchen prep zones.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-1" />
                  <span className="text-slate-700">
                    <strong className="text-slate-900">Surfaces inspected in advance:</strong> Calacatta, honed marble, brass, oiled walnut, and engineered floors get specialized care.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-1" />
                  <span className="text-slate-700">
                    <strong className="text-slate-900">Fully insured & bonded:</strong> Comprehensive commercial general liability in Ontario.
                  </span>
                </div>
              </div>

              {/* Founder Quote Card */}
              <div className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-900 mb-1">
                  <Heart className="w-3.5 h-3.5 text-amber-700" />
                  <span>Our Promise to You</span>
                </div>
                <p className="text-xs text-slate-600 italic leading-relaxed">
                  &ldquo;Every client is different. Every home is different. That is why we listen first, adapt to your family, and deliver results that are visible from the moment you walk through the door.&rdquo;
                </p>
              </div>

              {/* Regional Footprint stats */}
              <div className="pt-2 text-xs text-slate-600 flex items-center justify-between border-t border-slate-200">
                <span>Serving Ontario Since Inception</span>
                <span className="font-semibold text-slate-900">Peel · Halton · York · Durham</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
