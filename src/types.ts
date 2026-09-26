export type RegionKey = 'peel' | 'halton' | 'york' | 'durham';

export interface CityInfo {
  name: string;
  neighbourhoods: string[];
  travelZone: string;
}

export interface RegionData {
  id: RegionKey;
  name: string;
  shortDesc: string;
  cities: CityInfo[];
}

export type FrequencyType = 'weekly' | 'biweekly' | 'monthly' | 'onetime';

export interface ServiceAddon {
  id: string;
  name: string;
  description: string;
  price: number;
  durationMinutes: number;
}

export interface EstimateFormState {
  region: RegionKey;
  city: string;
  homeType: 'condo' | 'townhouse' | 'detached' | 'estate';
  sqft: number;
  bedrooms: number;
  bathrooms: number;
  frequency: FrequencyType;
  selectedAddons: string[];
  hasPets: boolean;
  specialSurfaces: boolean;
  fragranceFree: boolean;
}

export interface BookingSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  region: RegionKey;
  city: string;
  serviceType: string;
  frequency: string;
  sqft: number;
  estimatedPrice: string;
  preferredDate: string;
  preferredTimeOfDay: 'morning' | 'afternoon' | 'anytime';
  notes: string;
  createdAt: string;
}
