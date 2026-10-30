import React from "react";
import {
  PhoneCall,
  Navigation,
  ShieldCheck,
  Car,
  KeyRound,
  Users,
  Sparkles,
  Crown,
  HeartHandshake,
  Building2,
  Package,
  MapPin,
  CircleDollarSign,
  Hotel,
  Bus,
  Ticket,
  Plane,
  CheckCircle,
  ArrowRight,
  LucideIcon
} from "lucide-react";
import { ServiceItem } from "../../data/services";
import { getServiceEnquiryWhatsAppUrl } from "../../utils/whatsapp";

const iconMap: Record<string, LucideIcon> = {
  PhoneCall,
  Navigation,
  ShieldCheck,
  Car,
  KeyRound,
  Users,
  Sparkles,
  Crown,
  HeartHandshake,
  Building2,
  Package,
  MapPin,
  CircleDollarSign,
  Hotel,
  Bus,
  Ticket,
  Plane,
};

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = iconMap[service.iconName] || CheckCircle;

  const handleEnquire = () => {
    const url = getServiceEnquiryWhatsAppUrl(service.name);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="group relative bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-navy shadow-sm hover:shadow-brand transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-navy/5 group-hover:bg-navy text-navy group-hover:text-yellow-brand flex items-center justify-center transition-colors duration-200">
            <IconComponent className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
          </div>
          {service.badge && (
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-brand/10 text-red-brand border border-red-brand/20">
              {service.badge}
            </span>
          )}
        </div>

        <h3 className="text-base font-bold text-navy-deep group-hover:text-red-brand transition-colors mb-2">
          {service.name}
        </h3>

        <p className="text-xs text-text-muted leading-relaxed mb-4">
          {service.description}
        </p>
      </div>

      <div className="pt-3 border-t border-slate-100 mt-auto">
        <button
          onClick={handleEnquire}
          className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold text-navy bg-surface hover:bg-yellow-brand hover:text-navy-deep transition-all duration-200"
        >
          <span>Enquire Now</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
