export interface OfficeLocation {
  id: string;
  title: string;
  badge: string;
  addressLines: string[];
  city: string;
  state: string;
  phone: string;
  phoneHref: string;
  mapSearchUrl: string;
}

export const BUSINESS_CONFIG = {
  name: "GARG CABS",
  shortName: "Garg Cabs",
  tagline: "ONE WAY TAXI SERVICES",
  subTagline: "A SIGNATURE OF EXCELLENCE",
  md: "Harinder Garg",
  
  phones: {
    primary: "+91 9316430001",
    primaryRaw: "919316430001",
    primaryHref: "tel:+919316430001",
    secondary: "+91 9780666555",
    secondaryRaw: "919780666555",
    secondaryHref: "tel:+919780666555",
  },

  whatsapp: {
    number: "+91 9316430001",
    numberRaw: "919316430001",
    link: "https://wa.me/919316430001",
  },

  // Note: Email preserved exactly as supplied: gargcabs0001@gmil.com
  email: "gargcabs0001@gmil.com",
  emailHref: "mailto:gargcabs0001@gmil.com",

  instagram: "https://www.instagram.com/gargcabs?rpxt=MWJ5NmI5cWVneDkxeQ==",

  serviceAreas: [
    "Delhi",
    "Chandigarh",
    "Patiala",
    "Delhi NCR"
  ],

  offices: [
    {
      id: "chandigarh",
      title: "Head Office — Chandigarh",
      badge: "Head Office",
      addressLines: [
        "SCO 2417, 3rd Floor",
        "Near Aroma Taxi Stand",
        "Sector 22-C, Chandigarh"
      ],
      city: "Chandigarh",
      state: "Chandigarh (U.T.)",
      phone: "+91 9780666555",
      phoneHref: "tel:+919780666555",
      mapSearchUrl: "https://www.google.com/maps/search/?api=1&query=SCO+2417+3rd+Floor+Near+Aroma+Taxi+Stand+Sector+22-C+Chandigarh",
    },
    {
      id: "patiala",
      title: "Patiala Office",
      badge: "Branch Office",
      addressLines: [
        "Radhe Radhe Fruit Company",
        "Banana Store, Banna Road",
        "Near PGM School, Sirhind Road",
        "Patiala, Punjab"
      ],
      city: "Patiala",
      state: "Punjab",
      phone: "+91 9316430001",
      phoneHref: "tel:+919316430001",
      mapSearchUrl: "https://www.google.com/maps/search/?api=1&query=Radhe+Radhe+Fruit+Company+Banana+Store+Banna+Road+Near+PGM+School+Sirhind+Road+Patiala+Punjab",
    }
  ] as OfficeLocation[],

  keyHighlights: [
    "24/7 Taxi on Call",
    "GPS Installed Cabs",
    "Verified Drivers",
    "One Way Taxi Services"
  ],

  fareConditions: [
    "The listed prices are supplied one-way taxi fares.",
    "All listed fares are described by the business as ALL INCLUSIVE.",
    "PARKING CHARGES ARE EXTRA.",
    "Confirm the applicable fare for your specific route before booking."
  ],

  aboutSummary: "GARG CABS provides one-way taxi service enquiries across Delhi, Chandigarh, Patiala, and Delhi NCR. Customers can explore different vehicle options, including Maruti Suzuki Dzire, Maruti Suzuki Ertiga, Kia Carens, and Toyota Innova Crysta.",
  aboutFleetSummary: "The business also advertises additional travel services, including Tempo Traveller, Urbania Traveller, luxury car rental, self-driven cars, hotel bookings, bus services, air ticket booking, and travel packages.",
  aboutContactSummary: "Contact GARG CABS to discuss your pickup location, destination, preferred vehicle, and travel requirements.",

  copyrightYear: 2026,
} as const;

export type BusinessConfig = typeof BUSINESS_CONFIG;
