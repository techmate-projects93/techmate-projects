import React, { useState } from 'react';
import './ContactForm.css';
import contactImage from '../assets/img/contact-img.png';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);  // Track form submission

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);  // Set state to indicate form submission
  };

  return (
    <div className="contact-form-container">
      <div className="image-side">
        <img src={contactImage} alt="Contact Us" />
      </div>
      {!isSubmitted ? (
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true" 
          onSubmit={handleSubmit} 
          className="form-side"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="form-group">
            <label>Your Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="form-control" 
              required
            />
          </div>
          <div className="form-group">
            <label>Your Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="form-control" 
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              className="form-control" 
              rows="5" 
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-submit">Send</button>
        </form>
      ) : (
        <div className="thank-you-message">
          <h3>Thank You for contacting us!</h3>
          <p>We have received your message and will get back to you shortly.</p>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
