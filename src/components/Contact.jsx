import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailJsConfig } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.send(
      emailJsConfig.serviceId,
      emailJsConfig.templateId,
      formData,
      emailJsConfig.publicKey
    )
    .then(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setStatus('Failed to send message. Please try again.');
    });
  };

  return (
    <section className="contact" id="contact" aria-label="Contact Sarjan P — AI Engineer and Full Stack Developer" itemScope itemType="https://schema.org/ContactPage">
      <div className="container">
        <h2 className="section-title">
          <span className="neon-text">Contact</span> Me
        </h2>
        <div className="contact-content">
          <address className="contact-info" itemScope itemType="https://schema.org/Person">
            <meta itemProp="name" content="Sarjan P" />
            <meta itemProp="url" content="https://sarjanp.in/" />
            <div className="contact-item">
              <div className="contact-item-icon" aria-hidden="true">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-item-text">
                <h4>Email</h4>
                <p><a href="mailto:sarjan6325@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }} className="contact-link" itemProp="email" aria-label="Email Sarjan P at sarjan6325@gmail.com">sarjan6325@gmail.com</a></p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon" aria-hidden="true">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-item-text">
                <h4>Location</h4>
                <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="streetAddress">Vedharampatti Pudur</span>, <span itemProp="addressLocality">Dharmapuri</span>, <span itemProp="addressRegion">Tamil Nadu</span>, <span itemProp="addressCountry">India</span>
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon" aria-hidden="true">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="contact-item-text">
                <h4>Phone</h4>
                <p><a href="tel:+916385562064" style={{ color: 'inherit', textDecoration: 'none' }} className="contact-link" itemProp="telephone" aria-label="Call Sarjan P at +91 6385562064">+91 6385562064</a></p>
              </div>
            </div>
          </address>
          
          <form className="contact-form" onSubmit={handleSubmit} aria-label="Send a message to Sarjan P" id="contact-form">
            <div className="form-group">
              <label htmlFor="contact-name" className="sr-only">Your Name</label>
              <input 
                type="text" 
                id="contact-name"
                name="name" 
                className="form-control" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                autoComplete="name"
                aria-required="true"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email" className="sr-only">Your Email</label>
              <input 
                type="email" 
                id="contact-email"
                name="email" 
                className="form-control" 
                placeholder="Your Email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                autoComplete="email"
                aria-required="true"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message" className="sr-only">Your Message</label>
              <textarea 
                id="contact-message"
                name="message" 
                className="form-control" 
                placeholder="Your Message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                aria-required="true"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} aria-label="Send message to Sarjan P">
              <span>Send Message</span> <i className="fas fa-paper-plane" aria-hidden="true"></i>
            </button>
            {status && (
              <p role="status" aria-live="polite" style={{ marginTop: '1rem', textAlign: 'center', color: status.includes('success') ? 'var(--primary)' : '#ff4444' }}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}