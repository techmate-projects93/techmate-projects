import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="jumbotron text-center bg-primary text-white">
      <div className="container">
        <h1 className="display-4">Welcome to TechMate</h1>
        <p className="lead">Your partner in web development, UI/UX, landing pages, and social media management.</p>
        <a href="#contact" className="btn btn-light btn-lg">Get In Touch</a>
      </div>
    </section>
  );
}

export default Home;
