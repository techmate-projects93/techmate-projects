import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../assets/img/logo.png';  // Import the logo

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Logo with a link to the home section */}
        <Link className="navbar-brand" to="home" smooth={true} duration={1000}>
          <img src={logo} alt="TechMate Logo" className="navbar-logo" />
          <span className="tech-text">Tech</span><span className="mate-text">Mate</span> {/* TechMate in two colors */}
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="home" smooth={true} duration={1000}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about" smooth={true} duration={1000}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="services" smooth={true} duration={1000}>
                Services
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="portfolio" smooth={true} duration={1000}>
                Portfolio
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="contact" smooth={true} duration={1000}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
