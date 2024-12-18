import { Mail, Phone, MapPin } from 'lucide-react';
import React from 'react';

export const contactDetails = [
  {
    icon: <Mail className="w-6 h-6 text-blue-600" />,
    title: "Email",
    content: "contact@vxt.com"
  },
  {
    icon: <Phone className="w-6 h-6 text-blue-600" />,
    title: "Phone",
    content: "+1 (555) 123-4567"
  },
  {
    icon: <MapPin className="w-6 h-6 text-blue-600" />,
    title: "Address",
    content: "123 Business Street, Tech City, TC 12345"
  }
];