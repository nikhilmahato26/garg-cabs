import React, { useState } from "react";
import { FLEET_VEHICLES } from "../../data/vehicles";
import { VehicleCard } from "../ui/VehicleCard";

interface FleetProps {
  onSelectVehicle?: (vehicleName: string) => void;
}

export const Fleet: React.FC<FleetProps> = ({ onSelectVehicle }) => {
  const [filter, setFilter] = useState<"all" | "priced" | "specialized">("all");

  const filteredVehicles = FLEET_VEHICLES.filter((v) => {
    if (filter === "priced") return v.isPriced;
    if (filter === "specialized") return !v.isPriced;
    return true;
  });

  return (
    <section id="fleet-section" className="py-16 sm:py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="badge-yellow mb-3">Complete Vehicle Fleet</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-deep tracking-tight">
            CHOOSE YOUR RIDE
          </h2>
          <p className="mt-3 text-base sm:text-lg text-text-muted">
            From budget-friendly sedans and comfortable family MPVs to luxury travellers and self-drive cars, we have the right vehicle for every travel requirement.
          </p>

          {/* Filter tabs */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === "all"
                  ? "bg-navy text-white shadow-sm"
                  : "bg-white text-navy-deep hover:bg-slate-100 border border-slate-200"
              }`}
            >
              All Vehicles ({FLEET_VEHICLES.length})
            </button>
            <button
              onClick={() => setFilter("priced")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === "priced"
                  ? "bg-navy text-white shadow-sm"
                  : "bg-white text-navy-deep hover:bg-slate-100 border border-slate-200"
              }`}
            >
              One-Way Fared Cabs (4)
            </button>
            <button
              onClick={() => setFilter("specialized")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === "specialized"
                  ? "bg-navy text-white shadow-sm"
                  : "bg-white text-navy-deep hover:bg-slate-100 border border-slate-200"
              }`}
            >
              Travellers & Rentals (4)
            </button>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onSelectVehicle={onSelectVehicle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
