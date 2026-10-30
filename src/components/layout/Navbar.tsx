import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X, Car, ArrowRight } from "lucide-react";
import { BUSINESS_CONFIG } from "../../config/business";
import { scrollToSection } from "../../utils/contact";
import { getGeneralEnquiryWhatsAppUrl } from "../../utils/whatsapp";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "hero-section" },
    { label: "One Way Taxi", href: "booking-section" },
    { label: "Fare List", href: "fare-list-section" },
    { label: "Our Fleet", href: "fleet-section" },
    { label: "Our Services", href: "services-section" },
    { label: "About Us", href: "about-section" },
    { label: "Contact", href: "contact-section" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-brand border-b border-slate-200/80 py-2.5"
          : "bg-white border-b border-slate-100 py-3.5"
      }`}
    >
      {/* Top micro bar for phone & WhatsApp */}
      <div className="hidden lg:block bg-navy-deep text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-yellow-brand font-semibold flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              24/7 One-Way Taxi On Call: Delhi • Chandigarh • Patiala • Delhi NCR
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={BUSINESS_CONFIG.phones.primaryHref}
              className="hover:text-yellow-brand flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-yellow-brand" />
              <span>{BUSINESS_CONFIG.phones.primary}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={BUSINESS_CONFIG.phones.secondaryHref}
              className="hover:text-yellow-brand flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-yellow-brand" />
              <span>{BUSINESS_CONFIG.phones.secondary}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={getGeneralEnquiryWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Brand Identity */}
          <a
            href="#hero-section"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("hero-section");
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border border-yellow-brand/40 shadow-sm bg-black shrink-0 flex items-center justify-center p-0.5">
              <img
                src="/images/brand/logo.jpg"
                alt="GARG CABS Logo"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-black text-xl sm:text-2xl tracking-tight text-navy-deep group-hover:text-red-brand transition-colors">
                  GARG CABS
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-yellow-brand text-navy-deep">
                  Taxi
                </span>
              </div>
              <span className="block text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                ONE WAY TAXI SERVICES
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-xs font-bold text-text-main hover:text-red-brand uppercase tracking-wider transition-colors py-1"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action Call & CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={BUSINESS_CONFIG.phones.primaryHref}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy font-bold text-xs transition-colors"
            >
              <Phone className="w-4 h-4 text-red-brand" />
              <span>{BUSINESS_CONFIG.phones.primary}</span>
            </a>

            <button
              onClick={() => handleNavClick("booking-section")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-xs uppercase tracking-wide bg-red-brand hover:bg-red-brand-hover text-white shadow-red-cta active:scale-95 transition-all duration-200"
            >
              <Car className="w-4 h-4" />
              <span>BOOK A TAXI</span>
            </button>
          </div>

          {/* Mobile Hamburger & Call */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={BUSINESS_CONFIG.phones.primaryHref}
              className="p-2 rounded-lg bg-red-brand/10 text-red-brand hover:bg-red-brand hover:text-white transition-colors"
              aria-label="Call Garg Cabs"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-navy transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-4 pb-6 mt-2 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-100">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2 px-3 text-xs font-bold text-navy-deep hover:bg-yellow-brand/20 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick("booking-section")}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-black text-xs uppercase tracking-wider bg-red-brand text-white shadow-red-cta"
            >
              <Car className="w-4 h-4" />
              <span>BOOK A TAXI</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={getGeneralEnquiryWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs bg-emerald-600 text-white"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
