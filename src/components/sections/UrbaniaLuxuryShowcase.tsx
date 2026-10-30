import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Phone,
  Sparkles,
  MapPin,
  CheckCircle2,
  Armchair,
  Maximize2,
  Smile,
  Wind,
  Briefcase,
  Compass,
  Tv,
  Expand,
  ArrowRight
} from "lucide-react";
import { URBANIA_SHOWCASE_CONFIG, UrbaniaGalleryItem } from "../../data/urbaniaShowcase";
import { LightboxModal, LightboxImageItem } from "../ui/LightboxModal";
import { BUSINESS_CONFIG } from "../../config/business";
import { scrollToSection } from "../../utils/contact";

interface UrbaniaLuxuryShowcaseProps {
  onSelectVehicle?: (vehicleName: string) => void;
}

export const UrbaniaLuxuryShowcase: React.FC<UrbaniaLuxuryShowcaseProps> = ({ onSelectVehicle }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselImages = URBANIA_SHOWCASE_CONFIG.carouselImages;

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<LightboxImageItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const openLightboxWithItems = (items: UrbaniaGalleryItem[], index: number) => {
    const formatted: LightboxImageItem[] = items.map((item) => ({
      url: item.url,
      title: item.title,
      subtitle: item.subtitle,
      category: item.tag,
      description: "Force Urbania Luxury Traveller — All India Group Touring",
    }));
    setLightboxImages(formatted);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleBookUrbania = () => {
    if (onSelectVehicle) {
      onSelectVehicle("Force Urbania");
    }
    scrollToSection("booking-section");
  };

  const handleWhatsAppBooking = () => {
    const url = `https://wa.me/919316430001?text=${encodeURIComponent(URBANIA_SHOWCASE_CONFIG.whatsappMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const iconComponents: Record<string, React.ReactNode> = {
    Armchair: <Armchair className="w-5 h-5 text-yellow-brand" />,
    Maximize2: <Maximize2 className="w-5 h-5 text-yellow-brand" />,
    Smile: <Smile className="w-5 h-5 text-yellow-brand" />,
    Sparkles: <Sparkles className="w-5 h-5 text-yellow-brand" />,
    Wind: <Wind className="w-5 h-5 text-yellow-brand" />,
    Briefcase: <Briefcase className="w-5 h-5 text-yellow-brand" />,
    Compass: <Compass className="w-5 h-5 text-yellow-brand" />,
    Tv: <Tv className="w-5 h-5 text-yellow-brand" />,
  };

  return (
    <section id="urbania-section" className="py-20 sm:py-28 bg-navy-deep text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-brand/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-brand/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-yellow-brand text-navy-deep mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{URBANIA_SHOWCASE_CONFIG.coverageBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            {URBANIA_SHOWCASE_CONFIG.heading}
          </h2>
          <p className="mt-2 text-base sm:text-lg font-bold text-yellow-brand uppercase tracking-wider">
            {URBANIA_SHOWCASE_CONFIG.subtitle}
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Engineered on an international monocoque architecture, Force Urbania offers royalty-grade Maharaja captain seats, full standing headroom, whisper-quiet cabin acoustics, and seamless intercity travel across India.
          </p>
        </div>

        {/* Hero Showcase Carousel */}
        <div className="relative rounded-3xl overflow-hidden bg-black border-2 border-yellow-brand/50 shadow-2xl mb-16">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] max-h-[580px] w-full flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={carouselImages[carouselIndex].id}
                src={carouselImages[carouselIndex].url}
                alt={carouselImages[carouselIndex].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover select-none"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent pointer-events-none" />

            {/* Top Carousel Badge */}
            <div className="absolute top-4 left-4 sm:left-6 flex items-center gap-2">
              <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-red-brand text-white shadow-md">
                {carouselImages[carouselIndex].tag}
              </span>
              <span className="text-xs font-bold text-white bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                {carouselIndex + 1} / {carouselImages.length}
              </span>
            </div>

            {/* Expand in Lightbox Button */}
            <button
              onClick={() => openLightboxWithItems(carouselImages, carouselIndex)}
              className="absolute top-4 right-4 sm:right-6 p-2.5 rounded-full bg-black/60 hover:bg-yellow-brand hover:text-navy-deep text-white backdrop-blur-sm border border-white/20 transition-all shadow-lg"
              aria-label="View full screen"
            >
              <Expand className="w-5 h-5" />
            </button>

            {/* Prev / Next Nav Buttons */}
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-yellow-brand hover:text-navy-deep text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all shadow-xl active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-yellow-brand hover:text-navy-deep text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all shadow-xl active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Bottom Overlay Title & Subtitle */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pointer-events-none">
              <div>
                <span className="text-xs font-extrabold uppercase text-yellow-brand tracking-widest block mb-1">
                  FORCE URBANIA TRAVELLER SHOWCASE
                </span>
                <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight">
                  {carouselImages[carouselIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                  {carouselImages[carouselIndex].subtitle}
                </p>
              </div>

              {/* Action Trigger */}
              <div className="pointer-events-auto shrink-0 flex items-center gap-3">
                <button
                  onClick={handleBookUrbania}
                  className="px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider bg-red-brand hover:bg-red-brand-hover text-white shadow-red-cta active:scale-95 transition-all flex items-center gap-2"
                >
                  <span>{URBANIA_SHOWCASE_CONFIG.bookingCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Thumbnail Strip */}
          <div className="bg-navy/90 p-3 grid grid-cols-6 gap-2 border-t border-white/10">
            {carouselImages.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => setCarouselIndex(idx)}
                className={`relative rounded-xl overflow-hidden aspect-[16/9] border-2 transition-all ${
                  carouselIndex === idx
                    ? "border-yellow-brand ring-2 ring-yellow-brand/40 scale-100"
                    : "border-transparent opacity-50 hover:opacity-100"
                }`}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Feature Grid: 8 Luxurious Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {URBANIA_SHOWCASE_CONFIG.features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-navy/60 hover:bg-navy border border-slate-700/80 hover:border-yellow-brand/50 rounded-2xl p-5 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-yellow-brand/10 border border-yellow-brand/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {iconComponents[feat.iconName] || <Sparkles className="w-5 h-5 text-yellow-brand" />}
              </div>
              <h4 className="text-base font-bold text-white group-hover:text-yellow-brand transition-colors mb-1">
                {feat.title}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dedicated Luxury Seating Photo Gallery */}
        <div className="bg-navy/80 rounded-3xl p-6 sm:p-10 border border-slate-700/80 mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-yellow-brand block mb-1">
                Exclusive Seating & Cabin Gallery
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Luxury Seating & Cabin Architecture
              </h3>
            </div>
            <span className="text-xs text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
              Click any photo to view full-screen lightbox
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {URBANIA_SHOWCASE_CONFIG.luxurySeatingGallery.map((photo, sIdx) => (
              <div
                key={photo.id}
                onClick={() => openLightboxWithItems(URBANIA_SHOWCASE_CONFIG.luxurySeatingGallery, sIdx)}
                className="group relative rounded-2xl overflow-hidden bg-slate-900 aspect-[4/3] border border-slate-700/80 hover:border-yellow-brand cursor-pointer shadow-lg transition-all duration-300"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded bg-yellow-brand text-navy-deep">
                    {photo.tag}
                  </span>
                </div>

                <div className="absolute top-3 right-3 p-2 rounded-xl bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Expand className="w-4 h-4" />
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <h4 className="text-sm font-bold text-white group-hover:text-yellow-brand transition-colors">
                    {photo.title}
                  </h4>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    {photo.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage & Pricing Callout Banner */}
        <div className="bg-gradient-to-r from-red-brand-dark via-navy to-navy-deep rounded-3xl p-8 sm:p-10 border-2 border-yellow-brand/50 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-yellow-brand text-navy-deep">
                Nationwide Charter Availability
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Major Service Locations Across India
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                Whether you need luxury wedding transportation in Delhi NCR, corporate offsite transit to Chandigarh and Himachal, or luxury pilgrimage trips from Patiala, Urbania delivers supreme touring comfort.
              </p>

              {/* Location Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {URBANIA_SHOWCASE_CONFIG.locations.map((loc) => (
                  <span
                    key={loc}
                    className="px-3 py-1 rounded-lg text-xs font-bold bg-white/10 text-yellow-brand border border-white/15 flex items-center gap-1.5"
                  >
                    <MapPin className="w-3.5 h-3.5 text-red-brand" />
                    <span>{loc}</span>
                  </span>
                ))}
              </div>

              {/* Explicit Pricing Note */}
              <div className="pt-2">
                <span className="text-xs font-black uppercase tracking-widest text-slate-400 block mb-1">
                  Pricing Policy:
                </span>
                <span className="text-lg font-black text-yellow-brand">
                  {URBANIA_SHOWCASE_CONFIG.pricingNotice}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={handleBookUrbania}
                className="w-full py-4 px-6 rounded-xl font-black text-xs uppercase tracking-wider bg-red-brand hover:bg-red-brand-hover text-white shadow-red-cta active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>{URBANIA_SHOWCASE_CONFIG.bookingCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsAppBooking}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white transition-all active:scale-95 flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Urbania Booking</span>
              </button>

              <a
                href={BUSINESS_CONFIG.phones.primaryHref}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white transition-all text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-yellow-brand" />
                <span>Call {BUSINESS_CONFIG.phones.primary}</span>
              </a>
            </div>
          </div>
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
