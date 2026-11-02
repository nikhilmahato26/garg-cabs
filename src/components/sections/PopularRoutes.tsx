import React from "react";
import { ArrowRight, MapPin, Navigation, Clock, ShieldCheck } from "lucide-react";
import { POPULAR_ROUTES, PopularRoute } from "../../data/routes";
import { scrollToSection } from "../../utils/contact";
import { BUSINESS_CONFIG } from "../../config/business";

interface PopularRoutesProps {
  onSelectRoute?: (from: string, to: string) => void;
}

export const PopularRoutes: React.FC<PopularRoutesProps> = ({ onSelectRoute }) => {
  const handleRouteEnquire = (route: PopularRoute) => {
    if (onSelectRoute) {
      onSelectRoute(route.from, route.to);
    }
    scrollToSection("booking-section");
  };

  return (
    <section id="popular-routes-section" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge-navy mb-3">Key Intercity Corridors</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-deep tracking-tight">
            POPULAR TAXI SERVICE LOCATIONS
          </h2>
          <p className="mt-3 text-base sm:text-lg text-text-muted">
            Direct, comfortable, door-to-door one-way taxi connectivity across our primary operational zones.
          </p>

          {/* Service Area Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 max-w-5xl mx-auto">
            {BUSINESS_CONFIG.serviceAreas.map((loc) => (
              <button
                key={loc}
                onClick={() => {
                  if (onSelectRoute) {
                    onSelectRoute("Delhi Airport", loc);
                  }
                  scrollToSection("booking-section");
                }}
                className="px-3 py-1.5 rounded-full text-xs font-bold bg-navy-50 text-navy hover:bg-navy hover:text-yellow-brand border border-navy/20 transition-all duration-200 flex items-center gap-1.5 active:scale-95 cursor-pointer shadow-xs group"
                title={`Book taxi to ${loc}`}
              >
                <MapPin className="w-3.5 h-3.5 text-red-brand group-hover:text-yellow-brand transition-colors" />
                <span>{loc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Route Enquiry Notice */}
        <div className="mb-8 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-text-muted text-center max-w-2xl mx-auto">
          These are suggested route enquiry options based on the supplied service areas, not confirmed fixed-price routes. Choose your route below to request a tailored quote.
        </div>

        {/* Route Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POPULAR_ROUTES.map((route) => (
            <div
              key={route.id}
              className="bg-surface hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-yellow-brand shadow-sm hover:shadow-brand transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Route Header Pill */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2 text-base font-black text-navy-deep">
                    <span className="text-navy group-hover:text-red-brand transition-colors">
                      {route.from}
                    </span>
                    <ArrowRight className="w-4 h-4 text-red-brand shrink-0" />
                    <span className="text-navy group-hover:text-red-brand transition-colors">
                      {route.to}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                    One-Way
                  </span>
                </div>

                <p className="text-xs text-text-muted mb-4 leading-relaxed">
                  {route.routeHighlight}
                </p>

                {/* Route Meta Details */}
                <div className="space-y-2 py-3 px-3.5 rounded-xl bg-white border border-slate-200/80 mb-5 text-xs text-navy">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Navigation className="w-3.5 h-3.5 text-navy-light" />
                      Distance:
                    </span>
                    <span className="font-bold">{route.distanceEstimate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-red-brand" />
                      Travel Time:
                    </span>
                    <span className="font-bold">{route.durationEstimate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Available Cabs:
                    </span>
                    <span className="font-semibold text-text-main truncate max-w-[150px]">
                      {route.popularVehicles.join(", ")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleRouteEnquire(route)}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider bg-navy group-hover:bg-red-brand text-white transition-colors duration-200 shadow-sm"
              >
                <span>ENQUIRE ABOUT THIS ROUTE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
