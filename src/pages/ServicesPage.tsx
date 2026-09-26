import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Check, X, ShieldCheck, ArrowRight, HelpCircle, AlertCircle, Droplets, CheckCircle2 } from 'lucide-react';
import { SERVICE_ADDONS } from '../data/cleaningData';

interface ServicesPageProps {
  onOpenBooking: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  const [activeRoom, setActiveRoom] = useState<'kitchen' | 'bath' | 'living' | 'details'>('kitchen');

  const comparisonRows = [
    {
      task: 'Baseboard & Perimeter Moldings',
      franchise: 'Cursory feather dust skim or skipped completely',
      nccleanup: 'Wiped by hand on hands and knees with microfiber & safe degreaser',
    },
    {
      task: 'High-End Stone (Marble & Quartzite)',
      franchise: 'Universal acidic multi-purpose sprays (causes surface etching)',
      nccleanup: 'pH-neutral dedicated stone cleaners preserving factory seal and luster',
    },
    {
      task: 'Shower Glass & Hard Water Scale',
      franchise: 'Quick squeegee leaving cloudy mineral haze behind',
      nccleanup: 'Dissolved using stone-safe chelating formulas for optical clarity',
    },
    {
      task: 'Personnel & Team Consistency',
      franchise: 'Different rotating crew each week with no home memory',
      nccleanup: 'The same dedicated team who knows your family preferences and pets',
    },
    {
      task: 'Cross-Contamination Protocol',
      franchise: 'Single mop bucket & rags carried between bathrooms and kitchens',
      nccleanup: 'Color-coded microfiber protocol ensuring bath cloths never enter food zones',
    },
    {
      task: 'Vacuum & Air Filtration',
      franchise: 'Basic bag vacuums venting exhaust dust & allergens back into air',
      nccleanup: 'Commercial 4-stage HEPA filtration with soft non-marking floor bumpers',
    },
    {
      task: 'Arrival Punctuality',
      franchise: 'Vague 4-to-6 hour windows; frequent late cancellations',
      nccleanup: 'Dedicated tight route windows confirmed 24 hours in advance',
    },
  ];

