import React from 'react';
import './LandingPage.css';
import givinLogo from './assets/givin-logo.png';
import givinLogoBlack from './assets/givin-logo-black.png';
import InteractiveMockup from './InteractiveMockup';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <div className="header-container">
        <header className="header">
          <img src={givinLogo} alt="Givin Logo" className="logo" />
          
          <nav className="nav">
            <a href="#" className="nav-link active">Home</a>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Pricing</a>
            <a href="#" className="nav-link">Contact Us</a>
          </nav>
          
          <button className="cta-button">Get Started</button>
        </header>
      </div>
      
      <div className="container">
        
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <img src={givinLogoBlack} alt="Givin Logo" className="logo" style={{ marginBottom: '20px' }} />
            <h1 className="hero-title">Your AI Assistant for Fundraising</h1>
            <p className="hero-subtitle">Upload your organization's data and unlock powerful insights to boost your fundraising efforts</p>
            
            <div className="hero-buttons">
              <button className="cta-button">Try Givin Free</button>
              <button className="secondary-button">
                Learn how it works
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <div className="features">
              <ul className="feature-list">
                <li className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>990 XML Financial Analysis</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Donor Acquisition Strategies</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Fundraising Campaign Optimization</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="hero-image">
            <InteractiveMockup />
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
