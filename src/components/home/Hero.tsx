import React from 'react';
import { Plane, Globe2, ScrollText } from 'lucide-react';
import ServiceIcon from './ServiceIcon';
import Button from '../ui/Button';

const Hero = () => {
  const services = [
    { icon: <Plane className="w-12 h-12" />, label: "Travel Booking" },
    { icon: <Globe2 className="w-12 h-12" />, label: "Translation" },
    { icon: <ScrollText className="w-12 h-12" />, label: "Legalization" }
  ];

  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Global Technology Partner
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-blue-100">
            Seamless travel bookings, professional translations, and document legalization services
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceIcon key={index} icon={service.icon} label={service.label} />
            ))}
          </div>

          <div className="flex justify-center space-x-4">
            <Button variant="white" href="#services">
              Explore Services
            </Button>
            <Button variant="outline" href="#contact">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;