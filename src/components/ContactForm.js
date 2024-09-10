import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic can go here
  };

  return (
    <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <input type="hidden" name="form-name" value="contact" />
      <div className="form-group">
        <label>Your Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" />
      </div>
      <div className="form-group">
        <label>Your Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} className="form-control" rows="5"></textarea>
      </div>
      <button type="submit" className="btn btn-primary btn-block">Send</button>
    </form>
  );
}

export default ContactForm;
