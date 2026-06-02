import React, { useState, useRef, useEffect } from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeIdx, setActiveIdx] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills" id="skills" ref={sectionRef} aria-label="Sarjan P's technical skills and technologies">
      <div className="container">
        <h2 className="section-title">
          Technical <span className="neon-text">Arsenal</span>
        </h2>
        <p className="skills-subtitle">Technologies and tools Sarjan P uses to build intelligent web applications and AI-powered solutions</p>
        
        {/* Hexagonal Orbit Grid */}
        <div className="skills-orbit-container">
          <div className="skills-orbit-grid" role="list" aria-label="Sarjan's technology stack">
            {skillsData.map((skill, idx) => (
              <div
                key={idx}
                className={`skill-hex ${isVisible ? 'skill-hex--visible' : ''} ${activeIdx === idx ? 'skill-hex--active' : ''}`}
                style={{ animationDelay: `${idx * 0.08}s` }}
                onMouseEnter={() => setActiveIdx(idx)}
                onMouseLeave={() => setActiveIdx(null)}
                role="listitem"
              >
                <div className="skill-hex__inner">
                  <div className="skill-hex__glow" />
                  <div className="skill-hex__icon">
                    {skill.isFontAwesome ? (
                      <i className={skill.icon} aria-hidden="true"></i>
                    ) : (
                      <img src={skill.icon} alt={`${skill.name} — technology used by Sarjan P`} width="48" height="48" loading="lazy" decoding="async" />
                    )}
                  </div>
                  <span className="skill-hex__name">{skill.name}</span>
                  <div className="skill-hex__pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Level Bars */}
        <div className="skills-bars-section">
          <div className="skills-bars-grid" role="list" aria-label="Sarjan's skill proficiency levels">
            {skillsData.map((skill, idx) => (
              <div key={idx} className="skill-bar-item" role="listitem">
                <div className="skill-bar-header">
                  <div className="skill-bar-icon">
                    {skill.isFontAwesome ? (
                      <i className={skill.icon} aria-hidden="true"></i>
                    ) : (
                      <img src={skill.icon} alt={`${skill.name} proficiency`} width="24" height="24" loading="lazy" decoding="async" />
                    )}
                  </div>
                  <span className="skill-bar-name">{skill.name}</span>
                </div>
                <div className="skill-bar-track" role="progressbar" aria-label={`${skill.name} skill level`} aria-valuenow={Math.round(85 + Math.sin(idx * 1.5) * 12)} aria-valuemin="0" aria-valuemax="100">
                  <div
                    className={`skill-bar-fill ${isVisible ? 'skill-bar-fill--animate' : ''}`}
                    style={{ 
                      width: isVisible ? `${85 + Math.sin(idx * 1.5) * 12}%` : '0%',
                      animationDelay: `${idx * 0.1}s`
                    }}
                  >
                    <div className="skill-bar-shine" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}