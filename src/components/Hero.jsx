import React, { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const avatarRef = useRef(null);
  const rectRef = useRef(null);

  const handleMouseEnter = () => {
    if (containerRef.current) {
      rectRef.current = containerRef.current.getBoundingClientRect();
    }
    const transitionNone = 'none';
    if (titleRef.current) titleRef.current.style.transition = transitionNone;
    if (subtitleRef.current) subtitleRef.current.style.transition = transitionNone;
    if (descRef.current) descRef.current.style.transition = transitionNone;
    if (avatarRef.current) avatarRef.current.style.transition = transitionNone;
  };

  const handleMouseMove = (e) => {
    if (!rectRef.current && containerRef.current) {
      rectRef.current = containerRef.current.getBoundingClientRect();
    }
    const rect = rectRef.current;
    if (!rect) return;
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    
    if (titleRef.current) titleRef.current.style.transform = `perspective(1000px) rotateX(${rotateX * 0.4}deg) rotateY(${rotateY * 0.4}deg) translateZ(10px)`;
    if (subtitleRef.current) subtitleRef.current.style.transform = `perspective(1000px) rotateX(${rotateX * 0.5}deg) rotateY(${rotateY * 0.5}deg) translateZ(15px)`;
    if (descRef.current) descRef.current.style.transform = `perspective(1000px) rotateX(${rotateX * 0.3}deg) rotateY(${rotateY * 0.3}deg) translateZ(5px)`;
    if (avatarRef.current) avatarRef.current.style.transform = `perspective(1000px) rotateX(${rotateX * 0.7}deg) rotateY(${rotateY * 0.7}deg) translateZ(30px) translateY(-5px)`;
  };

  const handleMouseLeave = () => {
    rectRef.current = null;
    const resetTransition = 'transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1)';
    const elements = [titleRef, subtitleRef, descRef, avatarRef];
    elements.forEach(el => {
      if (el.current) {
        el.current.style.transition = resetTransition;
        el.current.style.transform = '';
      }
    });
  };

  return (
    <section className="hero" id="home" ref={containerRef} onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} aria-label="Sarjan P — AI Engineer and Full Stack Developer introduction" itemScope itemType="https://schema.org/Person">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 ref={titleRef} className="glitch" data-text="Hello, I'm Sarjan P">
              Hello, I'm <span className="neon-text" itemProp="name" style={{ whiteSpace: 'nowrap' }}>Sarjan P</span>
            </h1>
            <h2 ref={subtitleRef} className="hero-subtitle">
              <span itemProp="jobTitle">AI Engineer</span>, <span itemProp="jobTitle">Full Stack Developer</span> &amp; <span itemProp="jobTitle">Software Engineer</span>
            </h2>
            <p ref={descRef} className="hero-description" itemProp="description">
              Crafting intelligent digital experiences with cutting-edge AI and web technologies.
              Passionate about building innovative solutions that blend machine learning with modern full stack development — from <span itemProp="addressLocality">Dharmapuri</span>, <span itemProp="addressRegion">Tamil Nadu</span>, India.
            </p>
            <div className="social-links" aria-label="Social media profiles">
              <a href="https://www.linkedin.com/in/sarjan-p-7a97862a0" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Sarjan P LinkedIn Profile" itemProp="sameAs">
                <i className="fab fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/sarjanthecoder" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="SarjanTheCoder GitHub Profile" itemProp="sameAs">
                <i className="fab fa-brands fa-github"></i>
              </a>
              <a href="https://www.instagram.com/lonely_boy_official_2k" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Sarjan Instagram Profile" itemProp="sameAs">
                <i className="fab fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} aria-label="Hire Sarjan P — AI Engineer and Full Stack Developer">
                <span>Hire Me</span> <i className="fas fa-arrow-right"></i>
              </button>
              <button className="btn btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} aria-label="Contact Sarjan P for collaboration">
                <span>Contact Me</span> <i className="fas fa-envelope"></i>
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div ref={avatarRef} className="holographic-frame">
              <img
                src="images/profile.jpg"
                alt="Sarjan P — AI Engineer, Full Stack Developer and Software Engineer from Dharmapuri, Tamil Nadu, India"
                width="400"
                height="400"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                itemProp="image"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=800"; }}
              />
              <div className="holographic-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}