import React from 'react';
import ContactForm from '../components/ContactForm';
import './Contact.css';

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p className="lead">Let’s chat about how we can help your business shine online!</p>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
