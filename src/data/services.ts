export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  badge?: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "taxi-24-7",
    name: "24/7 Taxi on Call",
    description: "Taxi booking enquiries available at any time around the clock.",
    iconName: "PhoneCall",
    badge: "24/7 Available",
  },
  {
    id: "gps-cabs",
    name: "GPS Installed Cabs",
    description: "GPS-installed cab options as advertised by the business for route tracking.",
    iconName: "Navigation",
    badge: "GPS Monitored",
  },
  {
    id: "verified-drivers",
    name: "Verified Drivers",
    description: "Verified driver service as advertised by the business for safe highway travel.",
    iconName: "ShieldCheck",
    badge: "Verified Staff",
  },
  {
    id: "one-way-taxi",
    name: "One Way Taxi",
    description: "One-way taxi services across Delhi, Chandigarh, Patiala, and Delhi NCR.",
    iconName: "Car",
    badge: "Specialty",
  },
  {
    id: "self-driven-cars",
    name: "Self-Driven Cars",
    description: "Self-driven car options. Customers should enquire about availability and applicable conditions.",
    iconName: "KeyRound",
  },
  {
    id: "tempo-traveller",
    name: "Tempo Traveller",
    description: "Group travel transportation enquiries with flexible seating arrangements.",
    iconName: "Users",
  },
  {
    id: "urbania-traveller",
    name: "Urbania Traveller",
    description: "Enquire about Force Urbania Traveller bookings for luxury executive road journeys.",
    iconName: "Sparkles",
  },
  {
    id: "luxury-car-rental",
    name: "Luxury Car Rental",
    description: "Luxury vehicle rental enquiries for VIP guests, business leaders, and special occasions.",
    iconName: "Crown",
  },
  {
    id: "wedding-events",
    name: "Wedding Events",
    description: "Transportation enquiries and guest vehicle arrangements for wedding events.",
    iconName: "HeartHandshake",
  },
  {
    id: "corporate-events",
    name: "Corporate Events",
    description: "Vehicle arrangements and executive coordination for corporate events and conferences.",
    iconName: "Building2",
  },
  {
    id: "courier-services",
    name: "Courier Services",
    description: "Courier service enquiries for urgent intercity parcel and document delivery.",
    iconName: "Package",
  },
  {
    id: "travel-packages",
    name: "Travel Packages",
    description: "Customized travel package enquiries across popular North Indian destinations.",
    iconName: "MapPin",
  },
  {
    id: "money-exchange",
    name: "Money Exchange",
    description: "Money exchange enquiries for international tourists and travel convenience.",
    iconName: "CircleDollarSign",
  },
  {
    id: "hotel-booking",
    name: "Hotel Booking",
    description: "Hotel reservation enquiries to support seamless end-to-end trip planning.",
    iconName: "Hotel",
  },
  {
    id: "bus-services",
    name: "Bus Services",
    description: "Bus transportation enquiries for large group charters and excursion travel.",
    iconName: "Bus",
  },
  {
    id: "bus-ticket-booking",
    name: "Bus Ticket Booking",
    description: "Bus ticket booking enquiries across major regional and intercity routes.",
    iconName: "Ticket",
  },
  {
    id: "air-ticket-booking",
    name: "Air Ticket Booking",
    description: "Flight ticket booking enquiries for domestic and international air travel.",
    iconName: "Plane",
  },
];
