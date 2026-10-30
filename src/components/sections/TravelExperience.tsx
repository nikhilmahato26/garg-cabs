import React from "react";
import { Plane, Compass, Users2, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { scrollToSection } from "../../utils/contact";
import { getGeneralEnquiryWhatsAppUrl } from "../../utils/whatsapp";

export const TravelExperience: React.FC = () => {
  const experiences = [
    {
      id: "airport-transfers",
      title: "AIRPORT TRANSFERS",
      subtitle: "Delhi Airport & Regional Terminals",
      description: "Delhi Airport and other airport travel enquiries. Punctual 24/7 flight pickups, luggage assistance, and meet-and-greet transfers without the hassle of queues.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop",
      icon: Plane,
      badge: "Punctual & Tracked",
      highlights: ["Flight delay tracking", "Door-to-terminal drop", "Clean AC luggage boots"],
    },
    {
      id: "outstation-travel",
      title: "OUTSTATION TRAVEL",
      subtitle: "Intercity Highway Journeys",
      description: "Delhi, Chandigarh, Patiala and other destinations. Dedicated one-way taxi corridors with transparent vehicle fares, verified drivers, and zero hidden return costs.",
      image: "/images/hero/hero_bg.png",
      icon: Compass,
      badge: "One-Way Available",
      highlights: ["All-inclusive vehicle rates", "Verified highway chauffeurs", "24/7 on-call dispatch"],
    },
    {
      id: "luxury-group-travel",
      title: "LUXURY GROUP TRAVEL",
      subtitle: "Force Urbania & Tempo Traveller",
      description: "Urbania Traveller and premium group transportation. First-class Maharaja captain seats, high standing headroom, ambient lighting, and all-India service.",
      image: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1780824939/happy%20luxe/Luxury%20Urbania%2012%20Seater%20%28%20Maharja%20Seats%20%29/WhatsApp_Image_2026-06-07_at_11.15.20_eyunco.jpg",
      icon: Users2,
      badge: "All-India Coverage",
      highlights: ["Reclining captain armchairs", "12 to 17 seating options", "Massive luggage bays"],
    },
  ];

  return (
    <section id="travel-experience-section" className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-navy mb-3">Versatile Transit Solutions</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-deep tracking-tight">
            FROM CITY RIDES TO LUXURY TRAVEL
          </h2>
          <p className="mt-4 text-base sm:text-lg text-text-muted leading-relaxed">
            Whether you are planning a city transfer, airport pickup, family trip, group journey or a holiday destination, GARG CABS offers multiple vehicle options for your travel requirements.
          </p>
        </div>

        {/* 3 Promotional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {experiences.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-surface rounded-3xl overflow-hidden border-2 border-slate-200/90 hover:border-navy shadow-brand hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Frame */}
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-yellow-brand text-navy-deep shadow-md">
                        {item.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-red-brand text-white flex items-center justify-center shrink-0 shadow-lg">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-yellow-brand tracking-wider block">
                          {item.subtitle}
                        </span>
                        <h3 className="text-lg font-black tracking-tight leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-5">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-2">
                      {item.highlights.map((hl, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-navy-deep">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => scrollToSection("booking-section")}
                    className="w-full py-3 px-4 rounded-xl font-black text-xs uppercase tracking-wider bg-navy group-hover:bg-red-brand text-white transition-all shadow-sm flex items-center justify-center gap-2 active:scale-95"
                  >
                    <span>Enquire For This Service</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Primary CTA Banner */}
        <div className="bg-gradient-to-r from-navy-deep via-navy to-navy-light rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden shadow-brand-lg">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-yellow-brand/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="badge-yellow">Custom Travel Planning</span>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight">
              YOUR JOURNEY, OUR RESPONSIBILITY.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with our travel dispatchers to tailor vehicle bookings for family weddings, corporate tours, airport transfers, or multi-day interstate trips.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => scrollToSection("booking-section")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-black text-xs uppercase tracking-wider bg-red-brand hover:bg-red-brand-hover text-white shadow-red-cta active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>PLAN YOUR JOURNEY</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getGeneralEnquiryWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>WhatsApp Dispatcher</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
