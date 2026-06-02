import React, { useState, useEffect, useRef } from 'react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const [modalIndex, setModalIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (modalIndex === null) return;
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setModalIndex(null);
      if (e.key === 'ArrowRight') setModalIndex((prev) => (prev + 1) % certificationsData.length);
      if (e.key === 'ArrowLeft') setModalIndex((prev) => (prev - 1 + certificationsData.length) % certificationsData.length);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [modalIndex]);

  const certIcons = [
    'fas fa-trophy',
    'fas fa-award',
    'fas fa-cloud',
    'fas fa-robot',
    'fas fa-certificate'
  ];

  return (
    <section 
      className="certifications" 
      id="certifications" 
      ref={sectionRef}
      style={{ zIndex: modalIndex !== null ? 99999 : 10 }}
      aria-label="Sarjan P's professional certifications and achievements"
    >
      <div className="container">
        <h2 className="section-title">
          My <span className="neon-text">Certifications</span>
        </h2>
        <p className="cert-subtitle">Professional achievements, recognized qualifications &amp; hackathon awards earned by Sarjan P</p>

        <div className="cert-grid-creative" role="list">
          {certificationsData.map((cert, idx) => (
            <article
              key={idx}
              className={`cert-creative-card ${isVisible ? 'cert-creative-card--visible' : ''}`}
              style={{ animationDelay: `${idx * 0.12}s` }}
              onClick={() => setModalIndex(idx)}
              role="listitem"
              itemScope
              itemType="https://schema.org/EducationalOccupationalCredential"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setModalIndex(idx); }}}
              aria-label={`View ${cert.title} certificate`}
            >
              {/* Numbering Badge */}
              <div className="cert-creative__number">{String(idx + 1).padStart(2, '0')}</div>
              
              {/* Icon Badge */}
              <div className="cert-creative__badge">
                <i className={certIcons[idx] || 'fas fa-award'} aria-hidden="true"></i>
              </div>

              {/* Image Area */}
              <div className="cert-creative__image">
                <img
                  src={cert.preview}
                  alt={`${cert.title} — certification earned by Sarjan P (SarjanP)`}
                  className="cert-creative__img"
                  width="400"
                  height="280"
                  loading="lazy"
                  decoding="async"
                  itemProp="image"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800"; }}
                />
                <div className="cert-creative__hover-overlay">
                  <i className="fas fa-search-plus" aria-hidden="true"></i>
                  <span>View Certificate</span>
                </div>
                {/* Animated border glow */}
                <div className="cert-creative__border-glow" />
              </div>

              {/* Info */}
              <div className="cert-creative__info">
                <h4 itemProp="name">{cert.title}</h4>
                <p><i className="fas fa-calendar-alt" aria-hidden="true"></i> <span itemProp="description">{cert.desc}</span></p>
              </div>

              {/* Bottom accent line */}
              <div className="cert-creative__accent-line" />
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalIndex !== null && (
        <div className="cert-modal" style={{ display: 'flex' }} onClick={() => setModalIndex(null)} role="dialog" aria-modal="true" aria-label={`${certificationsData[modalIndex].title} certificate full view`}>
          <span className="close-modal" onClick={() => setModalIndex(null)} role="button" aria-label="Close certificate viewer" tabIndex={0}>&times;</span>
          <button className="modal-nav prev-btn" onClick={(e) => { e.stopPropagation(); setModalIndex((prev) => (prev - 1 + certificationsData.length) % certificationsData.length); }} aria-label="Previous certificate">
            &lt;
          </button>
          <div className="modal-image-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-image-wrapper">
              <img 
                className="modal-content" 
                src={certificationsData[modalIndex].highres} 
                alt={`${certificationsData[modalIndex].title} — full certificate of Sarjan P`}
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200"; }}
              />
            </div>
            <div id="caption">{certificationsData[modalIndex].title}</div>
          </div>
          <button className="modal-nav next-btn" onClick={(e) => { e.stopPropagation(); setModalIndex((prev) => (prev + 1) % certificationsData.length); }} aria-label="Next certificate">
            &gt;
          </button>
        </div>
      )}
    </section>
  );
}