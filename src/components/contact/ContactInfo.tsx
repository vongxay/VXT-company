import React from 'react';
import { contactDetails } from '../../data/contact';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      {contactDetails.map((detail, index) => (
        <div key={index} className="flex items-center space-x-4">
          {detail.icon}
          <div>
            <h3 className="font-semibold text-gray-900">{detail.title}</h3>
            <p className="text-gray-600">{detail.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;