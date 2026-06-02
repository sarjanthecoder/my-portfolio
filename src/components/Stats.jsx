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
            const duration = 2000;
            const steps = 60;
            const stepValue = stat.target / steps;
            let current = 0;
            
            const timer = setInterval(() => {
              current += stepValue;
              if (current >= stat.target) {
                current = stat.target;
                clearInterval(timer);
              }
              setCounts(prev => {
                const newCounts = [...prev];
                newCounts[index] = Math.floor(current);
                return newCounts;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="stats" id="stats" ref={statsRef}>
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <i className={`${stat.icon} stat-icon`}></i>
              <div className="stat-number">{counts[idx]}+</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}