import React, { useRef, useState } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/Hero";
import { BookingForm, BookingFormHandle } from "../components/sections/BookingForm";
import { FareList } from "../components/sections/FareList";
import { PremiumVehicleShowcase } from "../components/sections/PremiumVehicleShowcase";
import { UrbaniaLuxuryShowcase } from "../components/sections/UrbaniaLuxuryShowcase";
import { PopularRoutes } from "../components/sections/PopularRoutes";
import { DestinationGallery } from "../components/sections/DestinationGallery";
import { Services } from "../components/sections/Services";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { TravelExperience } from "../components/sections/TravelExperience";
import { About } from "../components/sections/About";
import { OfficeLocations } from "../components/sections/OfficeLocations";
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
    <div className="min-h-screen flex flex-col bg-surface text-text-main font-sans selection:bg-yellow-brand selection:text-navy-deep">
      {/* 1. Navigation Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Booking Form */}
        <BookingForm
          ref={bookingFormRef}
          initialVehicle={selectedVehicle}
        />

        {/* 4. One Way Taxi Fare List */}
        <FareList onSelectVehicle={handleSelectVehicle} />

        {/* 5. Premium Vehicle Showcase */}
        <PremiumVehicleShowcase onSelectVehicle={handleSelectVehicle} />

        {/* 6. Urbania Traveller Luxury Showcase */}
        <UrbaniaLuxuryShowcase onSelectVehicle={handleSelectVehicle} />

        {/* 7. Popular Routes */}
        <PopularRoutes onSelectRoute={handleSelectRoute} />

        {/* 8. Travel Destination Gallery */}
        <DestinationGallery onSelectDestination={(cityName) => handleSelectRoute("Delhi Airport", cityName)} />

        {/* 9. Our Services */}
        <Services />

        {/* 10. Why Choose GARG CABS */}
        <WhyChooseUs />

        {/* 11. Premium Travel Experience */}
        <TravelExperience />

        {/* 12. About GARG CABS */}
        <About />

        {/* 13. Office Locations */}
        <OfficeLocations />

        {/* 14. Contact Section */}
        <Contact />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* 16. Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* 17. Mobile Sticky Booking Bar */}
      <MobileActionBar />
    </div>
  );
};
