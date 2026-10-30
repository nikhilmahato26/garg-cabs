import React from "react";
import { Info, CheckCircle2 } from "lucide-react";
import { FARE_LIST } from "../../data/fares";
import { FareCard } from "../ui/FareCard";
import { BUSINESS_CONFIG } from "../../config/business";

interface FareListProps {
  onSelectVehicle?: (vehicleName: string) => void;
}

export const FareList: React.FC<FareListProps> = ({ onSelectVehicle }) => {
  return (
    <section id="fare-list-section" className="py-16 sm:py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="badge-yellow mb-3">All Inclusive One-Way Rates</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-deep tracking-tight">
            TRANSPARENT ONE WAY TAXI FARES
          </h2>
          <p className="mt-3 text-base sm:text-lg text-text-muted">
            Explore our vehicle-wise one-way taxi fares for travel enquiries across Delhi, Chandigarh, and Patiala.
          </p>
        </div>

        {/* 4 Fare Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {FARE_LIST.map((item) => (
            <FareCard
              key={item.id}
              item={item}
              onSelectVehicle={onSelectVehicle}
            />
          ))}
        </div>

        {/* Important Fare Conditions */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border-2 border-slate-200 shadow-sm">
          <div className="flex items-center gap-2.5 mb-4 text-navy-deep">
            <Info className="w-5 h-5 text-red-brand shrink-0" />
            <h3 className="font-heading font-black text-base uppercase tracking-wider">
              Important Fare Conditions
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-text-main">
            {BUSINESS_CONFIG.fareConditions.map((condition, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-surface border border-slate-200/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-medium">{condition}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
            <p>
              Operating Areas: Delhi • Chandigarh • Patiala • Delhi NCR
            </p>
            <p className="font-bold text-navy">
              No hidden surge charges on pre-agreed one-way fares.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
