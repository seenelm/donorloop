import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/theme.css';
import './Navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if the screen is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <div className="header-container">
      <header className="header">
        <Link to="/">
          <img src={logo} alt="DonorLoop Logo" className="logo" />
        </Link>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <>
            <nav className="nav desktop-nav">
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                Home
              </Link>
              <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
                About
              </Link>
              <Link to="/pricing" className={`nav-link ${location.pathname === '/pricing' ? 'active' : ''}`}>
                Pricing
              </Link>
              <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
                Contact Us
              </Link>
            </nav>
            
            <a href="https://app.donorloop.io" className="cta-button desktop-cta">Get Started</a>
          </>
        )}
        
        {/* Mobile Navigation - Hamburger Only */}
        {isMobile && (
          <button 
            className={`hamburger-button ${mobileMenuOpen ? 'active' : ''}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
        
        {/* Mobile Menu Modal */}
        {mobileMenuOpen && isMobile && (
          <div className="mobile-menu-overlay">
            <nav className="mobile-menu">
              <Link 
                to="/" 
                className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`mobile-nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/pricing" 
                className={`mobile-nav-link ${location.pathname === '/pricing' ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/contact" 
                className={`mobile-nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <a 
                href="https://app.donorloop.io" 
                className="mobile-nav-link dashboard-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navigation;
