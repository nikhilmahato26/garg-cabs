export interface PopularRoute {
  id: string;
  from: string;
  to: string;
  distanceEstimate: string;
  durationEstimate: string;
  routeHighlight: string;
  popularVehicles: string[];
}

export const POPULAR_ROUTES: PopularRoute[] = [
  {
    id: "delhi-to-chandigarh",
    from: "Delhi",
    to: "Chandigarh",
    distanceEstimate: "Approx. 245 km",
    durationEstimate: "4 - 5 hrs via NH 44",
    routeHighlight: "Seamless Delhi NCR to Chandigarh city center, Sukhna Lake or airport transfer.",
    popularVehicles: ["Dzire", "Ertiga", "Innova Crysta"],
  },
  {
    id: "chandigarh-to-delhi",
    from: "Chandigarh",
    to: "Delhi",
    distanceEstimate: "Approx. 245 km",
    durationEstimate: "4 - 5 hrs via NH 44",
    routeHighlight: "Direct pickup from Chandigarh / Sukhna Lake to IGI Airport Delhi or NCR.",
    popularVehicles: ["Dzire", "Kia Carens", "Innova Crysta"],
  },
  {
    id: "delhi-to-patiala",
    from: "Delhi",
    to: "Patiala",
    distanceEstimate: "Approx. 250 km",
    durationEstimate: "4.5 - 5 hrs via NH 44 / NH 152",
    routeHighlight: "Door-to-door one-way taxi from Delhi / Airport straight to Patiala.",
    popularVehicles: ["Dzire", "Ertiga", "Innova Crysta"],
  },
  {
    id: "patiala-to-delhi",
    from: "Patiala",
    to: "Delhi",
    distanceEstimate: "Approx. 250 km",
    durationEstimate: "4.5 - 5 hrs via NH 152 / NH 44",
    routeHighlight: "On-time intercity pickup from Patiala to Delhi airport or city hotel.",
    popularVehicles: ["Dzire", "Kia Carens", "Innova Crysta"],
  },
  {
    id: "delhi-to-ludhiana",
    from: "Delhi Airport",
    to: "Ludhiana",
    distanceEstimate: "Approx. 310 km",
    durationEstimate: "5.5 - 6 hrs via NH 44",
    routeHighlight: "Direct one-way airport cab to Punjab's industrial hub Ludhiana.",
    popularVehicles: ["Dzire", "Innova Crysta", "Kia Carens"],
  },
  {
    id: "chd-airport-to-patiala",
    from: "Chandigarh Airport",
    to: "Patiala",
    distanceEstimate: "Approx. 65 km",
    durationEstimate: "1 hr 15 mins via NH 7",
    routeHighlight: "Punctual airport pickup connecting Shaheed Bhagat Singh Airport to Patiala.",
    popularVehicles: ["Dzire", "Ertiga", "Innova Crysta"],
  },
  {
    id: "delhi-to-amritsar",
    from: "Delhi",
    to: "Amritsar",
    distanceEstimate: "Approx. 450 km",
    durationEstimate: "7.5 - 8 hrs via NH 44",
    routeHighlight: "Comfortable long-distance one-way journey to the holy Golden Temple city.",
    popularVehicles: ["Innova Crysta", "Urbania", "Carens"],
  },
  {
    id: "delhi-to-haridwar-rishikesh",
    from: "Delhi Airport",
    to: "Haridwar & Rishikesh",
    distanceEstimate: "Approx. 230 km",
    durationEstimate: "4 - 4.5 hrs via Meerut Expressway",
    routeHighlight: "Spiritual yatra and riverfront transfer via modern Delhi-Dehradun expressway.",
    popularVehicles: ["Innova Crysta", "Ertiga", "Dzire"],
  },
  {
    id: "delhi-to-khatu-shyam-salasar",
    from: "Delhi / Patiala",
    to: "Khatu Shyam Ji & Salasar",
    distanceEstimate: "Approx. 290 km",
    durationEstimate: "5 - 6 hrs via Trans-Haryana / NH 52",
    routeHighlight: "Dedicated family & group pilgrimage charters to Baba Shyam & Salasar Balaji.",
    popularVehicles: ["Innova Crysta", "Force Urbania", "Ertiga"],
  },
  {
    id: "chandigarh-to-shimla-manali",
    from: "Chandigarh",
    to: "Shimla & Manali",
    distanceEstimate: "Approx. 110 - 280 km",
    durationEstimate: "3.5 - 7 hrs via Himalayan Expressway",
    routeHighlight: "Smooth hill driving by certified mountain chauffeurs with clean AC cabs.",
    popularVehicles: ["Innova Crysta", "Kia Carens", "Urbania"],
  },
];
