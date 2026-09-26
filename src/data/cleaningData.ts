import { RegionData, ServiceAddon } from '../types';

export const REGIONS: RegionData[] = [
  {
    id: 'peel',
    name: 'Peel Region',
    shortDesc: 'Mississauga, Brampton & Caledon',
    cities: [
      { name: 'Mississauga', neighbourhoods: ['Port Credit', 'Lorne Park', 'Mineola', 'Erin Mills', 'Streetsville', 'City Centre', 'Meadowvale'], travelZone: 'Primary Hub' },
      { name: 'Brampton', neighbourhoods: ['Castlemore', 'Heart Lake', 'Downtown', 'Credit Valley', 'Bramalea'], travelZone: 'Daily Route' },
      { name: 'Caledon', neighbourhoods: ['Bolton', 'Caledon East', 'Inglewood', 'Palgrave', 'Cheltenham'], travelZone: 'Estate Route' },
    ],
  },
  {
    id: 'halton',
    name: 'Halton Region',
    shortDesc: 'Oakville, Burlington & Milton',
    cities: [
      { name: 'Oakville', neighbourhoods: ['Old Oakville', 'Morrison', 'Glen Abbey', 'Bronte Harbour', 'Joshua Creek', 'River Oaks'], travelZone: 'Primary Hub' },
      { name: 'Burlington', neighbourhoods: ['Downtown / Waterfront', 'Roseland', 'Tyandaga', 'Alton Village', 'Millcroft', 'Aldershot'], travelZone: 'Primary Hub' },
      { name: 'Milton', neighbourhoods: ['Dorset Park', 'Hawthorne Village', 'Bronte Meadows', 'Timberlea', 'Campbellville'], travelZone: 'Daily Route' },
      { name: 'Halton Hills', neighbourhoods: ['Georgetown', 'Acton', 'Glen Williams', 'Limehouse'], travelZone: 'Scheduled' },
    ],
  },
  {
    id: 'york',
    name: 'York Region',
    shortDesc: 'Vaughan, Richmond Hill, Markham & Aurora',
    cities: [
      { name: 'Vaughan', neighbourhoods: ['Kleinburg', 'Woodbridge', 'Maple', 'Thornhill', 'Patterson', 'Vellore Village'], travelZone: 'Primary Hub' },
      { name: 'Richmond Hill', neighbourhoods: ['Bayview Hill', 'Jefferson', 'Oak Ridges', 'Mill Pond', 'Crosby'], travelZone: 'Daily Route' },
      { name: 'Markham', neighbourhoods: ['Unionville', 'Angus Glen', 'Cachet', 'Wismer', 'Cornell', 'Berczy'], travelZone: 'Daily Route' },
      { name: 'Aurora & Newmarket', neighbourhoods: ['Aurora Highlands', 'St. Andrew\'s', 'Stonehaven', 'Summerhill', 'Bogarttown'], travelZone: 'Scheduled' },
    ],
  },
  {
    id: 'durham',
    name: 'Durham Region',
    shortDesc: 'Pickering, Ajax, Whitby & Oshawa',
    cities: [
      { name: 'Pickering', neighbourhoods: ['Dunbarton', 'Amberlea', 'Rouge Park', 'Liverpool', 'Frenchman\'s Bay'], travelZone: 'Daily Route' },
      { name: 'Ajax', neighbourhoods: ['Duffins Bay', 'Discovery Bay', 'Carruthers Creek', 'Midtown'], travelZone: 'Daily Route' },
      { name: 'Whitby', neighbourhoods: ['Brooklin', 'Port Whitby', 'Rolling Acres', 'Blue Grass Meadows'], travelZone: 'Daily Route' },
      { name: 'Oshawa', neighbourhoods: ['Samac', 'Centennial', 'Taunton', 'Kedron'], travelZone: 'Scheduled' },
    ],
  },
];

