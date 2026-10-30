export interface FleetVehicle {
  id: string;
  name: string;
  category: string;
  tagline: string;
  pricingLabel: string;
  isPriced: boolean;
  price?: number;
  image: string;
  capacity: string;
  acType: string;
  fuelType: string;
  bestFor: string;
  badge?: string;
  features: string[];
}

export const FLEET_VEHICLES: FleetVehicle[] = [
  // Priced Vehicles
  {
    id: "dzire",
    name: "Maruti Suzuki Dzire",
    category: "Sedan",
    tagline: "Comfortable and cost-effective sedan for intercity travel",
    pricingLabel: "₹3,500 One Way",
    isPriced: true,
    price: 3500,
    image: "/images/vehicles/dzire.png",
    capacity: "4 Passengers + 1 Driver",
    acType: "Front & Rear AC",
    fuelType: "CNG / Petrol / Diesel",
    bestFor: "Solo, couple, or small corporate transfers",
    badge: "Budget Friendly",
    features: [
      "Plush fabric seating",
      "Spacious boot for suitcases",
      "Smooth highway ride",
      "GPS tracking & verified driver"
    ]
  },
  {
    id: "ertiga",
    name: "Maruti Suzuki Ertiga",
    category: "Family Vehicle (MUV)",
    tagline: "The trusted choice for families and medium groups",
    pricingLabel: "₹4,500 One Way",
    isPriced: true,
    price: 4500,
    image: "/images/vehicles/ertiga.png",
    capacity: "6 Passengers + 1 Driver",
    acType: "Roof-mounted AC vents",
    fuelType: "CNG / Petrol",
    bestFor: "Family trips, airport transfers with luggage",
    badge: "Family Favorite",
    features: [
      "Foldable 3rd row for extra luggage",
      "Generous legroom in all rows",
      "Comfortable long distance suspension",
      "USB charging points"
    ]
  },
  {
    id: "carens",
    name: "Kia Carens",
    category: "Premium Family Vehicle",
    tagline: "Executive refinement, cutting-edge style and supreme comfort",
    pricingLabel: "₹5,000 One Way",
    isPriced: true,
    price: 5000,
    image: "/images/vehicles/carens.png",
    capacity: "6-7 Passengers + 1 Driver",
    acType: "Multi-zone Automatic Climate Control",
    fuelType: "Turbo Diesel / Petrol",
    bestFor: "Executive travel & discerning family travelers",
    badge: "Premium Experience",
    features: [
      "Leatherette executive seats",
      "Quiet highway sound insulation",
      "Rear sunshades and charging docks",
      "High ground clearance"
    ]
  },
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta",
    category: "Premium MPV",
    tagline: "India's undisputed king of intercity luxury and safety",
    pricingLabel: "₹6,000 One Way",
    isPriced: true,
    price: 6000,
    image: "/images/vehicles/innova_crysta.png",
    capacity: "6-7 Passengers + 1 Driver",
    acType: "Dual Zone Automatic AC",
    fuelType: "High-power Diesel",
    bestFor: "VIP trips, long-distance touring, high comfort",
    badge: "King of the Road",
    features: [
      "Reclining captain chairs with armrests",
      "Superior safety cage & airbags",
      "Massive luggage capacity with roof carrier",
      "Pillow-soft ride on Indian highways"
    ]
  },

  // Additional Fleet Categories from Poster
  {
    id: "tempo-traveller",
    name: "Force Tempo Traveller",
    category: "Group Travel Van",
    tagline: "Spacious group travel with individual pushback seats",
    pricingLabel: "Enquire for Custom Quote",
    isPriced: false,
    image: "/images/vehicles/tempo_traveller.png",
    capacity: "12 / 17 / 20 / 26 Seater options",
    acType: "Full High-Capacity Cabin AC",
    fuelType: "Diesel",
    bestFor: "Family gatherings, weddings, religious yatra & corporate groups",
    badge: "Group Travel",
    features: [
      "High roof with standing room",
      "Reclining 2x1 pushback bucket seats",
      "Large dedicated luggage boot",
      "Surround sound entertainment system"
    ]
  },
  {
    id: "force-urbania",
    name: "Force Urbania Traveller",
    category: "Luxury Van",
    tagline: "Next-generation European-standard luxury traveller",
    pricingLabel: "Enquire for Custom Quote",
    isPriced: false,
    image: "/images/vehicles/force_urbania.png",
    capacity: "10 / 13 / 17 Seater options",
    acType: "Individual Air Vents for Every Seat",
    fuelType: "Diesel CRDi",
    bestFor: "High-profile delegations, destination weddings, luxury corporate travel",
    badge: "Ultra Luxury Van",
    features: [
      "European styling with panoramic windows",
      "Plush reclining arm-rested bucket seats",
      "Whisper-quiet NVH insulation",
      "Individual reading lights & USB ports"
    ]
  },
  {
    id: "luxury-car",
    name: "Luxury Car Rental",
    category: "Elite Fleet",
    tagline: "Luxury sedans & SUVs for VIP arrivals and weddings",
    pricingLabel: "Enquire for Custom Quote",
    isPriced: false,
    image: "/images/vehicles/luxury_car.png",
    capacity: "4-5 Passengers",
    acType: "Multi-Zone Climate Control",
    fuelType: "Premium",
    bestFor: "Weddings, VIP dignitaries, corporate delegations",
    badge: "VIP Fleet",
    features: [
      "Chauffeured in formal attire",
      "Immaculately detailed interior",
      "Airport VIP pick-up signage",
      "Custom wedding floral decor options"
    ]
  },
  {
    id: "self-drive",
    name: "Self-Driven Cars",
    category: "Self Drive",
    tagline: "Drive at your own pace with clean, serviced vehicles",
    pricingLabel: "Enquire for Availability & Terms",
    isPriced: false,
    image: "/images/vehicles/self_drive.png",
    capacity: "5 Seater Hatchback / Sedan",
    acType: "Standard AC",
    fuelType: "Petrol / Diesel",
    bestFor: "Flexible personal road trips and local commutes",
    badge: "Self Drive",
    features: [
      "Well-maintained sanitized cars",
      "Simple verification process",
      "Flexible hourly or daily rental options",
      "Doorstep delivery on request"
    ]
  }
];
