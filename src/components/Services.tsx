import React from 'react';
import { Plane, Train, Globe2, ScrollText } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Plane className="w-8 h-8 text-blue-600" />,
      title: "Flight Booking",
      description: "Book flights worldwide with competitive rates and 24/7 support"
    },
    {
      icon: <Train className="w-8 h-8 text-blue-600" />,
      title: "Train Tickets",
      description: "Secure train reservations across multiple rail networks"
    },
    {
      icon: <Globe2 className="w-8 h-8 text-blue-600" />,
      title: "Translation Services",
      description: "Professional translation in multiple languages by certified experts"
    },
    {
      icon: <ScrollText className="w-8 h-8 text-blue-600" />,
      title: "Document Legalization",
      description: "Complete document legalization and authentication services"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;