export const SERVICE_ADDONS: ServiceAddon[] = [
  {
    id: 'oven',
    name: 'Deep Oven & Range Interior',
    description: 'Baked-on grease removal, rack degreasing, and glass door clarity using non-toxic fume-free agents.',
    price: 65,
    durationMinutes: 45,
  },
  {
    id: 'fridge',
    name: 'Refrigerator & Freezer Scrub',
    description: 'Full bin removal, sanitize interior seals, shelf-by-shelf washing, and odor neutralization.',
    price: 60,
    durationMinutes: 40,
  },
  {
    id: 'windows',
    name: 'Interior Windows & Tracks',
    description: 'Streak-free interior pane wash, vacuuming track grit, and wiping dust-trapping sills.',
    price: 85,
    durationMinutes: 60,
  },
  {
    id: 'baseboards',
    name: 'Hand-Detailed Baseboards & Trim',
    description: 'Hands-and-knees microfiber wash along every perimeter, crown molding, and door frame.',
    price: 75,
    durationMinutes: 60,
  },
  {
    id: 'cabinets',
    name: 'Interior Cabinet Dust & Wipe',
    description: 'Empty cabinet shelf wiping, pantry reorganization wipe-down, and hinge dust extraction.',
    price: 90,
    durationMinutes: 75,
  },
];

export const TESTIMONIALS = [
  {
    quote: "With two young kids and a demanding career in Oakville, our home was constantly in survival mode. Natalia didn't just clean—she transformed our weekends. Coming home on a Friday after NC Cleanup has been through is the best feeling of the week.",
    author: "Elena M. & David V.",
    location: "Oakville (Joshua Creek)",
    property: "3,400 sq.ft. Detached · Bi-Weekly",
    highlight: "Attention to high-end marble & punctuality",
  },
  {
    quote: "Most cleaning services send different people every week who rush through and skip the baseboards. Natalia and her team have been with us for two years. They treat our home with the exact same care they would give their own. Fully trustworthy.",
    author: "Marcus Thorne",
    location: "Mississauga (Lorne Park)",
    property: "4,200 sq.ft. Residence · Weekly",
    highlight: "Consistent 2-person crew & respectful handling",
  },
  {
    quote: "We have unsealed hardwood and imported quartzite that other cleaners damaged in the past. Natalia listened carefully, inspected every surface during the initial walkthrough, and uses customized, safe products. Flawless work every single time.",
    author: "Dr. Sandra Chen",
    location: "Vaughan (Kleinburg)",
    property: "4,800 sq.ft. Custom Estate · Bi-Weekly",
    highlight: "Specialized material safety & insured peace of mind",
  },
  {
    quote: "When moving into our new home in Pickering, we needed a deep clean that wasn't just surface gloss. NC Cleanup scrubbed inside every drawer, vent, and fixture. You could literally breathe the difference when you walked through the door.",
    author: "Tariq & Farah K.",
    location: "Pickering (Dunbarton)",
    property: "2,800 sq.ft. Move-In Deep Clean",
    highlight: "Visible results from the front door",
  },
];

export const BEFORE_AFTER_ITEMS = [
  {
    id: 'kitchen',
    title: 'Gourmet Gas Range & Backsplash',
    area: 'Kitchen Detail',
    description: 'Heavy grease buildup on cast-iron grates and tile grout restored to factory shine without harsh aerosol fumes.',
    beforeLabel: 'Heavy oil film, burnt burner rings & dust accumulation',
    afterLabel: 'Pristine brushed stainless, degreased grates & spotless grout lines',
  },
  {
    id: 'bathroom',
    title: 'Frameless Glass Shower & Calacatta Marble',
    area: 'Primary En-Suite',
    description: 'Hard water scale and soap film dissolved using stone-safe pH-neutral chelating agents, leaving streak-free glass.',
    beforeLabel: 'Cloudy hard-water etching & soap residue',
    afterLabel: 'Optical crystal-clear glass & hand-polished nickel hardware',
  },
  {
    id: 'living',
    title: 'Architectural Baseboards & Hardwood Perimeter',
    area: 'Living & Dining Room',
    description: 'Edge-to-edge hand detail removing scuff marks, dust nests behind furniture, and heating vent lint.',
    beforeLabel: 'Grey perimeter dust lines & scuffed white trims',
    afterLabel: 'Hand-wiped crisp moldings & radiant wood luster',
  },
];

