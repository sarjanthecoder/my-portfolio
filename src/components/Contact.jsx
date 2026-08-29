import React, { useState } from 'react';
import { web3FormsConfig } from '../data/portfolioData';

const contactInfoCards = [
  {
    icon: 'fas fa-envelope',
    iconColor: '#2563eb',
    iconBg: 'rgba(37,99,235,0.1)',
    label: 'Email',
    value: 'sarjan6325@gmail.com',
    href: 'mailto:sarjan6325@gmail.com',
  },
  {
    icon: 'fas fa-phone-alt',
    iconColor: '#2563eb',
    iconBg: 'rgba(37,99,235,0.1)',
    label: 'Phone',
    value: '+91 6385562064',
    href: 'tel:+916385562064',
  },
  {
    icon: 'fas fa-map-marker-alt',
    iconColor: '#2563eb',
    iconBg: 'rgba(37,99,235,0.1)',
    label: 'Location',
    value: 'Vedharampatti Pudur, Dharmapuri, Tamil Nadu, India',
    href: null,
  },
  {
    icon: 'fas fa-globe',
    iconColor: '#2563eb',
    iconBg: 'rgba(37,99,235,0.1)',
    label: 'Portfolio',
    value: 'sarjanp.in',
    href: 'https://sarjanp.in',
    external: true,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('Sending...');

    try {
      const formPayload = new FormData(e.target);
      formPayload.append('access_key', web3FormsConfig.accessKey || 'f35978b9-0c73-4e90-9c57-389e0bd2f598');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('✅ Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus(`❌ ${data.message || 'Failed to send message. Please try again.'}`);
      }
    } catch (err) {
      console.error('FAILED...', err);
      setStatus('❌ Network error. Please try again or email directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      className="contact-v2-section"
      id="contact"
      aria-label="Contact Sarjan P — AI Engineer and Full Stack Developer"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <div className="container">

        {/* ─── Main Two-Column Layout ─── */}
        <div className="contact-v2-grid">

          {/* ── Left: Info Block ── */}
          <div className="contact-v2-left">
            {/* Badge */}
            <div className="contact-badge-pill">
              <i className="fas fa-paper-plane" style={{ fontSize: '0.7rem' }}></i>
              GET IN TOUCH
            </div>

            {/* Headline */}
            <h2 className="contact-v2-headline">
              Let's Work<br />
              <span className="contact-headline-blue">Together.</span>
            </h2>

            {/* Subtitle */}
            <p className="contact-v2-subtitle">
              Have a project in mind, a question, or just want to say hello?<br />
              I'd love to hear from you. Fill out the form or reach me directly.
            </p>

            {/* Contact Info 2×2 Cards */}
            <div className="contact-info-grid" itemScope itemType="https://schema.org/Person">
              <meta itemProp="name" content="Sarjan P" />
              <meta itemProp="url" content="https://sarjanp.in/" />
              {contactInfoCards.map((card, idx) => (
                <div key={idx} className="contact-info-card">
                  <div
                    className="contact-info-icon"
                    style={{ background: card.iconBg, color: card.iconColor }}
                  >
                    <i className={card.icon}></i>
                  </div>
                  <div className="contact-info-text">
                    <span className="contact-info-label">{card.label}</span>
                    {card.href ? (
                      <a
                        href={card.href}
                        className="contact-info-value contact-info-link"
                        target={card.external ? '_blank' : undefined}
                        rel={card.external ? 'noopener noreferrer' : undefined}
                        itemProp={card.label === 'Email' ? 'email' : card.label === 'Phone' ? 'telephone' : undefined}
                      >
                        {card.value}
                        {card.external && (
                          <i className="fas fa-external-link-alt" style={{ fontSize: '0.68rem', marginLeft: '4px' }}></i>
                        )}
                      </a>
                    ) : (
                      <span className="contact-info-value">{card.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Contact Form Card ── */}
          <div className="contact-v2-form-card">
            {/* Dot pattern decoration */}
            <div className="contact-form-dots" aria-hidden="true">
              {Array.from({ length: 25 }).map((_, i) => (
                <span key={i} className="contact-dot"></span>
              ))}
            </div>

            <h3 className="contact-form-title">Send Me a Message</h3>
            <div className="contact-form-title-underline"></div>

            <form
              className="contact-v2-form"
              onSubmit={handleSubmit}
              aria-label="Send a message to Sarjan P"
              id="contact-form"
              noValidate
            >
              {/* Name + Email Row */}
              <div className="contact-form-row">
                <div className="contact-field-wrap">
                  <label htmlFor="contact-name" className="sr-only">Your Name</label>
                  <div className="contact-input-group">
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      className="contact-v2-input"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      aria-required="true"
                    />
                    <i className="fas fa-user contact-input-icon"></i>
                  </div>
                </div>
                <div className="contact-field-wrap">
                  <label htmlFor="contact-email" className="sr-only">Your Email</label>
                  <div className="contact-input-group">
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      className="contact-v2-input"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      aria-required="true"
                    />
                    <i className="fas fa-envelope contact-input-icon"></i>
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div className="contact-field-wrap">
                <label htmlFor="contact-subject" className="sr-only">Subject</label>
                <div className="contact-input-group">
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    className="contact-v2-input"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  <i className="fas fa-calendar-alt contact-input-icon"></i>
                </div>
              </div>

              {/* Message */}
              <div className="contact-field-wrap">
                <label htmlFor="contact-message" className="sr-only">Your Message</label>
                <div className="contact-input-group contact-textarea-group">
                  <textarea
                    id="contact-message"
                    name="message"
                    className="contact-v2-input contact-v2-textarea"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    rows={5}
                  ></textarea>
                  <i className="fas fa-pencil contact-input-icon contact-textarea-icon"></i>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="contact-v2-submit-btn"
                disabled={sending}
                aria-label="Send message to Sarjan P"
              >
                <i className="fas fa-paper-plane"></i>
                {sending ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status */}
              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className="contact-v2-status"
                  style={{ color: status.includes('✅') ? '#10b981' : '#ef4444' }}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* ─── Bottom Banner ─── */}
        <div className="contact-v2-bottom-banner">
          <div className="contact-bottom-icon">
            <i className="fas fa-rocket"></i>
          </div>
          <div className="contact-bottom-text-group">
            <strong className="contact-bottom-bold">Open to exciting opportunities and collaborations.</strong>
            <span className="contact-bottom-sub">Let's build something impactful together!</span>
          </div>
          <a
            href="/Sarjan_P_Resume.pdf"
            download="Sarjan_P_Resume.pdf"
            className="contact-download-btn"
            aria-label="Download Sarjan P's Resume"
          >
            <i className="fas fa-download"></i>
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}