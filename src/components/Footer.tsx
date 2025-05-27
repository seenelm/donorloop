import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo-section">
          <Link to="/">
            <img src={logo} alt="Givin Logo" className="footer-logo" />
          </Link>
          <p className="footer-address">300 Beale Street, San Francisco, CA 94105</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-links-column">
            <h4>Company</h4>
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/pricing" className="footer-link">Pricing</Link>
            <Link to="/contact" className="footer-link">Contact Us</Link>
          </div>
          
          <div className="footer-links-column">
            <h4>Resources</h4>
            <a href="#" className="footer-link">Blog</a>
            <a href="#" className="footer-link">Help Center</a>
            <a href="#" className="footer-link">FAQ</a>
          </div>
        </div>
        
        <div className="footer-social">
          <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="tel:+1234567890" className="social-link" aria-label="Phone">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>
          <a href="mailto:info@givin.io" className="social-link" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="copyright">© {currentYear} Givin AI LLC. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#" className="footer-link">Terms & Conditions</a>
          <a href="#" className="footer-link">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
