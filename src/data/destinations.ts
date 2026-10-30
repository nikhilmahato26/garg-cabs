export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  location: string;
  category: GalleryCategory;
  aspect: "landscape" | "portrait" | "wide";
  description: string;
  suggestedTrip: string;
}

export type GalleryCategory =
  | "ALL PHOTOS"
  | "OUR VEHICLES"
  | "URBANIA TRAVELLER"
  | "LUXURY INTERIORS"
  | "DELHI"
  | "CHANDIGARH"
  | "SHIMLA"
  | "MANALI"
  | "AMRITSAR"
  | "LUDHIANA"
  | "JAIPUR"
  | "AGRA"
  | "DEHRADUN";

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "ALL PHOTOS",
  "OUR VEHICLES",
  "URBANIA TRAVELLER",
  "LUXURY INTERIORS",
  "DELHI",
  "CHANDIGARH",
  "SHIMLA",
  "MANALI",
  "AMRITSAR",
  "LUDHIANA",
  "JAIPUR",
  "AGRA",
  "DEHRADUN",
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  // ── DELHI ───────────────────────────────────────────────────────────
  {
    id: "delhi-india-gate",
    url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1600&auto=format&fit=crop",
    title: "India Gate & Kartavya Path",
    location: "New Delhi",
    category: "DELHI",
    aspect: "wide",
    description: "The monumental pride of the capital city. Grand war memorial surrounded by sprawling gardens.",
    suggestedTrip: "Delhi Local & Outstation Taxi",
  },
  {
    id: "delhi-airport",
    url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop",
    title: "Indira Gandhi International Airport (T3)",
    location: "New Delhi Airport",
    category: "DELHI",
    aspect: "landscape",
    description: "Punctual one-way airport pickup and drop service connecting Punjab and Haryana directly to T1, T2 & T3.",
    suggestedTrip: "Chandigarh ⇄ Delhi Airport Taxi",
  },
  {
    id: "delhi-red-fort",
    url: "https://images.unsplash.com/photo-1598324789736-4861f89564d0?q=80&w=1600&auto=format&fit=crop",
    title: "Historic Red Fort Landmark",
    location: "Old Delhi",
    category: "DELHI",
    aspect: "portrait",
    description: "Iconic Mughal architecture landmark and cultural heritage center in the heart of Old Delhi.",
    suggestedTrip: "Delhi Full Day City Sightseeing",
  },

  // ── CHANDIGARH ──────────────────────────────────────────────────────
  {
    id: "chd-sukhna-lake",
    url: "https://images.unsplash.com/photo-1622306757659-338274198115?q=80&w=1600&auto=format&fit=crop",
    title: "Serene Sukhna Lake at Sunset",
    location: "Sector 1, Chandigarh",
    category: "CHANDIGARH",
    aspect: "wide",
    description: "Picturesque man-made reservoir nestled at the foothills of the Shivalik range, ideal for morning walks.",
    suggestedTrip: "Chandigarh City Tour",
  },
  {
    id: "chd-green-boulevards",
    url: "https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?q=80&w=1600&auto=format&fit=crop",
    title: "The City Beautiful — Boulevard Trees",
    location: "Chandigarh Sectoral Corridors",
    category: "CHANDIGARH",
    aspect: "portrait",
    description: "India's first planned modernist city designed by Le Corbusier, famous for lush parks and wide roundabouts.",
    suggestedTrip: "Chandigarh Local & Tricity Cab",
  },

  // ── SHIMLA ──────────────────────────────────────────────────────────
  {
    id: "shimla-mall-road",
    url: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1600&auto=format&fit=crop",
    title: "The Ridge & Christ Church",
    location: "Shimla, Himachal Pradesh",
    category: "SHIMLA",
    aspect: "landscape",
    description: "Queen of the Hills featuring neo-gothic colonial architecture, buzzing Mall Road, and panoramic valley viewpoints.",
    suggestedTrip: "Chandigarh to Shimla One-Way Taxi",
  },
  {
    id: "shimla-pine-valleys",
    url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1600&auto=format&fit=crop",
    title: "Pine-Clad Himalayan Mountain Valleys",
    location: "Shimla Hills / Kufri",
    category: "SHIMLA",
    aspect: "portrait",
    description: "Crisp mountain air, towering cedar pine forests, and misty Himalayan ridges just 3 hours from Chandigarh.",
    suggestedTrip: "Delhi / Chandigarh to Kufri & Shimla",
  },

  // ── MANALI ──────────────────────────────────────────────────────────
  {
    id: "manali-solang-valley",
    url: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?q=80&w=1600&auto=format&fit=crop",
    title: "Solang Valley Snow-Covered Peaks",
    location: "Manali, Himachal Pradesh",
    category: "MANALI",
    aspect: "wide",
    description: "Breathtaking snow-draped alpine scenery, adventure sports, and scenic riversides in Kullu Valley.",
    suggestedTrip: "Chandigarh to Manali Holiday Cab",
  },
  {
    id: "manali-rohtang",
    url: "https://images.unsplash.com/photo-1594973816221-5e744d081fc3?q=80&w=1600&auto=format&fit=crop",
    title: "Majestic Mountain Pass Roadways",
    location: "Rohtang / Atal Tunnel Corridor",
    category: "MANALI",
    aspect: "landscape",
    description: "World-class expressway engineering traversing snowy mountain passes into Lahaul & Spiti valleys.",
    suggestedTrip: "Delhi / Chandigarh to Manali Package",
  },

  // ── AMRITSAR ────────────────────────────────────────────────────────
  {
    id: "amritsar-golden-temple",
    url: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1600&auto=format&fit=crop",
    title: "Sri Harmandir Sahib (Golden Temple)",
    location: "Amritsar, Punjab",
    category: "AMRITSAR",
    aspect: "wide",
    description: "Spiritual sanctuary bathed in golden light with the sacred Sarovar, welcoming visitors with peace and langar.",
    suggestedTrip: "Chandigarh / Delhi to Amritsar One-Way",
  },
  {
    id: "amritsar-night-view",
    url: "https://images.unsplash.com/photo-1609137144822-4a0058b88d37?q=80&w=1600&auto=format&fit=crop",
    title: "Golden Temple Heritage Street at Night",
    location: "Amritsar Walled City",
    category: "AMRITSAR",
    aspect: "portrait",
    description: "Illuminated pedestrian heritage street featuring vibrant bazaars, authentic Amritsari kulchas, and cultural pride.",
    suggestedTrip: "Patiala to Amritsar Cab Service",
  },

  // ── LUDHIANA ────────────────────────────────────────────────────────
  {
    id: "ludhiana-urban-view",
    url: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1600&auto=format&fit=crop",
    title: "Industrial & Commercial Hub of Punjab",
    location: "Ludhiana Grand Trunk Highway",
    category: "LUDHIANA",
    aspect: "landscape",
    description: "Punjab's bustling commerce capital, textile heartland, and lively food culture connected by swift highways.",
    suggestedTrip: "Delhi / Chandigarh to Ludhiana Taxi",
  },

  // ── JAIPUR ──────────────────────────────────────────────────────────
  {
    id: "jaipur-hawa-mahal",
    url: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=1600&auto=format&fit=crop",
    title: "Hawa Mahal (Palace of Winds)",
    location: "Pink City, Jaipur, Rajasthan",
    category: "JAIPUR",
    aspect: "portrait",
    description: "Iconic honeycomb sandstone palace with 953 intricate jharokha windows overlooking the bustling bazaar.",
    suggestedTrip: "Delhi to Jaipur Expressway Taxi",
  },
  {
    id: "jaipur-amber-fort",
    url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1600&auto=format&fit=crop",
    title: "Amber Fort & Royal Courtyards",
    location: "Amer, Jaipur",
    category: "JAIPUR",
    aspect: "wide",
    description: "Magnificent hilltop fortress blending Rajput and Mughal architecture overlooking Maota Lake.",
    suggestedTrip: "Delhi NCR to Jaipur Royal Tour",
  },

  // ── AGRA ────────────────────────────────────────────────────────────
  {
    id: "agra-taj-mahal",
    url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1600&auto=format&fit=crop",
    title: "The Taj Mahal — Wonder of the World",
    location: "Agra, Uttar Pradesh",
    category: "AGRA",
    aspect: "wide",
    description: "World-famous ivory-white marble mausoleum on the banks of the Yamuna River, symbolizing eternal love.",
    suggestedTrip: "Delhi to Agra via Yamuna Expressway",
  },
  {
    id: "agra-fort-sunrise",
    url: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop",
    title: "Agra Fort Heritage Ramparts",
    location: "Agra Historic District",
    category: "AGRA",
    aspect: "landscape",
    description: "Historic fortified palace city of red sandstone with imperial halls and distant views of the Taj.",
    suggestedTrip: "Delhi NCR Same Day Agra Tour",
  },

  // ── DEHRADUN ────────────────────────────────────────────────────────
  {
    id: "dehradun-scenic-valley",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
    title: "Doon Valley Scenic Mountain Landscapes",
    location: "Dehradun / Mussoorie Foothills",
    category: "DEHRADUN",
    aspect: "landscape",
    description: "Capital of Uttarakhand nestled in the Doon Valley, Gateway to Mussoorie, Rishikesh, and Haridwar.",
    suggestedTrip: "Chandigarh to Dehradun One-Way Cab",
  },
  {
    id: "dehradun-hills",
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
    title: "Shivalik Range Foothills & Forest Retreats",
    location: "Dehradun Region",
    category: "DEHRADUN",
    aspect: "portrait",
    description: "Lush sal forests, gushing rivers, and serene spiritual atmosphere connecting mountains and plains.",
    suggestedTrip: "Delhi / Chandigarh to Rishikesh / Dehradun",
  },

  // ── OUR VEHICLES ────────────────────────────────────────────────────
  {
    id: "fleet-dzire-card",
    url: "/images/vehicles/dzire.png",
    title: "Maruti Suzuki Dzire AC Sedan",
    location: "GARG CABS Active Fleet",
    category: "OUR VEHICLES",
    aspect: "landscape",
    description: "Economical and comfortable one-way taxi option for 4 passengers at ₹3,500 all-inclusive.",
    suggestedTrip: "Delhi ⇄ Chandigarh ⇄ Patiala",
  },
  {
    id: "fleet-ertiga-card",
    url: "/images/vehicles/ertiga.png",
    title: "Maruti Suzuki Ertiga 6-Seater Family MUV",
    location: "GARG CABS Active Fleet",
    category: "OUR VEHICLES",
    aspect: "landscape",
    description: "Spacious 3-row family vehicle with roof AC for comfortable intercity trips at ₹4,500.",
    suggestedTrip: "Delhi ⇄ Chandigarh ⇄ Patiala",
  },
  {
    id: "fleet-innova-crysta-card",
    url: "/images/vehicles/innova_crysta.png",
    title: "Toyota Innova Crysta Luxury Touring MPV",
    location: "GARG CABS Active Fleet",
    category: "OUR VEHICLES",
    aspect: "landscape",
    description: "Premium captain seat comfort for 6-7 passengers at ₹6,000 all-inclusive.",
    suggestedTrip: "Intercity Highway & Airport Express",
  },
  {
    id: "fleet-carens-card",
    url: "/images/vehicles/carens.png",
    title: "Kia Carens Premium Family RV",
    location: "GARG CABS Active Fleet",
    category: "OUR VEHICLES",
    aspect: "landscape",
    description: "Sophisticated executive design and plush leatherette seating at ₹5,000 all-inclusive.",
    suggestedTrip: "Delhi ⇄ Chandigarh ⇄ Patiala",
  },

  // ── URBANIA TRAVELLER ───────────────────────────────────────────────
  {
    id: "gal-urbania-ext",
    url: "/images/vehicles/force_urbania.png",
    title: "Force Urbania Luxury Van Stance",
    location: "GARG CABS Luxury Fleet",
    category: "URBANIA TRAVELLER",
    aspect: "wide",
    description: "Next-generation European-standard luxury group traveler available across all of India.",
    suggestedTrip: "All India Group Tours & Weddings",
  },
  {
    id: "gal-urbania-maharaja",
    url: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1780824939/happy%20luxe/Luxury%20Urbania%2012%20Seater%20%28%20Maharja%20Seats%20%29/WhatsApp_Image_2026-06-07_at_11.15.20_eyunco.jpg",
    title: "Urbania Maharaja Recliner Seats",
    location: "Urbania Luxury Cabin",
    category: "URBANIA TRAVELLER",
    aspect: "portrait",
    description: "First-class luxury captain seats with dual armrests, lumbar support, and deep legroom.",
    suggestedTrip: "VIP Delegations & Corporate Offsites",
  },
  {
    id: "gal-urbania-interior",
    url: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1780824939/happy%20luxe/Luxury%20Urbania%2012%20Seater%20%28%20Maharja%20Seats%20%29/WhatsApp_Image_2026-06-07_at_11.15.18_1_sczbiy.jpg",
    title: "Walkthrough High-Roof Central Aisle",
    location: "Urbania Cabin Interior",
    category: "URBANIA TRAVELLER",
    aspect: "landscape",
    description: "Full stand-up clearance allowing passengers to walk comfortably inside without bending.",
    suggestedTrip: "Luxury Pilgrimage & Family Events",
  },

  // ── LUXURY INTERIORS ────────────────────────────────────────────────
  {
    id: "gal-lux-captain-seats",
    url: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827484/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.37.46_1_d06nyq.jpg",
    title: "VIP Captain Armchair Cabin",
    location: "Innova Crysta Luxury Interior",
    category: "LUXURY INTERIORS",
    aspect: "landscape",
    description: "Soft leather upholstery, individual armrests, and independent reclining adjustments.",
    suggestedTrip: "Corporate & Executive Transfers",
  },
  {
    id: "gal-lux-lighting-seats",
    url: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166685/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.34.07_u4vrqr.jpg",
    title: "Ambient Night Roof Illumination",
    location: "Urbania Luxury Interior",
    category: "LUXURY INTERIORS",
    aspect: "portrait",
    description: "Subtle warm ambient lighting strips creating an aircraft-like first-class ambiance.",
    suggestedTrip: "Night Express Highway Travel",
  },
  {
    id: "gal-lux-clean-cabin",
    url: "/images/services/interior.png",
    title: "Sanitized & Detail-Cleaned Cabins",
    location: "GARG CABS Fleet Standards",
    category: "LUXURY INTERIORS",
    aspect: "landscape",
    description: "Deep cleaned and vacuumed before every trip with pleasant fragrance and fresh seat covers.",
    suggestedTrip: "All Routes & Charters",
  },
];
