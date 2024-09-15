import React from "react";
import { Link } from "react-scroll";
import "./Home.css";
import homeImage from "../assets/img/homeImage.png"; // Update with the actual image file name

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 order-md-2">
            <img
              src={homeImage}
              alt="TechMate"
              className="img-fluid home-image"
            />
          </div>
          <div className="col-lg-6 col-md-12 text-section order-md-1">
            <h1 className="display-4">
              Welcome to <span className="highlight">TechMate</span>
            </h1>
            <p className="lead">
              
              Are you struggling to get your business online? <br></br>We get it—going digital can be tough, but that’s
              where TechMate comes in. We make it easy with affordable, custom
              solutions that fit your needs. Whether it’s a website, e-commerce
              store, or a landing page, we’ve got your back.
            </p>
            <a href="#contact" className="btn btn-light btn-lg">
              <Link
                className="nav-link"
                to="contact"
                smooth={true}
                duration={1000}
              >
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
