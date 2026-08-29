import React, { useEffect, useRef, useState } from 'react';
import { statsData } from '../data/portfolioData';

export default function Stats() {
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          statsData.forEach((stat, index) => {
            const duration = 1800;
            const steps = 40;
            const stepValue = stat.target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += stepValue;
              if (current >= stat.target) {
                current = stat.target;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[index] = Math.floor(current);
                return newCounts;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="stats-section" ref={statsRef}>
      <div className="container">
        <div className="stats-glass-card">
          <div className="stats-grid-row">
            {statsData.map((stat, idx) => (
              <div key={idx} className="stat-item-block">
                <div className="stat-icon-circle">
                  <i className={stat.icon}></i>
                </div>
                <div className="stat-content-text">
                  <span className="stat-value-number">{counts[idx]}+</span>
                  <span className="stat-label-text">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}