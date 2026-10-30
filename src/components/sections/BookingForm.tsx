import React, { useEffect, forwardRef, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar, User, Phone, MapPin, Car, Users, Send, ShieldAlert } from "lucide-react";
import { getBookingWhatsAppUrl, BookingFormData } from "../../utils/whatsapp";

const bookingSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  mobileNumber: z
    .string()
    .min(10, "Please enter a valid 10-digit mobile number")
    .regex(/^[0-9+ -]{10,15}$/, "Please enter a valid contact number"),
  pickupCity: z.string().min(1, "Select pickup city"),
  pickupLocation: z.string().min(2, "Enter pickup location / landmark"),
  dropCity: z.string().min(1, "Select drop city"),
  dropLocation: z.string().min(2, "Enter drop location / landmark"),
  travelDate: z.string().min(1, "Select your travel date"),
  preferredVehicle: z.string().min(1, "Select preferred vehicle"),
  passengers: z.string().min(1, "Select passenger count"),
  requirements: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export interface BookingFormHandle {
  setVehicle: (vehicleName: string) => void;
  setRoute: (fromCity: string, toCity: string) => void;
}

interface BookingFormProps {
  initialVehicle?: string;
  initialFrom?: string;
  initialTo?: string;
}

export const BookingForm = forwardRef<BookingFormHandle, BookingFormProps>(
  ({ initialVehicle, initialFrom, initialTo }, ref) => {
    const today = new Date().toISOString().split("T")[0];

    const {
      register,
      handleSubmit,
      setValue,
      formState: { errors, isSubmitting },
    } = useForm<BookingFormValues>({
      resolver: zodResolver(bookingSchema),
      defaultValues: {
        fullName: "",
        mobileNumber: "",
        pickupCity: initialFrom || "Delhi",
        pickupLocation: "",
        dropCity: initialTo || "Chandigarh",
        dropLocation: "",
        travelDate: today,
        preferredVehicle: initialVehicle || "Toyota Innova Crysta",
        passengers: "4 Passengers",
        requirements: "",
      },
    });

    useEffect(() => {
      if (initialVehicle) setValue("preferredVehicle", initialVehicle);
    }, [initialVehicle, setValue]);

    useEffect(() => {
      if (initialFrom) setValue("pickupCity", initialFrom);
      if (initialTo) setValue("dropCity", initialTo);
    }, [initialFrom, initialTo, setValue]);

    useImperativeHandle(ref, () => ({
      setVehicle: (vehicleName: string) => {
        setValue("preferredVehicle", vehicleName);
      },
      setRoute: (fromCity: string, toCity: string) => {
        setValue("pickupCity", fromCity);
        setValue("dropCity", toCity);
      },
    }));

    const onSubmit = (data: BookingFormValues) => {
      const payload: BookingFormData = {
        fullName: data.fullName,
        mobileNumber: data.mobileNumber,
        pickupCity: data.pickupCity,
        pickupLocation: data.pickupLocation,
        dropCity: data.dropCity,
        dropLocation: data.dropLocation,
        travelDate: data.travelDate,
        preferredVehicle: data.preferredVehicle,
        passengers: data.passengers,
        requirements: data.requirements,
      };

      const whatsappUrl = getBookingWhatsAppUrl(payload);
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    };

    return (
      <section id="booking-section" className="py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge-navy mb-3">Instant Booking Quotation</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-deep tracking-tight">
              BOOK YOUR ONE WAY TAXI
            </h2>
            <p className="mt-3 text-base sm:text-lg text-text-muted">
              Choose your preferred vehicle, share your pickup and drop locations, and contact GARG CABS for your booking.
            </p>
          </div>

          {/* Form Card */}
          <div className="max-w-4xl mx-auto bg-surface rounded-3xl p-6 sm:p-10 border-2 border-slate-200 shadow-brand relative overflow-hidden">
            {/* Top decorative stripe */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-navy via-red-brand to-yellow-brand" />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {/* 1. Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-navy-deep uppercase tracking-wider mb-2">
                    1. Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="fullName"
                      type="text"
                      placeholder="e.g. Harinder Garg"
                      {...register("fullName")}
                      className={`w-full pl-11 pr-4 py-3 bg-white rounded-xl border text-sm text-navy-deep placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.fullName
                          ? "border-red-500 focus:ring-red-500/20"
                          : "border-slate-300 focus:border-navy focus:ring-navy/20"
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-600 font-medium">{errors.fullName.message}</p>
                  )}
                </div>

                {/* 2. Mobile Number */}
                <div>
                  <label htmlFor="mobileNumber" className="block text-xs font-bold text-navy-deep uppercase tracking-wider mb-2">
                    2. Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="mobileNumber"
                      type="tel"
                      placeholder="e.g. 9316430001"
                      {...register("mobileNumber")}
                      className={`w-full pl-11 pr-4 py-3 bg-white rounded-xl border text-sm text-navy-deep placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.mobileNumber
                          ? "border-red-500 focus:ring-red-500/20"
                          : "border-slate-300 focus:border-navy focus:ring-navy/20"
                      }`}
                    />
                  </div>
                  {errors.mobileNumber && (
                    <p className="mt-1 text-xs text-red-600 font-medium">{errors.mobileNumber.message}</p>
                  )}
                </div>

                {/* 3. Pickup City */}
                <div>
                  <label htmlFor="pickupCity" className="block text-xs font-bold text-navy-deep uppercase tracking-wider mb-2">
                    3. Pickup City *
                  </label>
                  <div className="relative">
                    <MapPin className="w-5 h-5 text-red-brand absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="pickupCity"
                      {...register("pickupCity")}
                      className="w-full pl-11 pr-4 py-3 bg-white rounded-xl border border-slate-300 text-sm text-navy-deep font-medium focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/20 transition-all cursor-pointer"
                    >
                      <option value="Delhi">Delhi</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Patiala">Patiala</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* 4. Pickup Location / Address */}
                <div>
                  <label htmlFor="pickupLocation" className="block text-xs font-bold text-navy-deep uppercase tracking-wider mb-2">
                    4. Pickup Location / Address *
                  </label>
                  <input
                    id="pickupLocation"
                    type="text"
                    placeholder="e.g. Airport T3 / Sector 22-C / Hotel"
                    {...register("pickupLocation")}
                    className={`w-full px-4 py-3 bg-white rounded-xl border text-sm text-navy-deep placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.pickupLocation
                        ? "border-red-500 focus:ring-red-500/20"
                        : "border-slate-300 focus:border-navy focus:ring-navy/20"
                    }`}
                  />
                  {errors.pickupLocation && (
                    <p className="mt-1 text-xs text-red-600 font-medium">{errors.pickupLocation.message}</p>
                  )}
                </div>

                {/* 5. Drop City */}
                <div>
                  <label htmlFor="dropCity" className="block text-xs font-bold text-navy-deep uppercase tracking-wider mb-2">
                    5. Drop City *
                  </label>
                  <div className="relative">
                    <MapPin className="w-5 h-5 text-yellow-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="dropCity"
                      {...register("dropCity")}
                      className="w-full pl-11 pr-4 py-3 bg-white rounded-xl border border-slate-300 text-sm text-navy-deep font-medium focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/20 transition-all cursor-pointer"
                    >
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Patiala">Patiala</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* 6. Drop Location / Address */}
                <div>
                  <label htmlFor="dropLocation" className="block text-xs font-bold text-navy-deep uppercase tracking-wider mb-2">
                    6. Drop Location / Address *
                  </label>
                  <input
                    id="dropLocation"
                    type="text"
                    placeholder="e.g. Sector 17 / Sirhind Road / Gurugram"
                    {...register("dropLocation")}
                    className={`w-full px-4 py-3 bg-white rounded-xl border text-sm text-navy-deep placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.dropLocation
                        ? "border-red-500 focus:ring-red-500/20"
                        : "border-slate-300 focus:border-navy focus:ring-navy/20"
                    }`}
                  />
                  {errors.dropLocation && (
                    <p className="mt-1 text-xs text-red-600 font-medium">{errors.dropLocation.message}</p>
                  )}
                </div>

                {/* 7. Travel Date */}
                <div>
                  <label htmlFor="travelDate" className="block text-xs font-bold text-navy-deep uppercase tracking-wider mb-2">
                    7. Travel Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="travelDate"
                      type="date"
                      min={today}
                      {...register("travelDate")}
                      className="w-full pl-11 pr-4 py-3 bg-white rounded-xl border border-slate-300 text-sm text-navy-deep font-medium focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/20 transition-all"
                    />
                  </div>
                </div>

                {/* 8. Preferred Vehicle */}
                <div>
                  <label htmlFor="preferredVehicle" className="block text-xs font-bold text-navy-deep uppercase tracking-wider mb-2">
                    8. Preferred Vehicle *
                  </label>
                  <div className="relative">
                    <Car className="w-5 h-5 text-navy absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="preferredVehicle"
                      {...register("preferredVehicle")}
                      className="w-full pl-11 pr-4 py-3 bg-white rounded-xl border border-slate-300 text-sm text-navy-deep font-medium focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/20 transition-all cursor-pointer"
                    >
                      <option value="Maruti Suzuki Dzire">Maruti Suzuki Dzire (₹3,500)</option>
                      <option value="Maruti Suzuki Ertiga">Maruti Suzuki Ertiga (₹4,500)</option>
                      <option value="Kia Carens">Kia Carens (₹5,000)</option>
                      <option value="Toyota Innova Crysta">Toyota Innova Crysta (₹6,000)</option>
                      <option value="Tempo Traveller">Tempo Traveller (Enquiry)</option>
                      <option value="Force Urbania">Force Urbania (Enquiry)</option>
                      <option value="Luxury Car">Luxury Car Rental (Enquiry)</option>
                      <option value="Self-Driven Car">Self-Driven Car (Enquiry)</option>
                    </select>
                  </div>
                </div>

                {/* 9. Number of Passengers */}
                <div>
                  <label htmlFor="passengers" className="block text-xs font-bold text-navy-deep uppercase tracking-wider mb-2">
                    9. Number of Passengers *
                  </label>
                  <div className="relative">
                    <Users className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="passengers"
                      {...register("passengers")}
                      className="w-full pl-11 pr-4 py-3 bg-white rounded-xl border border-slate-300 text-sm text-navy-deep font-medium focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/20 transition-all cursor-pointer"
                    >
                      <option value="1 Passenger">1 Passenger</option>
                      <option value="2 Passengers">2 Passengers</option>
                      <option value="3 Passengers">3 Passengers</option>
                      <option value="4 Passengers">4 Passengers (Dzire / Sedan)</option>
                      <option value="5 Passengers">5 Passengers</option>
                      <option value="6 Passengers">6 Passengers (Ertiga / Carens)</option>
                      <option value="7 Passengers">7 Passengers (Innova Crysta)</option>
                      <option value="8+ Passengers">8+ Passengers (Tempo / Urbania)</option>
                    </select>
                  </div>
                </div>

                {/* 10. Additional Requirements */}
                <div>
                  <label htmlFor="requirements" className="block text-xs font-bold text-navy-deep uppercase tracking-wider mb-2">
                    10. Additional Requirements (Optional)
                  </label>
                  <input
                    id="requirements"
                    type="text"
                    placeholder="e.g. Flight number, extra luggage space, child seat"
                    {...register("requirements")}
                    className="w-full px-4 py-3 bg-white rounded-xl border border-slate-300 text-sm text-navy-deep placeholder:text-slate-400 focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/20 transition-all"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl font-black text-base uppercase tracking-wider bg-red-brand hover:bg-red-brand-hover text-white shadow-red-cta active:scale-[0.99] transition-all flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  <span>GET BOOKING QUOTE</span>
                </button>
              </div>

              {/* Explicit Disclaimer */}
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
                <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p>
                  <strong>Important Note:</strong> Submitting this form opens a pre-formatted message in WhatsApp directly with our dispatch team. Bookings are confirmed upon mutual route, fare, and vehicle availability confirmation.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
);

BookingForm.displayName = "BookingForm";
