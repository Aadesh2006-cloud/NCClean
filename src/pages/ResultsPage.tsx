import React from 'react';
import { BeforeAfterGallery } from '../components/BeforeAfterGallery';
import { Testimonials } from '../components/Testimonials';
import { Sparkles, Eye, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ResultsPageProps {
  onOpenBooking: () => void;
}

export const ResultsPage: React.FC<ResultsPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-[#FAF9F5]">
      {/* Header */}
      <section className="pt-12 pb-16 border-b border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-200/80 text-xs font-semibold text-amber-900">
            <Eye className="w-3.5 h-3.5 text-amber-800" />
            <span>Documented Standards</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 font-medium tracking-tight">
            Visible from the Moment You Walk Through the Door
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Real transformations across kitchens, bathrooms, and architectural trim. Zero surface gloss or chemical perfume—just pure, restorative cleanliness.
          </p>
        </div>
      </section>

      {/* Embedded Before / After Interactive Engine */}
      <BeforeAfterGallery />

      {/* Case Study Details */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-wider font-semibold text-amber-800 mb-2">
              Real Ontario Homes
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 font-medium tracking-tight">
              Three Distinct Challenges. One Standard of Care.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF9F5] p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Case Study 01 · Oakville</span>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                4,200 sq.ft. Joshua Creek Residence
              </h3>
              <div className="text-xs text-slate-500 font-mono">Challenge: Hard water shower glass scale</div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The homeowner had attempted vinegar and store-bought bathroom acids that clouded the chrome fixtures and failed to remove 18 months of mineral baking.
              </p>
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-700">
                <strong className="block text-slate-900 font-semibold mb-1">The NC Solution:</strong>
                Applied pH-balanced chelating solution, hand-polished glass with zero scratches, and sealed the surface with water-sheeting hydrophobic coating.
              </div>
            </div>

            <div className="bg-[#FAF9F5] p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Case Study 02 · Vaughan</span>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                5,100 sq.ft. Kleinburg Custom Estate
              </h3>
              <div className="text-xs text-slate-500 font-mono">Challenge: High-traffic commercial Wolf range</div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Heavy caramelized cooking grease had settled into the cast-iron grates and beneath the burner caps during family holiday entertaining.
              </p>
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-700">
                <strong className="block text-slate-900 font-semibold mb-1">The NC Solution:</strong>
                Submerged grates in warm organic citrus degreaser, hand-detailed ignition valves, and restored brushed stainless steel to factory reflection.
              </div>
            </div>

            <div className="bg-[#FAF9F5] p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Case Study 03 · Mississauga</span>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                3,400 sq.ft. Lorne Park Move-In
              </h3>
              <div className="text-xs text-slate-500 font-mono">Challenge: Pet dander & construction residue</div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Prior owners had two golden retrievers. The new buyers had severe pet allergies and newborn twins moving in the next weekend.
              </p>
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-700">
                <strong className="block text-slate-900 font-semibold mb-1">The NC Solution:</strong>
                Conducted two full passes with commercial sealed HEPA units, washed all vent louvers, wiped inside every drawer, leaving the air 100% hypoallergenic.
              </div>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="text-center pt-4">
            <button
              onClick={onOpenBooking}
              className="cursor-pointer px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition-colors shadow-md"
            >
              Experience the Results in Your Home
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
};