export const FAQ_ITEMS = [
  {
    question: "Is NC Cleanup fully insured and bonded?",
    answer: "Yes, completely. NC Cleanup holds comprehensive commercial general liability insurance and bonded coverage throughout Ontario. We treat every home with utmost care, and in the rare event of an accident, your home and valuable property are 100% protected. Peace of mind is foundational to how we operate.",
  },
  {
    question: "Why do you not offer standard fixed packages?",
    answer: "Every client lives differently, and no two homes share the same floor plan, surface finishes, or family rhythms. Rigid packages either overcharge for rooms you don't use or skip the high-traffic areas you care about most. We begin with a personalized walkthrough (virtual or in-person) to listen, inspect your unique surfaces (marble, hardwood, glass, custom millwork), and create a custom cleaning plan built strictly around your lifestyle.",
  },
  {
    question: "Which areas in the Greater Toronto Area do you serve?",
    answer: "We regularly service private residences across four core regions: Peel Region (Mississauga, Brampton, Caledon), Halton Region (Oakville, Burlington, Milton, Georgetown), York Region (Vaughan, Richmond Hill, Markham, Aurora, Newmarket), and Durham Region (Pickering, Ajax, Whitby, Oshawa). If your property is just outside these boundaries, contact us and we will confirm scheduling.",
  },
  {
    question: "Do I need to supply cleaning supplies, vacuums, or equipment?",
    answer: "We arrive fully equipped with professional-grade HEPA filtration vacuums, color-coded microfiber systems (preventing cross-contamination between bathrooms and kitchens), and premium cleaning agents. If you have specific preferences—such as plant-based fragrance-free formulas or owner-supplied specialty wood oils—we gladly accommodate them at no extra charge.",
  },
  {
    question: "How do you handle homes with pets?",
    answer: "We love animals and have years of experience in pet-friendly residences. During our initial walkthrough, we learn about your pets' names, personalities, and where they feel most comfortable while we work. We use pet-safe, non-toxic products and HEPA vacuums that capture dander without redistributing dust.",
  },
  {
    question: "What happens during the initial in-home walkthrough?",
    answer: "Natalia or a senior team lead visits your home for 15-20 minutes. We walk through your priority areas, review any delicate stones or custom finishes, note your scheduling preferences, and answer any questions. You receive an itemized, transparent quote with zero pressure or hidden fees.",
  },
];

export interface HourlySlot {
  id: string;
  timeLabel: string;
  shortBadge: string; // e.g. "9 AM – 11 AM", "10 AM – 12 PM", "11 AM – 1 PM", "8 AM – 12 PM", "9 AM – 1 PM"
  displayRange: string; // e.g. "9:00 AM – 11:00 AM"
  slotWindow: string; // e.g. "9 AM – 11 AM (9:00 AM – 11:00 AM)"
  period: 'morning' | 'afternoon' | 'evening';
  isPopular?: boolean;
}

export type BookingDurationType = 'walkthrough' | '2hours' | 'halfday' | 'fullday';

export interface BookingDurationOption {
  id: BookingDurationType;
  label: string;
  hours: number;
  subtitle: string;
  idealFor: string;
  badge?: string;
  estimatedCostRange?: string;
}

export const BOOKING_DURATION_OPTIONS: BookingDurationOption[] = [
  {
    id: 'walkthrough',
    label: '15-Min Walkthrough',
    hours: 0.25,
    subtitle: 'Complimentary In-Home Consultation',
    idealFor: 'Inspect surfaces, discuss custom scope, receive locked quote',
    badge: '100% Free',
  },
  {
    id: '2hours',
    label: '2 Hours Session',
    hours: 2,
    subtitle: 'Priority Focus Reset',
    idealFor: 'Gourmet kitchen & primary bath focus, or smaller condo',
    badge: 'Quick Focus',
    estimatedCostRange: '$110 – $130',
  },
  {
    id: 'halfday',
    label: 'Half Day (4 Hours)',
    hours: 4,
    subtitle: 'Comprehensive Living Care',
    idealFor: 'Full home routine reset or intensive single-floor deep clean',
    badge: 'Most Popular',
    estimatedCostRange: '$210 – $240',
  },
  {
    id: 'fullday',
    label: 'Full Day (8 Hours)',
    hours: 8,
    subtitle: 'Full Estate Deep Clean',
    idealFor: 'Large residences, move-in / move-out, complete architectural reset',
    badge: 'Total Reset',
    estimatedCostRange: '$390 – $440',
  },
];

