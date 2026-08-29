import React, { useState, useEffect } from 'react';

export default function Navbar({ currentTheme, setTheme }) {
  const [mobileActive, setMobileActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'services', 'skills', 'portfolio', 'experience', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 180;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeToggle = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'skills', label: 'Skills' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo matching reference */}
        <a href="#home" className="brand-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div className="logo-icon-wrap logo-img-container">
            <img src="/images/logo.jpg" alt="Sarjan P Logo" className="navbar-logo-img" />
          </div>
          <div className="brand-text">
            <span className="brand-name">SARJAN</span>
            <span className="brand-sub">AI ENGINEER</span>
          </div>
        </a>

        {/* Navigation Menu */}
        <nav className={`nav-menu-wrapper ${mobileActive ? 'active' : ''}`} id="nav-menu">
          <ul className="nav-list">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="nav-item">
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => setMobileActive(false)}
                  >
                    {item.label}
                    {isActive && <span className="active-indicator" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Group: Let's Connect Button + Theme Toggle */}
        <div className="nav-actions">
          <button
            className="btn-connect"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <i className="fas fa-paper-plane"></i>
            <span>Let's Connect</span>
          </button>

          <button
            className="theme-toggle-btn"
            onClick={handleThemeToggle}
            title={currentTheme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            aria-label="Toggle visual theme"
          >
            <i className={currentTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>

          <button
            className={`hamburger-btn ${mobileActive ? 'active' : ''}`}
            onClick={() => setMobileActive(!mobileActive)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}