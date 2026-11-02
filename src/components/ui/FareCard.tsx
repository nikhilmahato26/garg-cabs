import React from "react";
import { Users, Briefcase, CheckCircle2, ArrowRight } from "lucide-react";
import { FareItem } from "../../data/fares";
import { scrollToSection } from "../../utils/contact";

interface FareCardProps {
  item: FareItem;
  onSelectVehicle?: (vehicleName: string) => void;
}

export const FareCard: React.FC<FareCardProps> = ({ item, onSelectVehicle }) => {
  const handleBooking = () => {
    if (onSelectVehicle) {
      onSelectVehicle(item.vehicleName);
    }
    scrollToSection("booking-section");
  };

  return (
    <div className="group relative bg-white rounded-2xl border-2 border-slate-200/80 hover:border-yellow-brand shadow-brand hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden">
      {/* Top Badge */}
      {item.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-navy text-yellow-brand border border-yellow-brand/40 shadow-sm">
            ★ {item.badge}
          </span>
        </div>
      )}

      {/* Vehicle Image Container with Airport Background */}
      <div className="relative h-48 sm:h-52 bg-slate-900 overflow-hidden">
        <img
          src={item.image}
          alt={item.vehicleName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        <span className="absolute bottom-2.5 right-3 text-[11px] font-bold text-yellow-brand uppercase tracking-wider bg-black/70 backdrop-blur-sm px-2.5 py-0.5 rounded border border-yellow-brand/30">
          {item.category}
        </span>
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-xl font-bold text-navy-deep group-hover:text-red-brand transition-colors">
              {item.vehicleName}
            </h3>
          </div>

          <p className="text-xs text-text-muted mb-4 line-clamp-2">
            {item.description}
          </p>

          {/* Quick specs */}
          <div className="flex items-center gap-4 py-2.5 px-3 bg-surface rounded-xl border border-slate-200/70 mb-4 text-xs font-medium text-navy">
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-red-brand" />
              <span>{item.capacity}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-navy-light" />
              <span>{item.luggage}</span>
            </div>
          </div>

          {/* Features list */}
          <ul className="space-y-1.5 mb-5">
            {item.features.map((feat, idx) => (
              <li key={idx} className="flex items-center text-xs text-text-main gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-4 border-t border-slate-100 mt-auto">
          <div className="flex items-center justify-between mb-3.5">
            <div>
              <span className="block text-[11px] font-bold text-text-muted uppercase tracking-wider">
                One Way Taxi Fare
              </span>
              <span className="text-xs text-emerald-700 font-semibold">All Inclusive</span>
            </div>
            <div className="text-right">
              <div className="inline-block bg-yellow-brand/20 border border-yellow-brand px-3 py-1 rounded-xl">
                <span className="text-2xl font-black text-navy-deep tracking-tight">
                  {item.formattedPrice}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={handleBooking}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-extrabold text-sm uppercase tracking-wide bg-red-brand hover:bg-red-brand-hover text-white shadow-red-cta hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
          >
            <span>{item.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
