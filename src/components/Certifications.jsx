import React, { useState, useEffect, useRef } from 'react';

const certsData = [
  {
    id: 1,
    num: '#1',
    category: 'AI / ML',
    categoryColor: '#8b5cf6',
    categoryBg: 'rgba(139,92,246,0.1)',
    type: 'hackathon',
    title: 'AI For ALL Ideathon – 1st Place',
    org: 'NIT Trichy & TCS Foundation',
    desc: 'Secured First Place in AI For ALL Ideathon conducted by the TATA Centre for AI & Machine Learning.',
    date: 'February 2026',
    dateIcon: 'fas fa-calendar-alt',
    preview: 'images/certificates/nit_tcs_ideathon.jpg',
    highres: 'images/certificates/nit_tcs_ideathon.jpg',
    accentColor: '#f59e0b',
    layout: 'vertical',
  },
  {
    id: 2,
    num: '#2',
    category: 'Cloud / AI',
    categoryColor: '#2563eb',
    categoryBg: 'rgba(37,99,235,0.1)',
    type: 'professional',
    title: 'Oracle Certified Foundations Associate',
    org: 'Oracle University',
    desc: 'Certified in Oracle Fusion AI Agent Studio.',
    date: 'June 2025',
    dateIcon: 'fas fa-calendar-alt',
    preview: 'images/certificates/oracle_cert.jpg',
    highres: 'images/certificates/oracle_cert.jpg',
    accentColor: '#ef4444',
    layout: 'vertical',
  },
  {
    id: 3,
    num: '#3',
    category: 'AI + Cloud',
    categoryColor: '#06b6d4',
    categoryBg: 'rgba(6,182,212,0.1)',
    type: 'college',
    title: 'Gen-AI with Cloud Training',
    org: 'Kongu Engineering College',
    desc: 'Attended the Gen-AI with Cloud training program',
    date: 'October 2024',
    dateIcon: 'fas fa-calendar-alt',
    preview: 'images/certificates/kongu_genai.jpg',
    highres: 'images/certificates/kongu_genai.jpg',
    accentColor: '#06b6d4',
    layout: 'vertical',
  },
  {
    id: 4,
    num: '#4',
    category: 'Hackathon',
    categoryColor: '#10b981',
    categoryBg: 'rgba(16,185,129,0.1)',
    type: 'hackathon',
    title: 'AI Conclave 1.0 Hackathon',
    org: 'Kongu Engineering College',
    desc: 'Participated in AI Conclave 1.0 organized by the Department of Artificial Intelligence.',
    date: 'March 2025',
    dateIcon: 'fas fa-calendar-alt',
    preview: 'images/certificates/kongu_hackathon.jpg',
    highres: 'images/certificates/kongu_hackathon.jpg',
    accentColor: '#10b981',
    layout: 'vertical',
  },
  {
    id: 5,
    num: '#5',
    category: 'Hackathon',
    categoryColor: '#f59e0b',
    categoryBg: 'rgba(245,158,11,0.1)',
    type: 'hackathon',
    title: 'National Level Hackathon',
    org: 'Shridevi Institute',
    desc: 'Participated in the 24-hour National Level Hackathon organized by Shridevi Institute.',
    date: 'October 2024',
    dateIcon: 'fas fa-calendar-alt',
    preview: 'images/certificates/shridevi_hackathon.jpg',
    highres: 'images/certificates/shridevi_hackathon.jpg',
    accentColor: '#f59e0b',
    layout: 'vertical',
  },
];

const tabs = [
  { key: 'all', label: 'All Certificates', icon: 'fas fa-th-large', count: 5 },
  { key: 'hackathon', label: 'Hackathons', icon: 'fas fa-trophy', count: 3 },
  { key: 'professional', label: 'Professional', icon: 'fas fa-briefcase', count: 1 },
  { key: 'college', label: 'College / Department', icon: 'fas fa-building-columns', count: 1 },
];

