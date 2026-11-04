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
  | "AIRPORTS"
  | "PATIALA"
  | "CHANDIGARH"
  | "DELHI & NCR"
  | "LUDHIANA"
  | "AMRITSAR & PUNJAB"
  | "SHIMLA & MANALI"
  | "DHARAMSHALA & DALHOUSIE"
  | "HARIDWAR & RISHIKESH"
  | "KHATU SHYAM & SALASAR"
  | "MATHURA & VRINDAVAN"
  | "JAIPUR & AGRA"
  | "DEHRADUN & MUSSOORIE"
  | "OUR VEHICLES"
  | "URBANIA TRAVELLER"
  | "LUXURY INTERIORS";

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "ALL PHOTOS",
  "AIRPORTS",
  "PATIALA",
  "CHANDIGARH",
  "DELHI & NCR",
  "LUDHIANA",
  "AMRITSAR & PUNJAB",
  "SHIMLA & MANALI",
  "DHARAMSHALA & DALHOUSIE",
  "HARIDWAR & RISHIKESH",
  "KHATU SHYAM & SALASAR",
  "MATHURA & VRINDAVAN",
  "JAIPUR & AGRA",
  "DEHRADUN & MUSSOORIE",
  "OUR VEHICLES",
  "URBANIA TRAVELLER",
  "LUXURY INTERIORS",
];

export interface DestinationCityInfo {
  name: string;
  category: string;
  highlight: string;
  popularCab: string;
}

