import React from 'react';
import './Services.css';

function Services() {
  const services = [
    { title: 'Web Development', description: 'Responsive and scalable web solutions.', icon: 'fas fa-code' },
    { title: 'E-Commerce', description: 'Tailored e-commerce platforms to boost your business.', icon: 'fas fa-shopping-cart' },
    { title: 'Landing Pages', description: 'High-converting landing pages tailored to your needs.', icon: 'fas fa-bullhorn' },
    { title: 'UI/UX Design', description: 'Creating intuitive and engaging user experiences.', icon: 'fas fa-paint-brush' },
  ];

  return (
    <section id="services" className="py-5">
      <div className="container text-center">
        <h2 className="services-heading">Our Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-3 service-card">
              <i className={`${service.icon} service-icon`}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