  return (
    <div className="bg-[#FAF9F5]">
      {/* Header */}
      <section className="pt-12 pb-16 border-b border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-200/80 text-xs font-semibold text-amber-900">
            <Sparkles className="w-3.5 h-3.5 text-amber-800" />
            <span>The White-Glove Standard</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 font-medium tracking-tight">
            Tailored Care. Never One-Size-Fits-All.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Every client is different. Every home is different. Explore our detailed room protocols, material science, and transparent standards.
          </p>
        </div>
      </section>

      {/* 3 Core Service Modalities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Routine Living Care */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200/70 flex items-center justify-center text-amber-800 font-bold text-sm">
                  01
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Routine Living Care
                </h3>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded">
                  Weekly / Bi-Weekly
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Continuous effortless maintenance so you never come home to mess. We rotate secondary deep tasks (interior microwave, baseboards, vents) so your home stays permanently serene.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Kitchen sanitizing & island degreasing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Primary bath & shower de-scaling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>HEPA vacuuming & edge dusting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Linen changing & hotel bed presentation</span>
                  </div>
                </div>
              </div>

              <Link
                to="/estimate"
                className="w-full text-center py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors"
              >
                Estimate Routine Schedule
              </Link>
            </div>

            {/* Architectural Deep Clean */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200/70 flex items-center justify-center text-amber-800 font-bold text-sm">
                  02
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Architectural Deep Clean
                </h3>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded">
                  Seasonal & Pre-Event
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  An intensive top-to-bottom reset for homes that haven&apos;t had detailed care in months. We reach behind appliances, treat grout, and hand-wash every trim perimeter.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Inside oven, racks & range hood filters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Hand-wiped baseboards and door casings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Tile grout revival & glass restoration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Window sills, tracks & ceiling fixtures</span>
                  </div>
                </div>
              </div>

              <Link
                to="/estimate"
                className="w-full text-center py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors"
              >
                Estimate Deep Clean
              </Link>
            </div>

            {/* Move-In & Possession Handover */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200/70 flex items-center justify-center text-amber-800 font-bold text-sm">
                  03
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Move-In & Handover
                </h3>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded">
                  Possession Standards
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Guaranteed barefoot-ready handover. We deep-clean empty homes, scrubbing inside every empty cabinet, drawer, closet organizer, and utility space before move-in.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Inside every kitchen & bathroom cabinet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Pantry, shelving & closet rod sanitizing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Washer, dryer drums & lint traps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>100% same-day touch-up guarantee</span>
                  </div>
                </div>
              </div>

              <Link
                to="/estimate"
                className="w-full text-center py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors"
              >
                Estimate Move-In Scope
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Room-by-Room Interactive Protocol Breakdown */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-wider font-semibold text-amber-800 mb-2">
              Meticulous Care
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 font-medium tracking-tight">
              Room-by-Room Execution Protocol
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
              Select an area below to view the exact inspection points our specialists follow on every visit.
            </p>
          </div>

          {/* Room Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
            {[
              { id: 'kitchen', label: "Gourmet Kitchen & Pantry" },
              { id: 'bath', label: "Bathrooms & Primary En-Suites" },
              { id: 'living', label: "Living, Dining & High-Traffic Areas" },
              { id: 'details', label: "Bedrooms, Bed Dressing & Closets" },
            ].map((room) => (
              <button
                key={room.id}
                onClick={() => setActiveRoom(room.id as any)}
                className={`cursor-pointer px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeRoom === room.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/70'
                }`}
              >
                {room.label}
              </button>
            ))}
          </div>

          {/* Room Details Display */}
          <div className="bg-[#FAF9F5] p-6 sm:p-10 rounded-3xl border border-slate-200 space-y-6">
            {activeRoom === 'kitchen' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">
                    Gourmet Chef&apos;s Kitchen Protocol
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    The heart of the home receives the highest level of culinary hygiene and surface protection.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Stone Countertops & Islands", desc: "pH-neutral degreaser safe on marble, quartzite, and granite. No scratching, swirls, or cloudy streaks." },
                    { title: "Range Hoods & Backsplashes", desc: "Grease breakdown on subway tiles, marble slabs, stainless steel filters, and cooktop control knobs." },
                    { title: "Exterior Cabinetry & Hardware", desc: "Hand-wiping spills around handles, finger grease on high-gloss or matte cabinetry without moisture damage." },
                    { title: "Sink Basins & Polished Faucets", desc: "Sanitized, limescale cleared, and faucets buffed with lint-free microfiber for mirror brilliance." },
                    { title: "Microwave Interior & Turntable", desc: "Steam softened and washed inside, deodorized without artificial fragrances." },
                    { title: "Perimeter Floor Vacuum & Damp Mop", desc: "Crumbs extracted along toe-kicks and underneath appliances; hardwood mopped with zero standing water." },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200/70 space-y-1">
                      <div className="font-semibold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-xs text-slate-600 pl-6">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeRoom === 'bath' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">
                    Bathrooms & En-Suite Sanctuaries
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Hospital-grade disinfection paired with delicate spa stone preservation and streak-free glass.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Frameless Glass Shower Enclosures", desc: "Chelating agents remove tough Ontario hard-water scale; dried streak-free to preserve water-repellent treatments." },
                    { title: "Calacatta & Carrara Marble Vanities", desc: "Acid-free cleaners protect sensitive calcium carbonate stones from chemical dulling or etching." },
                    { title: "Sanitized Toilets & Bidets", desc: "Complete 360-degree disinfection of seat, bowl interior, exterior base, and plumbing valves." },
                    { title: "Chrome, Brass & Matte Black Hardware", desc: "Microfiber hand-polishing with zero harsh scouring that could strip matte coatings." },
                    { title: "Tile Grout Lines & Caulk Seals", desc: "Treated for soap scum and early mildew prevention without harsh chlorine vapor." },
                    { title: "Cross-Contamination Guarantee", desc: "Dedicated red microfibers used ONLY for toilets; yellow for showers. Zero cloths shared with kitchens." },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200/70 space-y-1">
                      <div className="font-semibold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-xs text-slate-600 pl-6">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeRoom === 'living' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">
                    Living, Dining & Mudroom Perimeters
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Airflow freshness, architectural trim clarity, and calm visual order.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Hand-Wiped Baseboards & Millwork", desc: "Hands-and-knees perimeter wipe-down rather than cursory feather duster flinging." },
                    { title: "4-Stage HEPA Vacuum Filtration", desc: "Captures 99.97% of pet dander, micro-dust, and seasonal pollen instead of venting them back into your home." },
                    { title: "Light Switches, Door Knobs & Remotes", desc: "Sanitized with gentle alcohol wipes to eliminate cold/flu germ vectors without residue." },
                    { title: "Furniture Upholstery & Cushion Refresh", desc: "Cushions fluffed and vacuumed underneath to remove crumbs and dust nests." },
                    { title: "Area Rugs & Floor Transitions", desc: "Edges vacuumed with specialized brush heads that protect fringe and do not pull wood fibers." },
                    { title: "Fingerprints on Glass Doors", desc: "French doors, patio sliders, and interior glass cleared of smudges and pet nose prints." },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200/70 space-y-1">
                      <div className="font-semibold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-xs text-slate-600 pl-6">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeRoom === 'details' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">
                    Bedrooms & Crisp Hotel Presentation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Quiet, restorative bedrooms where you can breathe cleanly and sleep deeply.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Bed Making & Fresh Linens", desc: "Sheets changed, corners tucked with hotel hospital-corners precision, and pillows arranged crisply." },
                    { title: "Nightstand & Dresser Detailing", desc: "Items lifted, surfaces dusted, and orderly arrangement maintained without moving your personal items." },
                    { title: "Under-Bed Dust Extraction", desc: "Long-reach attachments pull dust bunnies and allergens from under bed frames and heavy dressers." },
                    { title: "Closet Floors & Shelving", desc: "Shoe racks vacuumed, closet floors cleared, and organizers wiped clean of lint." },
                    { title: "Window Sills & Picture Frames", desc: "Blinds dusted louver by louver; art frames dusted with soft horsehair brushes." },
                    { title: "Odor Neutralization", desc: "Never masked with heavy aerosol perfumes. Fresh, clean air is simply the absence of dust." },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200/70 space-y-1">
                      <div className="font-semibold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-xs text-slate-600 pl-6">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Comparison Table: Cheap Franchise vs NC Cleanup */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-wider font-semibold text-amber-800 mb-2">
              Uncompromising Quality
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 font-medium tracking-tight">
              How NC Cleanup Compares to Standard Franchises
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
              See the difference in equipment, chemistry, and human respect that makes Natalia&apos;s standard so distinct.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-900 font-serif">
                  <th className="py-4 px-6 font-bold w-1/3">Cleaning Area / Standard</th>
                  <th className="py-4 px-6 font-bold text-stone-500 w-1/3">Typical Volume Franchise</th>
                  <th className="py-4 px-6 font-bold text-amber-900 bg-amber-50/60 w-1/3">NC Cleanup Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-900">{row.task}</td>
                    <td className="py-4 px-6 text-stone-600">{row.franchise}</td>
                    <td className="py-4 px-6 font-medium text-slate-950 bg-amber-50/30">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{row.nccleanup}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Specialty Add-Ons Matrix */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-wider font-semibold text-amber-800 mb-2">
              Available Add-Ons
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 font-medium tracking-tight">
              Specialized Deep Restorations
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
              Can be added to any routine or deep clean visit. We carry non-toxic specialized tools for each item.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_ADDONS.map((addon) => (
              <div
                key={addon.id}
                className="bg-[#FAF9F5] p-6 rounded-2xl border border-slate-200 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-lg font-bold text-slate-900">{addon.name}</h4>
                    <span className="font-tabular font-bold text-amber-800 text-sm">
                      +${addon.price}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{addon.description}</p>
                </div>
                <div className="pt-2 text-[11px] text-slate-500 font-mono flex items-center justify-between border-t border-slate-200/60">
                  <span>Duration: ~{addon.durationMinutes} mins</span>
                  <span className="text-emerald-700 font-semibold">Non-toxic formulas</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <Link
              to="/estimate"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors shadow-md"
            >
              <span>Build an Estimate with These Add-Ons</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
