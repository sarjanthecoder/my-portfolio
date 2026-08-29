import React, { useState, useEffect } from 'react';
import UniverseCanvas from './components/UniverseCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import TechFeatures from './components/TechFeatures';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';

import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('sarjan-theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('sarjan-theme', theme);
  }, [theme]);

  return (
    <div className="app-root-container">
      {/* Background Cosmic Canvas */}
      <UniverseCanvas currentTheme={theme} />

      {/* Global Navbar Header */}
      <Navbar currentTheme={theme} setTheme={setTheme} />

      {/* Main Page Content */}
      <main id="main-content" role="main">
        <Hero />
        <Stats />
        <TechFeatures />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Experience />

        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}