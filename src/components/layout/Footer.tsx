import React from 'react';
import Logo from './Logo';
import { footerLinks } from '../../data/navigation';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const FooterSection = ({ title, items }: { title: string; items: string[] }) => (
    <div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-400">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-400">
              Your trusted partner for global business solutions
            </p>
          </div>
          
          <FooterSection title="Services" items={footerLinks.services} />
          <FooterSection title="Company" items={footerLinks.company} />
          <FooterSection title="Legal" items={footerLinks.legal} />
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} VXT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;