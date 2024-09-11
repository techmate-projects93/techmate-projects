import React from 'react';
import { Link } from 'react-scroll';
import './Home.css';
import homeImage from '../assets/img/homeImage.png'; // Update with the actual image file name

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 order-md-2">
            <img src={homeImage} alt="TechMate" className="img-fluid home-image" />
          </div>
          <div className="col-lg-6 col-md-12 text-section order-md-1">
            <h1 className="display-4">Welcome to <span className="highlight">TechMate</span></h1>
            <p className="lead">
              Your partner in web development, UI/UX, landing pages, and social media management.
            </p>
            <a href="#contact" className="btn btn-light btn-lg">
              <Link className="nav-link" to="contact" smooth={true} duration={1000}>
                Get In Touch
              </Link>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
