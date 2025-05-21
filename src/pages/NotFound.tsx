import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/theme.css';
import '../App.css';
import './Pages.css';

const NotFound: React.FC = () => {
  return (
    <div className="page-container">
      <div className="container not-found-container">
        <h1>404 - Page Not Found</h1>
        <div className="not-found-content">
          <p>The page you're looking for doesn't exist or has been moved.</p>
          <Link to="/" className="return-home-button">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
