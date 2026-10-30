import React from "react";
import { Clock, Navigation, ShieldCheck, Car, HeartHandshake, Layers } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const highlights = [
    {
      title: "24/7 Taxi Service",
      description: "Taxi enquiries available around the clock as advertised by GARG CABS.",
      icon: Clock,
      color: "text-red-brand",
      bg: "bg-red-brand/10",
    },
    {
      title: "GPS Installed Cabs",
      description: "GPS-installed vehicle options for added journey tracking and peace of mind.",
      icon: Navigation,
      color: "text-navy",
      bg: "bg-navy/10",
    },
    {
      title: "Verified Drivers",
      description: "Driver verification as advertised to ensure safe and professional travel on highway routes.",
      icon: ShieldCheck,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      title: "One Way Taxi Services",
      description: "Dedicated one-way travel enquiries with upfront, transparent vehicle fares.",
      icon: Car,
      color: "text-yellow-600",
      bg: "bg-yellow-brand/20",
    },
    {
      title: "Comfortable Travel",
      description: "Clean, air-conditioned sedans and MPVs offering a professional and convenient travel presentation.",
      icon: HeartHandshake,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      title: "Multiple Travel Options",
      description: "Cars, travellers, luxury rentals, and additional travel services all available from one provider.",
      icon: Layers,
      color: "text-cyan-600",
      bg: "bg-cyan-50",
    },
  ];

  return (
    <section id="why-choose-us-section" className="py-16 sm:py-24 bg-navy-deep text-white relative overflow-hidden">
      {/* Decorative background effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-brand/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-brand/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-yellow-brand/20 text-yellow-brand border border-yellow-brand/30 mb-3">
            Service Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            WHY CHOOSE GARG CABS?
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Backed by the principles advertised on our official branding: round-the-clock availability, verified drivers, GPS-monitored vehicles, and reliable one-way connectivity.
          </p>
        </div>

        {/* 6 Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-navy/70 hover:bg-navy border border-slate-700/80 hover:border-yellow-brand/50 rounded-2xl p-6 sm:p-7 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-yellow-brand transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
