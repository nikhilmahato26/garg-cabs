import React from "react";
import { Users, Wind, CheckCircle2, MessageCircle } from "lucide-react";
import { FleetVehicle } from "../../data/vehicles";
import { getVehicleEnquiryWhatsAppUrl } from "../../utils/whatsapp";
import { scrollToSection } from "../../utils/contact";

interface VehicleCardProps {
  vehicle: FleetVehicle;
  onSelectVehicle?: (vehicleName: string) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onSelectVehicle }) => {
  const handleSelect = () => {
    if (vehicle.isPriced) {
      if (onSelectVehicle) {
        onSelectVehicle(vehicle.name);
      }
      scrollToSection("booking-section");
    } else {
      const whatsappUrl = getVehicleEnquiryWhatsAppUrl(vehicle.name);
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 hover:border-navy shadow-brand hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden">
      {/* Top Banner & Badge */}
      <div className="p-4 pb-0 flex items-center justify-between">
        <span className="text-[11px] font-bold text-navy-muted uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md">
          {vehicle.category}
        </span>
        {vehicle.badge && (
          <span className="text-[11px] font-bold text-yellow-800 bg-yellow-brand/20 border border-yellow-brand/40 px-2.5 py-0.5 rounded-full">
            {vehicle.badge}
          </span>
        )}
      </div>

      {/* Vehicle Image */}
      <div className="relative h-44 sm:h-48 flex items-center justify-center p-4">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Card Info */}
      <div className="p-5 pt-0 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-navy-deep group-hover:text-red-brand transition-colors mb-1">
            {vehicle.name}
          </h3>
          <p className="text-xs text-text-muted mb-3 line-clamp-2">
            {vehicle.tagline}
          </p>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 gap-2 p-2.5 bg-surface rounded-xl border border-slate-200/60 mb-3 text-[11px] text-navy">
            <div className="flex items-center gap-1.5 font-medium truncate">
              <Users className="w-3.5 h-3.5 text-red-brand shrink-0" />
              <span className="truncate">{vehicle.capacity}</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium truncate">
              <Wind className="w-3.5 h-3.5 text-navy-light shrink-0" />
              <span className="truncate">{vehicle.acType}</span>
            </div>
          </div>

          {/* Feature bullets */}
          <ul className="space-y-1 mb-4">
            {vehicle.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-center text-xs text-text-main gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                <span className="truncate">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing / Booking Action */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
          <div>
            <span className="block text-[10px] uppercase font-bold text-slate-400">
              {vehicle.isPriced ? "Fare" : "Availability"}
            </span>
            <span className={`text-base font-black ${vehicle.isPriced ? "text-navy-deep" : "text-slate-700"}`}>
              {vehicle.pricingLabel}
            </span>
          </div>

          <button
            onClick={handleSelect}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 active:scale-95 ${
              vehicle.isPriced
                ? "bg-navy hover:bg-navy-light text-white shadow-sm"
                : "bg-yellow-brand hover:bg-yellow-brand-hover text-navy-deep font-extrabold shadow-sm"
            }`}
          >
            {vehicle.isPriced ? (
              <span>Book Vehicle</span>
            ) : (
              <>
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Enquire Now</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
