import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { EstimateCalculator } from '../components/EstimateCalculator';
import { BeforeAfterGallery } from '../components/BeforeAfterGallery';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Clock,
  HeartHandshake,
  CheckCircle2,
  ChevronRight,
  Award,
  MapPin,
  Check,
  X,
  Droplets,
  Layers,
  Home,
  Shield,
  Phone,
  Calendar,
  Users
} from 'lucide-react';
import { PreloadedEstimateData } from '../components/BookingModal';

interface HomePageProps {
  onOpenBooking: () => void;
  onProceedToBooking: (data: PreloadedEstimateData) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking, onProceedToBooking }) => {
  const [activeSurface, setActiveSurface] = useState<number>(0);

  const surfaceProtocols = [
    {
      id: 0,
      material: 'Calacatta, Carrara & Natural Marble',
      risk: 'Acidic all-purpose sprays dissolve calcium carbonate, causing permanent dull etching & hazy spots.',
      solution: '100% pH-neutral chelating cleansers, microfiber hand buffing, zero acidic or vinegar formulas.',
      badge: 'Stone Care Certified',
    },
    {
      id: 1,
      material: 'Engineered & Wire-Brushed White Oak',
      risk: 'Excess standing water causes seam swelling, grain lifting, and cloudy finish discoloration.',
      solution: 'Damp-controlled microfiber extraction, wood-specific pH balanced conditioning, zero pooling moisture.',
      badge: 'Zero-Moisture Pooling',
    },
    {
      id: 2,
      material: 'Matte Black & Living Brass Hardware',
      risk: 'Abrasive scrub sponges and ammonia cleaners strip matte protective anodized coatings.',
      solution: 'Ultra-fine optical microfibers with gentle surfactant mists; streak-free dry polishing.',
      badge: 'Non-Abrasive Care',
    },
    {
      id: 3,
      material: 'Gourmet Chef Ranges & Glass Ovens',
      risk: 'Corrosive aerosol lye burns heating elements and fills residential living air with toxic fumes.',
      solution: 'Fume-free organic citrus degreasers, manual brass detailing, soaked cast-iron grate restoration.',
      badge: 'Fume-Free Chemistry',
    },
    {
      id: 4,
      material: 'Homes with Pets & Sensitive Allergies',
      risk: 'Standard vacuums vent micro-allergens, dander, and dust particles back into breathable room air.',
      solution: 'Commercial sealed 4-stage HEPA filtration capturing 99.97% down to 0.3 microns; plant-based unscented agents.',
      badge: '99.97% HEPA Capture',
    },
  ];

  const steps = [
    {
      number: '01',
      title: '15-Minute In-Home Walkthrough',
      description: 'Natalia personally visits your residence. We inspect surface finishes, note high-traffic zones, understand your family routines, and review any special requests.',
      badge: 'Complimentary',
    },
    {
      number: '02',
      title: 'Transparent, Itemized Proposal',
      description: 'You receive a clear, locked quote built strictly around your square footage and priorities. Zero cookie-cutter packages, zero hidden travel fees or surprise add-ons.',
      badge: 'Locked Quote',
    },
    {
      number: '03',
      title: 'Punctual White-Glove Execution',
      description: 'Our vetted team arrives precisely within your confirmed window with dedicated color-coded microfibers, HEPA vacuums, and pH-balanced solutions.',
      badge: 'On-Time Arrival',
    },
    {
      number: '04',
      title: 'The "Coming Home" Calm',
      description: 'Step into spotless surfaces, radiant natural light reflection, pristine air quality, and the serene feeling of a home cared for with genuine respect.',
      badge: 'Visible Difference',
    },
  ];

  return (
    <div className="space-y-0">
      {/* 1. Hero with interactive room viewer */}
      <Hero
        onOpenBooking={onOpenBooking}
        onNavigateToEstimate={() => {
          const el = document.getElementById('custom-estimate');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else window.location.hash = '#/estimate';
        }}
      />

      {/* 2. Trust & Foundation Bar */}
      <section className="bg-white border-y border-slate-200/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-800 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Fully Insured & Bonded</div>
                <div className="text-xs text-slate-500 mt-0.5">Commercial liability protection across ON</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-800 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Showing Up on Time</div>
                <div className="text-xs text-slate-500 mt-0.5">Reliable arrival windows you can trust</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-800 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">No Rigid Packages</div>
                <div className="text-xs text-slate-500 mt-0.5">Tailored strictly to your family&apos;s home</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-800 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">4 Core Regions</div>
                <div className="text-xs text-slate-500 mt-0.5">Peel, Halton, York & Durham</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Founder Story Teaser Strip */}
      <section className="py-20 bg-[#FAF9F5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-800">
                <Award className="w-4 h-4" />
                <span>The Natalia Cassimiro Standard</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 font-medium tracking-tight">
                Built on a Canadian dream and an uncompromising standard of care.
              </h2>
              <blockquote className="border-l-2 border-amber-800 pl-4 py-1 font-serif text-xl sm:text-2xl text-slate-900 italic font-normal">
                &ldquo;The goal was never just to clean. It was to create an environment that people feel good coming back to.&rdquo;
              </blockquote>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Natalia came to Canada with a dream and discovered in cleaning a way to transform spaces with real excellence and care. After years serving families who demanded the highest standards, she founded NC Cleanup to eliminate the rushed corners and revolving-door personnel typical of commercial franchises.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/story"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-all shadow-sm group"
                >
                  <span>Read Natalia&apos;s Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  onClick={onOpenBooking}
                  className="cursor-pointer px-5 py-3 text-xs font-semibold text-slate-800 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors shadow-2xs"
                >
                  Book In-Person Walkthrough
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-5">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">Day-One Commitment</span>
                <span className="text-xs font-serif font-bold text-amber-800">NC Promise</span>
              </div>
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Consistent Team:</strong> The same familiar specialists clean your residence every scheduled visit.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Respect for Your Home:</strong> Protective padded gear, HEPA sealed filtration, and no wall scuffs.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Surface Science:</strong> pH-neutral formulas for delicate marble, quartzite, unsealed wood, and nickel.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Transparent Walkthrough:</strong> Natalia walks through your home first. Zero surprise charges.</span>
                </div>
              </div>

              <div className="p-4 bg-[#FAF9F5] rounded-xl border border-slate-200 text-xs text-slate-600">
                &ldquo;Every client is different. Every home is different. That is why we do not offer one-size-fits-all packages.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The 4-Step Client Journey Section */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-200/80 text-xs font-semibold text-amber-900">
              <Clock className="w-3.5 h-3.5 text-amber-800" />
              <span>How It Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 font-medium tracking-tight">
              The Journey to a Transformed Home
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              From our first conversation to your regular recurring visits, we ensure absolute clarity, punctuality, and respect at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#FAF9F5] p-6 rounded-2xl border border-slate-200/80 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow relative group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-bold text-amber-800/80">
                      {step.number}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {step.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={onOpenBooking}
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors shadow-md"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Schedule Step 1: Your 15-Minute Walkthrough</span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. Services Exploration Card Grid */}
      <section className="py-20 bg-[#FAF9F5] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-wider font-semibold text-amber-800 mb-2">
                Tailored Residential Offerings
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 font-medium tracking-tight">
                Designed around your home, not a rigid checklist.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-900 group"
            >
              <span>Explore All Protocols & Checklist</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">01. Recurring Harmony</span>
                <h3 className="font-serif text-xl font-bold text-slate-900">Routine Living Care</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Weekly and bi-weekly schedules that keep high-traffic kitchens, primary suites, and living rooms consistently pristine.
                </p>
                <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                  <li>• High-touch surface sanitization</li>
                  <li>• Streak-free stone counter polish</li>
                  <li>• Whole-home 4-stage HEPA vacuuming</li>
                </ul>
              </div>
              <div className="pt-6">
                <Link
                  to="/services"
                  className="text-xs font-semibold text-slate-900 hover:text-amber-800 inline-flex items-center gap-1"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">02. Intensive Reset</span>
                <h3 className="font-serif text-xl font-bold text-slate-900">Architectural Deep Clean</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Seasonal and pre-event deep restoration: hand-wiping perimeter baseboards, degreasing appliances, and clearing hard water scale.
                </p>
                <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                  <li>• Inside oven & range baked carbon</li>
                  <li>• Hand-wiped moldings & casing trims</li>
                  <li>• Shower glass & tile scale dissolution</li>
                </ul>
              </div>
              <div className="pt-6">
                <Link
                  to="/services"
                  className="text-xs font-semibold text-slate-900 hover:text-amber-800 inline-flex items-center gap-1"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">03. Property Transitions</span>
                <h3 className="font-serif text-xl font-bold text-slate-900">Move-In & Possession</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A spotless, sanitized blank canvas for newly acquired homes or closing handovers across the GTA.
                </p>
                <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                  <li>• Interior of all cabinetry & drawers</li>
                  <li>• Closet systems, shelving & baseboards</li>
                  <li>• Guaranteed barefoot-ready handoff</li>
                </ul>
              </div>
              <div className="pt-6">
                <Link
                  to="/services"
                  className="text-xs font-semibold text-slate-900 hover:text-amber-800 inline-flex items-center gap-1"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Interactive Surface Science & Safe Chemistry Guide */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-200/80 text-xs font-semibold text-amber-900 mb-2">
              <Droplets className="w-3.5 h-3.5 text-amber-800" />
              <span>Material Science</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 font-medium tracking-tight">
              Chemistry Matters: How We Protect Fine Surfaces
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Standard cleaners etch Italian marble, warp hardwood floors, and strip matte black finishes. Explore our specialized safety protocols below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Material Selector */}
            <div className="lg:col-span-5 space-y-2">
              {surfaceProtocols.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSurface(item.id)}
                  className={`cursor-pointer w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${
                    activeSurface === item.id
                      ? 'bg-slate-900 text-white border-slate-900 font-semibold shadow-xs'
                      : 'bg-[#FAF9F5] text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span>{item.material}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                    activeSurface === item.id ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {item.badge}
                  </span>
                </button>
              ))}
            </div>

            {/* Right: Detailed Protocol Breakdown Card */}
            <div className="lg:col-span-7 bg-[#FAF9F5] p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-amber-800">Surface Safety Protocol</span>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mt-1">
                  {surfaceProtocols[activeSurface].material}
                </h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-red-50/80 border border-red-200/80 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-red-900 uppercase tracking-wider">
                    <X className="w-4 h-4 text-red-700" />
                    <span>The Franchise Hazard</span>
                  </div>
                  <p className="text-xs text-red-800 leading-relaxed">
                    {surfaceProtocols[activeSurface].risk}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200/80 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 uppercase tracking-wider">
                    <Check className="w-4 h-4 text-emerald-700" />
                    <span>The NC Cleanup Standard</span>
                  </div>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    {surfaceProtocols[activeSurface].solution}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-200">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Insured against chemical surface damage</span>
                </span>
                <Link to="/services" className="text-slate-900 font-semibold hover:text-amber-800 underline">
                  Full Service Protocols →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Live Interactive Custom Estimate Studio Directly Embedded */}
      <section className="py-8 bg-white" id="calculator-section">
        <EstimateCalculator onProceedToBooking={onProceedToBooking} />
      </section>

      {/* 8. Before / After Showcase */}
      <BeforeAfterGallery />

      {/* 9. Service Regions Spotlight with Route Schedule */}
      <section className="py-20 bg-[#FAF9F5] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs uppercase tracking-wider font-semibold text-amber-800 mb-2">
              Municipal Routes & Punctuality
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 font-medium tracking-tight">
              Punctual coverage across the Greater Toronto Area.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
              Showing up on time is a core value, not an afterthought. We maintain dedicated regional routes to guarantee prompt arrival.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/areas#peel"
              className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-amber-800/60 hover:shadow-md transition-all group"
            >
              <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">Region 01</div>
              <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                Peel Region
              </h3>
              <p className="text-xs text-slate-500 mt-1">Mississauga, Brampton, Caledon</p>
              <div className="mt-4 text-[11px] font-semibold text-slate-700 flex items-center gap-1">
                <span>View Route Days</span>
                <ChevronRight className="w-3.5 h-3.5 text-amber-800" />
              </div>
            </Link>

            <Link
              to="/areas#halton"
              className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-amber-800/60 hover:shadow-md transition-all group"
            >
              <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">Region 02</div>
              <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                Halton Region
              </h3>
              <p className="text-xs text-slate-500 mt-1">Oakville, Burlington, Milton, Georgetown</p>
              <div className="mt-4 text-[11px] font-semibold text-slate-700 flex items-center gap-1">
                <span>View Route Days</span>
                <ChevronRight className="w-3.5 h-3.5 text-amber-800" />
              </div>
            </Link>

            <Link
              to="/areas#york"
              className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-amber-800/60 hover:shadow-md transition-all group"
            >
              <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">Region 03</div>
              <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                York Region
              </h3>
              <p className="text-xs text-slate-500 mt-1">Vaughan, Richmond Hill, Markham, Aurora</p>
              <div className="mt-4 text-[11px] font-semibold text-slate-700 flex items-center gap-1">
                <span>View Route Days</span>
                <ChevronRight className="w-3.5 h-3.5 text-amber-800" />
              </div>
            </Link>

            <Link
              to="/areas#durham"
              className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-amber-800/60 hover:shadow-md transition-all group"
            >
              <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">Region 04</div>
              <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                Durham Region
              </h3>
              <p className="text-xs text-slate-500 mt-1">Pickering, Ajax, Whitby, Oshawa</p>
              <div className="mt-4 text-[11px] font-semibold text-slate-700 flex items-center gap-1">
                <span>View Route Days</span>
                <ChevronRight className="w-3.5 h-3.5 text-amber-800" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Peace of Mind & Insurance Guarantee Banner */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Ontario Commercial General Liability & Bonding</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white">
                Total Peace of Mind Throughout Every Single Visit.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                We know that welcoming a service team into your private sanctuary requires immense trust. NC Cleanup is fully insured and bonded in Ontario, our personnel are thoroughly vetted and trained, and our arrival windows are strictly honored.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300">
                <span className="flex items-center gap-1.5 text-emerald-300">
                  <Check className="w-3.5 h-3.5" /> $2,000,000 Liability Coverage
                </span>
                <span className="flex items-center gap-1.5 text-emerald-300">
                  <Check className="w-3.5 h-3.5" /> Full Employee Bonding
                </span>
                <span className="flex items-center gap-1.5 text-emerald-300">
                  <Check className="w-3.5 h-3.5" /> Criminal Background Vetted
                </span>
                <span className="flex items-center gap-1.5 text-emerald-300">
                  <Check className="w-3.5 h-3.5" /> Same-Day Inspection Guarantee
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={onOpenBooking}
                className="cursor-pointer w-full py-3.5 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-all shadow-md text-center"
              >
                Schedule Your Walkthrough →
              </button>
              <a
                href="tel:14168259140"
                className="w-full text-center py-3 px-6 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl text-xs border border-white/20 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Natalia: (416) 825-9140</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Testimonials */}
      <Testimonials />

      {/* 12. FAQ */}
      <FAQ />
    </div>
  );
};
