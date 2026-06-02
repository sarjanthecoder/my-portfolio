import React, { useState, useEffect } from 'react';
import UniverseCanvas from './components/UniverseCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('sarjan-theme') || 'green');
  const [securityBlock, setSecurityBlock] = useState(false);

  useEffect(() => {
    if (theme === 'green') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
    localStorage.setItem('sarjan-theme', theme);
  }, [theme]);

  // Security Block Alert logic
  useEffect(() => {
    let blockTimeout = null;
    const triggerBlockAlert = () => {
      setSecurityBlock(true);
      clearTimeout(blockTimeout);
      blockTimeout = setTimeout(() => setSecurityBlock(false), 2200);
    };

    const handleContextMenu = (e) => {
      e.preventDefault();
      triggerBlockAlert();
    };

    const handleKeyDown = (e) => {
      let isBlocked = false;
      if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) isBlocked = true;
      if (e.ctrlKey && (e.key === 's' || e.key === 'S')) isBlocked = true;
      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) isBlocked = true;
      if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) isBlocked = true;
      if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) isBlocked = true;
      if (e.key === 'F12') isBlocked = true;
      
      if (isBlocked) {
        e.preventDefault();
        triggerBlockAlert();
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(blockTimeout);
    };
  }, []);

  return (
    <>
      <UniverseCanvas currentTheme={theme} />
      
      {/* Security Block Alert Toast */}
      <div
        id="security-block-overlay"
        role="alert"
        aria-live="assertive"
        style={{
          position: 'fixed',
          top: '30px',
          left: '50%',
          transform: `translateX(-50%) translateY(${securityBlock ? '0' : '-150px'})`,
          opacity: securityBlock ? 1 : 0,
          background: 'linear-gradient(135deg, #ff0844, #ffb199)',
          color: 'white',
          padding: '16px 36px',
          borderRadius: '16px',
          boxShadow: '0 15px 40px rgba(255, 8, 68, 0.4), 0 0 20px rgba(255, 8, 68, 0.2)',
          zIndex: 100005,
          fontFamily: "'Outfit', 'Poppins', sans-serif",
          fontWeight: 800,
          textTransform: 'uppercase',
          fontSize: '0.95rem',
          letterSpacing: '2px',
          textAlign: 'center',
          pointerEvents: 'none',
          transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.4s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          border: '1px solid rgba(255,255,255,0.25)',
        }}
      >
        <i className="fas fa-ban" style={{ fontSize: '1.2rem' }}></i>
        <span>DEVTOOLS ACCESS BLOCKED 🔒</span>
      </div>
      
      <div className="vignette" />
      <header role="banner">
        <Navbar currentTheme={theme} setTheme={setTheme} />
      </header>
      <main id="main-content" role="main" itemScope itemType="https://schema.org/WebPage">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}