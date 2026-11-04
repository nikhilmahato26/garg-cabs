import { BUSINESS_CONFIG } from "../config/business";

export interface BookingFormData {
  fullName: string;
  mobileNumber: string;
  pickupCity: string;
  pickupLocation: string;
  dropCity: string;
  dropLocation: string;
  travelDate: string;
  pickupTime?: string;
  preferredVehicle: string;
  passengers: string;
  requirements?: string;
}

/**
 * Builds the WhatsApp booking enquiry link with exact requested format
 */
export function getBookingWhatsAppUrl(data: BookingFormData): string {
  const pickup = `${data.pickupLocation.trim()} (${data.pickupCity})`;
  const drop = `${data.dropLocation.trim()} (${data.dropCity})`;

  const message = 
`Hello GARG CABS,

I would like to book a one-way taxi.

Name: ${data.fullName.trim()}
Phone: ${data.mobileNumber.trim()}
Pickup Location: ${pickup}
Drop Location: ${drop}
Travel Date: ${data.travelDate}${data.pickupTime ? `\nPickup Time: ${data.pickupTime}` : ""}
Preferred Vehicle: ${data.preferredVehicle}
Number of Passengers: ${data.passengers}${data.requirements ? `\nAdditional Requirements: ${data.requirements.trim()}` : ""}

Please confirm the applicable fare and availability.

Thank you.`;

  return `https://wa.me/${BUSINESS_CONFIG.whatsapp.numberRaw}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds standard general WhatsApp enquiry message
 */
export function getGeneralEnquiryWhatsAppUrl(): string {
  const message = "Hello GARG CABS, I would like to enquire about your one-way taxi services. Please share the booking details.";
  return `https://wa.me/${BUSINESS_CONFIG.whatsapp.numberRaw}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds vehicle-specific WhatsApp enquiry
 */
export function getVehicleEnquiryWhatsAppUrl(vehicleName: string, fare?: string): string {
  const message = fare
    ? `Hello GARG CABS, I am interested in booking a one-way taxi for ${vehicleName} (Listed Fare: ${fare}). Please confirm route availability and booking procedure.`
    : `Hello GARG CABS, I would like to enquire about ${vehicleName} rental availability and rates. Please share details.`;
  return `https://wa.me/${BUSINESS_CONFIG.whatsapp.numberRaw}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds route enquiry WhatsApp URL
 */
export function getRouteEnquiryWhatsAppUrl(from: string, to: string): string {
  const message = `Hello GARG CABS, I would like to enquire about one-way taxi service from ${from} to ${to}. Please share the available vehicles and fare quotation.`;
  return `https://wa.me/${BUSINESS_CONFIG.whatsapp.numberRaw}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds service enquiry WhatsApp URL
 */
export function getServiceEnquiryWhatsAppUrl(serviceName: string): string {
  const message = `Hello GARG CABS, I would like to enquire about your "${serviceName}" service. Please share details and pricing.`;
  return `https://wa.me/${BUSINESS_CONFIG.whatsapp.numberRaw}?text=${encodeURIComponent(message)}`;
}
