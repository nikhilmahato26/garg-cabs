import React from "react";
import { UserCheck, Phone, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { BUSINESS_CONFIG } from "../../config/business";
import { scrollToSection } from "../../utils/contact";

export const About: React.FC = () => {
  return (
    <section id="about-section" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Emblem & Brand Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-black p-8 sm:p-10 border-2 border-yellow-brand shadow-brand-lg text-center overflow-hidden">
              {/* Gold gradient radial */}
              <div className="absolute inset-0 bg-[radial-gradient(#FFC92815_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-yellow-brand/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                {/* Official Logo Banner */}
                <div className="w-36 h-36 mx-auto mb-6 rounded-2xl overflow-hidden border border-yellow-brand/40 shadow-2xl p-1 bg-black">
                  <img
                    src="/images/brand/logo.jpg"
                    alt="GARG CABS Signature of Excellence"
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="block text-xs uppercase font-extrabold tracking-widest text-yellow-brand mb-1">
                  A SIGNATURE OF EXCELLENCE
                </span>
                <h3 className="text-3xl font-black text-white tracking-tight mb-2">
                  GARG CABS
                </h3>
                <p className="text-xs text-slate-300 max-w-xs mx-auto mb-6">
                  One Way Taxi Services • Delhi | Chandigarh | Patiala
                </p>

                {/* Managing Director Badge */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-brand/20 text-yellow-brand flex items-center justify-center">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-bold">Managing Director</span>
                    <span className="text-base font-black text-white">{BUSINESS_CONFIG.md}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="badge-red">About Company</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-deep tracking-tight">
                ABOUT GARG CABS
              </h2>
            </div>

            {/* Verbatim Supplied Copy Paragraph 1 */}
            <p className="text-base sm:text-lg text-text-main leading-relaxed">
              {BUSINESS_CONFIG.aboutSummary}
            </p>

            {/* Verbatim Supplied Copy Paragraph 2 */}
            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              {BUSINESS_CONFIG.aboutFleetSummary}
            </p>

            {/* Verbatim Supplied Copy Paragraph 3 */}
            <p className="text-sm sm:text-base text-navy font-semibold leading-relaxed p-4 rounded-xl bg-slate-50 border-l-4 border-yellow-brand">
              "{BUSINESS_CONFIG.aboutContactSummary}"
            </p>

            {/* Managing Director & Operational Areas */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 text-navy font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>MD: HARINDER GARG</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 text-navy font-bold">
                <MapPin className="w-4 h-4 text-red-brand" />
                <span>Delhi • Chandigarh • Patiala • NCR</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => scrollToSection("contact-section")}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider bg-red-brand hover:bg-red-brand-hover text-white shadow-red-cta active:scale-95 transition-all"
              >
                <span>CONTACT GARG CABS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BUSINESS_CONFIG.phones.primaryHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-surface hover:bg-slate-200 text-navy-deep border border-slate-300 transition-all"
              >
                <Phone className="w-4 h-4 text-red-brand" />
                <span>Call +91 9316430001</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