const statsRow = [
  { icon: 'fas fa-medal', iconColor: '#f59e0b', iconBg: 'rgba(245,158,11,0.1)', value: '5', label: 'Total Certificates', sub: 'Earned' },
  { icon: 'fas fa-graduation-cap', iconColor: '#2563eb', iconBg: 'rgba(37,99,235,0.1)', value: '3', label: 'Institutions', sub: 'Covered' },
  { icon: 'fas fa-trophy', iconColor: '#f59e0b', iconBg: 'rgba(245,158,11,0.1)', value: '2', label: 'Hackathon Wins', sub: '& Participation' },
  { icon: 'fas fa-calendar-days', iconColor: '#8b5cf6', iconBg: 'rgba(139,92,246,0.1)', value: '2024 – 2026', label: 'Achievement', sub: 'Timeline' },
];

const FALLBACK = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800';

export default function Certifications() {
  const [activeTab, setActiveTab] = useState('all');
  const [modalCert, setModalCert] = useState(null);
  const [cursorVisible, setCursorVisible] = useState(true);
  const sectionRef = useRef(null);

  // Blinking cursor
  useEffect(() => {
    const t = setInterval(() => setCursorVisible(v => !v), 530);
    return () => clearInterval(t);
  }, []);

  // Modal keyboard nav
  useEffect(() => {
    if (!modalCert) return;
    const filtered = activeTab === 'all' ? certsData : certsData.filter(c => c.type === activeTab);
    const handleKey = (e) => {
      if (e.key === 'Escape') setModalCert(null);
      if (e.key === 'ArrowRight') {
        const idx = filtered.findIndex(c => c.id === modalCert.id);
        setModalCert(filtered[(idx + 1) % filtered.length]);
      }
      if (e.key === 'ArrowLeft') {
        const idx = filtered.findIndex(c => c.id === modalCert.id);
        setModalCert(filtered[(idx - 1 + filtered.length) % filtered.length]);
      }
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', handleKey); document.body.style.overflow = ''; };
  }, [modalCert, activeTab]);

  const filteredCerts = activeTab === 'all' ? certsData : certsData.filter(c => c.type === activeTab);

  const navModal = (dir) => {
    const filtered = activeTab === 'all' ? certsData : certsData.filter(c => c.type === activeTab);
    const idx = filtered.findIndex(c => c.id === modalCert.id);
    setModalCert(filtered[(idx + dir + filtered.length) % filtered.length]);
  };

  return (
    <section
      className="cert-v2-section"
      id="certifications"
      ref={sectionRef}
      aria-label="Sarjan P certifications and achievements"
    >
      <div className="container">

        {/* ─── Top Row: Header + Stats ─── */}
        <div className="cert-v2-top-row">

          {/* Heading */}
          <div className="cert-v2-heading-block">
            <div className="cert-badge-pill">
              <i className="fas fa-plus cert-badge-icon"></i>
              PROVEN CREDENTIALS
            </div>
            <h2 className="cert-v2-headline">
              Certifications <span className="cert-headline-blue">&amp; Wins</span>
              <span className="cert-cursor" style={{ opacity: cursorVisible ? 1 : 0 }}>|</span>
            </h2>
            <p className="cert-v2-subtitle">
              Verified credentials, hackathon victories, and specialized training programs.
            </p>
            <div className="cert-verified-badges">
              <span className="cert-verified-item">
                <i className="fas fa-circle-check" style={{ color: '#10b981' }}></i>
                100% Authenticated
              </span>
              <span className="cert-verified-item">
                <i className="fas fa-circle-check" style={{ color: '#10b981' }}></i>
                Active Credentials
              </span>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="cert-hero-image-wrap">
            <div className="cert-hero-image-glow"></div>
            <div className="cert-hero-image-card">
              <i className="fas fa-award" style={{ fontSize: '2.5rem', color: '#2563eb' }}></i>
            </div>
          </div>

          {/* Stats Row */}
          <div className="cert-stats-row">
            {statsRow.map((s, idx) => (
              <div key={idx} className="cert-stat-card">
                <div className="cert-stat-icon" style={{ background: s.iconBg, color: s.iconColor }}>
                  <i className={s.icon}></i>
                </div>
                <div className="cert-stat-value">{s.value}</div>
                <div className="cert-stat-label">{s.label}</div>
                <div className="cert-stat-sub">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Filter Tabs ─── */}
        <div className="cert-tabs-row" role="tablist">
          {tabs.map(tab => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={activeTab === tab.key}
              className={`cert-tab-btn ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              <i className={tab.icon}></i>
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* ─── Unified All Square Cards Grid ─── */}
        {filteredCerts.length > 0 && (
          <div className="cert-vertical-grid">
            {filteredCerts.map(cert => (
              <div key={cert.id} className="cert-v-card">
                {/* Card Header */}
                <div className="cert-v-card-header">
                  <div className="cert-num-badge" style={{ color: cert.accentColor, background: cert.accentColor + '18' }}>
                    <i className="fas fa-trophy" style={{ fontSize: '0.7rem' }}></i> {cert.num}
                  </div>
                  <div className="cert-cat-badge" style={{ color: cert.categoryColor, background: cert.categoryBg }}>
                    {cert.category}
                  </div>
                  <div className="cert-verified-tag">
                    <i className="fas fa-circle-check" style={{ color: '#10b981' }}></i> Verified
                  </div>
                </div>

                {/* Preview Image */}
                <div className="cert-v-img-wrap" onClick={() => setModalCert(cert)}>
                  <img
                    src={cert.preview}
                    alt={cert.title}
                    className="cert-v-img"
                    loading="lazy"
                    onError={e => { e.target.src = FALLBACK; }}
                  />
                  <div className="cert-v-img-overlay">
                    <i className="fas fa-expand"></i>
                  </div>
                </div>

                {/* Card Body */}
                <div className="cert-v-card-body">
                  <h3 className="cert-v-title">{cert.title}</h3>
                  <div className="cert-v-org">{cert.org}</div>
                  <p className="cert-v-desc">{cert.desc}</p>
                  <div className="cert-v-date">
                    <i className={cert.dateIcon} style={{ color: cert.accentColor }}></i>
                    {cert.date}
                  </div>
                </div>

                {/* Buttons */}
                <div className="cert-v-actions">
                  <button className="cert-btn-view" onClick={() => setModalCert(cert)}>
                    <i className="fas fa-eye"></i> View Large
                  </button>
                  <button className="cert-btn-details">Details</button>
                </div>

                {/* Bottom accent */}
                <div className="cert-v-accent-bar" style={{ background: cert.accentColor }}></div>
              </div>
            ))}
          </div>
        )}

        {/* ─── Bottom Banner ─── */}
        <div className="cert-bottom-banner">
          <span className="cert-bottom-laurel">🏅</span>
          <div className="cert-bottom-icon">
            <i className="fas fa-shield-halved"></i>
          </div>
          <p className="cert-bottom-text">
            Each certificate represents a milestone in my learning and growth journey!
          </p>
          <span className="cert-bottom-laurel">🏅</span>
        </div>

      </div>

      {/* ─── Modal ─── */}
      {modalCert && (
        <div
          className="cert-modal-overlay"
          onClick={() => setModalCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${modalCert.title} — full certificate view`}
        >
          <button className="cert-modal-close" onClick={() => setModalCert(null)} aria-label="Close">
            <i className="fas fa-times"></i>
          </button>
          <button className="cert-modal-nav cert-modal-prev" onClick={(e) => { e.stopPropagation(); navModal(-1); }} aria-label="Previous">
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="cert-modal-content" onClick={e => e.stopPropagation()}>
            <img
              src={modalCert.highres}
              alt={modalCert.title}
              className="cert-modal-img"
              onError={e => { e.target.src = FALLBACK; }}
            />
            <div className="cert-modal-caption">{modalCert.title}</div>
          </div>
          <button className="cert-modal-nav cert-modal-next" onClick={(e) => { e.stopPropagation(); navModal(1); }} aria-label="Next">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}
    </section>
  );
}