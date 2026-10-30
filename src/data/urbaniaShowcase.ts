export interface UrbaniaFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface UrbaniaGalleryItem {
  id: string;
  url: string;
  title: string;
  subtitle: string;
  tag: "Exterior" | "Captain Seats" | "Cabin Interor" | "Lighting" | "Luggage" | "Seating Layout";
}

export const URBANIA_SHOWCASE_CONFIG = {
  heading: "TRAVEL IN LUXURY WITH URBANIA TRAVELLER",
  subtitle: "Premium Group Travel Across India.",
  coverageBadge: "ALL INDIA SERVICE",
  locations: [
    "Delhi",
    "Chandigarh",
    "Patiala",
    "Delhi NCR",
    "Shimla & Manali",
    "Jaipur & Rajasthan",
    "Agra & Uttar Pradesh",
    "Dehradun & Uttarakhand",
    "Other Destinations Across India"
  ],
  pricingNotice: "CONTACT US FOR BOOKING & PRICING.",
  bookingCta: "BOOK URBANIA TRAVELLER",
  whatsappMessage: "Hello GARG CABS, I would like to enquire about booking the Force Urbania Traveller for our group journey. Please share availability, seating options, and pricing quote.",

  features: [
    {
      title: "Luxury Captain Seats",
      description: "Bespoke ergonomic recliner seats with padded headrests, dual armrests, and ample seat pitch.",
      iconName: "Armchair",
    },
    {
      title: "Spacious High-Roof Cabin",
      description: "6-foot stand-up ceiling clearance allowing seamless walkthrough mobility along the central aisle.",
      iconName: "Maximize2",
    },
    {
      title: "Comfortable Legroom",
      description: "Generous legroom and independent footrests allowing passengers to stretch out over long journeys.",
      iconName: "Smile",
    },
    {
      title: "Ambient Interior Lighting",
      description: "Gentle ceiling glow illumination paired with individual personal LED reading lights at every seat.",
      iconName: "Sparkles",
    },
    {
      title: "Heavy-Duty Dual AC",
      description: "Powerful roof-integrated climate vents delivering personalized temperature control to every row.",
      iconName: "Wind",
    },
    {
      title: "Dedicated Luggage Space",
      description: "Cavernous rear luggage hold easily accommodating suitcases, bags, and event equipment.",
      iconName: "Briefcase",
    },
    {
      title: "All-India Permit & GPS",
      description: "Fully licensed for seamless nationwide tourist transit with GPS tracking and verified drivers.",
      iconName: "Compass",
    },
    {
      title: "Executive Onboard Media",
      description: "High-definition LCD screen with theater-quality audio streaming for entertainment on the road.",
      iconName: "Tv",
    },
  ] as UrbaniaFeature[],

  carouselImages: [
    {
      id: "urb-car-1",
      url: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1780824939/happy%20luxe/Luxury%20Urbania%2012%20Seater%20%28%20Maharja%20Seats%20%29/WhatsApp_Image_2026-06-07_at_11.15.20_eyunco.jpg",
      title: "Luxury Maharaja Captain Seats",
      subtitle: "First-class dual-tone upholstered recliners with armrests",
      tag: "Captain Seats",
    },
    {
      id: "urb-car-2",
      url: "/images/vehicles/force_urbania.png",
      title: "Force Urbania Aerodynamic Exterior",
      subtitle: "European styling, panoramic windows & modern road presence",
      tag: "Exterior",
    },
    {
      id: "urb-car-3",
      url: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1780824939/happy%20luxe/Luxury%20Urbania%2012%20Seater%20%28%20Maharja%20Seats%20%29/WhatsApp_Image_2026-06-07_at_11.15.18_1_sczbiy.jpg",
      title: "Spacious Central Aisle & High Roof",
      subtitle: "Easy walkthrough access and generous overhead clearance",
      tag: "Cabin Interor",
    },
    {
      id: "urb-car-4",
      url: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1780825489/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-07_at_11.16.34_zia1rg.jpg",
      title: "Complete 16-Seater Passenger Cabin",
      subtitle: "Perfect for family tours, corporate offsites, and weddings",
      tag: "Seating Layout",
    },
    {
      id: "urb-car-5",
      url: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166685/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.34.07_u4vrqr.jpg",
      title: "Ambient Cabin Lighting & Venting",
      subtitle: "Individual AC ducts and warm ambient roof lighting",
      tag: "Lighting",
    },
    {
      id: "urb-car-6",
      url: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1780826332/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.23.25_ciq2es.jpg",
      title: "Ultra-Luxury VIP Finish",
      subtitle: "Meticulous interior styling and executive comfort touches",
      tag: "Cabin Interor",
    },
  ] as UrbaniaGalleryItem[],

  luxurySeatingGallery: [
    {
      id: "seat-gal-1",
      url: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1780824939/happy%20luxe/Luxury%20Urbania%2012%20Seater%20%28%20Maharja%20Seats%20%29/WhatsApp_Image_2026-06-07_at_11.15.20_eyunco.jpg",
      title: "Maharaja Reclining Seats",
      subtitle: "Contoured lateral support & dual armrests",
      tag: "Captain Seats",
    },
    {
      id: "seat-gal-2",
      url: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1780824939/happy%20luxe/Luxury%20Urbania%2012%20Seater%20%28%20Maharja%20Seats%20%29/WhatsApp_Image_2026-06-07_at_11.15.18_1_sczbiy.jpg",
      title: "Extended Legroom & Footrest",
      subtitle: "Comfortable posture for full-day travel",
      tag: "Captain Seats",
    },
    {
      id: "seat-gal-3",
      url: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1780825489/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-07_at_11.16.34_zia1rg.jpg",
      title: "Wide Center Walkway",
      subtitle: "Effortless movement from front to rear",
      tag: "Cabin Interor",
    },
    {
      id: "seat-gal-4",
      url: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166685/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.34.07_u4vrqr.jpg",
      title: "Personal USB Ports & Reading Lights",
      subtitle: "Keep your devices charged and read comfortably",
      tag: "Lighting",
    },
    {
      id: "seat-gal-5",
      url: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166686/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.34.06_emz1op.jpg",
      title: "Panoramic Passenger Window View",
      subtitle: "Large tinted windows for scenic sightseeing",
      tag: "Cabin Interor",
    },
    {
      id: "seat-gal-6",
      url: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1781166687/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-10_at_01.33.35_ju7zlf.jpg",
      title: "Generous Rear Luggage Space",
      subtitle: "Separate hold keeping passenger cabin clutter-free",
      tag: "Luggage",
    },
  ] as UrbaniaGalleryItem[],
};
