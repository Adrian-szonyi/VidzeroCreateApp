import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ children, href = '#', className = '', ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      }
    }
    
    props.onClick?.(e);
  };

  return (
    <a 
      href={href}
      className={`font-medium transition-colors duration-200 ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};