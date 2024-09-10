import React from 'react';
import { Link } from 'react-scroll';
import './Home.css';

function Home() {
  return (
    <section id="home" className="jumbotron text-center bg-primary text-white">
      <div className="container">
        <h1 className="display-4">Welcome to TechMate</h1>
        <p className="lead">Your partner in web development, UI/UX, landing pages, and social media management.</p>
        <a href="#contact" className="btn btn-light btn-lg">
        <Link className="nav-link" to="contact" smooth={true} duration={1000}>
        Get In Touch
              </Link>
          </a>
      </div>
    </section>
  );
}

export default Home;
