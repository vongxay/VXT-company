import { Plane, Train, Globe2, ScrollText } from 'lucide-react';
import React from 'react';

export const services = [
  {
    icon: <Plane className="w-8 h-8 text-blue-600" />,
    title: "Flight Booking",
    description: "Book flights worldwide with competitive rates and 24/7 support",
    features: ["Global coverage", "24/7 support", "Best price guarantee"]
  },
  {
    icon: <Train className="w-8 h-8 text-blue-600" />,
    title: "Train Tickets",
    description: "Secure train reservations across multiple rail networks",
    features: ["Multiple networks", "Real-time availability", "Mobile tickets"]
  },
  {
    icon: <Globe2 className="w-8 h-8 text-blue-600" />,
    title: "Translation Services",
    description: "Professional translation in multiple languages by certified experts",
    features: ["Certified translators", "100+ languages", "Fast delivery"]
  },
  {
    icon: <ScrollText className="w-8 h-8 text-blue-600" />,
    title: "Document Legalization",
    description: "Complete document legalization and authentication services",
    features: ["Embassy legalization", "Apostille", "Document verification"]
  }
];