import React from 'react';

export default function About() {
  const statsList = [
    { icon: 'fas fa-graduation-cap', num: '2+', label: 'Years Experience' },
    { icon: 'fas fa-layer-group', num: '20+', label: 'Projects Built' },
    { icon: 'fas fa-trophy', num: '5+', label: 'Hackathons' },
    { icon: 'fas fa-users', num: '10+', label: 'Happy Clients' },
  ];

  const pillarCards = [
    {
      icon: 'fas fa-brain',
      title: 'What I Do',
      desc: 'I build AI-powered and full stack applications that create real value and solve meaningful problems.',
    },
    {
      icon: 'fas fa-bullseye',
      title: 'My Goal',
      desc: 'To work on innovative projects, learn continuously, and contribute to a smarter, AI-driven future.',
    },
    {
      icon: 'fas fa-bolt',
      title: 'My Approach',
      desc: 'Clean code, modern technologies, user-centric design, and a problem-solving mindset.',
    },
    {
      icon: 'fas fa-rocket',
      title: 'Beyond Code',
      desc: 'Exploring AI advancements, tech innovations, design, and always curious to learn more.',
    },
  ];

  const checklistItems = [
    { icon: 'fas fa-circle', color: '#10b981', label: 'Open to Opportunities' },
    { icon: 'fas fa-briefcase', color: '#2563eb', label: 'Freelance Projects' },
    { icon: 'fas fa-users', color: '#2563eb', label: 'Collaborations' },
    { icon: 'fas fa-flask', color: '#2563eb', label: 'Research & Innovation' },
    { icon: 'fas fa-paper-plane', color: '#2563eb', label: "Let's Build Something Amazing" },
  ];

  return (
    <section className="about-section-v2" id="about" aria-label="About Sarjan P — AI Engineer and Full Stack Developer">
      <div className="container">
        {/* Top Header Row */}
        <div className="about-v2-header">
          <div className="about-v2-title-block">
            <div className="badge-row">
              <span className="pill-tag">GET TO KNOW ME</span>
              <span className="accent-line"></span>
            </div>
            <h2 className="about-main-headline">
              Passionate About<br />
              Building a <span className="highlight-blue">Smarter</span><br />
              and Better Tomorrow
              <svg className="scribble-underline" viewBox="0 0 160 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8C40 2 120 2 158 8C120 12 40 12 2 8Z" fill="#2563eb" opacity="0.75" />
              </svg>
            </h2>
          </div>

          <div className="about-v2-bio-block">
            <p className="bio-paragraph">
              Hi, I'm <strong>Sarjan P</strong> — an AI Engineer, Full Stack Developer, and Co-Founder &amp; CEO at Innovation Hacks Web Solutions. Currently in my Final Year (<strong>8.0 CGPA</strong>) pursuing Artificial Intelligence &amp; Data Science at <strong>Shree Venkateshwara Hi-Tech Engineering College</strong>. I love combining generative AI, LLMs, and modern full-stack architectures to build scalable, impactful products.
            </p>
            <div className="doodle-note">
              <span className="doodle-text">Smart Ideas</span>
              <span className="doodle-text-sub">Real World Impact</span>
              <svg className="doodle-arrow" viewBox="0 0 60 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12C20 4 45 4 58 10M58 10L48 5M58 10L50 15" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main 3-Column Layout Grid */}
        <div className="about-v2-grid">
          {/* Left Column: Portrait Card with Annotations & Floating Info Pill */}
          <div className="about-portrait-card">
            <div className="portrait-arch-bg">
              <div className="floating-sphere sphere-1"></div>
              <div className="floating-sphere sphere-2"></div>
              
              <div className="handdrawn-annotation">
                <span className="annotation-text">AI<br />Ideas<br />Code<br />Impact</span>
                <svg className="curly-arrow" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 5C25 15 30 35 15 50M15 50L24 46M15 50L18 40" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <img
                src="/images/about_sarjan.jpg"
                alt="Sarjan P - AI Engineer & Full Stack Developer"
                className="about-portrait-image"
                loading="lazy"
              />

              {/* Floating Bottom Card */}
              <div className="portrait-bottom-pill">
                <div className="bottom-pill-info">
                  <h4 className="pill-name">SARJAN</h4>
                  <p className="pill-title">AI Engineer | Full Stack Developer</p>
                  <div className="pill-availability">
                    <span className="green-dot"></span>
                    <span>Available for opportunities</span>
                  </div>
                </div>
                <button
                  className="pill-action-btn"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  aria-label="Connect with Sarjan"
                >
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Center & Right Combined Area */}
          <div className="about-v2-right-content">
            {/* Top Stats Bar */}
            <div className="about-stats-glass-bar">
              {statsList.map((stat, idx) => (
                <div key={idx} className="about-stat-col">
                  <div className="about-stat-icon-circle">
                    <i className={stat.icon}></i>
                  </div>
                  <div className="about-stat-numbers">
                    <span className="about-stat-val">{stat.num}</span>
                    <span className="about-stat-lbl">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* 2x2 Pillars Grid + Astronaut Solutions Card */}
            <div className="about-cards-subgrid">
              {/* 2x2 Pillar Cards */}
              <div className="pillars-2x2-grid">
                {pillarCards.map((card, idx) => (
                  <div key={idx} className="pillar-glass-card">
                    <div className="pillar-icon-badge">
                      <i className={card.icon}></i>
                    </div>
                    <h3 className="pillar-title">{card.title}</h3>
                    <p className="pillar-desc">{card.desc}</p>
                    <div className="pillar-arrow-btn">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Side Astronaut & Checklist Card */}
              <div className="solutions-glass-card">
                <div className="quote-icon">“</div>
                <div className="solutions-header">
                  <h3 className="solutions-title">
                    Turning<br />
                    Ideas into<br />
                    <span className="highlight-blue">Intelligent</span><br />
                    Solutions.
                  </h3>
                  <div className="astronaut-img-wrap">
                    <img
                      src="/images/astronaut_laptop.jpg"
                      alt="3D Astronaut with AI Laptop in Space"
                      className="astronaut-img"
                      loading="lazy"
                    />
                  </div>
                </div>

                <ul className="solutions-checklist">
                  {checklistItems.map((item, idx) => (
                    <li key={idx} className="checklist-item">
                      <i className={item.icon} style={{ color: item.color, fontSize: item.icon === 'fas fa-circle' ? '0.65rem' : '0.95rem' }}></i>
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Mission & Quote Banner */}
        <div className="mission-banner-glass">
          <div className="mission-content-left">
            <div className="mission-tag-row">
              <span className="mission-bar"></span>
              <span className="mission-tag-text">MY MISSION</span>
            </div>
            <h3 className="mission-quote-text">
              “Leverage AI and technology to build solutions that create <span className="real-impact-highlight">real impact</span>.”
            </h3>
          </div>

          <button
            className="mission-cta-btn"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <i className="fas fa-paper-plane"></i>
            <span>Let's Connect</span>
            <i className="fas fa-arrow-right"></i>
          </button>

          <div className="mission-signature-block">
            <span className="handwritten-signature">Sarjan</span>
            <span className="sig-title">AI ENGINEER</span>
            <span className="sig-sub">FULL STACK DEVELOPER</span>
          </div>

          <div className="mission-bg-glow"></div>
        </div>
      </div>
    </section>
  );
}