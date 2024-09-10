import React from 'react';
import './Service.css';

function Service({ title, description, icon }) {
  return (
    <div className="service-card">
      <i className={`icon ${icon}`}></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Service;
