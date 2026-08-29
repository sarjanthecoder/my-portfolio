import React, { useState, useMemo } from 'react';
import { projectsData } from '../data/portfolioData';

// Helper to assign categories and tags
const getProjectMetadata = (project, idx) => {
  const titleLower = project.title.toLowerCase();
  const descLower = project.desc.toLowerCase();

  let category = 'web';
  let icon = 'fas fa-laptop-code';
  let tags = ['Web App'];

  if (titleLower.includes('food') || titleLower.includes('recipe')) {
    category = 'ai';
    icon = 'fas fa-utensils';
    tags = ['AI / ML', 'Web App'];
  } else if (titleLower.includes('expense') || titleLower.includes('budget')) {
    category = 'ai';
    icon = 'fas fa-wallet';
    tags = ['AI / ML', 'Finance'];
  } else if (titleLower.includes('music') || titleLower.includes('song')) {
    category = 'web';
    icon = 'fas fa-music';
    tags = ['Web App', 'Streaming'];
  } else if (titleLower.includes('n8n') || titleLower.includes('workflow')) {
    category = 'automation';
    icon = 'fas fa-diagram-project';
    tags = ['Automation', 'Productivity'];
  } else if (titleLower.includes('chat') || titleLower.includes('messaging')) {
    category = 'web';
    icon = 'fas fa-comments';
    tags = ['Web App', 'Real Time'];
  } else if (titleLower.includes('price tracker') || titleLower.includes('chrome')) {
    category = 'tools';
    icon = 'fas fa-tags';
    tags = ['Web App', 'E-Commerce'];
  } else if (titleLower.includes('stock') || titleLower.includes('trading')) {
    category = 'ai';
    icon = 'fas fa-chart-line';
    tags = ['AI / ML', 'Trading'];
  } else if (titleLower.includes('metal') || titleLower.includes('gold') || titleLower.includes('jewellery')) {
    category = 'tools';
    icon = 'fas fa-gem';
    tags = ['Live API', 'FinTech'];
  } else if (titleLower.includes('voting')) {
    category = 'web';
    icon = 'fas fa-check-to-slot';
    tags = ['Security', 'Full Stack'];
  } else if (titleLower.includes('portfolio')) {
    category = 'web';
    icon = 'fas fa-id-badge';
    tags = ['React', 'Three.js'];
  } else if (titleLower.includes('symptom') || titleLower.includes('medical')) {
    category = 'ai';
    icon = 'fas fa-heart-pulse';
    tags = ['AI / ML', 'Healthcare'];
  } else if (titleLower.includes('cleaner') || titleLower.includes('data cleaner')) {
    category = 'tools';
    icon = 'fas fa-broom';
    tags = ['Data Science', 'Automation'];
  } else if (titleLower.includes('whatsapp') || titleLower.includes('bot') || titleLower.includes('telegram')) {
    category = 'automation';
    icon = titleLower.includes('telegram') ? 'fab fa-telegram' : 'fab fa-whatsapp';
    tags = ['Automation', 'Bot'];
  } else if (titleLower.includes('image generator') || titleLower.includes('story') || titleLower.includes('jarvis')) {
    category = 'ai';
    icon = 'fas fa-wand-magic-sparkles';
    tags = ['Generative AI', 'API'];
  } else if (titleLower.includes('big data') || titleLower.includes('analyzer') || titleLower.includes('packet')) {
    category = 'tools';
    icon = 'fas fa-database';
    tags = ['Tools', 'Analytics'];
  } else if (titleLower.includes('resume') || titleLower.includes('ats')) {
    category = 'ai';
    icon = 'fas fa-file-contract';
    tags = ['ATS Score', 'NLP'];
  } else if (titleLower.includes('book') || titleLower.includes('recommender') || titleLower.includes('churn')) {
    category = 'ai';
    icon = 'fas fa-brain';
    tags = ['Machine Learning', 'AI'];
  } else if (titleLower.includes('clock') || titleLower.includes('password') || titleLower.includes('weather') || titleLower.includes('air quality')) {
    category = 'tools';
    icon = 'fas fa-screwdriver-wrench';
    tags = ['Utility', 'Web App'];
  } else if (titleLower.includes('e-commerce') || titleLower.includes('house') || titleLower.includes('renting') || titleLower.includes('learning')) {
    category = 'web';
    icon = 'fas fa-globe';
    tags = ['Full Stack', 'Database'];
  } else if (titleLower.startsWith('ai ') || descLower.includes('ai') || descLower.includes('machine learning')) {
    category = 'ai';
    icon = 'fas fa-robot';
    tags = ['AI / ML', 'Intelligent App'];
  }

  return {
    ...project,
    id: idx + 1,
    num: String(idx + 1).padStart(2, '0'),
    category,
    icon,
    tags,
  };
};