export const ALL_DESTINATION_CITIES: DestinationCityInfo[] = [
  { name: "Patiala", category: "Punjab Hub", highlight: "Royal City, Qila Mubarak & corporate hubs", popularCab: "Dzire / Ertiga" },
  { name: "Chandigarh (Sukhna Lake)", category: "UT Hub", highlight: "Sukhna Lake, Sector 17, Rock Garden & Tricity", popularCab: "Dzire / Innova Crysta / Ertiga" },
  { name: "Chandigarh Airport", category: "Airport", highlight: "Shaheed Bhagat Singh Intl Airport transfers", popularCab: "Innova Crysta / Carens" },
  { name: "Delhi Airport", category: "Airport", highlight: "Punctual one-way pickup & drop for T1, T2 & T3", popularCab: "Innova Crysta / Dzire" },
  { name: "Amritsar Airport", category: "Airport", highlight: "Sri Guru Ram Dass Jee Intl Airport transfers", popularCab: "Innova Crysta / Ertiga" },
  { name: "Amritsar", category: "Punjab Hub", highlight: "Golden Temple, Wagah Border & heritage markets", popularCab: "Innova Crysta / Dzire" },
  { name: "Ludhiana", category: "Punjab Hub", highlight: "Punjab industrial heartland & business corridor", popularCab: "Dzire / Innova Crysta" },
  { name: "Jalandhar", category: "Punjab Hub", highlight: "Sports goods hub & Devi Talab Mandir route", popularCab: "Dzire / Ertiga" },
  { name: "Dehradun", category: "Uttarakhand", highlight: "Capital of Uttarakhand & Gateway to Mussoorie", popularCab: "Innova Crysta / Carens" },
  { name: "Haridwar", category: "Pilgrimage", highlight: "Har Ki Pauri sacred Ganga Aarti & holy snan", popularCab: "Ertiga / Innova Crysta" },
  { name: "Rishikesh", category: "Pilgrimage", highlight: "Yoga capital, Ram Jhula, Triveni Ghat & rafting", popularCab: "Innova Crysta / Carens" },
  { name: "Jaipur", category: "Rajasthan", highlight: "Pink City palaces, Hawa Mahal & Amber Fort", popularCab: "Innova Crysta / Dzire" },
  { name: "Agra", category: "UP Heritage", highlight: "Taj Mahal & Agra Fort via Yamuna Expressway", popularCab: "Dzire / Innova Crysta" },
  { name: "Shimla", category: "Himachal", highlight: "Mall Road, Ridge, Kufri & pine-forested hills", popularCab: "Innova Crysta / Carens" },
  { name: "Manali", category: "Himachal", highlight: "Solang Valley, Rohtang, Atal Tunnel & snow peaks", popularCab: "Innova Crysta / Urbania" },
  { name: "Bathinda", category: "Punjab Hub", highlight: "Historic Qila Mubarak & Malwa transit hub", popularCab: "Dzire / Ertiga" },
  { name: "Rajpura", category: "Punjab Hub", highlight: "Industrial gateway connecting Patiala & Tricity", popularCab: "Dzire / Ertiga" },
  { name: "Ambala", category: "Haryana", highlight: "Crucial railway junction & textile wholesale hub", popularCab: "Dzire / Ertiga" },
  { name: "Karnal", category: "Haryana", highlight: "Grand Trunk corridor connecting Delhi & Punjab", popularCab: "Dzire / Ertiga" },
  { name: "Lucknow", category: "UP Heritage", highlight: "City of Nawabs, Gomti Nagar & Rumi Darwaza", popularCab: "Innova Crysta / Carens" },
  { name: "Sangrur", category: "Punjab Hub", highlight: "Jind State heritage & heart of Malwa region", popularCab: "Dzire / Ertiga" },
  { name: "Barnala", category: "Punjab Hub", highlight: "Textile manufacturing & regional commerce center", popularCab: "Dzire / Ertiga" },
  { name: "Dalhousie", category: "Himachal", highlight: "Khajjiar mini-Switzerland & colonial hill retreat", popularCab: "Innova Crysta / Urbania" },
  { name: "Dharamshala", category: "Himachal", highlight: "McLeod Ganj, Dalai Lama Temple & Dhauladhar", popularCab: "Innova Crysta / Carens" },
  { name: "Mussoorie", category: "Uttarakhand", highlight: "Queen of the Hills, Kempty Falls & Mall Road", popularCab: "Innova Crysta / Carens" },
  { name: "Udaipur", category: "Rajasthan", highlight: "City of Lakes, Lake Pichola & royal palaces", popularCab: "Innova Crysta / Urbania" },
  { name: "Vrindavan", category: "Pilgrimage", highlight: "Prem Mandir, Banke Bihari & ISKCON Temple", popularCab: "Ertiga / Innova Crysta" },
  { name: "Mathura", category: "Pilgrimage", highlight: "Shri Krishna Janmabhoomi & Yamuna Ghats", popularCab: "Ertiga / Dzire" },
  { name: "Faridabad", category: "Delhi NCR", highlight: "NCR commercial hub & Surajkund corridor", popularCab: "Dzire / Ertiga" },
  { name: "Gurgaon", category: "Delhi NCR", highlight: "Cyber City, DLF CyberHub & corporate towers", popularCab: "Innova Crysta / Dzire" },
  { name: "Noida", category: "Delhi NCR", highlight: "Noida Expressway, IT parks & corporate sector", popularCab: "Dzire / Carens" },
  { name: "Greater Noida", category: "Delhi NCR", highlight: "Pari Chowk, India Expo Mart & universities", popularCab: "Dzire / Ertiga" },
  { name: "Ghaziabad", category: "Delhi NCR", highlight: "Indirapuram, Raj Nagar Extension & UP gateway", popularCab: "Dzire / Ertiga" },
  { name: "Sunam", category: "Punjab Hub", highlight: "Shaheed Udham Singh birthplace & Malwa town", popularCab: "Dzire / Ertiga" },
  { name: "Mansa", category: "Punjab Hub", highlight: "Cotton belt commerce & regional Punjab corridor", popularCab: "Dzire / Ertiga" },
  { name: "Meerut", category: "Delhi NCR", highlight: "Delhi-Meerut RRTS expressway corridor", popularCab: "Dzire / Ertiga" },
  { name: "Khatu Shyam Ji", category: "Pilgrimage", highlight: "Reverent Khatu Shyam Ji temple holy yatra", popularCab: "Innova Crysta / Ertiga" },
  { name: "Salasar", category: "Pilgrimage", highlight: "Salasar Balaji Dham divine pilgrimage tour", popularCab: "Innova Crysta / Ertiga" },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  // ── AIRPORTS ─────────────────────────────────────────────────────────
  {
    id: "delhi-airport-fleet",
    url: "/images/hero/hero_bg.png",
    title: "Delhi IGI Airport (T3) Chauffeur Fleet",
    location: "Delhi Airport Terminal 3",
    category: "AIRPORTS",
    aspect: "wide",
    description: "24/7 airport terminal pickup and drop with guaranteed on-time chauffeur arrival and flight tracking.",
    suggestedTrip: "Delhi Airport ⇄ Chandigarh / Patiala / Ludhiana",
  },
  {
    id: "chd-airport",
    url: "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=1600&auto=format&fit=crop",
    title: "Chandigarh International Airport (Mohali)",
    location: "Shaheed Bhagat Singh Intl Airport",
    category: "AIRPORTS",
    aspect: "landscape",
    description: "Direct airport transfers connecting Tricity travelers to Patiala, Ludhiana, Jalandhar, and Himachal.",
    suggestedTrip: "Chandigarh Airport ⇄ Patiala / Punjab",
  },
  {
    id: "amritsar-airport",
    url: "https://images.unsplash.com/photo-1508873696983-2df5293cb395?q=80&w=1600&auto=format&fit=crop",
    title: "Sri Guru Ram Dass Jee International Airport",
    location: "Amritsar Airport (ATQ)",
    category: "AIRPORTS",
    aspect: "portrait",
    description: "Punctual one-way cab service for NRI travelers, tourists, and pilgrims landing at Amritsar.",
    suggestedTrip: "Amritsar Airport ⇄ Jalandhar / Ludhiana / Chandigarh",
  },

  // ── PATIALA ──────────────────────────────────────────────────────────
  {
    id: "patiala-qila-mubarak",
    url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1600&auto=format&fit=crop",
    title: "Historic Qila Mubarak & Royal Heritage",
    location: "Old City, Patiala, Punjab",
    category: "PATIALA",
    aspect: "wide",
    description: "The royal heartbeat of Punjab. Garg Cabs operates daily dedicated routes directly from Patiala.",
    suggestedTrip: "Patiala ⇄ Delhi Airport / Chandigarh",
  },
  {
    id: "patiala-sheesh-mahal",
    url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1600&auto=format&fit=crop",
    title: "Sheesh Mahal & Royal Gardens",
    location: "Patiala City, Punjab",
    category: "PATIALA",
    aspect: "portrait",
    description: "Majestic palace with ornate fresco mirror work and suspension bridge, emblematic of Patiala royal legacy.",
    suggestedTrip: "Patiala Local Sightseeing & Outstation Cab",
  },

  // ── CHANDIGARH ──────────────────────────────────────────────────────
  {
    id: "chd-sukhna-lake",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sukhna_Lake_Chandigarh_India.jpg/1600px-Sukhna_Lake_Chandigarh_India.jpg",
    title: "Serene Sukhna Lake Promenade & Shivalik Foothills",
    location: "Sukhna Lake, Sector 1, Chandigarh",
    category: "CHANDIGARH",
    aspect: "wide",
    description: "Iconic tranquil reservoir with panoramic promenade views of the Shivalik hills, walking trails, and boat rides.",
    suggestedTrip: "Chandigarh Local Sightseeing & Sukhna Lake Tour",
  },
  {
    id: "chd-sukhna-lake-morning",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Sukhna_lake_as_viewed_on_a_sunny_morning.jpg/1600px-Sukhna_lake_as_viewed_on_a_sunny_morning.jpg",
    title: "Sukhna Lake Morning Waters & Boating",
    location: "Sukhna Lake Club, Sector 1, Chandigarh",
    category: "CHANDIGARH",
    aspect: "portrait",
    description: "Serene morning reflections, watersports, and pedal boating on the calm waters of Sukhna Lake.",
    suggestedTrip: "Chandigarh City Tour & Outstation Taxi",
  },
  {
    id: "chd-green-boulevards",
    url: "https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?q=80&w=1600&auto=format&fit=crop",
    title: "The City Beautiful — Boulevard Corridors",
    location: "Chandigarh Sectoral Corridors",
    category: "CHANDIGARH",
    aspect: "portrait",
    description: "India's first planned modernist city designed by Le Corbusier, famous for lush parks, wide boulevards, and Sector 17 & 22.",
    suggestedTrip: "Chandigarh Local & Tricity Cab",
  },

  // ── DELHI & NCR ──────────────────────────────────────────────────────
  {
    id: "delhi-india-gate",
    url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1600&auto=format&fit=crop",
    title: "India Gate & Kartavya Path",
    location: "New Delhi",
    category: "DELHI & NCR",
    aspect: "wide",
    description: "The monumental pride of the capital city. Grand war memorial surrounded by sprawling gardens.",
    suggestedTrip: "Delhi Local & Outstation Taxi",
  },
  {
    id: "delhi-ncr-corridor",
    url: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1600&auto=format&fit=crop",
    title: "Gurgaon, Noida & Greater Noida Corridors",
    location: "Delhi NCR Expressway",
    category: "DELHI & NCR",
    aspect: "portrait",
    description: "Seamless connectivity spanning Gurgaon Cyber City, Noida, Greater Noida, Faridabad, Ghaziabad and Meerut.",
    suggestedTrip: "Delhi NCR ⇄ Punjab & Tricity Cab",
  },

  // ── LUDHIANA ────────────────────────────────────────────────────────
  {
    id: "ludhiana-urban-view",
    url: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1600&auto=format&fit=crop",
    title: "Industrial & Commercial Hub of Punjab",
    location: "Ludhiana Grand Trunk Highway",
    category: "LUDHIANA",
    aspect: "landscape",
    description: "Punjab's bustling commerce capital, textile heartland, and lively food culture connected by swift expressways.",
    suggestedTrip: "Delhi / Chandigarh to Ludhiana Taxi",
  },
  {
    id: "ludhiana-expressway",
    url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1600&auto=format&fit=crop",
    title: "Ludhiana Highway Corridor & Clock Tower",
    location: "Ludhiana Bypass Expressway",
    category: "LUDHIANA",
    aspect: "wide",
    description: "Swift one-way taxi corridors connecting Ludhiana seamlessly to Delhi Airport, Chandigarh, and Amritsar.",
    suggestedTrip: "Ludhiana ⇄ Delhi Airport One-Way Taxi",
  },

  // ── AMRITSAR & PUNJAB ────────────────────────────────────────────────
  {
    id: "amritsar-golden-temple",
    url: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1600&auto=format&fit=crop",
    title: "Sri Harmandir Sahib (Golden Temple)",
    location: "Amritsar, Punjab",
    category: "AMRITSAR & PUNJAB",
    aspect: "wide",
    description: "Spiritual sanctuary bathed in golden light with the sacred Sarovar, welcoming visitors with peace and langar.",
    suggestedTrip: "Chandigarh / Delhi to Amritsar One-Way",
  },
  {
    id: "punjab-malwa-corridor",
    url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop",
    title: "Jalandhar, Bathinda, Sangrur & Malwa Corridors",
    location: "Punjab Central Network",
    category: "AMRITSAR & PUNJAB",
    aspect: "portrait",
    description: "Comprehensive coverage across Jalandhar, Bathinda, Rajpura, Ambala, Karnal, Sangrur, Barnala, Sunam & Mansa.",
    suggestedTrip: "Patiala / Tricity to Malwa & Jalandhar Cabs",
  },

  // ── SHIMLA & MANALI ──────────────────────────────────────────────────
  {
    id: "shimla-mall-road",
    url: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1600&auto=format&fit=crop",
    title: "The Ridge & Christ Church",
    location: "Shimla, Himachal Pradesh",
    category: "SHIMLA & MANALI",
    aspect: "landscape",
    description: "Queen of the Hills featuring neo-gothic colonial architecture, buzzing Mall Road, and panoramic valley viewpoints.",
    suggestedTrip: "Chandigarh to Shimla One-Way Taxi",
  },
  {
    id: "manali-solang-valley",
    url: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?q=80&w=1600&auto=format&fit=crop",
    title: "Solang Valley & Rohtang Pass",
    location: "Manali, Himachal Pradesh",
    category: "SHIMLA & MANALI",
    aspect: "wide",
    description: "Breathtaking snow-draped alpine scenery, adventure sports, and scenic riversides in Kullu Valley.",
    suggestedTrip: "Chandigarh / Delhi to Manali Holiday Cab",
  },

  // ── DHARAMSHALA & DALHOUSIE ──────────────────────────────────────────
  {
    id: "dharamshala-mcleod",
    url: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1600&auto=format&fit=crop",
    title: "Dharamshala & McLeod Ganj Monasteries",
    location: "Kangra Valley, Himachal Pradesh",
    category: "DHARAMSHALA & DALHOUSIE",
    aspect: "wide",
    description: "Nestled beneath the majestic Dhauladhar snow range, home of His Holiness Dalai Lama and cedar forest trails.",
    suggestedTrip: "Chandigarh / Delhi to Dharamshala Cab",
  },
  {
    id: "dalhousie-khajjiar",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
    title: "Khajjiar Meadows & Dalhousie Hills",
    location: "Chamba District, Himachal",
    category: "DHARAMSHALA & DALHOUSIE",
    aspect: "portrait",
    description: "India's mini-Switzerland with lush saucer-shaped green meadows, cedar forests, and cool mountain air.",
    suggestedTrip: "Patiala / Chandigarh to Dalhousie Cab",
  },

  // ── HARIDWAR & RISHIKESH ─────────────────────────────────────────────
  {
    id: "haridwar-ganga-aarti",
    url: "https://images.unsplash.com/photo-1596766442651-78959d00ee9c?q=80&w=1600&auto=format&fit=crop",
    title: "Har Ki Pauri Divine Ganga Aarti",
    location: "Haridwar, Uttarakhand",
    category: "HARIDWAR & RISHIKESH",
    aspect: "wide",
    description: "Sacred evening Ganga Aarti ceremony, holy riverbank ghats, and spiritual solace at the gateway of Char Dham.",
    suggestedTrip: "Delhi / Chandigarh to Haridwar Cab",
  },
  {
    id: "rishikesh-ram-jhula",
    url: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1600&auto=format&fit=crop",
    title: "Ram Jhula & Himalayan Foothills",
    location: "Rishikesh, Uttarakhand",
    category: "HARIDWAR & RISHIKESH",
    aspect: "portrait",
    description: "World capital of Yoga, scenic suspension bridges across emerald Ganga, ashrams, and adventure rafting.",
    suggestedTrip: "Delhi NCR to Rishikesh One-Way Taxi",
  },

  // ── KHATU SHYAM & SALASAR ────────────────────────────────────────────
  {
    id: "khatu-shyam-ji-dham",
    url: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=1600&auto=format&fit=crop",
    title: "Shri Khatu Shyam Ji Sacred Mandir",
    location: "Sikar, Rajasthan",
    category: "KHATU SHYAM & SALASAR",
    aspect: "wide",
    description: "Sacred pilgrimage destination attracting millions of devotees seeking blessings of Baba Shyam.",
    suggestedTrip: "Delhi / Punjab to Khatu Shyam Ji Pilgrimage Cab",
  },
  {
    id: "salasar-balaji-dham",
    url: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=1600&auto=format&fit=crop",
    title: "Salasar Balaji Mandir Holy Darshan",
    location: "Churu, Rajasthan",
    category: "KHATU SHYAM & SALASAR",
    aspect: "portrait",
    description: "Renowned temple dedicated to Lord Hanuman with peaceful prayer courtyards and dedicated pilgrim transit.",
    suggestedTrip: "Patiala / Delhi to Salasar Balaji Yatra",
  },

  // ── MATHURA & VRINDAVAN ──────────────────────────────────────────────
  {
    id: "vrindavan-prem-mandir",
    url: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1600&auto=format&fit=crop",
    title: "Prem Mandir & Banke Bihari Vrindavan",
    location: "Vrindavan, Uttar Pradesh",
    category: "MATHURA & VRINDAVAN",
    aspect: "wide",
    description: "Illuminated white Italian marble temple complex, Krishna leela carvings, and spiritual bliss in Braj Bhoomi.",
    suggestedTrip: "Delhi NCR to Mathura-Vrindavan Same Day Cab",
  },
  {
    id: "mathura-janmabhoomi",
    url: "https://images.unsplash.com/photo-1627894006066-b45229bf2348?q=80&w=1600&auto=format&fit=crop",
    title: "Shri Krishna Janmabhoomi & Yamuna Ghats",
    location: "Mathura, Uttar Pradesh",
    category: "MATHURA & VRINDAVAN",
    aspect: "portrait",
    description: "Ancient birthplace of Lord Krishna along the holy banks of river Yamuna, vibrant with devotion and pedas.",
    suggestedTrip: "Delhi / Chandigarh to Mathura Pilgrimage Tour",
  },

  // ── JAIPUR & AGRA ────────────────────────────────────────────────────
  {
    id: "jaipur-hawa-mahal",
    url: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=1600&auto=format&fit=crop",
    title: "Hawa Mahal (Palace of Winds)",
    location: "Pink City, Jaipur, Rajasthan",
    category: "JAIPUR & AGRA",
    aspect: "portrait",
    description: "Iconic honeycomb sandstone palace with 953 intricate jharokha windows overlooking the bustling bazaar.",
    suggestedTrip: "Delhi to Jaipur Expressway Taxi",
  },
  {
    id: "agra-taj-mahal",
    url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1600&auto=format&fit=crop",
    title: "The Taj Mahal — Wonder of the World",
    location: "Agra, Uttar Pradesh",
    category: "JAIPUR & AGRA",
    aspect: "wide",
    description: "World-famous ivory-white marble mausoleum on the banks of the Yamuna River, symbolizing eternal love.",
    suggestedTrip: "Delhi to Agra via Yamuna Expressway",
  },

  // ── DEHRADUN & MUSSOORIE ─────────────────────────────────────────────
  {
    id: "dehradun-scenic-valley",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
    title: "Doon Valley & Mussoorie Mall Road",
    location: "Dehradun / Mussoorie, Uttarakhand",
    category: "DEHRADUN & MUSSOORIE",
    aspect: "wide",
    description: "Capital of Uttarakhand and the Queen of the Hills. Breathtaking pine slopes, mist-filled valleys, and fresh waterfalls.",
    suggestedTrip: "Chandigarh / Delhi to Dehradun & Mussoorie Cab",
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
