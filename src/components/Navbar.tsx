import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Calendar, Menu, X, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/booking', label: 'Booking' },
    { to: '/services', label: 'Services & Care' },
    { to: '/estimate', label: 'Custom Estimate' },
    { to: '/areas', label: 'Service Areas' },
    { to: '/story', label: 'Our Story' },
    { to: '/results', label: 'Results' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Modern Top Notification Strip */}
      <div className="bg-slate-950 text-white text-[11px] sm:text-xs py-2 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-slate-300 font-normal">
              Serving <strong className="text-white font-medium">Peel, Halton, York & Durham</strong>
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-amber-300/90 font-medium">
              100% Fully Insured & Bonded
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="tel:14168259140"
              className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>(416) 825-9140</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <div className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Guaranteed Arrival</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Glass Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 border-b ${
          isScrolled
            ? 'bg-[#FAF9F5]/95 backdrop-blur-md border-slate-200/90 shadow-xs'
            : 'bg-[#FAF9F5] border-slate-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Zone 1: Brand Wordmark */}
            <Link
              to="/"
              className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded-sm"
              aria-label="NC Cleanup Homepage"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold tracking-tight text-slate-900 font-serif">
                  NC Cleanup
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-amber-800 bg-amber-100/70 border border-amber-200/60 px-1.5 py-0.5 rounded">
                  GTA
                </span>
              </div>
              <span className="text-[10px] tracking-wider uppercase font-medium text-slate-500 font-sans -mt-0.5 group-hover:text-amber-800 transition-colors">
                By Natalia Cassimiro
              </span>
            </Link>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-all ${
                      isActive
                        ? 'text-amber-900 bg-amber-100/60 font-semibold'
                        : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/80'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Zone 3: Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/estimate"
                className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Quick Price</span>
              </Link>

              <button
                onClick={onOpenBooking}
                className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 active:scale-98 transition-all shadow-xs whitespace-nowrap focus-visible:ring-2 focus-visible:ring-slate-900"
              >
                <Calendar className="w-3.5 h-3.5 text-amber-300" />
                <span>Request Walkthrough</span>
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="cursor-pointer px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-lg"
              >
                Walkthrough
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="cursor-pointer p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-[#FAF9F5] px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="flex flex-col space-y-1 text-sm font-medium text-slate-800">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2.5 rounded-lg flex items-center justify-between ${
                      isActive
                        ? 'bg-amber-100/70 text-amber-900 font-semibold'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  {link.to === '/estimate' && (
                    <span className="text-[10px] bg-amber-200 text-amber-900 font-semibold px-2 py-0.5 rounded">
                      Live Calculator
                    </span>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
              <a
                href="tel:14168259140"
                className="flex items-center justify-center gap-2 py-2.5 border border-slate-300 rounded-lg text-xs font-semibold text-slate-800"
              >
                <Phone className="w-3.5 h-3.5 text-amber-700" />
                Call (416) 825-9140
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="cursor-pointer w-full flex items-center justify-center gap-2 py-3 bg-slate-900 text-white rounded-lg text-xs font-semibold"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                Schedule In-Home Walkthrough
              </button>
            </div>

            <div className="pt-2 text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Commercial General Liability Insured · Peel, Halton, York, Durham</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
