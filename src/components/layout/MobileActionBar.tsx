import React from "react";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { BUSINESS_CONFIG } from "../../config/business";
import { scrollToSection } from "../../utils/contact";
import { getGeneralEnquiryWhatsAppUrl } from "../../utils/whatsapp";

export const MobileActionBar: React.FC = () => {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl py-2 px-3 safe-area-bottom"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call button */}
        <a
          href={BUSINESS_CONFIG.phones.primaryHref}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-navy-deep font-bold transition-all text-center"
        >
          <Phone className="w-5 h-5 text-red-brand mb-0.5" />
          <span className="text-[10px] tracking-tight leading-tight">Call Now</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={getGeneralEnquiryWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 active:scale-95 text-emerald-800 font-bold transition-all text-center"
        >
          <MessageCircle className="w-5 h-5 text-emerald-600 mb-0.5" />
          <span className="text-[10px] tracking-tight leading-tight">WhatsApp</span>
        </a>

        {/* Book Taxi button */}
        <button
          onClick={() => scrollToSection("booking-section")}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-red-brand hover:bg-red-brand-hover active:scale-95 text-white font-extrabold shadow-red-cta transition-all text-center"
        >
          <Calendar className="w-5 h-5 mb-0.5 text-yellow-brand" />
          <span className="text-[10px] tracking-tight leading-tight uppercase">Book Taxi</span>
        </button>
      </div>
    </aside>
  );
};
