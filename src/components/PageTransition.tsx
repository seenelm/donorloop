import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  
  return (
    <div className="page-transition" key={location.pathname}>
      {children}
    </div>
  );
};

export default PageTransition;
