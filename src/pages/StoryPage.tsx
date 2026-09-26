import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Heart, Award, CheckCircle2, Sparkles, ArrowRight, MapPin, Users } from 'lucide-react';

interface StoryPageProps {
  onOpenBooking: () => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-[#FAF9F5]">
      {/* Editorial Header */}
      <section className="pt-12 pb-16 border-b border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-200/80 text-xs font-semibold text-amber-900">
            <Sparkles className="w-3.5 h-3.5 text-amber-800" />
            <span>The Founder&apos;s Journey</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 font-medium tracking-tight">
            The Canadian Dream & The Standard of Care
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            How Natalia Cassimiro turned a passion for perfection into a trusted residential cleaning service across the Greater Toronto Area.
          </p>
        </div>
      </section>

      {/* Main Narrative Article */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Opening Pull Quote */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-800">Founder&apos;s Thesis</span>
            <blockquote className="font-serif text-2xl sm:text-3xl text-slate-900 italic font-normal leading-snug">
              &ldquo;The goal was never just to clean. It was to create an environment that people feel good coming back to.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-900">— Natalia Cassimiro</span>
              <span>•</span>
              <span>Founder & Owner, NC Cleanup</span>
            </div>
          </div>

          {/* Chapter 1: The Beginning */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-2xs space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
              <span>Chapter 01</span>
              <span>•</span>
              <span>A Dream Rooted in Hard Work</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Arriving in Canada with a Vision
            </h2>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-light">
              <p>
                Natalia Cassimiro came to Canada with a dream and found in cleaning a way to transform spaces with real excellence and care. She did not view cleaning as an errand or a routine chore. To Natalia, the order and serenity of a home directly shapes how a family rests, recharges, and connects at the end of a long day.
              </p>
              <p>
                She spent years serving families who demanded exceptionally high standards throughout Oakville, Mississauga, Vaughan, and Toronto. She cleaned in custom-built architectural estates with unsealed French limestone, high-gloss Italian lacquer cabinets, Calacatta marble waterfalls, and rare hardwood planking. In those homes, ordinary shortcuts are catastrophic. Precision is non-negotiable.
              </p>
            </div>
          </div>

          {/* Chapter 2: The Turning Point */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-2xs space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
              <span>Chapter 02</span>
              <span>•</span>
              <span>Why the Industry Needed Disruption</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Why We Rejected One-Size-Fits-All Packages
            </h2>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-light">
              <p>
                As Natalia observed the broader residential cleaning industry, she grew frustrated with what she saw: commercial franchises operating on volume-driven assembly lines. Homeowners were treated like numbers on a route sheet. Rotating strangers walked through the front door each week, carrying abrasive chemicals and rushing through checklist timers.
              </p>
              <p>
                They charged for rooms that sat unused while neglecting the messy mudroom or the grease building behind the gas range. Worst of all, they ignored the delicate chemistry of high-end materials.
              </p>
              <p className="font-medium text-slate-900">
                Natalia decided to start her own business and raise the bar for what a residential cleaning service could be: personal, accountable, punctual, and uncompromisingly high-standard.
              </p>
            </div>

            {/* Franchise vs NC Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-red-700">Commercial Franchises</span>
                <ul className="text-xs text-stone-600 space-y-2">
                  <li>✕ Rotating unfamiliar workers every visit</li>
                  <li>✕ Rigid timers; skipping baseboards when time runs out</li>
                  <li>✕ One mop bucket used across baths and living spaces</li>
                  <li>✕ High worker turnover and impersonal customer service</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900">NC Cleanup Standards</span>
                <ul className="text-xs text-amber-950 space-y-2">
                  <li>✓ The same dedicated team on every scheduled visit</li>
                  <li>✓ Color-coded microfibers preventing cross-contamination</li>
                  <li>✓ Tailored scopes built around how you actually live</li>
                  <li>✓ Fully insured, bonded, and accountable to Natalia</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Chapter 3: The 3 Core Pillars */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-2xs space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
              <span>Chapter 03</span>
              <span>•</span>
              <span>The Foundation</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              The Three Guiding Principles Since Day One
            </h2>

            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-bold text-slate-900">1. Showing Up on Time</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Punctuality is the fundamental expression of respect. Our clients are busy executives, doctors, entrepreneurs, and active parents. We establish consistent arrival windows, confirm schedules 24 hours in advance, and stick to our word.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-bold text-slate-900">2. Doing the Work Right</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We do not believe in surface skimming. We get down on our hands and knees to wipe baseboards, degrease hood filters, and detail grout lines. We treat every home with the exact same respect we would give our own families.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-bold text-slate-900">3. Treating Every Space with Total Respect</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    NC Cleanup is fully insured and bonded under Ontario commercial standards. You never have to worry about broken crystal, scratched hardwood, or misplaced items. We provide absolute security and peace of mind throughout every visit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Direct Invitation */}
          <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl space-y-6 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <Users className="w-4 h-4" />
              <span>Personal Commitment</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              &ldquo;I would love to walk through your home and earn your trust.&rdquo;
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              I personally oversee our initial walkthroughs. We spend 15 minutes listening to your priorities, inspecting delicate surfaces, and creating a tailored cleaning plan with transparent pricing.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="cursor-pointer w-full sm:w-auto px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-all shadow-md"
              >
                Schedule Walkthrough with Natalia
              </button>
              <Link
                to="/services"
                className="w-full sm:w-auto text-center px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl text-xs border border-white/20 transition-colors"
              >
                Explore Detailed Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
