import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section id="portfolio" className="py-5 bg-light">
      <div className="container text-center">
        <h2>Our Portfolio</h2>
        <p className="lead">Check out our recent projects below.</p>
        <div className="row">
          {/* Add portfolio items as needed */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src="project1.jpg" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">Description of the project.</p>
              </div>
            </div>
          </div>
          {/* Repeat portfolio items */}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
