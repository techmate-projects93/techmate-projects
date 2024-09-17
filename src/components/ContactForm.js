import React, { useState } from 'react';
import './ContactForm.css';
import contactImage from '../assets/img/contact-img.png';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);  // Track error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare the form data to be sent
    const formResponse = await fetch('https://formspree.io/f/manwzgwl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message
      })
    });

    if (formResponse.ok) {
      setIsSubmitted(true);
      setErrorMessage(null);
    } else {
      setErrorMessage('There was an error submitting the form. Please try again later.');
    }
  };

  return (
    <div className="contact-form-container">
      <div className="image-side">
        <img src={contactImage} alt="Contact Us" />
      </div>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="form-side">
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
          {errorMessage && <p className="error-message">{errorMessage}</p>}
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
