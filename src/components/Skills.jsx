import React, { useRef, useEffect, useState } from 'react';

const skillsGrid = [
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: '#61dafb',
    bg: '#e8f8fd',
    borderColor: '#61dafb',
    level: 95,
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: '#3c873a',
    bg: '#e8f5e9',
    borderColor: '#3c873a',
    level: 92,
  },
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    color: '#e44d26',
    bg: '#fef0ec',
    borderColor: '#e44d26',
    level: 98,
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    color: '#264de4',
    bg: '#eef0fd',
    borderColor: '#264de4',
    level: 95,
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    color: '#38bdf8',
    bg: '#e8f7fd',
    borderColor: '#38bdf8',
    level: 90,
  },
  {
    name: 'SQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    color: '#00758f',
    bg: '#e3f4f8',
    borderColor: '#00758f',
    level: 88,
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    color: '#4db33d',
    bg: '#e9f5e8',
    borderColor: '#4db33d',
    level: 90,
  },
  {
    name: 'API',
    isFontAwesome: true,
    faIcon: 'fas fa-plug',
    color: '#6c47ff',
    bg: '#f0eeff',
    borderColor: '#6c47ff',
    level: 93,
  },
  {
    name: 'Firebase API',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    color: '#ffca28',
    bg: '#fffbea',
    borderColor: '#ffca28',
    level: 88,
  },
  {
    name: 'Telegram API',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg',
    color: '#2aabee',
    bg: '#e8f6fd',
    borderColor: '#2aabee',
    level: 90,
  },
  {
    name: 'LLM / AI',
    isFontAwesome: true,
    faIcon: 'fas fa-brain',
    color: '#a855f7',
    bg: '#f5eeff',
    borderColor: '#a855f7',
    level: 88,
  },
  {
    name: 'NLP',
    isFontAwesome: true,
    faIcon: 'fas fa-comments',
    color: '#10b981',
    bg: '#e6faf5',
    borderColor: '#10b981',
    level: 87,
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    color: '#2496ed',
    bg: '#e8f5fd',
    borderColor: '#2496ed',
    level: 90,
  },
  {
    name: 'Kubernetes',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    color: '#326ce5',
    bg: '#edf1fd',
    borderColor: '#326ce5',
    level: 88,
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    color: '#f05032',
    bg: '#fef0ee',
    borderColor: '#f05032',
    level: 95,
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    color: '#24292e',
    bg: '#f0f0f0',
    borderColor: '#24292e',
    level: 95,
  },
];

// 4 columns for progress bars, 4 per column
const barColumns = [
  skillsGrid.slice(0, 4),
  skillsGrid.slice(7, 11),
  skillsGrid.slice(2, 6),
  [skillsGrid[13], skillsGrid[14], skillsGrid[15], skillsGrid[11]],
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const renderIcon = (skill, size = 48) => {
    if (skill.isFontAwesome) {
      return (
        <i
          className={skill.faIcon}
          style={{ color: skill.color, fontSize: size }}
          aria-hidden="true"
        />
      );
    }
    return (
      <img
        src={skill.icon}
        alt={skill.name}
        width={size}
        height={size}
        style={{ objectFit: 'contain' }}
        loading="lazy"
        onError={(e) => { e.target.style.display = 'none'; }}
      />
    );
  };

  // Rows: 7 / 7 / 2
  const row1 = skillsGrid.slice(0, 7);
  const row2 = skillsGrid.slice(7, 14);
  const row3 = skillsGrid.slice(14, 16);

  return (
    <section
      className="skills-v2-section"
      id="skills"
      ref={sectionRef}
      aria-label="Sarjan P technical skills — Technical Arsenal"
    >
      <div className="container">

        {/* ─── Header ─── */}
        <div className="skills-v2-header">
          <div className="skills-badge-pill">
            <span className="skills-badge-dot"></span>
            MY SKILLS
          </div>
          <h2 className="skills-v2-headline">
            Technical <span className="skills-headline-blue">Arsenal</span>
          </h2>
          <div className="skills-divider-row">
            <div className="skills-divider-line"></div>
            <div className="skills-divider-dot"></div>
            <div className="skills-divider-line"></div>
          </div>
          <p className="skills-v2-subtitle">
            Technologies and tools I use to build intelligent web applications and AI-powered solutions
          </p>
        </div>

        {/* ─── Icon Cards Grid ─── */}
        <div className="skills-icon-section">
          <div className="skills-icon-row">
            {row1.map((skill, idx) => (
              <div
                key={idx}
                className={`skill-icon-card ${isVisible ? 'skill-icon-card--visible' : ''}`}
                style={{
                  animationDelay: `${idx * 0.06}s`,
                  '--card-border': skill.borderColor + '55',
                  '--card-border-hover': skill.borderColor,
                  '--card-glow': skill.color + '33',
                }}
              >
                <div className="skill-icon-wrap">
                  {renderIcon(skill, 48)}
                </div>
                <span className="skill-icon-name">{skill.name}</span>
              </div>
            ))}
          </div>

          <div className="skills-icon-row">
            {row2.map((skill, idx) => (
              <div
                key={idx}
                className={`skill-icon-card ${isVisible ? 'skill-icon-card--visible' : ''}`}
                style={{
                  animationDelay: `${(idx + 7) * 0.06}s`,
                  '--card-border': skill.borderColor + '55',
                  '--card-border-hover': skill.borderColor,
                  '--card-glow': skill.color + '33',
                }}
              >
                <div className="skill-icon-wrap">
                  {renderIcon(skill, 48)}
                </div>
                <span className="skill-icon-name">{skill.name}</span>
              </div>
            ))}
          </div>

          <div className="skills-icon-row skills-icon-row--centered">
            {row3.map((skill, idx) => (
              <div
                key={idx}
                className={`skill-icon-card ${isVisible ? 'skill-icon-card--visible' : ''}`}
                style={{
                  animationDelay: `${(idx + 14) * 0.06}s`,
                  '--card-border': skill.borderColor + '55',
                  '--card-border-hover': skill.borderColor,
                  '--card-glow': skill.color + '33',
                }}
              >
                <div className="skill-icon-wrap">
                  {renderIcon(skill, 48)}
                </div>
                <span className="skill-icon-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Progress Bars (4 columns) ─── */}
        <div className="skills-bars-columns">
          {barColumns.map((col, ci) => (
            <div key={ci} className="skills-bar-col-card">
              {col.map((skill, si) => (
                <div key={si} className="skill-bar-row">
                  <div className="skill-bar-row-header">
                    <div className="skill-bar-icon-sm">
                      {renderIcon(skill, 22)}
                    </div>
                    <span className="skill-bar-row-name">{skill.name}</span>
                    <span className="skill-bar-row-pct" style={{ color: skill.color }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="skill-bar-track-v2" role="progressbar" aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100" aria-label={`${skill.name} skill level ${skill.level}%`}>
                    <div
                      className="skill-bar-fill-v2"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        background: `linear-gradient(90deg, ${skill.color}cc, ${skill.color})`,
                        transitionDelay: `${(ci * 4 + si) * 0.08}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* ─── Bottom Banner ─── */}
        <div className="skills-bottom-banner">
          <div className="skills-bottom-icon">
            <i className="fas fa-bullseye"></i>
          </div>
          <p className="skills-bottom-text">
            I continuously{' '}
            <strong className="skills-bottom-highlight">learn, build, and explore</strong>{' '}
            new technologies to stay ahead and deliver the best solutions.
          </p>
        </div>

      </div>
    </section>
  );
}