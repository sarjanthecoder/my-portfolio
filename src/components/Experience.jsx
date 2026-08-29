import React from 'react';

const statsData = [
  {
    icon: 'fas fa-briefcase',
    iconColor: '#2563eb',
    iconBg: 'rgba(37, 99, 235, 0.1)',
    borderColor: '#2563eb',
    value: '2',
    label: 'Internships',
    sub: 'Completed',
  },
  {
    icon: 'fas fa-calendar-alt',
    iconColor: '#10b981',
    iconBg: 'rgba(16, 185, 129, 0.1)',
    borderColor: '#10b981',
    value: '2+',
    label: 'Months',
    sub: 'Experience',
  },
  {
    icon: 'fas fa-building',
    iconColor: '#f59e0b',
    iconBg: 'rgba(245, 158, 11, 0.1)',
    borderColor: '#f59e0b',
    value: '2',
    label: 'Organizations',
    sub: 'Worked With',
  },
  {
    icon: 'fas fa-bullseye',
    iconColor: '#8b5cf6',
    iconBg: 'rgba(139, 92, 246, 0.1)',
    borderColor: '#8b5cf6',
    value: '2025',
    label: 'Career',
    sub: 'Starting Year',
  },
];

const experiences = [
  {
    accentColor: '#2563eb',
    badgeColor: '#10b981',
    badgeBg: 'rgba(16, 185, 129, 0.1)',
    badgeText: 'INTERNSHIP',
    logoSrc: '/images/tcs_logo.png',
    logoAlt: 'Tata Consultancy Services (TCS) Official Logo',
    role: 'Software Engineer Intern',
    company: 'Tata Consultancy Services (TCS)',
    companyColor: '#2563eb',
    desc: 'Worked on real-world enterprise projects, gaining hands-on software development experience, writing clean production code, and collaborating with cross-functional senior engineering teams.',
    period: 'Jun 11 – Jul 11, 2025 (2 Months)',
    location: 'TCS Office',
    bullets: [
      'Developed and maintained modules for scalable enterprise applications',
      'Collaborated closely with cross-functional development teams',
      'Learned industry-grade software architectures & clean coding standards',
      'Gained deep hands-on experience with modern Agile methodologies',
    ],
    bulletColor: '#2563eb',
  },
  {
    accentColor: '#f97316',
    badgeColor: '#10b981',
    badgeBg: 'rgba(16, 185, 129, 0.1)',
    badgeText: 'INTERNSHIP',
    logoSrc: '/images/codetech_logo.png',
    logoAlt: 'Codetech IT Solutions Official Logo',
    role: 'Full Stack Developer Intern',
    company: 'Codetech IT Solutions',
    companyColor: '#f97316',
    desc: 'Worked on full-stack web engineering projects, architecting dynamic user interfaces, developing high-performance RESTful APIs, and implementing database optimization techniques.',
    period: 'Sep 01, 2025 – Oct 01, 2025 (1 Month)',
    location: 'Hyderabad, India (Remote)',
    bullets: [
      'Built fast, responsive frontends using modern component architecture',
      'Engineered secure RESTful APIs and connected external microservices',
      'Managed relational database schemas and optimized complex queries',
      'Tested, debugged, and successfully deployed web features to staging',
    ],
    bulletColor: '#10b981',
  },
];

export default function Experience() {
  return (
    <section
      className="exp-v2-section"
      id="experience"
      aria-label="Sarjan P professional experience and internships"
    >
      <div className="container">

        {/* ─── Top Row: Header + Stats ─── */}
        <div className="exp-v2-top-row">

          {/* Left: Heading block */}
          <div className="exp-v2-heading-block">
            <div className="exp-badge-pill">
              <i className="fas fa-plus exp-badge-icon"></i>
              MY JOURNEY
            </div>
            <h2 className="exp-v2-headline">
              My <span className="exp-headline-blue">Experience</span>
            </h2>
            <p className="exp-v2-subtitle">
              A collection of my internships and professional experiences that shaped my skills and career path.
            </p>
            <div className="exp-v2-underline"></div>
          </div>

          {/* Right: Stats cards */}
          <div className="exp-stats-row">
            {statsData.map((stat, idx) => (
              <div
                key={idx}
                className="exp-stat-card"
                style={{ '--stat-border': stat.borderColor }}
              >
                <div
                  className="exp-stat-icon"
                  style={{ background: stat.iconBg, color: stat.iconColor }}
                >
                  <i className={stat.icon}></i>
                </div>
                <div className="exp-stat-value">{stat.value}</div>
                <div className="exp-stat-label">{stat.label}</div>
                <div className="exp-stat-sub">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Experience Cards ─── */}
        <div className="exp-cards-list">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="exp-card"
              style={{ '--exp-accent': exp.accentColor }}
            >
              {/* Left: Company Logo */}
              <div className="exp-card-logo-col">
                <div className="exp-logo-wrap">
                  <img src={exp.logoSrc} alt={exp.logoAlt} className="exp-company-logo-img" />
                </div>
              </div>

              {/* Center: Role & Details */}
              <div className="exp-card-center">
                <div className="exp-type-badge" style={{ color: exp.badgeColor, background: exp.badgeBg }}>
                  <span className="exp-badge-dot" style={{ background: exp.badgeColor }}></span>
                  {exp.badgeText}
                </div>
                <h3 className="exp-role-title">{exp.role}</h3>
                <div className="exp-company-name" style={{ color: exp.companyColor }}>{exp.company}</div>
                <p className="exp-desc-text">{exp.desc}</p>
                <div className="exp-meta-row">
                  <span className="exp-meta-item">
                    <i className="fas fa-calendar-alt" style={{ color: exp.accentColor }}></i>
                    {exp.period}
                  </span>
                  <span className="exp-meta-item">
                    <i className="fas fa-map-marker-alt" style={{ color: exp.accentColor }}></i>
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Right: What I Worked On */}
              <div className="exp-card-right">
                <div className="exp-worked-label" style={{ color: exp.bulletColor }}>WHAT I WORKED ON</div>
                <ul className="exp-bullets-list">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="exp-bullet-item">
                      <i className="fas fa-circle-check" style={{ color: exp.bulletColor }}></i>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* ─── Bottom Banner ─── */}
        <div className="exp-bottom-banner">
          <div className="exp-bottom-icon">
            <i className="fas fa-globe"></i>
          </div>
          <p className="exp-bottom-text">
            For more details about my projects, experience, and journey,{' '}
            visit my portfolio website:{' '}
            <a
              href="https://sarjanp.in"
              target="_blank"
              rel="noopener noreferrer"
              className="exp-portfolio-link"
            >
              sarjanp.in <i className="fas fa-external-link-alt" style={{ fontSize: '0.78rem' }}></i>
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
