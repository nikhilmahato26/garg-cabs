import React from "react";
import { Phone, Mail, Instagram, MessageCircle, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { BUSINESS_CONFIG } from "../../config/business";
import { getGeneralEnquiryWhatsAppUrl } from "../../utils/whatsapp";
import { scrollToSection } from "../../utils/contact";

export const Contact: React.FC = () => {
  return (
    <section id="contact-section" className="py-16 sm:py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="badge-red mb-3">Direct Helplines</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-deep tracking-tight">
            CONNECT WITH GARG CABS
          </h2>
          <p className="mt-3 text-base sm:text-lg text-text-muted">
            Reach out via phone, WhatsApp, or email for instant taxi bookings, route quotes, and travel assistance.
          </p>
        </div>

        {/* Central Contact Hub */}
        <div className="bg-navy-deep text-white rounded-3xl p-8 sm:p-12 border-2 border-yellow-brand/50 shadow-brand-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-brand/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-brand/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-yellow-brand text-navy-deep">
                Central Booking Office
              </span>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                MD: Harinder Garg
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-md">
                Reach our 24/7 central desk directly for any urgent one-way taxi dispatches, corporate group rentals, airport pickups, or specialized Urbania bookings.
              </p>

              <div className="space-y-3 pt-2 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-yellow-brand shrink-0" />
                  <span className="text-slate-400">Primary Contact:</span>
                  <a href={BUSINESS_CONFIG.phones.primaryHref} className="text-white hover:text-yellow-brand font-black underline">
                    {BUSINESS_CONFIG.phones.primary}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-yellow-brand shrink-0" />
                  <span className="text-slate-400">Chandigarh Desk:</span>
                  <a href={BUSINESS_CONFIG.phones.secondaryHref} className="text-white hover:text-yellow-brand font-black underline">
                    {BUSINESS_CONFIG.phones.secondary}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-yellow-brand shrink-0" />
                  <span className="text-slate-400">Official Email:</span>
                  <a href={BUSINESS_CONFIG.emailHref} className="text-white hover:text-yellow-brand font-bold">
                    {BUSINESS_CONFIG.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-yellow-brand shrink-0" />
                  <span className="text-slate-400">Instagram:</span>
                  <a
                    href={BUSINESS_CONFIG.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-yellow-brand font-bold"
                  >
                    @gargcabs
                  </a>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  24/7 Dispatch Desk
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-yellow-brand" />
                  GPS Installed Cabs
                </span>
              </div>
            </div>

            {/* Right Quick Action Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={BUSINESS_CONFIG.phones.primaryHref}
                className="flex items-center gap-3.5 p-5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-bold transition-all group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-red-brand text-white flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 uppercase font-semibold">Call Primary</span>
                  <span className="text-sm font-black">{BUSINESS_CONFIG.phones.primary}</span>
                </div>
              </a>

              <a
                href={BUSINESS_CONFIG.phones.secondaryHref}
                className="flex items-center gap-3.5 p-5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-bold transition-all group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-light text-yellow-brand flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 uppercase font-semibold">Call Chandigarh</span>
                  <span className="text-sm font-black">{BUSINESS_CONFIG.phones.secondary}</span>
                </div>
              </a>

              <a
                href={getGeneralEnquiryWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-5 rounded-2xl bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-500/30 text-white font-bold transition-all group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[11px] text-emerald-300 uppercase font-semibold">WhatsApp Chat</span>
                  <span className="text-sm font-black">Instant Booking</span>
                </div>
              </a>

              <a
                href={BUSINESS_CONFIG.emailHref}
                className="flex items-center gap-3.5 p-5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-bold transition-all group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-yellow-brand text-navy-deep flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 uppercase font-semibold">Email Enquiries</span>
                  <span className="text-xs font-black truncate max-w-[140px] block">{BUSINESS_CONFIG.email}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
