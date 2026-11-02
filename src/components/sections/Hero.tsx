import React from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck, Clock, MapPin, Navigation, Star } from "lucide-react";
import { BUSINESS_CONFIG } from "../../config/business";
import { scrollToSection } from "../../utils/contact";

export const Hero: React.FC = () => {
  return (
    <section id="hero-section" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-white via-surface to-slate-100">
      {/* Decorative background grid and shapes */}
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#071D3B0A_1px,transparent_1px),linear-gradient(to_bottom,#071D3B0A_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute -top-24 right-0 w-[500px] h-[500px] bg-yellow-brand/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-[400px] h-[400px] bg-red-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headings, Badges, CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy text-yellow-brand text-xs font-black tracking-widest uppercase shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-yellow-brand animate-pulse" />
              <span>AIRPORTS | PATIALA | CHANDIGARH | DELHI | 37+ CITIES</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy-deep tracking-tight leading-[1.1]">
              ONE WAY TAXI SERVICES{" "}
              <span className="text-red-brand relative inline-block">
                MADE SIMPLE.
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 250 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 9.5C65.5 3 175.5 3 248 9.5" stroke="#FFC928" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-text-muted max-w-2xl font-normal leading-relaxed">
              Travel comfortably between Delhi Airport, Chandigarh, Patiala, Ludhiana, Amritsar, and 35+ destinations across North India with GARG CABS. Check vehicle options, transparent one-way fares, and book on-demand.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection("booking-section")}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wide bg-red-brand hover:bg-red-brand-hover text-white shadow-red-cta active:scale-95 transition-all duration-200"
              >
                <span>BOOK ONE WAY TAXI</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollToSection("fare-list-section")}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-extrabold text-sm uppercase tracking-wide bg-white hover:bg-slate-50 text-navy-deep border-2 border-navy/20 hover:border-navy shadow-sm transition-all duration-200"
              >
                <span>VIEW FARE LIST</span>
              </button>

              <a
                href={BUSINESS_CONFIG.phones.primaryHref}
                className="sm:hidden flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 text-navy font-bold text-xs"
              >
                <Phone className="w-4 h-4 text-red-brand" />
                <span>Call {BUSINESS_CONFIG.phones.primary}</span>
              </a>
            </div>

            {/* 4 Poster Highlight Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                <Clock className="w-4 h-4 text-red-brand shrink-0" />
                <span className="text-xs font-bold text-navy-deep leading-tight">24/7 Taxi on Call</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                <Navigation className="w-4 h-4 text-navy shrink-0" />
                <span className="text-xs font-bold text-navy-deep leading-tight">GPS Installed Cabs</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-navy-deep leading-tight">Verified Drivers</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                <MapPin className="w-4 h-4 text-yellow-600 shrink-0" />
                <span className="text-xs font-bold text-navy-deep leading-tight">One Way Taxi</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual & Floating Highlights */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Card Frame */}
            <div className="relative rounded-3xl bg-gradient-to-br from-navy via-navy-deep to-black p-4 sm:p-6 border-2 border-yellow-brand/40 shadow-brand-lg overflow-hidden text-white">
              {/* Gold Accents */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-yellow-brand/20 rounded-full blur-2xl pointer-events-none" />

              {/* Brand Tag Top */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-brand">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-brand" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-yellow-brand tracking-widest uppercase">
                    A SIGNATURE OF EXCELLENCE
                  </span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-red-brand text-white">
                  ONE WAY
                </span>
              </div>

              {/* Airport Terminal Hero Taxi Fleet Image */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 aspect-[4/3] flex items-center justify-center group">
                <img
                  src="/images/hero/hero_bg.png"
                  alt="Garg Cabs Airport & Outstation Taxi Fleet"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent" />
                
                {/* Overlay Vehicle Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-xl bg-navy-deep/80 backdrop-blur-md border border-yellow-brand/30">
                  <div>
                    <span className="block text-[10px] text-yellow-brand font-bold uppercase">Airport Transfers & Intercity</span>
                    <span className="text-xs font-black text-white">Innova Crysta • Carens • Ertiga • Dzire</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-300 block">Fares From</span>
                    <span className="text-sm font-black text-yellow-brand">₹3,500</span>
                  </div>
                </div>
              </div>

              {/* Floating Quick Route Pills */}
              <div className="mt-4 pt-3 flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-lg bg-white/10 text-slate-200 border border-white/15">
                  Delhi Airport ⇄ Chandigarh
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/10 text-slate-200 border border-white/15">
                  Chandigarh Airport ⇄ Patiala
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/10 text-slate-200 border border-white/15">
                  Delhi ⇄ Ludhiana
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/10 text-slate-200 border border-white/15">
                  Amritsar ⇄ Delhi Airport
                </span>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-brand/20 text-yellow-800 flex items-center justify-center font-black text-base">
                24/7
              </div>
              <div>
                <span className="block text-xs font-bold text-navy-deep">On-Call Booking</span>
                <a href={BUSINESS_CONFIG.phones.primaryHref} className="text-xs font-black text-red-brand hover:underline">
                  +91 9316430001
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
