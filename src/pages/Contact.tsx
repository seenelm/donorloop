import React from 'react';
import '../styles/theme.css';
import '../App.css';
import './Pages.css';

const Contact: React.FC = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1>Contact Us</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Have questions about how DonorLoop can help your non-profit organization?
              Our team is here to help you maximize your fundraising efforts.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <h3>Email</h3>
                <p>support@donorloop.io</p>
              </div>
              
              <div className="contact-method">
                <h3>Phone</h3>
                <p>(555) 123-4567</p>
              </div>
              
              <div className="contact-method">
                <h3>Office</h3>
                <p>123 Nonprofit Way<br />San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your email" />
              </div>
              
              <div className="form-group">
                <label htmlFor="organization">Organization</label>
                <input type="text" id="organization" placeholder="Your organization" />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} placeholder="How can we help?"></textarea>
              </div>
              
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
