import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'white' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, variant = 'primary', href, onClick, className = '' }: ButtonProps) => {
  const baseStyles = 'px-6 py-3 rounded-md font-medium transition-colors duration-200';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    white: 'bg-white text-blue-600 hover:bg-gray-100',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-blue-600'
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;