import React from 'react';
import '../styles/theme.css';
import '../App.css';
import './Pages.css';

const Pricing: React.FC = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1>Pricing Plans</h1>
        
        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-header">
              <h2>Free</h2>
              <p className="price">$0<span>/month</span></p>
            </div>
            <div className="pricing-features">
              <ul>
                <li>Basic 990 XML data analysis</li>
                <li>Limited financial insights</li>
                <li>1 organization profile</li>
                <li>Community support</li>
              </ul>
            </div>
            <button className="pricing-button">Get Started</button>
          </div>
          
          <div className="pricing-card featured">
            <div className="pricing-badge">Most Popular</div>
            <div className="pricing-header">
              <h2>Pro</h2>
              <p className="price">$49<span>/month</span></p>
            </div>
            <div className="pricing-features">
              <ul>
                <li>Advanced 990 XML financial analysis</li>
                <li>Donor acquisition strategies</li>
                <li>Up to 5 organization profiles</li>
                <li>Email support</li>
                <li>Fundraising campaign optimization</li>
              </ul>
            </div>
            <button className="pricing-button">Start Free Trial</button>
          </div>
          
          <div className="pricing-card">
            <div className="pricing-header">
              <h2>Enterprise</h2>
              <p className="price">Custom<span> pricing</span></p>
            </div>
            <div className="pricing-features">
              <ul>
                <li>Full 990 XML data analysis</li>
                <li>Advanced donor acquisition strategies</li>
                <li>Unlimited organization profiles</li>
                <li>Priority support</li>
                <li>Custom integrations</li>
                <li>Dedicated account manager</li>
              </ul>
            </div>
            <button className="pricing-button">Contact Sales</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
