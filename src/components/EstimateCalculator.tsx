import React, { useState, useMemo } from 'react';
import { REGIONS, SERVICE_ADDONS } from '../data/cleaningData';
import { RegionKey, FrequencyType, EstimateFormState } from '../types';
import { Calculator, Sparkles, Check, Clock, Users, ShieldCheck, ArrowRight } from 'lucide-react';

interface EstimateCalculatorProps {
  onProceedToBooking: (estimateData: {
    region: RegionKey;
    city: string;
    sqft: number;
    bedrooms: number;
    bathrooms: number;
    frequency: string;
    estimatedPriceRange: string;
    addons: string[];
    homeType: string;
  }) => void;
}

export const EstimateCalculator: React.FC<EstimateCalculatorProps> = ({ onProceedToBooking }) => {
  const [formState, setFormState] = useState<EstimateFormState>({
    region: 'halton',
    city: 'Oakville',
    homeType: 'detached',
    sqft: 2600,
    bedrooms: 3,
    bathrooms: 2.5,
    frequency: 'biweekly',
    selectedAddons: [],
    hasPets: true,
    specialSurfaces: false,
    fragranceFree: false,
  });

  // Handle region change and update default city for that region
  const handleRegionChange = (newRegion: RegionKey) => {
    const regionObj = REGIONS.find((r) => r.id === newRegion);
    const defaultCity = regionObj?.cities[0]?.name || '';
    setFormState((prev) => ({
      ...prev,
      region: newRegion,
      city: defaultCity,
    }));
  };

  const currentRegionObj = useMemo(() => {
    return REGIONS.find((r) => r.id === formState.region) || REGIONS[0];
  }, [formState.region]);

  const toggleAddon = (addonId: string) => {
    setFormState((prev) => {
      const exists = prev.selectedAddons.includes(addonId);
      return {
        ...prev,
        selectedAddons: exists
          ? prev.selectedAddons.filter((id) => id !== addonId)
          : [...prev.selectedAddons, addonId],
      };
    });
  };

  // Price and duration calculation engine
  const calculation = useMemo(() => {
    const { sqft, bathrooms, frequency, selectedAddons } = formState;

    // Base estimated effort in hours for a single-person equivalent
    let basePersonHours = 2.0;

    if (sqft <= 1000) basePersonHours = 2.5;
    else if (sqft <= 1800) basePersonHours = 3.5;
    else if (sqft <= 2600) basePersonHours = 4.5;
    else if (sqft <= 3500) basePersonHours = 6.0;
    else if (sqft <= 4500) basePersonHours = 7.5;
    else basePersonHours = 9.0;

    // Additional bath factor
    basePersonHours += Math.max(0, bathrooms - 2) * 0.5;

    // Addons additional hours
    let addonHours = 0;
    let addonTotalCost = 0;
    selectedAddons.forEach((id) => {
      const addon = SERVICE_ADDONS.find((a) => a.id === id);
      if (addon) {
        addonHours += addon.durationMinutes / 60;
        addonTotalCost += addon.price;
      }
    });

    const totalPersonHours = basePersonHours + addonHours;

    // Team size
    const crewSize = totalPersonHours > 4.5 ? 2 : 1;
    const estimatedClockHours = Math.round((totalPersonHours / crewSize) * 2) / 2;

    // Hourly rate baseline
    const baselineRatePerHour = 52;
    let baseServiceCost = basePersonHours * baselineRatePerHour;

    // Frequency multipliers / discounts
    let frequencyDiscountFactor = 1.0;
    let frequencyLabel = 'Bi-Weekly Service';
    if (frequency === 'weekly') {
      frequencyDiscountFactor = 0.85; // 15% discount for weekly continuity
      frequencyLabel = 'Weekly Service (Best Rate)';
    } else if (frequency === 'biweekly') {
      frequencyDiscountFactor = 0.90; // 10% discount
      frequencyLabel = 'Bi-Weekly Service (Most Popular)';
    } else if (frequency === 'monthly') {
      frequencyDiscountFactor = 1.0;
      frequencyLabel = 'Monthly Service';
    } else {
      frequencyDiscountFactor = 1.25; // One-time intensive initial clean
      frequencyLabel = 'One-Time Deep Clean';
    }

    const calculatedBase = Math.round(baseServiceCost * frequencyDiscountFactor);
    const calculatedTotal = calculatedBase + addonTotalCost;

    const lowRange = Math.round(calculatedTotal * 0.95);
    const highRange = Math.round(calculatedTotal * 1.05);

    let durationBenchmark = 'Half Day (4 Hours)';
    if (estimatedClockHours <= 2.5) {
      durationBenchmark = '2 Hours Session';
    } else if (estimatedClockHours <= 5) {
      durationBenchmark = 'Half Day (4 Hours)';
    } else {
      durationBenchmark = 'Full Day (8 Hours)';
    }

    return {
      lowRange,
      highRange,
      crewSize,
      estimatedClockHours: Math.max(1.5, estimatedClockHours),
      frequencyLabel,
      durationBenchmark,
      addonCount: selectedAddons.length,
      priceString: `$${lowRange} – $${highRange}`,
    };
  }, [formState]);

  const handleProceed = () => {
    onProceedToBooking({
      region: formState.region,
      city: formState.city,
      sqft: formState.sqft,
      bedrooms: formState.bedrooms,
      bathrooms: formState.bathrooms,
      frequency: calculation.frequencyLabel,
      estimatedPriceRange: calculation.priceString,
      addons: formState.selectedAddons,
      homeType: formState.homeType,
    });
  };

  return (
    <section id="custom-estimate" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-wider font-semibold text-amber-800 mb-2 flex items-center gap-1.5">
            <Calculator className="w-4 h-4" />
            <span>Interactive Quote Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 font-medium tracking-tight">
            Tailor an estimate for your residence.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-light">
            Adjust your home specifications below. We provide clear, transparent guidance based on real square footage and surface scope across Peel, Halton, York, and Durham.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (8 Cols) */}
          <div className="lg:col-span-8 bg-[#FAF9F5] border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-8">
            {/* Step 1: Regional Location */}
            <div className="space-y-3">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                1. Select Region & Municipality
              </label>
              
              {/* Region Segmented Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {REGIONS.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => handleRegionChange(r.id)}
                    className={`cursor-pointer text-left p-3 rounded-xl border text-xs transition-all ${
                      formState.region === r.id
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-semibold">{r.name}</div>
                    <div className={`text-[11px] truncate mt-0.5 ${formState.region === r.id ? 'text-slate-300' : 'text-slate-500'}`}>
                      {r.shortDesc}
                    </div>
                  </button>
                ))}
              </div>

              {/* City selector within chosen region */}
              <div className="pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-600 mb-1.5">
                  <span>Municipality / City in {currentRegionObj.name}:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentRegionObj.cities.map((city) => (
                    <button
                      key={city.name}
                      type="button"
                      onClick={() => setFormState((prev) => ({ ...prev, city: city.name }))}
                      className={`cursor-pointer px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        formState.city === city.name
                          ? 'bg-amber-800 text-white font-semibold'
                          : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {city.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 2: Home Specifications */}
            <div className="space-y-4 pt-6 border-t border-slate-200">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                2. Home Size & Layout
              </label>

              {/* Home Type Radio Group */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'condo', label: 'Condo / Loft' },
                  { id: 'townhouse', label: 'Townhouse' },
                  { id: 'detached', label: 'Detached Home' },
                  { id: 'estate', label: 'Custom Estate' },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() =>
                      setFormState((prev) => ({
                        ...prev,
                        homeType: type.id as any,
                        // Set sensible defaults if changing home type
                        sqft: type.id === 'condo' ? 950 : type.id === 'townhouse' ? 1800 : type.id === 'detached' ? 2800 : 4500,
                      }))
                    }
                    className={`cursor-pointer py-2.5 px-3 rounded-lg text-xs font-medium text-center border transition-all ${
                      formState.homeType === type.id
                        ? 'bg-white text-slate-900 border-amber-800 shadow-xs ring-1 ring-amber-800 font-semibold'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>

              {/* Square Footage Slider with Visual Feedback */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700 font-medium">Approximate Interior Size</span>
                  <span className="font-tabular font-bold text-amber-800 text-base">
                    {formState.sqft.toLocaleString()} sq.ft.
                  </span>
                </div>
                <input
                  type="range"
                  min="600"
                  max="6000"
                  step="100"
                  value={formState.sqft}
                  onChange={(e) => setFormState((prev) => ({ ...prev, sqft: Number(e.target.value) }))}
                  className="w-full accent-amber-800 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  aria-label="Adjust square footage"
                />
                <div className="flex justify-between text-[11px] text-slate-600 font-tabular">
                  <span>600 sq.ft.</span>
                  <span>2,000 sq.ft.</span>
                  <span>3,500 sq.ft.</span>
                  <span>6,000+ sq.ft.</span>
                </div>
              </div>

              {/* Bedrooms & Bathrooms Counters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-700">Bedrooms:</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setFormState((prev) => ({ ...prev, bedrooms: Math.max(1, prev.bedrooms - 1) }))}
                      className="cursor-pointer w-7 h-7 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center text-sm"
                      aria-label="Decrease bedrooms"
                    >
                      -
                    </button>
                    <span className="w-6 text-center font-tabular font-bold text-slate-900 text-sm">
                      {formState.bedrooms}
                    </span>
                    <button
                      type="button"
                      onClick={() => setFormState((prev) => ({ ...prev, bedrooms: Math.min(8, prev.bedrooms + 1) }))}
                      className="cursor-pointer w-7 h-7 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center text-sm"
                      aria-label="Increase bedrooms"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-700">Bathrooms:</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setFormState((prev) => ({ ...prev, bathrooms: Math.max(1, prev.bathrooms - 0.5) }))}
                      className="cursor-pointer w-7 h-7 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center text-sm"
                      aria-label="Decrease bathrooms"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-tabular font-bold text-slate-900 text-sm">
                      {formState.bathrooms}
                    </span>
                    <button
                      type="button"
                      onClick={() => setFormState((prev) => ({ ...prev, bathrooms: Math.min(8, prev.bathrooms + 0.5) }))}
                      className="cursor-pointer w-7 h-7 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center text-sm"
                      aria-label="Increase bathrooms"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Frequency / Cadence */}
            <div className="space-y-3 pt-6 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  3. Cleaning Frequency
                </label>
                <span className="text-xs text-amber-800 font-medium">Recurring visits save 10%–15%</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'weekly' as FrequencyType, title: 'Weekly', badge: 'Save 15%' },
                  { id: 'biweekly' as FrequencyType, title: 'Bi-Weekly', badge: 'Most Popular' },
                  { id: 'monthly' as FrequencyType, title: 'Monthly', badge: 'Every 4 Wks' },
                  { id: 'onetime' as FrequencyType, title: 'One-Time', badge: 'Deep Reset' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFormState((prev) => ({ ...prev, frequency: item.id }))}
                    className={`cursor-pointer p-3 rounded-xl border text-left transition-all ${
                      formState.frequency === item.id
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-semibold text-xs">{item.title}</div>
                    <div className={`text-[10px] mt-0.5 ${formState.frequency === item.id ? 'text-amber-300' : 'text-amber-800 font-medium'}`}>
                      {item.badge}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Optional Add-ons & Specific Home Needs */}
            <div className="space-y-3 pt-6 border-t border-slate-200">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                4. Specialized Add-ons & Materials
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SERVICE_ADDONS.map((addon) => {
                  const isChecked = formState.selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`cursor-pointer text-left p-3 rounded-xl border transition-all flex items-start justify-between gap-3 ${
                        isChecked
                          ? 'bg-amber-50/60 border-amber-800/80 ring-1 ring-amber-800/40'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="text-xs font-semibold text-slate-900 flex items-center gap-1.5">
                          <span>{addon.name}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-snug">
                          {addon.description}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-tabular font-semibold text-xs text-slate-900">
                          +${addon.price}
                        </span>
                        <div className={`w-4 h-4 rounded mt-1 ml-auto flex items-center justify-center text-xs ${
                          isChecked ? 'bg-amber-800 text-white' : 'border border-slate-300'
                        }`}>
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Extra Household Toggle Flags */}
              <div className="flex flex-wrap gap-4 pt-3 text-xs text-slate-700">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formState.hasPets}
                    onChange={(e) => setFormState((prev) => ({ ...prev, hasPets: e.target.checked }))}
                    className="rounded text-amber-800 focus:ring-amber-800 cursor-pointer"
                  />
                  <span>Pets in home (dander HEPA extraction included)</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formState.fragranceFree}
                    onChange={(e) => setFormState((prev) => ({ ...prev, fragranceFree: e.target.checked }))}
                    className="rounded text-amber-800 focus:ring-amber-800 cursor-pointer"
                  />
                  <span>Fragrance-free / Plant-based eco only</span>
                </label>
              </div>
            </div>
          </div>

          {/* Real-Time Summary Column (4 Cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-4">
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-amber-400">
                  Estimated Investment
                </span>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1 font-tabular">
                  {calculation.priceString}
                  <span className="text-xs font-normal text-slate-400 ml-1.5 font-sans">
                    / visit
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Based on {formState.sqft.toLocaleString()} sq.ft. · {calculation.frequencyLabel}
                </div>
              </div>

              {/* Visit Metrics */}
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Estimated Duration:</span>
                  </span>
                  <span className="font-tabular font-semibold text-white">
                    ~{calculation.estimatedClockHours} Hours
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Session Format:</span>
                  </span>
                  <span className="font-semibold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded text-[11px]">
                    {calculation.durationBenchmark}
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    <span>Recommended Team:</span>
                  </span>
                  <span className="font-semibold text-white">
                    {calculation.crewSize === 2 ? '2-Person Professional Crew' : '1 Dedicated Specialist'}
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Municipality Service:</span>
                  </span>
                  <span className="font-semibold text-amber-200">
                    {formState.city} ({currentRegionObj.name})
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Insurance Coverage:</span>
                  </span>
                  <span className="text-emerald-400 font-semibold">Fully Insured & Bonded</span>
                </div>
              </div>

              {/* Transparent Disclaimer */}
              <div className="p-3 bg-slate-800/80 rounded-xl text-[11px] text-slate-300 leading-relaxed border border-slate-700/60">
                <strong className="text-white block mb-0.5">The NC Walkthrough Commitment:</strong>
                Every home has unique architecture. Natalia confirms your exact guaranteed quote in person during a quick 15-minute walkthrough. Zero surprises or hidden add-ons.
              </div>

              {/* Action Button */}
              <button
                onClick={handleProceed}
                className="cursor-pointer w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-amber-600 hover:bg-amber-500 active:scale-98 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-md group"
              >
                <span>Schedule Walkthrough with This Scope</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="text-[11px] text-center text-slate-400">
                No credit card required · Free 15-minute consultation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
