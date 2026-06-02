import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" role="contentinfo" itemScope itemType="https://schema.org/WPFooter">
      <div className="container">
        <p>
          &copy; {year} <a href="https://sarjanp.in/" rel="author" style={{ color: 'inherit', textDecoration: 'none' }}>Sarjan P (SarjanP)</a> — AI Engineer &amp; Full Stack Developer from Dharmapuri, Tamil Nadu. Built with <i className="fas fa-heart heartbeat" aria-hidden="true"></i><span className="sr-only">love</span> using React &amp; Three.js
        </p>
        <nav aria-label="Footer navigation — Sarjan P social profiles" style={{ marginTop: '0.75rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          <a href="https://github.com/sarjanthecoder" target="_blank" rel="noopener noreferrer" aria-label="SarjanTheCoder on GitHub" style={{ color: 'inherit', opacity: 0.7, transition: 'opacity 0.3s' }} onMouseOver={(e) => e.target.style.opacity = 1} onMouseOut={(e) => e.target.style.opacity = 0.7}>
            <i className="fab fa-github" aria-hidden="true"></i> <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/sarjan-p-7a97862a0" target="_blank" rel="noopener noreferrer" aria-label="Sarjan P on LinkedIn" style={{ color: 'inherit', opacity: 0.7, transition: 'opacity 0.3s' }} onMouseOver={(e) => e.target.style.opacity = 1} onMouseOut={(e) => e.target.style.opacity = 0.7}>
            <i className="fab fa-linkedin-in" aria-hidden="true"></i> <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/lonely_boy_official_2k" target="_blank" rel="noopener noreferrer" aria-label="Sarjan on Instagram" style={{ color: 'inherit', opacity: 0.7, transition: 'opacity 0.3s' }} onMouseOver={(e) => e.target.style.opacity = 1} onMouseOut={(e) => e.target.style.opacity = 0.7}>
            <i className="fab fa-instagram" aria-hidden="true"></i> <span className="sr-only">Instagram</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}