import React from 'react';
import { Globe2, Plane, ScrollText } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Global Technology Partner
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Seamless travel bookings, professional translations, and document legalization services
          </p>
          <div className="flex justify-center space-x-12">
            <div className="flex flex-col items-center">
              <Plane className="w-12 h-12 mb-2" />
              <span>Travel Booking</span>
            </div>
            <div className="flex flex-col items-center">
              <Globe2 className="w-12 h-12 mb-2" />
              <span>Translation</span>
            </div>
            <div className="flex flex-col items-center">
              <ScrollText className="w-12 h-12 mb-2" />
              <span>Legalization</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;