export interface BookingServiceItem {
  id: string;
  name: string;
  shortName: string;
  tag: string;
  badge?: string;
  description: string;
  suggestedDuration: BookingDurationType;
  icon: 'walkthrough' | 'routine' | 'deep' | 'movein' | 'reno' | 'focus';
}

export const BOOKING_SERVICES: BookingServiceItem[] = [
  {
    id: 'walkthrough',
    name: 'In-Home Walkthrough',
    shortName: 'Walkthrough',
    tag: '100% Free',
    badge: 'Complimentary',
    description: '15-minute in-home consultation to assess surfaces, take notes & provide an exact locked quote with zero obligation.',
    suggestedDuration: 'walkthrough',
    icon: 'walkthrough',
  },
  {
    id: 'routine',
    name: 'Routine Living Care',
    shortName: 'Routine Care',
    tag: 'Weekly / Bi-Weekly',
    badge: 'Most Popular',
    description: 'Ongoing recurring residential upkeep with dedicated consistent cleaners, rotating deeper tasks so your home stays pristine.',
    suggestedDuration: 'halfday',
    icon: 'routine',
  },
  {
    id: 'deep',
    name: 'Architectural Deep Clean',
    shortName: 'Deep Clean',
    tag: 'Intensive Reset',
    badge: 'Top-To-Bottom',
    description: 'Top-to-bottom architectural scrub addressing neglected perimeters, hand-washed baseboards, stone polishing, and grout revival.',
    suggestedDuration: 'halfday',
    icon: 'deep',
  },
  {
    id: 'movein',
    name: 'Move-In & Handover Clean',
    shortName: 'Move-In / Out',
    tag: 'Barefoot Ready',
    badge: 'Empty Home',
    description: 'Deep sanitization of empty cabinets, pantry shelves, refrigerator/freezer bins, closet organizers, and baseboards before moving in.',
    suggestedDuration: 'fullday',
    icon: 'movein',
  },
  {
    id: 'reno',
    name: 'Post-Renovation Care',
    shortName: 'Post-Renovation',
    tag: 'Fine Dust Removal',
    badge: 'Specialized Extraction',
    description: 'HEPA multi-stage extraction of airborne drywall powder, window track grit, paint specks, fixture residue, and non-toxic surface polishing.',
    suggestedDuration: 'fullday',
    icon: 'reno',
  },
  {
    id: 'focus',
    name: 'Targeted Focus Session',
    shortName: 'Targeted Focus',
    tag: 'Priority Zones',
    badge: 'Kitchen & Bath',
    description: 'High-intensity targeted clean directed exclusively at high-traffic zones like chef’s kitchen, master ensuite, or condo living areas.',
    suggestedDuration: '2hours',
    icon: 'focus',
  },
];

