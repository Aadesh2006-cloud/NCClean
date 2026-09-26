import React from 'react';
import { TESTIMONIALS } from '../data/cleaningData';
import { Star, MapPin } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF9F5] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-wider font-semibold text-amber-800 mb-2">
            Homeowner Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 font-medium tracking-tight">
            Trusted by families who hold high standards.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-light">
            Read what homeowners across Oakville, Mississauga, Vaughan, and Pickering say about welcoming NC Cleanup into their private spaces.
          </p>
        </div>

        {/* Testimonials 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-amber-600">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                  <span className="ml-2 text-xs font-semibold text-slate-700">Verified Client</span>
                </div>

                {/* Quote body */}
                <p className="font-serif text-slate-800 text-base sm:text-lg italic leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Highlight Badge */}
                <div className="text-xs text-amber-900 font-medium bg-amber-50/80 px-2.5 py-1 rounded inline-block border border-amber-200/50">
                  {item.highlight}
                </div>
              </div>

              {/* Author & Home Meta */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900 text-sm">{item.author}</div>
                  <div className="text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-amber-700" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="text-right text-slate-500 font-tabular">
                  {item.property}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
