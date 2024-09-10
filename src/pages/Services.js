import React from 'react';
import Service from '../components/Service';
import './Services.css';

function Services() {
  const services = [
    { title: 'Web Development', description: 'Responsive and scalable web solutions.', icon: 'fas fa-code' },
    { title: 'UI/UX Design', description: 'Creating intuitive and engaging user experiences.', icon: 'fas fa-paint-brush' },
    { title: 'Landing Pages', description: 'High-converting landing pages tailored to your needs.', icon: 'fas fa-bullhorn' },
    { title: 'Social Media Management', description: 'Building your brand across social platforms.', icon: 'fas fa-share-alt' },
  ];

  return (
    <section id="services" className="py-5 bg-white">
      <div className="container text-center">
        <h2>Our Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-3">
              <Service title={service.title} description={service.description} icon={service.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
