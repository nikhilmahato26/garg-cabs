export interface VehicleGalleryImage {
  id: string;
  url: string;
  title: string;
  category: "Exterior" | "Interior" | "Seating" | "Luxury Detail";
  description: string;
}

export interface ShowcaseVehicle {
  id: string;
  name: string;
  category: string;
  pricingLabel: string;
  isPriced: boolean;
  price?: number;
  capacity: string;
  luggage: string;
  tagline: string;
  description: string;
  badge: string;
  mainImage: string;
  gallery: VehicleGalleryImage[];
  specs: {
    seatingCapacity: string;
    airConditioning: string;
    bootSpace: string;
    chargingPorts: string;
    entertainment: string;
    safetyFeatures: string;
  };
  features: string[];
}

export const SHOWCASE_VEHICLES: ShowcaseVehicle[] = [
  // 1. Maruti Suzuki Dzire
  {
    id: "dzire",
    name: "Maruti Suzuki Dzire",
    category: "Executive Sedan",
    pricingLabel: "₹3,500 One Way (All Inclusive)",
    isPriced: true,
    price: 3500,
    capacity: "4 Passengers + 1 Driver",
    luggage: "2-3 Large Suitcases",
    tagline: "India's favorite compact executive sedan for swift intercity journeys",
    description: "Combining class-leading fuel efficiency, plush seating, and generous trunk space, the Dzire is the gold-standard sedan for solo professionals, couples, and small families traveling between Delhi, Chandigarh, and Patiala.",
    badge: "Most Popular Sedan",
    mainImage: "/images/vehicles/dzire.png",
    specs: {
      seatingCapacity: "4 Comfort Bucket Seats + Chauffeur",
      airConditioning: "Powerful Dual Zone Automatic Climate Control",
      bootSpace: "378 Litres dedicated luggage trunk",
      chargingPorts: "Front & Rear 12V / USB fast charging ports",
      entertainment: "Bluetooth audio streaming & surround sound",
      safetyFeatures: "Dual front airbags, ABS with EBD & ISOFIX mounts",
    },
    features: [
      "Comfort-crafted fabric seats with rear center armrest",
      "Whisper-quiet highway ride quality with aerodynamic design",
      "Spacious boot for suitcases and business baggage",
      "GPS tracking installed with verified experienced driver",
    ],
    gallery: [
      {
        id: "dzire-ext-1",
        url: "/images/vehicles/dzire.png",
        title: "Maruti Suzuki Dzire — Aerodynamic Sedan Exterior",
        category: "Exterior",
        description: "Elegant front fascia with signature chrome-accented grille and premium LED headlamps.",
      },
      {
        id: "dzire-ext-2",
        url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1600&auto=format&fit=crop",
        title: "Highway Touring Stance",
        category: "Exterior",
        description: "Smooth highway cruising stance engineered for long-distance stability and safety.",
      },
      {
        id: "dzire-int-1",
        url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
        title: "Executive Driver Cockpit & Dashboard",
        category: "Interior",
        description: "Modern ergonomic dashboard layout with intuitive controls and refined dual-tone styling.",
      },
      {
        id: "dzire-seat-1",
        url: "https://images.unsplash.com/photo-1583267746897-2cf415887172?q=80&w=1600&auto=format&fit=crop",
        title: "Rear Passenger Seating & Legroom",
        category: "Seating",
        description: "Generous knee-room and contoured rear bench with fold-down center armrest.",
      },
      {
        id: "dzire-lux-1",
        url: "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?q=80&w=1600&auto=format&fit=crop",
        title: "Refined Cabin Accents",
        category: "Luxury Detail",
        description: "Precision faux wood inlays, brushed silver highlights, and soft touch door armrests.",
      },
    ],
  },

  // 2. Maruti Suzuki Ertiga
  {
    id: "ertiga",
    name: "Maruti Suzuki Ertiga",
    category: "Smart Family MUV",
    pricingLabel: "₹4,500 One Way (All Inclusive)",
    isPriced: true,
    price: 4500,
    capacity: "6 Passengers + 1 Driver",
    luggage: "3-4 Suitcases + Roof Carrier Available",
    tagline: "Spacious 3-row family vehicle designed for memorable highway road trips",
    description: "The Maruti Suzuki Ertiga delivers versatile seating configurations, roof-mounted individual AC vents for every row, and class-leading suspension to keep every passenger relaxed over long intercity journeys.",
    badge: "Family Favorite MUV",
    mainImage: "/images/vehicles/ertiga.png",
    specs: {
      seatingCapacity: "6 Passengers (2 + 2 + 2 flexible configuration)",
      airConditioning: "Dual AC with roof-mounted vents for all 3 rows",
      bootSpace: "Expandable 550+ Litres with 50:50 split third row",
      chargingPorts: "USB ports provided in rows 1 and 2",
      entertainment: "SmartPlay audio system with smartphone connectivity",
      safetyFeatures: "Quad airbags, ESP, Hill-Hold Assist & ABS",
    },
    features: [
      "Flexible 3-row seating with reclining second-row captain feel",
      "Ceiling-integrated AC blower vents keeping all passengers cool",
      "High ground clearance engineered for North Indian highways",
      "Fold-flat 3rd row allowing massive luggage loading flexibility",
    ],
    gallery: [
      {
        id: "ertiga-ext-1",
        url: "/images/vehicles/ertiga.png",
        title: "Maruti Suzuki Ertiga — Contemporary MUV Styling",
        category: "Exterior",
        description: "Sculpted side profile with wide chrome front grille and bold dynamic stance.",
      },
      {
        id: "ertiga-ext-2",
        url: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1600&auto=format&fit=crop",
        title: "Intercity Highway Profile",
        category: "Exterior",
        description: "Robust road presence offering exceptional panoramic passenger window visibility.",
      },
      {
        id: "ertiga-int-1",
        url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1600&auto=format&fit=crop",
        title: "Contemporary Multi-Tier Dashboard",
        category: "Interior",
        description: "Airy cabin design with teak-wood finish dashboard and driver information cluster.",
      },
      {
        id: "ertiga-seat-1",
        url: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1600&auto=format&fit=crop",
        title: "3-Row Passenger Seating Arrangement",
        category: "Seating",
        description: "Reclining middle bench with easy slide-and-fold mechanism for smooth third row access.",
      },
      {
        id: "ertiga-lux-1",
        url: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1600&auto=format&fit=crop",
        title: "Utility Console & Roof AC Vents",
        category: "Luxury Detail",
        description: "Cooled cup holders, dedicated mobile docks, and individual cabin blowers.",
      },
    ],
  },

  // 3. Kia Carens
  {
    id: "carens",
    name: "Kia Carens",
    category: "Premium Recreational Vehicle (RV)",
    pricingLabel: "₹5,000 One Way (All Inclusive)",
    isPriced: true,
    price: 5000,
    capacity: "6-7 Passengers + 1 Driver",
    luggage: "3-4 Suitcases",
    tagline: "Futuristic styling, executive refinement, and state-of-the-art cabin luxury",
    description: "The Kia Carens redefines recreational highway travel with aircraft-inspired seatback tables, ambient lighting, multi-drive modes, and opulent leatherette seating designed for VIPs and discerning families.",
    badge: "Executive Refinement",
    mainImage: "/images/vehicles/carens.png",
    specs: {
      seatingCapacity: "6 or 7 Captain / Bench configuration",
      airConditioning: "Automatic Climate Control with rear diffused vents",
      bootSpace: "216L - 492L multi-mode luggage storage",
      chargingPorts: "5 Type-C fast chargers across all 3 rows",
      entertainment: "HD Infotainment with premium speaker acoustic tuning",
      safetyFeatures: "6 Airbags standard, all-wheel disc brakes & ESC",
    },
    features: [
      "Electric one-touch tumble second-row seat for effortless cabin ingress",
      "Executive seatback folding tray tables with integrated tablet holder",
      "Cabin air purifier with virus protection and real-time AQI display",
      "Superior sound insulation providing a whisper-quiet highway ride",
    ],
    gallery: [
      {
        id: "carens-ext-1",
        url: "/images/vehicles/carens.png",
        title: "Kia Carens — Futuristic Digital Tiger Nose Styling",
        category: "Exterior",
        description: "Sleek Star Map LED daytime running lights with bold crossover SUV styling.",
      },
      {
        id: "carens-ext-2",
        url: "https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=1600&auto=format&fit=crop",
        title: "Dynamic High-Speed Road Presence",
        category: "Exterior",
        description: "Aerodynamic roof rails and diamond-cut two-tone alloy wheel highlights.",
      },
      {
        id: "carens-int-1",
        url: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600&auto=format&fit=crop",
        title: "Cockpit Ambient Lighting & Touch Consoles",
        category: "Interior",
        description: "Wraparound dashboard with 64-color ambient mood lighting and high-gloss accents.",
      },
      {
        id: "carens-seat-1",
        url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
        title: "Plush Leatherette Captain Seating",
        category: "Seating",
        description: "Ventilated, deeply bolstered seats with ergonomic headrests and lumbar support.",
      },
      {
        id: "carens-lux-1",
        url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1600&auto=format&fit=crop",
        title: "Executive Seatback Utility Tables",
        category: "Luxury Detail",
        description: "Fold-out business trays perfect for working on laptops or snacking on the go.",
      },
    ],
  },

  // 4. Toyota Innova Crysta
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta",
    category: "Premium Luxury MPV",
    pricingLabel: "₹6,000 One Way (All Inclusive)",
    isPriced: true,
    price: 6000,
    capacity: "6-7 Passengers + 1 Driver",
    luggage: "4-5 Large Suitcases + Roof Carrier Available",
    tagline: "The undisputed emperor of Indian highway comfort, reliability, and VIP travel",
    description: "Built on an indestructible ladder-frame chassis with plush captain chairs, the Toyota Innova Crysta glides over expressways and rough roads alike, ensuring you arrive at your destination refreshed, relaxed, and on time.",
    badge: "Gold Standard of Touring",
    mainImage: "/images/vehicles/innova_crysta.png",
    specs: {
      seatingCapacity: "7 Luxury Seats with Middle Row Captain Chairs",
      airConditioning: "Automatic Dual Climate Control with dedicated rear AC",
      bootSpace: "300L baseline, expandable up to 750L with third row folded",
      chargingPorts: "Quick charge USB docks & 12V auxiliary power sockets",
      entertainment: "Touchscreen multimedia system with steering-mounted audio",
      safetyFeatures: "7 Airbags, Vehicle Stability Control, Hill Start Assist & GOA body",
    },
    features: [
      "Ultra-comfortable reclining captain armchairs with independent slide",
      "Pillow-soft long-travel suspension absorbing all highway imperfections",
      "Enormous boot capacity accommodating heavy vacation & airport baggage",
      "Powerful turbo-diesel powertrain providing steady, fatigue-free highway touring",
    ],
    gallery: [
      {
        id: "innova-ext-1",
        url: "/images/vehicles/innova_crysta.png",
        title: "Toyota Innova Crysta — Commanding Road Dominance",
        category: "Exterior",
        description: "Signature trapezoidal front grille with chrome embellishments and automatic projector headlamps.",
      },
      {
        id: "innova-ext-2",
        url: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827486/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.37.45_rgvlgy.jpg",
        title: "Expressway Highway Stance",
        category: "Exterior",
        description: "Stately silhouette and muscular arches engineered for non-stop cross-state expeditions.",
      },
      {
        id: "innova-seat-1",
        url: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827484/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.37.46_1_d06nyq.jpg",
        title: "Executive Middle Row Captain Chairs",
        category: "Seating",
        description: "Independent captain armchairs with adjustable headrests, reclining backs, and slide tracks.",
      },
      {
        id: "innova-int-1",
        url: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1600&auto=format&fit=crop",
        title: "Spacious Multi-Row VIP Cabin",
        category: "Interior",
        description: "Expansive headroom and wide shoulder width allowing comfortable 7-passenger journeys.",
      },
      {
        id: "innova-lux-1",
        url: "/images/services/interior.png",
        title: "Leather Accents & Blue Ambient Illumination",
        category: "Luxury Detail",
        description: "Ceiling-mounted soft ambient lighting line and refined woodgrain dash appointments.",
      },
    ],
  },

  // 5. Urbania Traveller
  {
    id: "urbania",
    name: "Force Urbania Traveller",
    category: "Ultra-Luxury Executive Van",
    pricingLabel: "Contact Us for Booking & Pricing",
    isPriced: false,
    capacity: "12 / 16 / 17 Passenger options",
    luggage: "Full Dedicated Luggage Bay for 15+ Bags",
    tagline: "European-engineered ultra-luxury van for royal group transit across India",
    description: "Designed on an international platform, Force Urbania offers individual Maharaja reclining seats, personal AC louvers, panoramic windows, ambient LED illumination, and stand-up cabin height for the pinnacle of group road travel.",
    badge: "Flagship Luxury Van",
    mainImage: "/images/vehicles/force_urbania.png",
    specs: {
      seatingCapacity: "12 / 16 Seater Maharaja Reclining Configuration",
      airConditioning: "Heavy-Duty Dual Compressor Central Climate Control",
      bootSpace: "Massive separate rear luggage hold accommodating 15+ suitcases",
      chargingPorts: "Dedicated USB fast charging dock & reading light for every seat",
      entertainment: "Full HD LCD display with Bluetooth theater surround sound",
      safetyFeatures: "Hill Hold Assist, ESP, ABS with EBD & Monocoque safety cell",
    },
    features: [
      "Bespoke Maharaja reclining captain seats with plush cushioning & armrests",
      "High roof with 6-foot standing clearance allowing easy walkthrough movement",
      "Panoramic tinted UV-protected windows for majestic sightseeing",
      "Whisper-quiet NVH insulation delivering luxury airline cabin silence",
    ],
    gallery: [
      {
        id: "urbania-ext-1",
        url: "/images/vehicles/force_urbania.png",
        title: "Force Urbania — Modern European Monocoque Styling",
        category: "Exterior",
        description: "Striking aerodynamic front with LED daytime running lights and luxury van presence.",
      },
      {
        id: "urbania-seat-1",
        url: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1780824939/happy%20luxe/Luxury%20Urbania%2012%20Seater%20%28%20Maharja%20Seats%20%29/WhatsApp_Image_2026-06-07_at_11.15.20_eyunco.jpg",
        title: "Maharaja Luxury Captain Seats",
        category: "Seating",
        description: "Opulent leatherette recliner seats with dual-tone stitching and deep headrest padding.",
      },
      {
        id: "urbania-int-1",
        url: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1780824939/happy%20luxe/Luxury%20Urbania%2012%20Seater%20%28%20Maharja%20Seats%20%29/WhatsApp_Image_2026-06-07_at_11.15.18_1_sczbiy.jpg",
        title: "Spacious Cabin Walkway & Standing Room",
        category: "Interior",
        description: "Generous central aisle with high-roof clearance and ambient ceiling illumination.",
      },
      {
        id: "urbania-lux-1",
        url: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1780825489/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-07_at_11.16.34_zia1rg.jpg",
        title: "16-Seater Executive Cabin Layout",
        category: "Luxury Detail",
        description: "Executive 2+1 row arrangement with individual AC blowers and personalized reading lights.",
      },
      {
        id: "urbania-lux-2",
        url: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166685/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.34.07_u4vrqr.jpg",
        title: "First-Class Travel Experience",
        category: "Luxury Detail",
        description: "Plush contoured cushions, deep foot room, and rear luggage compartment.",
      },
    ],
  },
];