export const HOURLY_TIME_SLOTS: HourlySlot[] = [
  { id: '08:00', timeLabel: '8:00 AM', shortBadge: '8 AM – 9 AM', displayRange: '8:00 AM – 9:00 AM', slotWindow: '8 AM – 9 AM (8:00 AM – 9:00 AM)', period: 'morning' },
  { id: '09:00', timeLabel: '9:00 AM', shortBadge: '9 AM – 10 AM', displayRange: '9:00 AM – 10:00 AM', slotWindow: '9 AM – 10 AM (9:00 AM – 10:00 AM)', period: 'morning', isPopular: true },
  { id: '10:00', timeLabel: '10:00 AM', shortBadge: '10 AM – 11 AM', displayRange: '10:00 AM – 11:00 AM', slotWindow: '10 AM – 11 AM (10:00 AM – 11:00 AM)', period: 'morning', isPopular: true },
  { id: '11:00', timeLabel: '11:00 AM', shortBadge: '11 AM – 12 PM', displayRange: '11:00 AM – 12:00 PM', slotWindow: '11 AM – 12 PM (11:00 AM – 12:00 PM)', period: 'morning' },
  { id: '12:00', timeLabel: '12:00 PM', shortBadge: '12 PM – 1 PM', displayRange: '12:00 PM – 1:00 PM', slotWindow: '12 PM – 1 PM (12:00 PM – 1:00 PM)', period: 'afternoon' },
  { id: '13:00', timeLabel: '1:00 PM', shortBadge: '1 PM – 2 PM', displayRange: '1:00 PM – 2:00 PM', slotWindow: '1 PM – 2 PM (1:00 PM – 2:00 PM)', period: 'afternoon' },
  { id: '14:00', timeLabel: '2:00 PM', shortBadge: '2 PM – 3 PM', displayRange: '2:00 PM – 3:00 PM', slotWindow: '2 PM – 3 PM (2:00 PM – 3:00 PM)', period: 'afternoon', isPopular: true },
  { id: '15:00', timeLabel: '3:00 PM', shortBadge: '3 PM – 4 PM', displayRange: '3:00 PM – 4:00 PM', slotWindow: '3 PM – 4 PM (3:00 PM – 4:00 PM)', period: 'afternoon' },
  { id: '16:00', timeLabel: '4:00 PM', shortBadge: '4 PM – 5 PM', displayRange: '4:00 PM – 5:00 PM', slotWindow: '4 PM – 5 PM (4:00 PM – 5:00 PM)', period: 'afternoon' },
  { id: '17:00', timeLabel: '5:00 PM', shortBadge: '5 PM – 6 PM', displayRange: '5:00 PM – 6:00 PM', slotWindow: '5 PM – 6 PM (5:00 PM – 6:00 PM)', period: 'evening', isPopular: true },
  { id: '18:00', timeLabel: '6:00 PM', shortBadge: '6 PM – 7 PM', displayRange: '6:00 PM – 7:00 PM', slotWindow: '6 PM – 7 PM (6:00 PM – 7:00 PM)', period: 'evening' },
];

export const TWO_HOUR_TIME_SLOTS: HourlySlot[] = [
  { id: '08:00-10:00', timeLabel: '8:00 AM', shortBadge: '8 AM – 10 AM', displayRange: '8:00 AM – 10:00 AM', slotWindow: '8 AM – 10 AM (8:00 AM – 10:00 AM)', period: 'morning' },
  { id: '09:00-11:00', timeLabel: '9:00 AM', shortBadge: '9 AM – 11 AM', displayRange: '9:00 AM – 11:00 AM', slotWindow: '9 AM – 11 AM (9:00 AM – 11:00 AM)', period: 'morning', isPopular: true },
  { id: '10:00-12:00', timeLabel: '10:00 AM', shortBadge: '10 AM – 12 PM', displayRange: '10:00 AM – 12:00 PM', slotWindow: '10 AM – 12 PM (10:00 AM – 12:00 PM)', period: 'morning', isPopular: true },
  { id: '11:00-13:00', timeLabel: '11:00 AM', shortBadge: '11 AM – 1 PM', displayRange: '11:00 AM – 1:00 PM', slotWindow: '11 AM – 1 PM (11:00 AM – 1:00 PM)', period: 'morning' },
  { id: '12:00-14:00', timeLabel: '12:00 PM', shortBadge: '12 PM – 2 PM', displayRange: '12:00 PM – 2:00 PM', slotWindow: '12 PM – 2 PM (12:00 PM – 2:00 PM)', period: 'afternoon' },
  { id: '13:00-15:00', timeLabel: '1:00 PM', shortBadge: '1 PM – 3 PM', displayRange: '1:00 PM – 3:00 PM', slotWindow: '1 PM – 3 PM (1:00 PM – 3:00 PM)', period: 'afternoon', isPopular: true },
  { id: '14:00-16:00', timeLabel: '2:00 PM', shortBadge: '2 PM – 4 PM', displayRange: '2:00 PM – 4:00 PM', slotWindow: '2 PM – 4 PM (2:00 PM – 4:00 PM)', period: 'afternoon' },
  { id: '15:00-17:00', timeLabel: '3:00 PM', shortBadge: '3 PM – 5 PM', displayRange: '3:00 PM – 5:00 PM', slotWindow: '3 PM – 5 PM (3:00 PM – 5:00 PM)', period: 'afternoon' },
  { id: '16:00-18:00', timeLabel: '4:00 PM', shortBadge: '4 PM – 6 PM', displayRange: '4:00 PM – 6:00 PM', slotWindow: '4 PM – 6 PM (4:00 PM – 6:00 PM)', period: 'evening' },
  { id: '17:00-19:00', timeLabel: '5:00 PM', shortBadge: '5 PM – 7 PM', displayRange: '5:00 PM – 7:00 PM', slotWindow: '5 PM – 7 PM (5:00 PM – 7:00 PM)', period: 'evening', isPopular: true },
];

