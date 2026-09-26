import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, Heart, Sparkles, ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      {/* Pre-footer Callout Banner */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Complimentary In-Home Consultation</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
              Ready to raise the standard for your home?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Meet Natalia Cassimiro for a 15-minute walkthrough. We review your layout, inspect specialty surfaces, and build a scope fitted to you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              to="/estimate"
              className="w-full sm:w-auto text-center px-5 py-3 text-xs font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/20 rounded-xl transition-colors"
            >
              Interactive Price Tool
            </Link>
            <button
              onClick={onOpenBooking}
              className="cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-all shadow-md group"
            >
              <span>Schedule Walkthrough</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand & Story */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                NC Cleanup
              </span>
              <span className="text-[11px] tracking-wider uppercase text-amber-400 font-medium">
                High-Standard Residential Care
              </span>
            </Link>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Founded by Natalia Cassimiro. Personalized, high-standard residential cleaning across Peel, Halton, York, and Durham. Fully insured, reliable, and tailored to your home.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Commercial General Liability Insured & Bonded in Ontario</span>
            </div>
          </div>

          {/* Quick Pages */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Pages
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/story" className="hover:text-white transition-colors">
                  Our Story & Founder
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services & Protocols
                </Link>
              </li>
              <li>
                <Link to="/estimate" className="hover:text-white transition-colors">
                  Custom Estimate Calculator
                </Link>
              </li>
              <li>
                <Link to="/areas" className="hover:text-white transition-colors">
                  Service Areas & Routes
                </Link>
              </li>
              <li>
                <Link to="/results" className="hover:text-white transition-colors">
                  Before & After Results
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Regional Routes
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/areas#peel" className="hover:text-white transition-colors">
                  Peel (Mississauga, Brampton, Caledon)
                </Link>
              </li>
              <li>
                <Link to="/areas#halton" className="hover:text-white transition-colors">
                  Halton (Oakville, Burlington, Milton)
                </Link>
              </li>
              <li>
                <Link to="/areas#york" className="hover:text-white transition-colors">
                  York (Vaughan, Markham, Richmond Hill)
                </Link>
              </li>
              <li>
                <Link to="/areas#durham" className="hover:text-white transition-colors">
                  Durham (Pickering, Ajax, Whitby, Oshawa)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a
                href="tel:14168259140"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>(416) 825-9140</span>
              </a>
              <a
                href="mailto:contact@nccleanup.ca"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>contact@nccleanup.ca</span>
              </a>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Greater Toronto Area, ON</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="cursor-pointer w-full py-2 px-3 bg-slate-800 hover:bg-slate-700 text-amber-300 font-semibold text-xs rounded-lg transition-colors text-center border border-slate-700"
                >
                  Book 15-Min Walkthrough
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} NC Cleanup. All rights reserved. Founded by Natalia Cassimiro.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with care for homes across Ontario</span>
            <Heart className="w-3 h-3 text-amber-500 fill-amber-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};
