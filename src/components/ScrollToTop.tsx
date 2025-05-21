import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component ensures that when navigating to a new page, 
// the window scrolls to the top automatically
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
