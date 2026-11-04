import React from "react";
import { Phone, MapPin, ExternalLink, Building2 } from "lucide-react";
import { BUSINESS_CONFIG } from "../../config/business";

export const OfficeLocations: React.FC = () => {
  return (
    <section id="office-locations-section" className="py-16 sm:py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="badge-yellow mb-3">Our Physical Branches</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-deep tracking-tight">
            OFFICE LOCATIONS
          </h2>
          <p className="mt-3 text-base sm:text-lg text-text-muted">
            Visit our regional branch offices in Chandigarh and Patiala for in-person travel bookings, fleet inspections, and corporate contract discussions.
          </p>
        </div>

        {/* Both Office Locations Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BUSINESS_CONFIG.offices.map((office) => (
            <div
              key={office.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200/90 hover:border-yellow-brand shadow-brand hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Office Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-navy text-yellow-brand flex items-center justify-center">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-red-brand block">
                        {office.badge}
                      </span>
                      <h3 className="text-xl font-black text-navy-deep">
                        {office.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Address Lines */}
                <div className="space-y-1 mb-6 text-sm text-text-main py-4 px-4 rounded-2xl bg-surface border border-slate-200">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-5 h-5 text-red-brand shrink-0 mt-0.5" />
                    <div>
                      {office.addressLines.map((line, idx) => (
                        <p key={idx} className="font-semibold text-slate-800">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Office Phone */}
                <div className="mb-6">
                  <span className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-1">
                    Direct Contact Phone:
                  </span>
                  <a
                    href={office.phoneHref}
                    className="inline-flex items-center gap-2 text-xl font-black text-navy-deep hover:text-red-brand transition-colors"
                  >
                    <Phone className="w-5 h-5 text-red-brand" />
                    <span>{office.phone}</span>
                  </a>
                </div>

                {/* Embedded Interactive Google Map */}
                {office.mapEmbedUrl && (
                  <div className="mb-6">
                    <div className="flex items-center justify-between text-xs font-bold text-navy-deep uppercase tracking-wider mb-2">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-red-brand" />
                        <span>Location Map & Directions</span>
                      </span>
                      {office.id === "chandigarh" && (
                        <span className="text-[10px] font-bold text-red-brand bg-red-50 border border-red-200 px-2 py-0.5 rounded-md">
                          Sec 22-C (30.729397, 76.771980)
                        </span>
                      )}
                    </div>
                    <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
                      <iframe
                        src={office.mapEmbedUrl}
                        title={`${office.title} — Google Maps Location`}
                        className="w-full h-full border-0"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                <a
                  href={office.phoneHref}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-navy hover:bg-navy-light text-white text-xs font-bold transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4 text-yellow-brand" />
                  <span>Call Office</span>
                </a>

                <a
                  href={office.mapSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-surface hover:bg-slate-200 text-navy text-xs font-bold border border-slate-300 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-red-brand" />
                  <span>View On Map</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
