import React, { useRef } from 'react';

export default function Hero() {
  const heroCardRef = useRef(null);

  const handleDownloadCV = () => {
    const toast = document.createElement('div');
    toast.className = 'cv-toast-notification';
    toast.innerHTML = '<i class="fas fa-check-circle"></i> <span>CV download initiated!</span>';
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => toast.remove(), 400);
    }, 2800);
  };

  const handleCardMouseMove = (e) => {
    if (!heroCardRef.current) return;
    const rect = heroCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    heroCardRef.current.style.transform = `perspective(1000px) rotateX(${-y * 0.04}deg) rotateY(${x * 0.04}deg) translateZ(8px)`;
  };

  const handleCardMouseLeave = () => {
    if (!heroCardRef.current) return;
    heroCardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  };

  return (
    <section className="hero-section" id="home">
      {/* Background Cosmic Overlay */}
      <div className="cosmic-hero-bg" />

      <div className="container hero-grid-container">
        {/* Left Column: Headline, Bio, Buttons, Socials */}
        <div className="hero-left">
          <div className="status-badge">
            <span className="pulse-dot"></span>
            <span className="status-text">AVAILABLE FOR NEW OPPORTUNITIES</span>
          </div>

          <h1 className="hero-main-title">
            <span className="title-gradient">AI ENGINEER &amp;</span>
            <br />
            <span className="title-dark">FULL STACK</span>
            <br />
            <span className="title-dark">DEVELOPER</span>
          </h1>

          <p className="hero-lead-text">
            I build intelligent, scalable and user-centric web applications powered by{' '}
            <span className="ai-highlight">AI</span> and modern technologies.
          </p>

          {/* Innovation Hacks Founder Badge / Leadership Role */}
          <a
            href="https://www.innovationhacks.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="ih-founder-badge"
            aria-label="Visit Innovation Hacks"
          >
            <span className="ih-crown-icon">👑</span>
            <div className="ih-badge-text">
              <span className="ih-role-label">CO-FOUNDER &amp; CEO</span>
              <span className="ih-company-name">
                INNOVATION HACKS
                <i className="fas fa-arrow-up-right-from-square ih-ext-icon"></i>
              </span>
              <span className="ih-domain">innovationhacks.in</span>
            </div>
          </a>

          <div className="hero-cta-group">
            <a
              href="#portfolio"
              className="btn-pill-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>View My Work</span>
              <i className="fas fa-arrow-right"></i>
            </a>

            <button
              className="btn-pill-glass"
              onClick={handleDownloadCV}
              title="Download Resume / CV"
            >
              <span>Download CV</span>
              <i className="fas fa-arrow-down-to-bracket"></i>
            </button>
          </div>

          <div className="hero-social-row">
            <a
              href="https://github.com/sarjanthecoder"
              target="_blank"
              rel="noopener noreferrer"
              className="social-glass-btn"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sarjan-p-7a97862a0"
              target="_blank"
              rel="noopener noreferrer"
              className="social-glass-btn"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/lonely_boy_official_2k"
              target="_blank"
              rel="noopener noreferrer"
              className="social-glass-btn"
              aria-label="Instagram Profile"
              title="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://t.me/sarjanthecoder"
              target="_blank"
              rel="noopener noreferrer"
              className="social-glass-btn"
              aria-label="Telegram"
              title="Telegram"
            >
              <i className="fab fa-telegram"></i>
            </a>
            <a
              href="mailto:sarjan6325@gmail.com"
              className="social-glass-btn"
              aria-label="Email Me"
              title="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Center: Developer Portrait Seamlessly Merged with Background, Orbit Rings & IH Watermark */}
        <div className="hero-center">
          <div className="portrait-wrapper seamless-portrait-wrapper">
            <div className="hero-orbit-ring">
              <span className="orbit-dot dot-gold"></span>
              <span className="orbit-dot dot-blue"></span>
            </div>
            <div className="space-glow-ring"></div>
            <div className="space-dust-particle p1"></div>
            <div className="space-dust-particle p2"></div>
            <div className="space-dust-particle p3"></div>
            
            {/* Innovation Hacks low-opacity futuristic watermark */}
            <img
              src="/images/ih_logo.svg"
              alt=""
              className="ih-portrait-watermark"
              aria-hidden="true"
              loading="eager"
            />
            
            {/* Developer Portrait with Smooth Background Gradient Edge Blending */}
            <img
              src="/images/hero_sarjan.jpg"
              alt="Sarjan P - AI Engineer and Full Stack Developer"
              className="hero-portrait-img seamless-img"
              loading="eager"
            />
          </div>
        </div>

        {/* Right Column: Floating Frosted Glass Contact & Bio Card */}
        <div className="hero-right">
          <div
            className="floating-profile-card"
            ref={heroCardRef}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          >
            <div className="profile-card-header">
              <h3 className="profile-card-name">SARJAN P</h3>
              <p className="profile-card-title">AI Engineer | Full Stack Developer</p>
            </div>

            <ul className="profile-card-list">
              <li className="profile-card-item">
                <i className="fas fa-graduation-cap item-icon"></i>
                <div>
                  <span style={{ fontWeight: 800 }}>Shree Venkateshwara Hi-Tech Engineering College</span>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: '#10b981', fontWeight: 700 }}>Final Year · 8.0 CGPA</span>
                </div>
              </li>
              <li className="profile-card-item">
                <i className="fas fa-location-dot item-icon"></i>
                <span>Vedharampatti Pudur, Dharmapuri, Tamil Nadu, India</span>
              </li>
              <li className="profile-card-item">
                <i className="fas fa-envelope item-icon"></i>
                <a href="mailto:sarjan6325@gmail.com">sarjan6325@gmail.com</a>
              </li>
              <li className="profile-card-item">
                <i className="fas fa-phone item-icon"></i>
                <a href="tel:+916385562064">+91 6385562064</a>
              </li>
              <li className="profile-card-item">
                <i className="fab fa-github item-icon"></i>
                <a href="https://github.com/sarjanthecoder" target="_blank" rel="noopener noreferrer">
                  github.com/sarjanthecoder
                </a>
              </li>
              <li className="profile-card-item">
                <i className="fab fa-linkedin-in item-icon"></i>
                <a href="https://www.linkedin.com/in/sarjan-p-7a97862a0" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/sarjan-p
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}