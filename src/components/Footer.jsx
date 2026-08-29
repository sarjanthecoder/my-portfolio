import React from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    icon: 'fab fa-github',
    href: 'https://github.com/sarjanthecoder',
    label: 'GitHub',
    color: '#24292e',
    bg: 'rgba(36,41,46,0.1)',
  },
  {
    icon: 'fab fa-linkedin-in',
    href: 'https://www.linkedin.com/in/sarjan-p-7a97862a0',
    label: 'LinkedIn',
    color: '#0a66c2',
    bg: 'rgba(10,102,194,0.1)',
  },
  {
    icon: 'fab fa-instagram',
    href: 'https://www.instagram.com/lonely_boy_official_2k',
    label: 'Instagram',
    color: '#e1306c',
    bg: 'rgba(225,48,108,0.1)',
  },
  {
    icon: 'fab fa-telegram',
    href: 'https://t.me/sarjanthecoder',
    label: 'Telegram',
    color: '#229ed9',
    bg: 'rgba(34,158,217,0.1)',
  },
  {
    icon: 'fab fa-x-twitter',
    href: 'https://x.com/sarjanthecoder',
    label: 'Twitter / X',
    color: '#1da1f2',
    bg: 'rgba(29,161,242,0.1)',
  },
];

const services = [
  'AI / ML Development',
  'Generative AI',
  'LLM & RAG Apps',
  'Full Stack Development',
  'API Development',
  'Cloud & DevOps',
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="footer-v2"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      {/* ─── Top Divider Wave ─── */}
      <div className="footer-divider"></div>

      <div className="container">

        {/* ─── Main Footer Grid ─── */}
        <div className="footer-main-grid">

          {/* Col 1: Brand */}
          <div className="footer-brand-col">
            {/* Logo */}
            <a href="#home" className="footer-logo" onClick={e => { e.preventDefault(); scrollTo('#home'); }}>
              <div className="footer-logo-icon footer-logo-img-wrap">
                <img src="/images/logo.jpg" alt="Sarjan P Logo" className="footer-logo-img" />
              </div>
              <div className="footer-logo-text">
                <span className="footer-logo-name">SARJAN P</span>
                <span className="footer-logo-sub">AI ENGINEER</span>
              </div>
            </a>

            <p className="footer-brand-desc">
              AI Engineer & Full Stack Developer building intelligent web applications and AI-powered solutions that create real-world impact.
            </p>

            {/* Social Icons */}
            <div className="footer-socials">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="footer-social-btn"
                  style={{ '--s-color': s.color, '--s-bg': s.bg }}
                >
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-link-list">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="footer-nav-link"
                    onClick={e => { e.preventDefault(); scrollTo(link.href); }}
                  >
                    <i className="fas fa-chevron-right footer-link-arrow"></i>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="footer-services-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-link-list">
              {services.map((svc, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    className="footer-nav-link"
                    onClick={e => { e.preventDefault(); scrollTo('#services'); }}
                  >
                    <i className="fas fa-chevron-right footer-link-arrow"></i>
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Get In Touch</h4>
            <div className="footer-contact-list">
              <a href="mailto:sarjan6325@gmail.com" className="footer-contact-item">
                <div className="footer-contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <span>sarjan6325@gmail.com</span>
              </a>
              <a href="tel:+916385562064" className="footer-contact-item">
                <div className="footer-contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <span>+91 6385562064</span>
              </a>
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <span>Vedharampatti Pudur, Dharmapuri, Tamil Nadu, India</span>
              </div>
              <a href="https://sarjanp.in" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                <div className="footer-contact-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <span>sarjanp.in</span>
              </a>
            </div>
          </div>
        </div>

        {/* ─── Bottom Bar ─── */}
        <div className="footer-bottom-bar">
          <p className="footer-copy" itemScope itemType="https://schema.org/Person">
            © {year}{' '}
            <a
              href="https://sarjanp.in/"
              rel="author noopener noreferrer"
              itemProp="url"
              className="footer-copy-link"
              target="_blank"
            >
              <span itemProp="name">Sarjan P</span>
            </a>
            {' '}· AI Engineer & Full Stack Developer · Tamil Nadu, India
          </p>
          <button
            className="footer-back-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>

      </div>
    </footer>
  );
}