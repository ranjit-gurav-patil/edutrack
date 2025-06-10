import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/edutrack365.png';  // Adjust path if needed

const Header = () => {
  return (
    <div className="edutrack-header d-flex justify-content-center">
    <nav id="navbar" className="theme-bg-navbar shadow px-4 py-2 edutrack_bar custom-rounded navbar navbar-expand-lg navbar-light bg-white">
      
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/home">
          <img 
            src={logo} 
            alt="EduTrack365 Logo" 
            style={{ height: '40px', marginRight: '10px' }} 
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className={`nav-item ${window.location.pathname === '/home' ? 'active' : ''}`}>
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className={`nav-item ${window.location.pathname === '/about' ? 'active' : ''}`}>
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className={`nav-item ${window.location.pathname === '/how-it-works' ? 'active' : ''}`}>
              <Link className="nav-link" to="/how-it-works">How We Help</Link>
            </li>
            <li className={`nav-item ${window.location.pathname === '/why-edutrack' ? 'active' : ''}`}>
              <Link className="nav-link" to="/why-edutrack">Why EduTrack365?</Link>
            </li>
            <li className={`nav-item ${window.location.pathname === '/contact' ? 'active' : ''}`}>
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Header;