const filterTabs = [
  { id: 'all', label: 'All Projects', icon: 'fas fa-th-large' },
  { id: 'ai', label: 'AI / ML', icon: 'fas fa-brain' },
  { id: 'web', label: 'Web Applications', icon: 'fas fa-globe' },
  { id: 'automation', label: 'Automation', icon: 'fas fa-bolt' },
  { id: 'tools', label: 'Tools & Utilities', icon: 'fas fa-wrench' },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');
  const [sortBy, setSortBy] = useState('latest');
  const [expanded, setExpanded] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const enhancedProjects = useMemo(() => {
    return projectsData.map((p, idx) => getProjectMetadata(p, idx));
  }, []);

  const filteredProjects = useMemo(() => {
    let list = [...enhancedProjects];

    if (activeTab !== 'all') {
      list = list.filter((p) => p.category === activeTab);
    }

    if (sortBy === 'alphabetical') {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'oldest') {
      list.sort((a, b) => a.id - b.id);
    } else {
      // Latest first (default)
      list.sort((a, b) => a.id - b.id);
    }

    return list;
  }, [enhancedProjects, activeTab, sortBy]);

  const visibleProjects = expanded ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section
      className="portfolio-v2-section"
      id="portfolio"
      aria-label="Sarjan P's Project Portfolio"
    >
      <div className="container">

        {/* ─── Top Header + Stat Badges Row ─── */}
        <div className="portfolio-v2-header-row">
          {/* Left Title & Tagline */}
          <div className="portfolio-v2-title-block">
            <div className="portfolio-v2-main-heading">
              <span className="portfolio-heading-my">MY</span>
              <span className="portfolio-heading-port">PORTFOLIO</span>
            </div>

            <div className="portfolio-v2-built-block">
              <div className="portfolio-built-badge">
                <span className="portfolio-built-bracket"></span>
                <span className="portfolio-built-text">
                  THINGS <span className="portfolio-built-blue">I'VE BUILT</span>
                </span>
              </div>
              <p className="portfolio-v2-subtitle">
                Explore a collection of AI-powered and full stack applications I've developed.
              </p>
            </div>
          </div>

          {/* Right Stat Cards */}
          <div className="portfolio-v2-stats-row">
            {/* Stat 1 */}
            <div className="portfolio-stat-pill">
              <div className="portfolio-stat-icon-wrap" style={{ background: 'rgba(37, 99, 235, 0.1)', color: '#2563eb' }}>
                <i className="fas fa-code"></i>
              </div>
              <div className="portfolio-stat-text-wrap">
                <div className="portfolio-stat-number">50+</div>
                <div className="portfolio-stat-desc">Projects Completed</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="portfolio-stat-pill">
              <div className="portfolio-stat-icon-wrap" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>
                <i className="fas fa-trophy"></i>
              </div>
              <div className="portfolio-stat-text-wrap">
                <div className="portfolio-stat-number">100%</div>
                <div className="portfolio-stat-desc">Personal Projects</div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="portfolio-stat-pill">
              <div className="portfolio-stat-icon-wrap" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                <i className="fas fa-rocket"></i>
              </div>
              <div className="portfolio-stat-text-wrap">
                <div className="portfolio-stat-number">Always</div>
                <div className="portfolio-stat-desc">Building Something New</div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Filter Tabs & Sort Dropdown Bar ─── */}
        <div className="portfolio-v2-controls-bar">
          <div className="portfolio-tabs-group" role="tablist">
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`portfolio-tab-pill ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(tab.id);
                  }}
                >
                  <i className={tab.icon}></i>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="portfolio-sort-wrap">
            <span className="portfolio-sort-label">Sort By:</span>
            <div className="portfolio-select-container">
              <select
                className="portfolio-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort projects"
              >
                <option value="latest">Latest First</option>
                <option value="oldest">Oldest First</option>
                <option value="alphabetical">Alphabetical</option>
              </select>
              <i className="fas fa-chevron-down portfolio-select-arrow"></i>
            </div>
          </div>
        </div>

        {/* ─── Projects Grid (3 Columns) ─── */}
        <div className="portfolio-v2-grid">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="portfolio-v2-card"
              onClick={() => setSelectedProject(project)}
            >
              {/* Card Top: Preview Image with Numbered Badge */}
              <div className="portfolio-card-media">
                <div className="portfolio-card-number-badge">
                  {project.num}
                </div>
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="portfolio-card-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&sig=${project.id}`;
                  }}
                />
                <div className="portfolio-card-hover-overlay">
                  <span className="portfolio-hover-view-text">
                    <i className="fas fa-expand-arrows-alt"></i> Preview &amp; Code
                  </span>
                </div>
              </div>

              {/* Card Bottom: Info & Action */}
              <div className="portfolio-card-content">
                <div className="portfolio-card-info-row">
                  {/* Left: Icon Badge */}
                  <div className="portfolio-icon-badge">
                    <i className={project.icon}></i>
                  </div>

                  {/* Middle: Details */}
                  <div className="portfolio-card-details">
                    <h3 className="portfolio-project-title">{project.title}</h3>
                    <p className="portfolio-project-desc">{project.desc}</p>
                    <div className="portfolio-tags-row">
                      {project.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className="portfolio-tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: View Button */}
                  <div className="portfolio-card-action">
                    <button
                      className="portfolio-view-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      aria-label={`View ${project.title}`}
                    >
                      <span>View Project</span>
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ─── Show More / Show Less Button ─── */}
        {filteredProjects.length > 6 && (
          <div className="portfolio-show-more-row">
            <button
              className="portfolio-more-toggle-btn"
              onClick={() => {
                setExpanded(!expanded);
                if (expanded) {
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              aria-expanded={expanded}
            >
              <span>{expanded ? 'Show Less Projects' : `Show All ${filteredProjects.length} Projects`}</span>
              <i className={`fas fa-chevron-${expanded ? 'up' : 'down'}`}></i>
            </button>
          </div>
        )}

      </div>

      {/* ─── Project Details / Demo Modal ─── */}
      {selectedProject && (
        <div
          className="portfolio-modal-overlay"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
        >
          <div className="portfolio-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="portfolio-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <i className="fas fa-times"></i>
            </button>

            <div className="portfolio-modal-header">
              <div className="portfolio-modal-icon-badge">
                <i className={selectedProject.icon}></i>
              </div>
              <div>
                <h3 className="portfolio-modal-title">{selectedProject.title}</h3>
                <div className="portfolio-modal-tags">
                  {selectedProject.tags.map((t, idx) => (
                    <span key={idx} className="portfolio-tag-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="portfolio-modal-media">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="portfolio-modal-img"
                onError={(e) => {
                  e.target.src = `https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200&sig=${selectedProject.id}`;
                }}
              />
            </div>

            <p className="portfolio-modal-desc">{selectedProject.desc}</p>

            <div className="portfolio-modal-buttons">
              {selectedProject.repo && (
                <a
                  href={selectedProject.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-modal-btn portfolio-btn-github"
                >
                  <i className="fab fa-github"></i>
                  <span>GitHub Repository</span>
                </a>
              )}
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-modal-btn portfolio-btn-demo"
                >
                  <i className="fas fa-external-link-alt"></i>
                  <span>Live Preview</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}