import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Expand, Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import { GALLERY_CATEGORIES, GALLERY_PHOTOS, GalleryCategory, GalleryPhoto } from "../../data/destinations";
import { LightboxModal, LightboxImageItem } from "../ui/LightboxModal";
import { scrollToSection } from "../../utils/contact";

export const DestinationGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("ALL PHOTOS");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Filter photos based on category
  const filteredPhotos =
    selectedCategory === "ALL PHOTOS"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxItems: LightboxImageItem[] = filteredPhotos.map((photo) => ({
    url: photo.url,
    title: photo.title,
    subtitle: photo.location,
    category: photo.category,
    description: `${photo.description} (Trip Route: ${photo.suggestedTrip})`,
  }));

  const handleEnquireDestination = (photo: GalleryPhoto, e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `Hello GARG CABS, I would like to book a taxi trip to ${photo.location} (${photo.title}). Please share the route details, available cabs, and fare quote.`;
    const url = `https://wa.me/919316430001?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="destinations-gallery-section" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge-navy mb-3">Travel Photography & Fleet</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-deep tracking-tight">
            EXPLORE BEAUTIFUL DESTINATIONS WITH GARG CABS
          </h2>
          <p className="mt-2 text-base sm:text-lg font-bold text-red-brand uppercase tracking-wider">
            Your Journey, Your Destination.
          </p>
          <p className="mt-3 text-sm sm:text-base text-text-muted">
            From the bustling boulevards of Delhi and Chandigarh to the snowy peaks of Manali, the spiritual peace of Amritsar, and the royal heritage of Jaipur and Agra — experience seamless travel with GARG CABS.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-navy-deep text-yellow-brand shadow-md scale-105 border-2 border-yellow-brand"
                  : "bg-white text-navy-deep hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Dynamic Grid Layout */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredPhotos.map((photo, pIdx) => {
              // Create dynamic masonry spans based on aspect
              const isWide = photo.aspect === "wide";
              const isPortrait = photo.aspect === "portrait";

              return (
                <motion.div
                  layout
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openLightbox(pIdx)}
                  className={`group relative rounded-3xl overflow-hidden bg-slate-900 border-2 border-slate-200 hover:border-yellow-brand shadow-brand hover:shadow-card-hover cursor-pointer transition-all duration-300 ${
                    isWide ? "sm:col-span-2 aspect-[16/9]" : isPortrait ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                >
                  {/* Photo */}
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-navy/90 text-yellow-brand border border-yellow-brand/30 backdrop-blur-sm">
                      {photo.category}
                    </span>
                    <span className="p-2 rounded-xl bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                      <Expand className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Bottom Info & Action */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs text-yellow-brand font-bold flex items-center gap-1 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-red-brand shrink-0" />
                      <span>{photo.location}</span>
                    </span>

                    <h3 className="text-base sm:text-lg font-black tracking-tight leading-snug">
                      {photo.title}
                    </h3>

                    <p className="text-xs text-slate-300 line-clamp-2 mt-1 hidden sm:block">
                      {photo.description}
                    </p>

                    <div className="pt-3 mt-2 border-t border-white/15 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-300 truncate max-w-[170px]">
                        {photo.suggestedTrip}
                      </span>

                      <button
                        onClick={(e) => handleEnquireDestination(photo, e)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-yellow-brand hover:bg-yellow-brand-hover text-navy-deep transition-all shadow-sm active:scale-95 shrink-0"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Enquire</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border-2 border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-left">
            <span className="text-xs font-bold text-red-brand uppercase tracking-wider block mb-1">
              Custom Itineraries & Holiday Trips
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-navy-deep tracking-tight">
              Ready to travel to your dream destination?
            </h4>
            <p className="text-xs sm:text-sm text-text-muted mt-0.5">
              Contact GARG CABS for tailored round-trip, one-way, and holiday tour packages.
            </p>
          </div>

          <button
            onClick={() => scrollToSection("booking-section")}
            className="shrink-0 px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider bg-red-brand hover:bg-red-brand-hover text-white shadow-red-cta active:scale-95 transition-all flex items-center gap-2"
          >
            <span>Plan Your Journey</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxItems}
        currentIndex={lightboxIndex}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </section>
  );
};
