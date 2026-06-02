import React from 'react';
import { servicesData } from '../data/portfolioData';

export default function Services() {
  return (
    <section className="services" id="services" aria-label="Services offered by Sarjan P">
      <div className="container">
        <h2 className="section-title">
          My <span className="neon-text">Services</span>
        </h2>
        <div className="services-grid" role="list">
          {servicesData.map((service, idx) => (
            <article key={idx} className="service-card" role="listitem" itemScope itemType="https://schema.org/Service">
              <div className="service-icon" aria-hidden="true">
                <i className={service.icon}></i>
              </div>
              <h3 itemProp="name">{service.title}</h3>
              <p itemProp="description">{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}