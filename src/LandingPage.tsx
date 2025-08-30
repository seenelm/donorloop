import React from 'react';
import './LandingPage.css';
import InteractiveMockup from './InteractiveMockup';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      {/* No header here - using shared Navigation component */}
      
      <div className="container">
        
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Your AI Assistant for Fundraising</h1>
            <p className="hero-subtitle">Upload your organization's data and unlock powerful insights to boost your fundraising efforts</p>
            
            <div className="hero-buttons">
              <a href="https://app.donorloop.io" className="cta-button">Try DonorLoop Free</a>
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
