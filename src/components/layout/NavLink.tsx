import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink = ({ href, children, className = '', onClick }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (onClick) onClick();
    }
  };

  return (
    <a
      href={href}
      className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 ${className}`}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default NavLink;