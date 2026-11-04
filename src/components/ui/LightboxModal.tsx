import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MessageCircle, MapPin } from "lucide-react";
import { getGeneralEnquiryWhatsAppUrl } from "../../utils/whatsapp";

export interface LightboxImageItem {
  url: string;
  title: string;
  subtitle?: string;
  category?: string;
  description?: string;
}

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: LightboxImageItem[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
}) => {
  const currentImage = images[currentIndex];

  const handleNext = useCallback(() => {
    if (images.length === 0) return;
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (images.length === 0) return;
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !currentImage) return null;

  const handleWhatsAppEnquiry = () => {
    const message = `Hello GARG CABS, I am viewing "${currentImage.title}" on your website and would like to enquire about taxi booking and availability.`;
    const url = `https://wa.me/919316430001?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close full-screen image"
          className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-red-brand text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={handlePrev}
            aria-label="Previous photograph"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-yellow-brand hover:text-navy-deep text-white transition-all duration-200 focus:outline-none shadow-xl active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={handleNext}
            aria-label="Next photograph"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-yellow-brand hover:text-navy-deep text-white transition-all duration-200 focus:outline-none shadow-xl active:scale-95"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        )}

        {/* Main Content Modal */}
        <motion.div
          key={currentImage.url + currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center text-white"
        >
          {/* Main Image Frame */}
          <div className="relative w-full max-h-[68vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black/60 shadow-2xl border border-white/10">
            <img
              src={currentImage.url}
              alt={currentImage.title}
              className="max-h-[68vh] w-auto max-w-full object-contain select-none"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes("/images/hero/hero_bg.png")) {
                  target.src = "/images/hero/hero_bg.png";
                }
              }}
            />
          </div>

          {/* Image Details Bar */}
          <div className="w-full mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                {currentImage.category && (
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-yellow-brand text-navy-deep">
                    {currentImage.category}
                  </span>
                )}
                {currentImage.subtitle && (
                  <span className="text-xs text-slate-300 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-red-brand" />
                    {currentImage.subtitle}
                  </span>
                )}
                <span className="text-xs text-slate-400 font-semibold">
                  ({currentIndex + 1} of {images.length})
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                {currentImage.title}
              </h3>
              {currentImage.description && (
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5 line-clamp-2 max-w-2xl">
                  {currentImage.description}
                </p>
              )}
            </div>

            {/* Quick Action Button */}
            <div className="shrink-0 flex items-center gap-2">
              <button
                onClick={handleWhatsAppEnquiry}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-lg active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire On WhatsApp</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
