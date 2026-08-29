import React from 'react';
import { techFeaturesData } from '../data/portfolioData';

export default function TechFeatures() {
  return (
    <section className="tech-features-section">
      <div className="container">
        <div className="tech-features-glass-bar">
          <div className="tech-features-row">
            {techFeaturesData.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="tech-feature-pill-item">
                  <div className="tech-feature-icon-badge">
                    <i className={item.icon}></i>
                  </div>
                  <div className="tech-feature-text">
                    <span className="tech-feature-title">{item.title}</span>
                    <span className="tech-feature-sub">{item.subtitle}</span>
                  </div>
                </div>
                {idx < techFeaturesData.length - 1 && <div className="tech-feature-divider" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
