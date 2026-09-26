import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/cleaningData';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs uppercase tracking-wider font-semibold text-amber-800 mb-2 flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            <span>Transparency & Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 font-medium tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-base text-slate-600 leading-relaxed font-light">
            Everything you need to know about our insurance, personalized scoping, and daily standards.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-[#FAF9F5]"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="cursor-pointer w-full p-5 text-left flex items-center justify-between gap-4 transition-colors hover:bg-slate-100/60"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sm sm:text-base text-slate-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-800' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60 bg-white">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quiet Insurance Reassurance */}
        <div className="mt-10 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs text-slate-700">
          <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
          <div>
            <strong className="text-slate-900 block font-semibold">Have a specific question about your home&apos;s surfaces?</strong>
            <span>Natalia is happy to review your architectural finishes or special requests during your initial walkthrough.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
