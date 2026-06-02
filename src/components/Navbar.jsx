import React, { useState, useEffect } from 'react';

export default function Navbar({ currentTheme, setTheme }) {
  const [mobileActive, setMobileActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerDownloadNotification = () => {
    const n = document.createElement('div');
    const colors = { green: '#39ff14', cyan: '#00f0ff', purple: '#b026ff', pink: '#ff2d95' };
    const color = colors[currentTheme] || colors.green;
    
    n.style.cssText = `
      position: fixed; top: 100px; right: 30px;
      background: linear-gradient(135deg, ${color}, #00f0ff);
      color: #020408; padding: 18px 30px; border-radius: 16px;
      box-shadow: 0 10px 50px rgba(0,0,0,0.4), 0 0 30px ${color}40;
      z-index: 100000; animation: slideIn 0.4s ease;
      font-weight: 700; font-family: 'Outfit', sans-serif;
      letter-spacing: 1.5px; font-size: 0.95rem;
    `;
    n.textContent = 'CV download started! ✓';
    document.body.appendChild(n);
    
    setTimeout(() => {
      n.style.animation = 'slideOut 0.4s ease';
      setTimeout(() => n.remove(), 400);
    }, 2500);
  };

  const handleThemeChange = () => {
    const themes = ['green', 'cyan', 'purple', 'pink'];
    const nextIdx = (themes.indexOf(currentTheme) + 1) % themes.length;
    setTheme(themes[nextIdx]);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container nav-container">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="images/logo.jpg" alt="Sarjan" className="logo-img" />
       
        </div>
        
        <ul className={`nav-menu ${mobileActive ? 'active' : ''}`} id="nav-menu">
          {['home', 'about', 'services', 'skills', 'portfolio', 'certifications', 'contact'].map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="nav-link" onClick={() => setMobileActive(false)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="nav-right-group">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); triggerDownloadNotification(); }} 
            className="download-cv-btn" 
            id="download-cv"
          >
            <i className="fas fa-download"></i> Download CV
          </a>
          
          <button className="theme-toggle-btn" id="theme-toggle" title="Change Theme" onClick={handleThemeChange}>
            <i className="fas fa-palette"></i>
          </button>
          
          <div className={`hamburger ${mobileActive ? 'active' : ''}`} id="hamburger" onClick={() => setMobileActive(!mobileActive)}>
            <span style={{ transform: mobileActive ? 'rotate(45deg) translateY(8px)' : '' }}></span>
            <span style={{ opacity: mobileActive ? '0' : '1' }}></span>
            <span style={{ transform: mobileActive ? 'rotate(-45deg) translateY(-8px)' : '' }}></span>
          </div>
        </div>
      </div>
    </nav>
  );
}