import React from 'react';
import { Globe2 } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Globe2 className="h-8 w-8 text-blue-600" />
      <span className="text-2xl font-bold text-blue-600">VXT</span>
    </div>
  );
};

export default Logo;