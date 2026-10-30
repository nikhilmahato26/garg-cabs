import React, { useRef, useState } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/Hero";
import { BookingForm, BookingFormHandle } from "../components/sections/BookingForm";
import { FareList } from "../components/sections/FareList";
import { PopularRoutes } from "../components/sections/PopularRoutes";
import { Fleet } from "../components/sections/Fleet";
import { Services } from "../components/sections/Services";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { About } from "../components/sections/About";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/layout/Footer";
import { WhatsAppButton } from "../components/ui/WhatsAppButton";
import { MobileActionBar } from "../components/layout/MobileActionBar";

export const Home: React.FC = () => {
  const bookingFormRef = useRef<BookingFormHandle>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<string>("Maruti Suzuki Dzire");

  const handleSelectVehicle = (vehicleName: string) => {
    setSelectedVehicle(vehicleName);
    bookingFormRef.current?.setVehicle(vehicleName);
  };

  const handleSelectRoute = (fromCity: string, toCity: string) => {
    bookingFormRef.current?.setRoute(fromCity, toCity);
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface text-text-main font-sans">
      {/* 1. Sticky Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. One Way Taxi Booking Form */}
        <BookingForm
          ref={bookingFormRef}
          initialVehicle={selectedVehicle}
        />

        {/* 4. One Way Taxi Fare List */}
        <FareList onSelectVehicle={handleSelectVehicle} />

        {/* 5. Popular Route Enquiries */}
        <PopularRoutes onSelectRoute={handleSelectRoute} />

        {/* 6. Our Fleet */}
        <Fleet onSelectVehicle={handleSelectVehicle} />

        {/* 7. Our Services */}
        <Services />

        {/* 8. Why Choose GARG CABS */}
        <WhyChooseUs />

        {/* 9. About Us */}
        <About />

        {/* 10 & 11. Both Office Locations & Contact Section */}
        <Contact />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* 13. Floating WhatsApp Button (Desktop) */}
      <WhatsAppButton />

      {/* 14. Mobile Sticky Booking Bar */}
      <MobileActionBar />
    </div>
  );
};
