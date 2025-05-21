import React from 'react';
import '../styles/theme.css';
import '../App.css';
import './Pages.css';

const Dashboard: React.FC = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1>Dashboard</h1>
        
        <div className="dashboard-content">
          <div className="dashboard-welcome">
            <h2>Welcome to Givin Dashboard</h2>
            <p>
              Your AI assistant for fundraising optimization is ready to help you analyze 
              990 XML financial data and enhance your organization's fundraising efforts.
            </p>
          </div>
          
          <div className="dashboard-cards">
            <div className="dashboard-card">
              <h3>Upload 990 XML Data</h3>
              <p>Upload your organization's 990 XML data for detailed financial analysis.</p>
              <button className="dashboard-button">Upload Data</button>
            </div>
            
            <div className="dashboard-card">
              <h3>Financial Analysis</h3>
              <p>View detailed financial insights based on your 990 XML data.</p>
              <button className="dashboard-button">View Analysis</button>
            </div>
            
            <div className="dashboard-card">
              <h3>Donor Acquisition</h3>
              <p>Discover strategies to improve donor acquisition and retention.</p>
              <button className="dashboard-button">View Strategies</button>
            </div>
            
            <div className="dashboard-card">
              <h3>Campaign Optimization</h3>
              <p>Optimize your fundraising campaigns with AI-driven insights.</p>
              <button className="dashboard-button">Optimize Campaigns</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
