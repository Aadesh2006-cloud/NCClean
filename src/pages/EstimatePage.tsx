import React from 'react';
import { EstimateCalculator } from '../components/EstimateCalculator';
import { PreloadedEstimateData } from '../components/BookingModal';
import { ShieldCheck, CheckCircle2, Clock, Sparkles, HelpCircle } from 'lucide-react';

interface EstimatePageProps {
  onProceedToBooking: (data: PreloadedEstimateData) => void;
  onOpenBooking: () => void;
}

export const EstimatePage: React.FC<EstimatePageProps> = ({ onProceedToBooking, onOpenBooking }) => {
  return (
    <div className="bg-[#FAF9F5]">
      {/* Header */}
      <section className="pt-12 pb-12 border-b border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-200/80 text-xs font-semibold text-amber-900">
            <Sparkles className="w-3.5 h-3.5 text-amber-800" />
            <span>Real-Time Estimation Studio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 font-medium tracking-tight">
            Transparent Pricing. Tailored Investment.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Adjust your home specifications, region, frequency, and custom add-ons to see our estimated price range and required specialist hours.
          </p>
        </div>
      </section>

      {/* Main Interactive Calculator */}
      <EstimateCalculator onProceedToBooking={onProceedToBooking} />

      {/* Why We Are Transparent & How the Walkthrough Works */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs uppercase tracking-wider font-semibold text-amber-800">
                The Walkthrough Commitment
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                What happens after you calculate your estimate?
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  While our online calculator gives an exceptionally accurate baseline based on thousands of hours of historical cleaning data across Peel, Halton, York, and Durham, no two residences have the exact same architecture.
                </p>
                <p>
                  Natalia Cassimiro or a senior team lead visits your home for a quick 15-to-20 minute walkthrough. We look at:
                </p>
                <div className="space-y-2.5 pl-2">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Specialty surfaces (honed limestone, marble waterfalls, oiled walnut)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>High-priority focal areas vs. rarely used guest rooms</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Pet temperaments and favorite resting areas</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Custom arrival windows fitting your schedule</span>
                  </div>
                </div>
                <p className="font-semibold text-slate-900 pt-2">
                  You receive a locked, guaranteed rate with zero obligation.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#FAF9F5] p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Pricing Safeguards
                </span>
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <h4 className="font-semibold text-slate-900">Zero Travel or Fuel Surcharges</h4>
                  <p className="text-slate-600 mt-0.5">
                    Our prices include all travel time, fuel, equipment depreciation, and commercial liability insurance.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">All Professional Supplies Provided</h4>
                  <p className="text-slate-600 mt-0.5">
                    We arrive fully equipped with HEPA vacuums, microfiber systems, and eco-certified non-toxic cleaning agents.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">Flexible Scheduling</h4>
                  <p className="text-slate-600 mt-0.5">
                    Going on vacation or hosting family? Reschedule or pause your recurring cadence anytime with 48 hours notice.
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="cursor-pointer w-full py-3 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors shadow-sm"
              >
                Schedule 15-Min Walkthrough Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
