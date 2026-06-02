import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';

export default function Portfolio() {
  const [expanded, setExpanded] = useState(false);
  const visibleProjects = expanded ? projectsData : projectsData.slice(0, 15);

  return (
    <section className="portfolio" id="portfolio" aria-label="Sarjan P's project portfolio — AI, Full Stack, and Web Development projects">
      <div className="container">
        <h2 className="section-title">
          My <span className="neon-text">Portfolio</span>
        </h2>
        <div className="portfolio-grid" style={{ maxHeight: expanded ? '99999px' : '2300px' }} role="list">
          {visibleProjects.map((proj, idx) => (
            <article key={idx} className="project-card" role="listitem" itemScope itemType="https://schema.org/CreativeWork">
              <div className="project-image">
                <img 
                  src={proj.image} 
                  alt={`${proj.title} — project by Sarjan P (SarjanP)`}
                  className="project-img" 
                  width="400"
                  height="250"
                  loading="lazy" 
                  decoding="async" 
                  itemProp="image"
                  onError={(e) => { e.target.src = `https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&random=${idx}`; }}
                />
                <div className="project-overlay">
                  <a href={proj.repo} target="_blank" rel="noopener noreferrer" className="project-btn" aria-label={`View ${proj.title} source code on GitHub`} itemProp="codeRepository">
                    <i className="fab fa-github" aria-hidden="true"></i> View Repo
                  </a>
                  <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="project-btn" aria-label={`View ${proj.title} live demo`} itemProp="url">
                    <i className="fas fa-external-link-alt" aria-hidden="true"></i> Live Demo
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3 itemProp="name">{proj.title}</h3>
                <p itemProp="description">{proj.desc}</p>
                <meta itemProp="author" content="Sarjan P" />
              </div>
            </article>
          ))}
        </div>
        
        <div className="show-more-container">
          <button className={`btn btn-primary show-more-btn ${expanded ? 'expanded' : ''}`} onClick={() => {
            setExpanded(!expanded);
            if (expanded) {
              document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
            }
          }} aria-expanded={expanded} aria-controls="portfolio-grid" aria-label={expanded ? 'Show fewer projects by Sarjan P' : 'Show all 50+ projects by Sarjan P'}>
            <span>{expanded ? 'Show Less Projects' : 'Show More Projects'}</span>
            <i className="fas fa-chevron-down" style={{ transform: expanded ? 'rotate(180deg)' : '', marginLeft: '8px' }} aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </section>
  );
}