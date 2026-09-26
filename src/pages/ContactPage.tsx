import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, Calendar, Sparkles, Timer, Check, ArrowRight, Layers } from 'lucide-react';
import {
  REGIONS,
  BOOKING_SERVICES,
  BookingServiceItem,
  BOOKING_DURATION_OPTIONS,
  BookingDurationType,
  getSlotsForBookingDuration,
  getTimingSectionHeaderInfo,
} from '../data/cleaningData';
import { RegionKey } from '../types';
import { ServiceBar } from '../components/ServiceBar';

export const ContactPage: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('walkthrough');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    region: 'halton' as RegionKey,
    city: 'Oakville',
    bookingDuration: 'walkthrough' as BookingDurationType,
    preferredDate: '',
    preferredHourlySlot: '9 AM – 10 AM (9:00 AM – 10:00 AM)',
    notes: '',
  });

  const [activePeriodFilter, setActivePeriodFilter] = useState<'all' | 'morning' | 'afternoon' | 'evening'>('all');
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  const activeServiceObj = BOOKING_SERVICES.find((s) => s.id === selectedServiceId) || BOOKING_SERVICES[0];
  const selectedDurationObj = BOOKING_DURATION_OPTIONS.find((d) => d.id === formData.bookingDuration) || BOOKING_DURATION_OPTIONS[0];
  const currentDurationSlots = getSlotsForBookingDuration(formData.bookingDuration);
  const timingInfo = getTimingSectionHeaderInfo(formData.bookingDuration);

  const handleSelectService = (service: BookingServiceItem) => {
    setSelectedServiceId(service.id);
    if (service.id === 'walkthrough') {
      handleDurationChange('walkthrough');
    } else if (formData.bookingDuration === 'walkthrough') {
      handleDurationChange(service.suggestedDuration);
    }
  };

  const handleDurationChange = (newDuration: BookingDurationType) => {
    const slots = getSlotsForBookingDuration(newDuration);
    const defaultSlot = slots.find((s) => s.isPopular)?.slotWindow || slots[0]?.slotWindow || '';
    setFormData((prev) => ({
      ...prev,
      bookingDuration: newDuration,
      preferredHourlySlot: defaultSlot,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address || !formData.preferredDate) return;

    const code = `NC-${Math.floor(1000 + Math.random() * 9000)}`;
    setRefCode(code);
    setSubmitted(true);

    try {
      const existing = JSON.parse(localStorage.getItem('nc_cleanup_inquiries') || '[]');
      existing.push({
        ref: code,
        serviceName: activeServiceObj.name,
        serviceId: activeServiceObj.id,
        durationLabel: selectedDurationObj.label,
        ...formData,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('nc_cleanup_inquiries', JSON.stringify(existing));
    } catch {
      // fallback
    }
  };

  const filteredSlots = currentDurationSlots.filter((slot) => {
    if (activePeriodFilter === 'all') return true;
    return slot.period === activePeriodFilter;
  });

  return (
    <div className="bg-[#FAF9F5]">
      {/* Header */}
      <section className="pt-12 pb-16 border-b border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-200/80 text-xs font-semibold text-amber-900">
            <Timer className="w-3.5 h-3.5 text-amber-800" />
            <span>Direct Booking Studio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 font-medium tracking-tight">
            Book Services & Select Time Duration
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Choose your service from the dedicated Service Bar, then select your session duration separately. The timing section dynamically converts with exact AM/PM arrival windows.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Direct Contact Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Info Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Direct Contact & Route Inquiries
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Have a specific question about stone protection, routine schedules, or an immediate move-in deadline? Natalia and our senior dispatchers respond promptly.
                </p>

                <div className="space-y-4 text-xs sm:text-sm">
                  <a
                    href="tel:6475550198"
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF9F5] border border-slate-200 hover:border-slate-300 transition-colors group"
                  >
                    <Phone className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900 group-hover:text-amber-800 transition-colors">Direct Phone / Text</div>
                      <div className="text-slate-600 font-mono mt-0.5">(647) 555-0198</div>
                      <div className="text-[11px] text-slate-500 mt-1">Direct to route coordinator & dispatch</div>
                    </div>
                  </a>

                  <a
                    href="mailto:contact@nccleanup.ca"
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF9F5] border border-slate-200 hover:border-slate-300 transition-colors group"
                  >
                    <Mail className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900 group-hover:text-amber-800 transition-colors">Email Inquiries</div>
                      <div className="text-slate-600 font-mono mt-0.5">contact@nccleanup.ca</div>
                      <div className="text-[11px] text-slate-500 mt-1">Estimates, questions & invoices</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF9F5] border border-slate-200">
                    <Clock className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">Operating Windows</div>
                      <div className="text-slate-600 mt-0.5">Monday – Friday: 8:00 AM – 7:00 PM</div>
                      <div className="text-slate-600">Saturday: 8:30 AM – 4:30 PM</div>
                      <div className="text-slate-600">Sunday: Closed for Family & Rest</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF9F5] border border-slate-200">
                    <MapPin className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">Service Area Footprint</div>
                      <div className="text-slate-600 mt-0.5">Peel, Halton, York, and Durham Regions</div>
                      <div className="text-[11px] text-slate-500 mt-1">Mississauga, Oakville, Burlington, Vaughan, Markham, Pickering, and surrounding GTA communities.</div>
                    </div>
                  </div>
                </div>

                {/* Insurance Certificate Badge */}
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-900">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>Fully Insured & Bonded Protection</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-emerald-800">
                    NC Cleanup maintains $2,000,000 Commercial General Liability coverage and full bonding for residential properties across Ontario. Insurance certificates are provided with every quote upon request.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Scheduling Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-slate-900">
                    {activeServiceObj.name} Reserved!
                  </h3>
                  <p className="text-xs font-mono text-amber-800">
                    Booking Reference: <strong className="text-slate-900">{refCode}</strong>
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Natalia Cassimiro or our senior route manager will call/SMS you at <strong>{formData.phone}</strong> shortly to confirm your booking:
                  </p>
                  <div className="p-4 bg-[#FAF9F5] rounded-xl border border-slate-200 text-left text-xs max-w-md mx-auto space-y-2">
                    <div>✨ <strong>Service Booked (Service Bar):</strong> <span className="font-bold text-slate-900">{activeServiceObj.name}</span> <span className="text-[10px] ml-1 bg-amber-100 px-1.5 py-0.5 rounded text-amber-900 font-bold uppercase">{activeServiceObj.tag}</span></div>
                    <div>⏱ <strong>Selected Duration:</strong> <span className="font-semibold text-slate-900">{selectedDurationObj.label}</span> ({selectedDurationObj.subtitle})</div>
                    <div>📅 <strong>Date:</strong> {formData.preferredDate}</div>
                    <div>⏰ <strong>Scheduled Time Window:</strong> <span className="font-bold text-amber-900 font-mono">{formData.preferredHourlySlot}</span></div>
                    <div>📍 <strong>Address:</strong> {formData.address}, {formData.city}</div>
                    {selectedDurationObj.estimatedCostRange && (
                      <div className="font-semibold text-emerald-800 pt-1 border-t border-slate-200/60">
                        💵 <strong>Estimated Range:</strong> {selectedDurationObj.estimatedCostRange}
                      </div>
                    )}
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="cursor-pointer px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
                    >
                      Submit Another Booking
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* Step 1: Dedicated Service Bar */}
                  <div className="space-y-3">
                    <div className="border-b border-slate-200 pb-3 flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 flex items-center gap-1">
                          <Layers className="w-3.5 h-3.5 text-amber-700" />
                          <span>Step 1 of 4 &bull; Service Bar</span>
                        </span>
                        <h3 className="font-serif text-2xl font-bold text-slate-900 mt-0.5">
                          Select Service
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Choose what service you want to book from the bar (including Walkthrough, Routine, Deep Clean, and more).
                        </p>
                      </div>
                      <span className="text-[11px] text-amber-900 font-semibold bg-amber-100/80 px-2.5 py-1 rounded-full border border-amber-200">
                        Service Bar
                      </span>
                    </div>

                    <ServiceBar
                      selectedServiceId={selectedServiceId}
                      onSelectService={handleSelectService}
                      showDetails={true}
                    />
                  </div>

                  {/* Step 2: Separate Time Duration Selector */}
                  <div className="space-y-3 pt-5 border-t border-slate-200">
                    <div className="border-b border-slate-200 pb-3 flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-amber-700" />
                          <span>Step 2 of 4 &bull; Time Duration</span>
                        </span>
                        <h3 className="font-serif text-2xl font-bold text-slate-900 mt-0.5">
                          Select Time Duration (Separately)
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Choose your desired session length independently. Timing windows below dynamically convert to match.
                        </p>
                      </div>
                      <span className="text-[11px] text-amber-900 font-semibold bg-amber-100/80 px-2.5 py-1 rounded-full border border-amber-200">
                        Independent Duration
                      </span>
                    </div>

                    {/* Duration Selection Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                      {BOOKING_DURATION_OPTIONS.map((opt) => {
                        const isSelected = formData.bookingDuration === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => handleDurationChange(opt.id)}
                            className={`cursor-pointer p-3.5 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                              isSelected
                                ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-slate-900 -translate-y-0.5'
                                : 'bg-[#FAF9F5] text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-white'
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between gap-1 mb-1.5">
                                <span className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                                  {opt.label}
                                </span>
                                {opt.badge && (
                                  <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ${
                                    isSelected ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-amber-100 text-amber-900'
                                  }`}>
                                    {opt.badge}
                                  </span>
                                )}
                              </div>
                              <div className={`text-[11px] font-medium leading-snug ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                                {opt.subtitle}
                              </div>
                            </div>

                            <div className="mt-3 pt-2 border-t border-slate-200/50 flex items-center justify-between text-[10.5px]">
                              <span className={isSelected ? 'text-slate-300' : 'text-slate-500'}>
                                {opt.hours < 1 ? '15 mins' : `${opt.hours} hrs session`}
                              </span>
                              {opt.estimatedCostRange && (
                                <span className={`font-semibold ${isSelected ? 'text-amber-300' : 'text-emerald-700'}`}>
                                  {opt.estimatedCostRange}
                                </span>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 3: Date and Dynamic Converted Timing Section */}
                  <div className="space-y-3.5 pt-4 border-t border-slate-200">
                    <div className="flex items-center justify-between flex-wrap gap-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-amber-800" />
                        <span>Step 3 of 4 &bull; Select Date & Timing Section</span>
                      </span>
                      <span className="text-[11px] font-semibold text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded-full border border-amber-200">
                        {timingInfo.convertedBadge}
                      </span>
                    </div>

                    {/* Conversion Banner */}
                    <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/90 text-xs text-amber-950 flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <div className="font-bold text-amber-900">
                          {timingInfo.title}
                        </div>
                        <div className="text-[11px] text-amber-800">
                          {timingInfo.description}
                        </div>
                        <div className="font-mono text-[10px] text-amber-900/80 pt-0.5 font-semibold">
                          {timingInfo.exampleList}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Booking Date *
                        </label>
                        <input
                          type="date"
                          required
                          min={new Date().toISOString().split('T')[0]}
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Filter by Period:
                        </label>
                        <div className="flex gap-1 h-[38px] items-center">
                          {(['all', 'morning', 'afternoon', 'evening'] as const).map((period) => (
                            <button
                              key={period}
                              type="button"
                              onClick={() => setActivePeriodFilter(period)}
                              className={`cursor-pointer flex-1 py-2 text-[11px] rounded-lg capitalize transition-colors text-center font-medium ${
                                activePeriodFilter === period
                                  ? 'bg-slate-900 text-white font-semibold'
                                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                              }`}
                            >
                              {period}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Converted Time Slot Selector Grid */}
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-slate-700">
                        Select Converted Time Window ({formData.bookingDuration === '2hours' ? 'Converted: 9 AM–11 AM, 10 AM–12 PM, 11 AM–1 PM...' : formData.bookingDuration === 'halfday' ? 'Converted: 8 AM–12 PM, 9 AM–1 PM, 10 AM–2 PM...' : 'Hourly AM/PM Slots'}):
                      </label>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {filteredSlots.map((slot) => {
                          const isSelected = formData.preferredHourlySlot === slot.slotWindow;
                          return (
                            <button
                              key={slot.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, preferredHourlySlot: slot.slotWindow })}
                              className={`cursor-pointer p-3 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                                isSelected
                                  ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-1 ring-slate-900'
                                  : 'bg-[#FAF9F5] text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-white'
                              }`}
                            >
                              <div className="flex items-center justify-between gap-1 mb-1">
                                <span className={`text-[13px] sm:text-sm font-bold tracking-tight ${
                                  isSelected ? 'text-amber-300' : 'text-slate-900'
                                }`}>
                                  {slot.shortBadge}
                                </span>
                                {slot.isPopular && (
                                  <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ${
                                    isSelected ? 'bg-amber-400 text-slate-950' : 'bg-amber-100 text-amber-900'
                                  }`}>
                                    Popular
                                  </span>
                                )}
                              </div>

                              <div className={`text-xs font-medium leading-tight ${
                                isSelected ? 'text-white' : 'text-slate-700'
                              }`}>
                                {slot.displayRange}
                              </div>

                              <div className={`text-[10px] mt-2 pt-1 border-t capitalize flex items-center justify-between ${
                                isSelected ? 'border-slate-800 text-slate-300' : 'border-slate-200/70 text-slate-500'
                              }`}>
                                <span>{slot.period}</span>
                                <span className="font-mono text-[9px] font-semibold">
                                  {selectedDurationObj.hours < 1 ? '1 hr' : `${selectedDurationObj.hours} hrs`}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl text-[11px] text-amber-900 flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <strong>Duration:</strong> {selectedDurationObj.label} &bull; <strong>Window:</strong> <span className="font-bold text-amber-950 font-mono">{formData.preferredHourlySlot}</span>
                        </div>
                        <span className="font-semibold text-emerald-800">
                          {selectedDurationObj.estimatedCostRange || 'Free In-Home Consultation'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Contact and Location Details */}
                  <div className="space-y-3.5 pt-4 border-t border-slate-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      Step 4 of 4 &bull; Contact & Property Address
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Jessica Miller"
                          className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Phone Number (for SMS confirmation) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(905) 555-0143"
                          className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jessica@example.ca"
                          className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Municipality / City *
                        </label>
                        <select
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
                        >
                          {Object.entries(REGIONS).flatMap(([regionKey, region]) =>
                            region.cities.map((city) => (
                              <option key={`${regionKey}-${city.name}`} value={city.name}>
                                {city.name} ({region.name})
                              </option>
                            ))
                          )}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Street Address & Neighbourhood *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="e.g. 2100 Mississauga Road, Mississauga"
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Special Requests, Surface Types or Pet Notes (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="e.g. Natural stone counters, hardwood floors throughout, 1 friendly indoor cat, need priority focus on gourmet kitchen..."
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="cursor-pointer w-full py-4 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors shadow-md flex items-center justify-center gap-2"
                    >
                      <span>Confirm {selectedDurationObj.label} Reservation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="flex items-center justify-center gap-2 mt-2.5 text-xs text-slate-500">
                      <ShieldCheck className="w-4 h-4 text-emerald-700" />
                      <span>Zero upfront fee &bull; Fully Insured & Bonded with Natalia's Personal Guarantee</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
