import React from "react";
import { Phone, Mail, Instagram, MapPin, ExternalLink, MessageCircle, Building2 } from "lucide-react";
import { BUSINESS_CONFIG } from "../../config/business";
import { getGeneralEnquiryWhatsAppUrl } from "../../utils/whatsapp";

export const Contact: React.FC = () => {
  return (
    <section id="contact-section" className="py-16 sm:py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="badge-yellow mb-3">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-deep tracking-tight">
            CONNECT WITH GARG CABS
          </h2>
          <p className="mt-3 text-base sm:text-lg text-text-muted">
            Visit our regional offices or connect instantly via phone, WhatsApp, or email to discuss your taxi arrangements.
          </p>
        </div>

        {/* Both Office Locations Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {BUSINESS_CONFIG.offices.map((office) => (
            <div
              key={office.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200/90 hover:border-yellow-brand shadow-brand hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Office Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-navy text-yellow-brand flex items-center justify-center">
                      <Building2 className="w-5 h-5" />
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
                <div className="space-y-1 mb-6 text-sm text-text-main py-3 px-4 rounded-xl bg-surface border border-slate-200">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-red-brand shrink-0 mt-1" />
                    <div>
                      {office.addressLines.map((line, idx) => (
                        <p key={idx} className="font-medium">
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
                    className="inline-flex items-center gap-2 text-lg font-black text-navy-deep hover:text-red-brand transition-colors"
                  >
                    <Phone className="w-4 h-4 text-red-brand" />
                    <span>{office.phone}</span>
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                <a
                  href={office.phoneHref}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-navy hover:bg-navy-light text-white text-xs font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-yellow-brand" />
                  <span>Call Office</span>
                </a>

                <a
                  href={office.mapSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-surface hover:bg-slate-200 text-navy text-xs font-bold border border-slate-300 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-red-brand" />
                  <span>View On Map</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* General Contact Hub */}
        <div className="bg-navy-deep text-white rounded-3xl p-8 sm:p-10 border-2 border-yellow-brand/40 shadow-brand-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-brand/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-yellow-brand text-navy-deep">
                Central Inquiries
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                MD: Harinder Garg
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                Reach our central helpline directly for any custom one-way taxi inquiries, corporate travel bookings, or fleet charter requirements.
              </p>

              <div className="space-y-2 pt-2 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-yellow-brand shrink-0" />
                  <span className="text-slate-400">Helplines:</span>
                  <a href={BUSINESS_CONFIG.phones.primaryHref} className="text-white hover:text-yellow-brand font-bold underline">
                    {BUSINESS_CONFIG.phones.primary}
                  </a>
                  <span className="text-slate-600">/</span>
                  <a href={BUSINESS_CONFIG.phones.secondaryHref} className="text-white hover:text-yellow-brand font-bold underline">
                    {BUSINESS_CONFIG.phones.secondary}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-yellow-brand shrink-0" />
                  <span className="text-slate-400">Email:</span>
                  <a href={BUSINESS_CONFIG.emailHref} className="text-white hover:text-yellow-brand font-bold">
                    {BUSINESS_CONFIG.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Instagram className="w-4 h-4 text-yellow-brand shrink-0" />
                  <span className="text-slate-400">Instagram:</span>
                  <a
                    href={BUSINESS_CONFIG.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-yellow-brand font-bold truncate max-w-xs"
                  >
                    @gargcabs
                  </a>
                </div>
              </div>
            </div>

            {/* Right Quick Action Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <a
                href={BUSINESS_CONFIG.phones.primaryHref}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-bold transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-red-brand text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 uppercase font-semibold">Call Now</span>
                  <span className="text-sm font-black">{BUSINESS_CONFIG.phones.primary}</span>
                </div>
              </a>

              <a
                href={getGeneralEnquiryWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 text-white font-bold transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-emerald-300 uppercase font-semibold">WhatsApp Us</span>
                  <span className="text-sm font-black">Instant Chat</span>
                </div>
              </a>

              <a
                href={BUSINESS_CONFIG.emailHref}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-bold transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-yellow-brand text-navy-deep flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 uppercase font-semibold">Email Us</span>
                  <span className="text-xs font-black truncate max-w-[140px] block">{BUSINESS_CONFIG.email}</span>
                </div>
              </a>

              <a
                href={BUSINESS_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-bold transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 uppercase font-semibold">Instagram</span>
                  <span className="text-sm font-black">Follow @gargcabs</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
