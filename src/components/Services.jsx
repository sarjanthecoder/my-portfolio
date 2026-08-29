import React, { useState } from 'react';

const servicesFullData = [
  {
    icon: 'fas fa-brain',
    iconColor: '#6366f1',
    iconBg: 'rgba(99, 102, 241, 0.1)',
    title: 'AI / ML Development',
    desc: 'Building custom ML models and AI solutions that solve real-world problems.',
    bullets: [
      'Predictive Modeling',
      'Classification & Clustering',
      'Recommendation Systems',
      'Model Deployment',
    ],
    techIcons: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', alt: 'TensorFlow' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', alt: 'PyTorch' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg', alt: 'Jupyter' },
    ],
  },
  {
    icon: 'fas fa-wand-magic-sparkles',
    iconColor: '#8b5cf6',
    iconBg: 'rgba(139, 92, 246, 0.1)',
    title: 'Generative AI',
    desc: 'Creating next-gen AI applications with LLMs and advanced generative models.',
    bullets: [
      'Text Generation',
      'Image Generation',
      'AI Content Creation',
      'Prompt Engineering',
    ],
    techIcons: [
      { src: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', alt: 'ChatGPT' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', alt: 'Figma' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', alt: 'Firebase' },
    ],
  },
  {
    icon: 'fas fa-comments',
    iconColor: '#06b6d4',
    iconBg: 'rgba(6, 182, 212, 0.1)',
    title: 'LLM & RAG Applications',
    desc: 'Developing intelligent LLM apps with Retrieval-Augmented Generation systems.',
    bullets: [
      'RAG Systems',
      'Chatbot Development',
      'Knowledge Bases',
      'Document Intelligence',
    ],
    techIcons: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', alt: 'MongoDB' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
    ],
  },
  {
    icon: 'fas fa-robot',
    iconColor: '#10b981',
    iconBg: 'rgba(16, 185, 129, 0.1)',
    title: 'AI Agents & Automation',
    desc: 'Building AI agents and automation solutions to streamline workflows and boost productivity.',
    bullets: [
      'AI Agents',
      'Workflow Automation',
      'Task Automation',
      'Smart Integrations',
    ],
    techIcons: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', alt: 'Firebase' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', alt: 'Docker' },
    ],
  },
  {
    icon: 'fas fa-code',
    iconColor: '#2563eb',
    iconBg: 'rgba(37, 99, 235, 0.1)',
    title: 'Full Stack Development',
    desc: 'End-to-end web applications with modern technologies and best practices.',
    bullets: [
      'Frontend Development',
      'Backend Development',
      'Database Integration',
      'Deployment & Scaling',
    ],
    techIcons: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', alt: 'MongoDB' },
    ],
  },
  {
    icon: 'fas fa-globe',
    iconColor: '#f59e0b',
    iconBg: 'rgba(245, 158, 11, 0.1)',
    title: 'Web Application Development',
    desc: 'Responsive, fast and modern web applications tailored to your needs.',
    bullets: [
      'Business Websites',
      'Interactive Web Apps',
      'Dashboard & Admin Panels',
      'Progressive Web Apps',
    ],
    techIcons: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML5' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'CSS3' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', alt: 'TypeScript' },
    ],
  },
  {
    icon: 'fas fa-plug',
    iconColor: '#ef4444',
    iconBg: 'rgba(239, 68, 68, 0.1)',
    title: 'API Development',
    desc: 'Building secure, scalable and well-documented RESTful APIs.',
    bullets: [
      'RESTful APIs',
      'API Integration',
      'Third-party APIs',
      'API Documentation',
    ],
    techIcons: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', alt: 'Express' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', alt: 'MongoDB' },
    ],
  },
  {
    icon: 'fas fa-cloud',
    iconColor: '#3b82f6',
    iconBg: 'rgba(59, 130, 246, 0.1)',
    title: 'Cloud & DevOps',
    desc: 'Deploying and managing scalable applications in the cloud.',
    bullets: [
      'Cloud Deployment',
      'CI/CD Pipelines',
      'Containerization',
      'Monitoring & Scaling',
    ],
    techIcons: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', alt: 'AWS' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', alt: 'Docker' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', alt: 'GCP' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', alt: 'Git' },
    ],
  },
  {
    icon: 'fas fa-database',
    iconColor: '#14b8a6',
    iconBg: 'rgba(20, 184, 166, 0.1)',
    title: 'Database Solutions',
    desc: 'Designing efficient, secure and scalable database architectures.',
    bullets: [
      'Database Design',
      'Optimization',
      'Data Modeling',
      'Backup & Security',
    ],
    techIcons: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', alt: 'MongoDB' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', alt: 'PostgreSQL' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', alt: 'MySQL' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', alt: 'Firebase' },
    ],
  },
  {
    icon: 'fas fa-bolt',
    iconColor: '#f97316',
    iconBg: 'rgba(249, 115, 22, 0.1)',
    title: 'AI-Powered SaaS',
    desc: 'Building intelligent SaaS platforms powered by AI and automation.',
    bullets: [
      'SaaS Development',
      'AI Integration',
      'Subscription Systems',
      'Analytics & Insights',
    ],
    techIcons: [
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', alt: 'Firebase' },
      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', alt: 'MongoDB' },
    ],
  },
];

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section className="services-v2-section" id="services" aria-label="Services offered by Sarjan P — AI Engineer and Full Stack Developer">
      <div className="container">

        {/* Section Header */}
        <div className="services-v2-header">
          <div className="services-header-left">
            <div className="services-badge-row">
              <span className="services-badge-pill">
                <span className="services-badge-dot"></span>
                WHAT I OFFER
              </span>
            </div>
            <h2 className="services-v2-headline">
              SERVICES <span className="services-headline-blue">I CAN HELP YOU WITH</span>
            </h2>
            <p className="services-v2-subheading">
              I build intelligent, scalable and high-performance solutions that drive results and create{' '}
              <span className="services-subheading-blue">real-world impact.</span>
            </p>
          </div>

          <div className="services-quote-card">
            <div className="services-quote-icon">"</div>
            <p className="services-quote-text">
              Your ideas + Modern technology<br />= Powerful solutions.
            </p>
            <p className="services-quote-author">— SARJAN</p>
          </div>
        </div>

        {/* Services Grid 5×2 */}
        <div className="services-v2-grid">
          {servicesFullData.map((service, idx) => (
            <article
              key={idx}
              className={`service-v2-card ${hoveredIdx === idx ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              itemScope
              itemType="https://schema.org/Service"
            >
              {/* Card Top Row */}
              <div className="svc-card-top-row">
                <div className="svc-icon-badge" style={{ background: service.iconBg }}>
                  <i className={service.icon} style={{ color: service.iconColor }}></i>
                </div>
                <button
                  className="svc-arrow-btn"
                  style={{ background: service.iconBg, color: service.iconColor }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  aria-label={`Learn more about ${service.title}`}
                >
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>

              {/* Title */}
              <h3 className="svc-card-title" itemProp="name">{service.title}</h3>

              {/* Description */}
              <p className="svc-card-desc" itemProp="description">{service.desc}</p>

              {/* Bullet Points */}
              <ul className="svc-bullets-list">
                {service.bullets.map((bullet, bi) => (
                  <li key={bi} className="svc-bullet-item">
                    <i className="fas fa-circle-check svc-check-icon"></i>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Icons Row */}
              <div className="svc-tech-row">
                <span className="svc-tech-label">Technologies I work with</span>
                <div className="svc-tech-icons">
                  {service.techIcons.map((tech, ti) => (
                    <img
                      key={ti}
                      src={tech.src}
                      alt={tech.alt}
                      className="svc-tech-icon-img"
                      loading="lazy"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  ))}
                </div>
              </div>

              {/* Learn More Button */}
              <button
                className="svc-learn-more-btn"
                style={{ color: service.iconColor, borderColor: service.iconBg }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </button>

              {/* Hover glow bar */}
              <div className="svc-card-glow-bar" style={{ background: service.iconColor }}></div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="services-v2-cta-banner">
          <div className="svc-cta-left">
            <div className="svc-cta-icon-wrap">
              <i className="fas fa-paper-plane"></i>
            </div>
            <div className="svc-cta-text-group">
              <span className="svc-cta-have-project">Have a project in mind?</span>
              <h3 className="svc-cta-headline">
                Let's build something <span className="svc-cta-amazing">amazing together.</span>
                <svg className="svc-cta-underline" viewBox="0 0 200 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 7C50 2 150 2 198 7C150 10 50 10 2 7Z" fill="#2563eb" opacity="0.7" />
                </svg>
              </h3>
            </div>
          </div>

          <div className="svc-cta-badges">
            <span className="svc-cta-badge">
              <i className="fas fa-circle-check svc-badge-check"></i>
              Fast Response
            </span>
            <span className="svc-cta-badge">
              <i className="fas fa-circle-check svc-badge-check"></i>
              Flexible Collaboration
            </span>
            <span className="svc-cta-badge">
              <i className="fas fa-circle-check svc-badge-check"></i>
              Result Driven
            </span>
          </div>

          <button
            className="svc-cta-discuss-btn"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Discuss Your Project
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

      </div>
    </section>
  );
}