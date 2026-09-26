import React, { useState, useEffect } from 'react';
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
import { X, Calendar, Clock, CheckCircle2, ShieldCheck, MapPin, Sparkles, Timer, Check, ArrowRight, Layers } from 'lucide-react';
import { ServiceBar } from './ServiceBar';

export interface PreloadedEstimateData {
  region: RegionKey;
  city: string;
  sqft: number;
  bedrooms: number;
  bathrooms: number;
  frequency: string;
  estimatedPriceRange: string;
  addons: string[];
  homeType: string;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preloadedData: PreloadedEstimateData | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preloadedData,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('walkthrough');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    region: 'halton' as RegionKey,
    city: 'Oakville',
    frequency: 'Bi-Weekly Service (Most Popular)',
    sqft: 2600,
    bookingDuration: 'walkthrough' as BookingDurationType,
    preferredDate: '',
    preferredHourlySlot: '9 AM – 10 AM (9:00 AM – 10:00 AM)',
    notes: '',
  });

  const [activePeriodFilter, setActivePeriodFilter] = useState<'all' | 'morning' | 'afternoon' | 'evening'>('all');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const activeServiceObj = BOOKING_SERVICES.find((s) => s.id === selectedServiceId) || BOOKING_SERVICES[0];
  const selectedDurationObj = BOOKING_DURATION_OPTIONS.find((d) => d.id === formData.bookingDuration) || BOOKING_DURATION_OPTIONS[0];
  const currentDurationSlots = getSlotsForBookingDuration(formData.bookingDuration);
  const timingInfo = getTimingSectionHeaderInfo(formData.bookingDuration);

  // Handle service bar selection
  const handleSelectService = (service: BookingServiceItem) => {
    setSelectedServiceId(service.id);
    if (service.id === 'walkthrough') {
      handleDurationChange('walkthrough');
    } else if (formData.bookingDuration === 'walkthrough') {
      handleDurationChange(service.suggestedDuration);
    }
  };

  // Handle changing duration and auto-syncing the slot
  const handleDurationChange = (newDuration: BookingDurationType) => {
    const slots = getSlotsForBookingDuration(newDuration);
    const defaultSlot = slots.find((s) => s.isPopular)?.slotWindow || slots[0]?.slotWindow || '';
    setFormData((prev) => ({
      ...prev,
      bookingDuration: newDuration,
      preferredHourlySlot: defaultSlot,
    }));
  };

  // Sync preloaded data when available
  useEffect(() => {
    if (preloadedData) {
      const suggestedDuration: BookingDurationType = preloadedData.sqft > 3500 ? 'fullday' : 'halfday';
      setSelectedServiceId('routine');
      const slots = getSlotsForBookingDuration(suggestedDuration);
      const defaultSlot = slots.find((s) => s.isPopular)?.slotWindow || slots[0]?.slotWindow || '';

      setFormData((prev) => ({
        ...prev,
        region: preloadedData.region,
        city: preloadedData.city,
        sqft: preloadedData.sqft,
        frequency: preloadedData.frequency,
        bookingDuration: suggestedDuration,
        preferredHourlySlot: defaultSlot,
      }));
    }
  }, [preloadedData]);

  if (!isOpen) return null;

  const filteredSlots = currentDurationSlots.filter((slot) => {
    if (activePeriodFilter === 'all') return true;
    return slot.period === activePeriodFilter;
  });

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your full name.';
    }

    if (!formData.phone.trim() || formData.phone.length < 8) {
      newErrors.phone = 'Valid phone number is required for SMS confirmation.';
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Valid email address is required.';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Please enter your street address or neighbourhood.';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date.';
    }

    if (!formData.preferredHourlySlot) {
      newErrors.preferredHourlySlot = 'Please select a time slot window.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const randomCode = `NC-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(randomCode);
    setIsSubmitted(true);

    try {
      const existing = JSON.parse(localStorage.getItem('nc_cleanup_inquiries') || '[]');
      existing.push({
        ref: randomCode,
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

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-fadeIn">
        {/* Top Header */}
        <div className="bg-[#FAF9F5] p-5 sm:p-6 border-b border-slate-200 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-amber-800 flex items-center gap-1.5">
              <Timer className="w-3.5 h-3.5 text-amber-700" />
              <span>Direct Booking Studio</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
              Book Services & Time Duration
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Select your service from the Service Bar, then choose your session duration separately. Arrival timing windows dynamically convert with AM/PM indicators.
            </p>
          </div>
          <button
            onClick={onClose}
            className="cursor-pointer p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[82vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-5 animate-fadeIn">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="font-serif text-2xl font-bold text-slate-900">
                  {activeServiceObj.name} Confirmed
                </h4>
                <p className="text-xs font-mono text-amber-800 mt-1">
                  Reference Code: <span className="font-bold">{bookingRef}</span>
                </p>
              </div>

              <div className="p-5 bg-[#FAF9F5] rounded-xl border border-slate-200 text-left text-xs sm:text-sm text-slate-700 space-y-2.5">
                <p>
                  Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Natalia Cassimiro or our senior route coordinator will reach out directly to your phone (<strong>{formData.phone}</strong>) within 2 business hours to confirm:
                </p>
                <div className="p-3.5 bg-white rounded-lg border border-slate-200/80 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Service Booked (Service Bar):</span>
                    <span className="font-bold text-slate-900">{activeServiceObj.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Selected Duration:</span>
                    <span className="font-bold text-slate-900">{selectedDurationObj.label} ({selectedDurationObj.subtitle})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Scheduled Time Window:</span>
                    <span className="font-bold text-amber-900">{formData.preferredHourlySlot}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Scheduled Date:</span>
                    <span className="font-medium text-slate-800">{formData.preferredDate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Address:</span>
                    <span className="font-medium text-slate-800">{formData.address}, {formData.city}</span>
                  </div>
                  {selectedDurationObj.estimatedCostRange && (
                    <div className="flex items-center justify-between pt-1.5 border-t border-slate-100">
                      <span className="text-slate-500">Estimated Investment:</span>
                      <span className="font-bold text-emerald-800 font-tabular">{selectedDurationObj.estimatedCostRange}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="text-xs text-slate-500 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Fully insured & bonded under Ontario commercial standards</span>
              </div>

              <button
                onClick={handleReset}
                className="cursor-pointer w-full py-3 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {preloadedData && (
                <div className="p-3 bg-amber-50/70 border border-amber-200/70 rounded-xl text-xs text-amber-900 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-700" />
                    <span>Calculated Scope: <strong>{preloadedData.estimatedPriceRange}</strong> ({preloadedData.frequency})</span>
                  </div>
                </div>
              )}

              {/* Step 1: Dedicated Service Bar */}
              <div className="space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-amber-700" />
                    <span>1. Service Bar &bull; Select Service</span>
                  </label>
                  <span className="text-[11px] text-amber-800 font-semibold bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/80">
                    Includes Walkthrough & All Services
                  </span>
                </div>

                <ServiceBar
                  selectedServiceId={selectedServiceId}
                  onSelectService={handleSelectService}
                  showDetails={true}
                />
              </div>

              {/* Step 2: Separate Time Duration Selection */}
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-700" />
                    <span>2. Select Time Duration (Separately)</span>
                  </label>
                  <span className="text-[11px] text-amber-800 font-semibold bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/80">
                    Walkthrough, 2h, 4h & 8h
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {BOOKING_DURATION_OPTIONS.map((opt) => {
                    const isSelected = formData.bookingDuration === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleDurationChange(opt.id)}
                        className={`cursor-pointer p-3 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                          isSelected
                            ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-1 ring-slate-900 -translate-y-0.5'
                            : 'bg-[#FAF9F5] text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-white'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-1 mb-1">
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

                        <div className="mt-2.5 pt-2 border-t border-slate-200/50 flex items-center justify-between text-[10px]">
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

              {/* Step 3: Date & Dynamic Converted Timing Section */}
              <div className="space-y-3.5 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-800" />
                    <span>3. Select Date & Timing Section</span>
                  </span>
                  <span className="text-[11px] text-amber-900 font-semibold bg-amber-100/80 px-2 py-0.5 rounded-full border border-amber-200">
                    {timingInfo.convertedBadge}
                  </span>
                </div>

                {/* Conversion Notice Banner */}
                <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200/90 text-xs text-amber-950 flex items-start gap-2.5">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className={`w-full px-3 py-2.5 text-xs border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white ${
                        errors.preferredDate ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                      }`}
                    />
                    {errors.preferredDate && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.preferredDate}</p>
                    )}
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

                {/* Converted Slot Selector Grid */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-semibold text-slate-700">
                      Choose Your Time Window ({formData.bookingDuration === '2hours' ? 'Converted: 9 AM–11 AM, 10 AM–12 PM, 11 AM–1 PM...' : formData.bookingDuration === 'halfday' ? 'Converted: 8 AM–12 PM, 9 AM–1 PM, 10 AM–2 PM...' : 'Hourly AM/PM Slots'}):
                    </label>
                    <span className="text-[11px] text-slate-500">
                      {filteredSlots.length} available slots
                    </span>
                  </div>

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
                          {/* Top Row: Short badge with AM/PM (e.g. 9 AM – 11 AM, 11 AM – 12 PM) */}
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

                          {/* Middle: Full time range */}
                          <div className={`text-xs font-medium leading-tight ${
                            isSelected ? 'text-white' : 'text-slate-700'
                          }`}>
                            {slot.displayRange}
                          </div>

                          {/* Bottom: Period & duration indicator */}
                          <div className={`text-[10px] mt-2 pt-1 border-t capitalize flex items-center justify-between ${
                            isSelected ? 'border-slate-800 text-slate-300' : 'border-slate-200/70 text-slate-500'
                          }`}>
                            <span>{slot.period}</span>
                            <span className="font-mono text-[9px] font-semibold">
                              {selectedDurationObj.hours < 1 ? '1 hr window' : `${selectedDurationObj.hours} hrs session`}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {errors.preferredHourlySlot && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.preferredHourlySlot}</p>
                  )}

                  {/* Summary Bar */}
                  <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl text-[11px] text-amber-900 flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <strong>Duration:</strong> {selectedDurationObj.label} &bull; <strong>Converted Slot:</strong> <span className="font-bold text-amber-950 font-mono">{formData.preferredHourlySlot}</span>
                    </div>
                    <span className="font-semibold text-emerald-800">
                      {selectedDurationObj.estimatedCostRange || 'Free In-Home Consultation'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 4: Contact & Property Details */}
              <div className="space-y-3.5 pt-4 border-t border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  4. Contact & Home Details
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-3 py-2 text-xs border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white ${
                        errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number (for SMS confirmation) *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(905) 555-0192"
                      className={`w-full px-3 py-2 text-xs border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white ${
                        errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@example.com"
                      className={`w-full px-3 py-2 text-xs border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white ${
                        errors.email ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Municipality / City *
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
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
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="e.g. 1428 Lakeshore Road East, Oakville"
                    className={`w-full px-3 py-2 text-xs border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white ${
                      errors.address ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                    }`}
                  />
                  {errors.address && <p className="text-[11px] text-red-600 mt-1">{errors.address}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Specific Priorities, Pets, or Custom Surfaces (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. 2 friendly golden retrievers, focus on honed Carrara marble kitchen island and steam-cleaning master bath glass..."
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white resize-none"
                  />
                </div>
              </div>

              {/* Bottom Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="cursor-pointer w-full py-3.5 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <span>Confirm {selectedDurationObj.label} Reservation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center justify-center gap-2 mt-2 text-[11px] text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>No upfront payment required &bull; $2M Insured & Bonded Protection</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