export const HALF_DAY_TIME_SLOTS: HourlySlot[] = [
  { id: '08:00-12:00', timeLabel: '8:00 AM', shortBadge: '8 AM – 12 PM', displayRange: '8:00 AM – 12:00 PM', slotWindow: '8 AM – 12 PM (8:00 AM – 12:00 PM)', period: 'morning', isPopular: true },
  { id: '09:00-13:00', timeLabel: '9:00 AM', shortBadge: '9 AM – 1 PM', displayRange: '9:00 AM – 1:00 PM', slotWindow: '9 AM – 1 PM (9:00 AM – 1:00 PM)', period: 'morning', isPopular: true },
  { id: '10:00-14:00', timeLabel: '10:00 AM', shortBadge: '10 AM – 2 PM', displayRange: '10:00 AM – 2:00 PM', slotWindow: '10 AM – 2 PM (10:00 AM – 2:00 PM)', period: 'morning' },
  { id: '11:00-15:00', timeLabel: '11:00 AM', shortBadge: '11 AM – 3 PM', displayRange: '11:00 AM – 3:00 PM', slotWindow: '11 AM – 3 PM (11:00 AM – 3:00 PM)', period: 'afternoon' },
  { id: '12:00-16:00', timeLabel: '12:00 PM', shortBadge: '12 PM – 4 PM', displayRange: '12:00 PM – 4:00 PM', slotWindow: '12 PM – 4 PM (12:00 PM – 4:00 PM)', period: 'afternoon', isPopular: true },
  { id: '13:00-17:00', timeLabel: '1:00 PM', shortBadge: '1 PM – 5 PM', displayRange: '1:00 PM – 5:00 PM', slotWindow: '1 PM – 5 PM (1:00 PM – 5:00 PM)', period: 'afternoon' },
  { id: '14:00-18:00', timeLabel: '2:00 PM', shortBadge: '2 PM – 6 PM', displayRange: '2:00 PM – 6:00 PM', slotWindow: '2 PM – 6 PM (2:00 PM – 6:00 PM)', period: 'afternoon' },
  { id: '15:00-19:00', timeLabel: '3:00 PM', shortBadge: '3 PM – 7 PM', displayRange: '3:00 PM – 7:00 PM', slotWindow: '3 PM – 7 PM (3:00 PM – 7:00 PM)', period: 'evening' },
];

export const FULL_DAY_TIME_SLOTS: HourlySlot[] = [
  { id: '08:00-16:00', timeLabel: '8:00 AM', shortBadge: '8 AM – 4 PM', displayRange: '8:00 AM – 4:00 PM', slotWindow: '8 AM – 4 PM (8:00 AM – 4:00 PM)', period: 'morning', isPopular: true },
  { id: '08:30-16:30', timeLabel: '8:30 AM', shortBadge: '8:30 AM – 4:30 PM', displayRange: '8:30 AM – 4:30 PM', slotWindow: '8:30 AM – 4:30 PM (8:30 AM – 4:30 PM)', period: 'morning' },
  { id: '09:00-17:00', timeLabel: '9:00 AM', shortBadge: '9 AM – 5 PM', displayRange: '9:00 AM – 5:00 PM', slotWindow: '9 AM – 5 PM (9:00 AM – 5:00 PM)', period: 'morning', isPopular: true },
  { id: '10:00-18:00', timeLabel: '10:00 AM', shortBadge: '10 AM – 6 PM', displayRange: '10:00 AM – 6:00 PM', slotWindow: '10 AM – 6 PM (10:00 AM – 6:00 PM)', period: 'morning' },
  { id: '11:00-19:00', timeLabel: '11:00 AM', shortBadge: '11 AM – 7 PM', displayRange: '11:00 AM – 7:00 PM', slotWindow: '11 AM – 7 PM (11:00 AM – 7:00 PM)', period: 'afternoon' },
];

