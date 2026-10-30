import React, { useState } from "react";
import { Users, Briefcase, ChevronLeft, ChevronRight, MessageCircle, ArrowRight, Expand, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SHOWCASE_VEHICLES, ShowcaseVehicle } from "../../data/showcaseVehicles";
import { LightboxModal, LightboxImageItem } from "../ui/LightboxModal";
import { getVehicleEnquiryWhatsAppUrl } from "../../utils/whatsapp";
import { scrollToSection } from "../../utils/contact";

interface PremiumVehicleShowcaseProps {
  onSelectVehicle?: (vehicleName: string) => void;
}

export const PremiumVehicleShowcase: React.FC<PremiumVehicleShowcaseProps> = ({ onSelectVehicle }) => {
  // Per-vehicle gallery index states
  const [activeImageIndices, setActiveImageIndices] = useState<Record<string, number>>({
    dzire: 0,
    ertiga: 0,
    carens: 0,
    "innova-crysta": 0,
    urbania: 0,
  });

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<LightboxImageItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleNextPhoto = (vehicle: ShowcaseVehicle, e: React.MouseEvent) => {
    e.stopPropagation();
    const currentIndex = activeImageIndices[vehicle.id] || 0;
    const nextIndex = (currentIndex + 1) % vehicle.gallery.length;
    setActiveImageIndices((prev) => ({ ...prev, [vehicle.id]: nextIndex }));
  };

  const handlePrevPhoto = (vehicle: ShowcaseVehicle, e: React.MouseEvent) => {
    e.stopPropagation();
    const currentIndex = activeImageIndices[vehicle.id] || 0;
    const prevIndex = (currentIndex - 1 + vehicle.gallery.length) % vehicle.gallery.length;
    setActiveImageIndices((prev) => ({ ...prev, [vehicle.id]: prevIndex }));
  };

  const openVehicleLightbox = (vehicle: ShowcaseVehicle, startIndex: number) => {
    const formatted: LightboxImageItem[] = vehicle.gallery.map((g) => ({
      url: g.url,
      title: `${vehicle.name} — ${g.title}`,
      subtitle: vehicle.category,
      category: g.category,
      description: g.description,
    }));
    setLightboxImages(formatted);
    setLightboxIndex(startIndex);
    setLightboxOpen(true);
  };

  const handleBookVehicle = (vehicleName: string) => {
    if (onSelectVehicle) {
      onSelectVehicle(vehicleName);
    }
    scrollToSection("booking-section");
  };

  const handleWhatsAppChat = (vehicle: ShowcaseVehicle) => {
    const url = getVehicleEnquiryWhatsAppUrl(
      vehicle.name,
      vehicle.isPriced ? vehicle.pricingLabel : undefined
    );
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="fleet-showcase-section" className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-navy mb-3">Premium Fleet Showcase</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-deep tracking-tight">
            EXPLORE OUR FLEET
          </h2>
          <p className="mt-2 text-base sm:text-lg font-bold text-red-brand uppercase tracking-wider">
            Choose the Perfect Ride for Your Journey.
          </p>
          <p className="mt-3 text-sm sm:text-base text-text-muted">
            Explore large exterior views, multi-row seating arrangements, and luxury cabin appointments across our primary touring fleet. Each vehicle features its own dedicated photo gallery.
          </p>
        </div>

        {/* 5 Vehicles Cards Stack */}
        <div className="space-y-16">
          {SHOWCASE_VEHICLES.map((vehicle, vIdx) => {
            const activeIndex = activeImageIndices[vehicle.id] || 0;
            const currentPhoto = vehicle.gallery[activeIndex] || vehicle.gallery[0];
            const isReversed = vIdx % 2 === 1;

            return (
              <div
                key={vehicle.id}
                className="bg-surface rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-slate-200/90 shadow-brand hover:border-yellow-brand transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}>
                  {/* Left Column: Interactive Photo Gallery */}
                  <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="space-y-4">
                      {/* Main Featured Photo Box */}
                      <div
                        onClick={() => openVehicleLightbox(vehicle, activeIndex)}
                        className="group relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-900 border border-slate-200 shadow-md cursor-pointer flex items-center justify-center"
                      >
                        <img
                          src={currentPhoto.url}
                          alt={currentPhoto.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                        {/* Top Category Badge & Expand Button */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                          <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-navy/90 text-yellow-brand border border-yellow-brand/40 backdrop-blur-sm pointer-events-auto">
                            {currentPhoto.category}
                          </span>
                          <span className="p-2 rounded-xl bg-black/60 text-white backdrop-blur-sm pointer-events-auto group-hover:bg-red-brand transition-colors">
                            <Expand className="w-4 h-4" />
                          </span>
                        </div>

                        {/* Prev / Next Image Buttons */}
                        <button
                          onClick={(e) => handlePrevPhoto(vehicle, e)}
                          aria-label="Previous photograph"
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-navy-deep flex items-center justify-center shadow-lg transition-transform active:scale-90"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={(e) => handleNextPhoto(vehicle, e)}
                          aria-label="Next photograph"
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-navy-deep flex items-center justify-center shadow-lg transition-transform active:scale-90"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Bottom Image Caption */}
                        <div className="absolute bottom-3 left-4 right-4 pointer-events-none text-white">
                          <span className="text-[10px] uppercase font-bold text-yellow-brand block">
                            Photo {activeIndex + 1} of {vehicle.gallery.length}
                          </span>
                          <h4 className="text-sm sm:text-base font-bold tracking-tight truncate">
                            {currentPhoto.title}
                          </h4>
                          <p className="text-xs text-slate-300 line-clamp-1">
                            {currentPhoto.description}
                          </p>
                        </div>
                      </div>

                      {/* Thumbnails Row */}
                      <div className="grid grid-cols-5 gap-2">
                        {vehicle.gallery.map((photo, pIdx) => (
                          <button
                            key={photo.id}
                            onClick={() =>
                              setActiveImageIndices((prev) => ({
                                ...prev,
                                [vehicle.id]: pIdx,
                              }))
                            }
                            className={`relative rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all ${
                              activeIndex === pIdx
                                ? "border-red-brand ring-2 ring-red-brand/30 scale-100"
                                : "border-slate-200 opacity-60 hover:opacity-100"
                            }`}
                          >
                            <img
                              src={photo.url}
                              alt={photo.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            <span className="absolute bottom-1 right-1 text-[9px] font-black px-1 rounded bg-black/70 text-white uppercase">
                              {photo.category.slice(0, 3)}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Vehicle Information & Booking */}
                  <div className={`lg:col-span-5 space-y-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-white px-2.5 py-0.5 rounded border border-slate-200">
                          {vehicle.category}
                        </span>
                        <span className="text-xs font-black uppercase tracking-wider text-yellow-800 bg-yellow-brand/20 border border-yellow-brand/40 px-2.5 py-0.5 rounded-full">
                          ★ {vehicle.badge}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-black text-navy-deep tracking-tight">
                        {vehicle.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-red-brand mt-1">
                        {vehicle.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                      {vehicle.description}
                    </p>

                    {/* Quick Specs Badges */}
                    <div className="grid grid-cols-2 gap-3 py-3 px-4 bg-white rounded-2xl border border-slate-200 text-xs text-navy-deep">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-red-brand shrink-0" />
                        <div>
                          <span className="block text-[10px] text-slate-400 font-bold uppercase">Seating</span>
                          <span className="font-bold">{vehicle.capacity}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-navy-light shrink-0" />
                        <div>
                          <span className="block text-[10px] text-slate-400 font-bold uppercase">Luggage</span>
                          <span className="font-bold">{vehicle.luggage}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bullet Highlights */}
                    <ul className="space-y-1.5 text-xs text-text-main">
                      {vehicle.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Pricing Display */}
                    <div className="p-4 rounded-2xl bg-navy-deep text-white flex items-center justify-between">
                      <div>
                        <span className="block text-[10px] uppercase font-bold text-yellow-brand">
                          {vehicle.isPriced ? "One-Way Taxi Rate" : "Fleet Availability"}
                        </span>
                        <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
                          {vehicle.pricingLabel}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-semibold text-emerald-400 flex items-center gap-1 justify-end">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          Verified Cab
                        </span>
                      </div>
                    </div>

                    {/* Action CTAs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <button
                        onClick={() => handleBookVehicle(vehicle.name)}
                        className="py-3 px-4 rounded-xl font-black text-xs uppercase tracking-wider bg-red-brand hover:bg-red-brand-hover text-white shadow-red-cta active:scale-95 transition-all flex items-center justify-center gap-2"
                      >
                        <span>Book This Vehicle</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleWhatsAppChat(vehicle)}
                        className="py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white transition-all active:scale-95 flex items-center justify-center gap-2 shadow-sm"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>WhatsApp Enquiry</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </section>
  );
};
