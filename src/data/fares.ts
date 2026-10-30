export interface FareItem {
  id: string;
  vehicleName: string;
  price: number;
  formattedPrice: string;
  category: string;
  capacity: string;
  luggage: string;
  image: string;
  ctaText: string;
  description: string;
  badge?: string;
  features: string[];
}

export const FARE_LIST: FareItem[] = [
  {
    id: "dzire",
    vehicleName: "Maruti Suzuki Dzire",
    price: 3500,
    formattedPrice: "₹3,500",
    category: "Sedan",
    capacity: "4 Passengers",
    luggage: "2-3 Suitcases",
    image: "/images/vehicles/dzire.png",
    ctaText: "BOOK DZIRE",
    description: "Ideal compact executive sedan for solo travellers, couples, or small family one-way trips.",
    badge: "Most Economical",
    features: [
      "AC Sedan with comfort seats",
      "Ample boot space for luggage",
      "GPS tracking & verified driver",
      "All-inclusive one-way fare",
    ],
  },
  {
    id: "ertiga",
    vehicleName: "Maruti Suzuki Ertiga",
    price: 4500,
    formattedPrice: "₹4,500",
    category: "Family Vehicle",
    capacity: "6 Passengers",
    luggage: "3-4 Suitcases",
    image: "/images/vehicles/ertiga.png",
    ctaText: "BOOK ERTIGA",
    description: "Spacious 6-seater family MUV engineered for comfortable intercity family highway travel.",
    badge: "Popular Family Choice",
    features: [
      "Spacious 3-row family seating",
      "Dual AC cooling for all rows",
      "Smooth ride with roof carriers",
      "All-inclusive one-way fare",
    ],
  },
  {
    id: "carens",
    vehicleName: "Kia Carens",
    price: 5000,
    formattedPrice: "₹5,000",
    category: "Premium Family Vehicle",
    capacity: "6-7 Passengers",
    luggage: "3-4 Suitcases",
    image: "/images/vehicles/carens.png",
    ctaText: "BOOK KIA CARENS",
    description: "Modern premium family RV offering executive ride quality, modern styling, and superior cabin comfort.",
    badge: "Premium Comfort",
    features: [
      "Premium plush upholstered interior",
      "Advanced climate control vents",
      "Superior highway ride quality",
      "All-inclusive one-way fare",
    ],
  },
  {
    id: "innova-crysta",
    vehicleName: "Toyota Innova Crysta",
    price: 6000,
    formattedPrice: "₹6,000",
    category: "Premium MPV",
    capacity: "6-7 Passengers",
    luggage: "4-5 Suitcases",
    image: "/images/vehicles/innova_crysta.png",
    ctaText: "BOOK INNOVA CRYSTA",
    description: "The gold standard of Indian highway travel. Unmatched comfort, luxury legroom, and effortless touring.",
    badge: "Top Executive Choice",
    features: [
      "Captain seat luxury comfort",
      "High-speed highway stability",
      "Massive luggage capacity",
      "All-inclusive one-way fare",
    ],
  },
];
