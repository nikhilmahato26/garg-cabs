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
    routeHighlight: "Seamless Delhi NCR to Chandigarh city center or airport transfer.",
    popularVehicles: ["Dzire", "Ertiga", "Innova Crysta"],
  },
  {
    id: "chandigarh-to-delhi",
    from: "Chandigarh",
    to: "Delhi",
    distanceEstimate: "Approx. 245 km",
    durationEstimate: "4 - 5 hrs via NH 44",
    routeHighlight: "Direct drop to IGI Airport Delhi, New Delhi Railway Station, or NCR.",
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
    id: "chandigarh-to-patiala",
    from: "Chandigarh",
    to: "Patiala",
    distanceEstimate: "Approx. 70 km",
    durationEstimate: "1.5 - 2 hrs via NH 7",
    routeHighlight: "Quick and convenient regional intercity taxi between Tricity and Royal City Patiala.",
    popularVehicles: ["Dzire", "Ertiga"],
  },
  {
    id: "patiala-to-chandigarh",
    from: "Patiala",
    to: "Chandigarh",
    distanceEstimate: "Approx. 70 km",
    durationEstimate: "1.5 - 2 hrs via NH 7",
    routeHighlight: "Daily reliable one-way rides from Patiala to Chandigarh Secretariat, hospitals, or airport.",
    popularVehicles: ["Dzire", "Ertiga"],
  },
];
