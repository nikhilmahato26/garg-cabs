import React from "react";
import { MessageCircle } from "lucide-react";
import { getGeneralEnquiryWhatsAppUrl } from "../../utils/whatsapp";

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = getGeneralEnquiryWhatsAppUrl();

  return (
    <div className="fixed bottom-24 right-5 z-40 hidden md:block group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with GARG CABS on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:opacity-0" />
        <MessageCircle className="w-7 h-7 fill-white text-white relative z-10" />
      </a>

      {/* Hover tooltip */}
      <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap bg-navy-deep text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-xl border border-yellow-brand/30">
        Chat on WhatsApp
        <div className="absolute top-1/2 left-full -translate-y-1/2 border-4 border-transparent border-l-navy-deep" />
      </div>
    </div>
  );
};
