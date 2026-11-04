import React from "react";
import { Phone, Mail, Instagram, ChevronRight, ArrowUp, Sparkles, MapPin } from "lucide-react";
import { BUSINESS_CONFIG } from "../../config/business";
import { scrollToSection } from "../../utils/contact";
import { getGeneralEnquiryWhatsAppUrl } from "../../utils/whatsapp";

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: "Home", href: "hero-section" },
    { label: "One Way Taxi", href: "booking-section" },
    { label: "Fare List", href: "fare-list-section" },
    { label: "Fleet Showcase", href: "fleet-showcase-section" },
    { label: "Urbania Luxury", href: "urbania-section" },
    { label: "Popular Routes", href: "popular-routes-section" },
    { label: "Travel Gallery", href: "destinations-gallery-section" },
    { label: "Our Services", href: "services-section" },
    { label: "Why Choose Us", href: "why-choose-us-section" },
    { label: "Travel Experience", href: "travel-experience-section" },
    { label: "About Us", href: "about-section" },
    { label: "Office Locations", href: "office-locations-section" },
    { label: "Contact Us", href: "contact-section" },
  ];

  return (
    <footer className="bg-navy-deep text-slate-300 pt-16 pb-24 md:pb-12 border-t-4 border-yellow-brand relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-brand/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-brand/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Brand Banner Callout */}
        <div className="mb-12 pb-10 border-b border-slate-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-yellow-brand block mb-1">
              {BUSINESS_CONFIG.motto}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {BUSINESS_CONFIG.name} — {BUSINESS_CONFIG.tagline}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 font-semibold">
              {BUSINESS_CONFIG.servicePillars}
            </p>
            <p className="text-xs text-yellow-brand font-bold mt-1">
              {BUSINESS_CONFIG.coverageScope}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={() => scrollToSection("booking-section")}
              className="px-6 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider bg-red-brand hover:bg-red-brand-hover text-white shadow-red-cta active:scale-95 transition-all"
            >
              {BUSINESS_CONFIG.ctaMessage}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-yellow-brand/40 bg-black shrink-0 flex items-center justify-center p-0.5">
                <img
                  src="/images/brand/logo.jpg"
                  alt="GARG CABS"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-heading font-black text-2xl tracking-tight text-white block">
                  GARG CABS
                </span>
                <span className="text-[11px] font-bold text-yellow-brand uppercase tracking-wider block">
                  A SIGNATURE OF EXCELLENCE
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mb-5">
              Reliable, punctual, and transparent one-way taxi services connecting Delhi, Chandigarh, Patiala, and destinations across India with verified chauffeurs and GPS installed cabs.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] text-white flex items-center justify-center transition-all duration-200"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={getGeneralEnquiryWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
              >
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4 border-l-2 border-red-brand pl-2.5">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-xs text-slate-400 hover:text-yellow-brand flex items-center gap-1 transition-colors py-0.5 truncate"
                >
                  <ChevronRight className="w-3 h-3 text-red-brand shrink-0" />
                  <span className="truncate">{link.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Service Areas & Conditions */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4 border-l-2 border-yellow-brand pl-2.5">
              Service Areas
            </h4>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {BUSINESS_CONFIG.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-slate-800/80 text-yellow-brand border border-slate-700"
                >
                  {area}
                </span>
              ))}
            </div>

            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-1.5">
              Fare Policy
            </h5>
            <p className="text-[11px] text-slate-400 leading-normal">
              • All listed fares are described as ALL INCLUSIVE.<br />
              • PARKING CHARGES ARE EXTRA.<br />
              • Confirm applicable fare for your route before travel.
            </p>
          </div>

          {/* Office Contact Info */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4 border-l-2 border-red-brand pl-2.5">
              Office Locations
            </h4>

            <div className="space-y-4 text-xs">
              <div>
                <span className="text-yellow-brand font-bold block mb-1">
                  Chandigarh Head Office:
                </span>
                <a
                  href="https://maps.google.com/?q=30.729397,76.771980"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white leading-tight block transition-colors underline decoration-slate-600 hover:decoration-yellow-brand"
                  title="View Chandigarh Sector 22 Office on Google Maps"
                >
                  SCO 2417, 3rd Floor, Near Aroma Taxi Stand, Sector 22-C, Chandigarh.
                </a>
                <a
                  href={BUSINESS_CONFIG.phones.secondaryHref}
                  className="text-white hover:text-yellow-brand inline-flex items-center gap-1 mt-1 font-semibold"
                >
                  <Phone className="w-3 h-3 text-red-brand" />
                  {BUSINESS_CONFIG.phones.secondary}
                </a>
              </div>

              <div>
                <span className="text-yellow-brand font-bold block mb-1">
                  Patiala Office:
                </span>
                <p className="text-slate-400 leading-tight">
                  Radhe Radhe Fruit Co, Banana Store, Banna Rd, Near PGM School, Sirhind Rd, Patiala.
                </p>
                <a
                  href={BUSINESS_CONFIG.phones.primaryHref}
                  className="text-white hover:text-yellow-brand inline-flex items-center gap-1 mt-1 font-semibold"
                >
                  <Phone className="w-3 h-3 text-red-brand" />
                  {BUSINESS_CONFIG.phones.primary}
                </a>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <a
                  href={BUSINESS_CONFIG.emailHref}
                  className="text-slate-300 hover:text-yellow-brand flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-yellow-brand" />
                  <span>{BUSINESS_CONFIG.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {BUSINESS_CONFIG.copyrightYear} {BUSINESS_CONFIG.name}. All Rights Reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="text-slate-400">MD: {BUSINESS_CONFIG.md}</span>
            <button
              onClick={() => scrollToSection("hero-section")}
              className="inline-flex items-center gap-1 text-yellow-brand hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
