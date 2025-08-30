import React from 'react';
import '../styles/theme.css';
import '../App.css';
import './Pages.css';

const About: React.FC = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1>About DonorLoop</h1>
        <div className="about-content">
          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              At DonorLoop, we're dedicated to empowering non-profit organizations with powerful AI-driven insights
              to optimize their fundraising efforts and maximize their impact.
            </p>
          </section>
          
          <section className="about-section">
            <h2>What We Do</h2>
            <p>
              DonorLoop provides comprehensive analysis of 990 XML financial data, donor acquisition strategies, 
              and fundraising campaign optimization tools. Our platform leverages the latest in AI technology
              to help you make data-driven decisions that increase your organization's effectiveness.
            </p>
          </section>
          
          <section className="about-section">
            <h2>Our Team</h2>
            <p>
              Our team consists of passionate professionals with backgrounds in non-profit management,
              data science, and software development. We're united by our commitment to creating
              technology that serves social good.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