export const getSlotsForBookingDuration = (duration: BookingDurationType): HourlySlot[] => {
  switch (duration) {
    case '2hours':
      return TWO_HOUR_TIME_SLOTS;
    case 'halfday':
      return HALF_DAY_TIME_SLOTS;
    case 'fullday':
      return FULL_DAY_TIME_SLOTS;
    case 'walkthrough':
    default:
      return HOURLY_TIME_SLOTS;
  }
};

export const getTimingSectionHeaderInfo = (duration: BookingDurationType) => {
  switch (duration) {
    case '2hours':
      return {
        title: 'Timing Section Converted: 2-Hour Time Blocks (with AM / PM)',
        convertedBadge: 'Converted: 9 AM–11 AM, 10 AM–12 PM, 11 AM–1 PM...',
        exampleList: '9 AM–11 AM · 10 AM–12 PM · 11 AM–1 PM · 12 PM–2 PM · 1 PM–3 PM · 2 PM–4 PM · 3 PM–5 PM · 4 PM–6 PM · 5 PM–7 PM',
        description: 'Time section converted into 2-hour arrival windows with exact AM/PM timing indicators (e.g. 9 AM–11 AM, 10 AM–12 PM, 11 AM–1 PM).',
        summaryLabel: '2-Hour Focus Session',
      };
    case 'halfday':
      return {
        title: 'Timing Section Converted: Half-Day 4-Hour Blocks (with AM / PM)',
        convertedBadge: 'Converted: 8 AM–12 PM, 9 AM–1 PM, 10 AM–2 PM...',
        exampleList: '8 AM–12 PM · 9 AM–1 PM · 10 AM–2 PM · 11 AM–3 PM · 12 PM–4 PM · 1 PM–5 PM · 2 PM–6 PM · 3 PM–7 PM',
        description: 'Time section converted into 4-hour half-day blocks with exact AM/PM timing indicators (e.g. 8 AM–12 PM, 9 AM–1 PM, 10 AM–2 PM, 12 PM–4 PM).',
        summaryLabel: '4-Hour Half-Day Session',
      };
    case 'fullday':
      return {
        title: 'Timing Section Converted: Full-Day 8-Hour Blocks (with AM / PM)',
        convertedBadge: 'Converted: 8 AM–4 PM, 9 AM–5 PM, 10 AM–6 PM...',
        exampleList: '8 AM–4 PM · 8:30 AM–4:30 PM · 9 AM–5 PM · 10 AM–6 PM · 11 AM–7 PM',
        description: 'Time section converted into full-day 8-hour estate deep clean schedules with exact AM/PM indicators (e.g. 8 AM–4 PM, 9 AM–5 PM).',
        summaryLabel: '8-Hour Full-Day Session',
      };
    case 'walkthrough':
    default:
      return {
        title: 'Timing Section: 1-Hour Arrival Slots (with AM / PM)',
        convertedBadge: 'Hourly: 8 AM–9 AM, 9 AM–10 AM, 11 AM–12 PM...',
        exampleList: '8 AM–9 AM · 9 AM–10 AM · 10 AM–11 AM · 11 AM–12 PM · 12 PM–1 PM · 1 PM–2 PM · 2 PM–3 PM · 3 PM–4 PM · 4 PM–5 PM · 5 PM–6 PM · 6 PM–7 PM',
        description: 'Time section configured for every single hour with accurate AM/PM designations across morning, afternoon, and evening.',
        summaryLabel: '15-Min In-Home Walkthrough',
      };
  }
};
