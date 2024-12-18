import React from 'react';

interface ServiceIconProps {
  icon: React.ReactNode;
  label: string;
}

const ServiceIcon = ({ icon, label }: ServiceIconProps) => {
  return (
    <div className="flex flex-col items-center group">
      <div className="mb-3 transform transition-transform duration-200 group-hover:scale-110">
        {icon}
      </div>
      <span className="text-lg font-medium">{label}</span>
    </div>
  );
};

export default ServiceIcon;