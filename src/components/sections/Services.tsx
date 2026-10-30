import React from "react";
import { SERVICES_LIST } from "../../data/services";
import { ServiceCard } from "../ui/ServiceCard";

export const Services: React.FC = () => {
  return (
    <section id="services-section" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="badge-navy mb-3">All Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-deep tracking-tight">
            OUR SERVICES
          </h2>
          <p className="mt-2 text-sm sm:text-base font-extrabold text-red-brand uppercase tracking-wider">
            COMPLETE TRAVEL SOLUTIONS UNDER ONE ROOF
          </p>
          <p className="mt-3 text-sm sm:text-base text-text-muted">
            Explore the comprehensive range of cab rentals, group transit solutions, event logistics, and ticketing assistance provided by GARG CABS.
          </p>
        </div>

        {/* 17 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {SERVICES_LIST.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
