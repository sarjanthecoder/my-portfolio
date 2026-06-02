import React from 'react';

export default function About() {
  return (
    <section className="about" id="about" aria-label="About Sarjan P" itemScope itemType="https://schema.org/Person">
      <div className="container">
        <h2 className="section-title">
          <span className="neon-text">About</span> Me
        </h2>
        <div className="about-content">
          <div className="about-image">
            <div className="glass-mmcard">
              <img
                src="images/profile.jpg"
                alt="Sarjan P — AI Engineer and Full Stack Developer based in Vedharampatti Pudur, Dharmapuri, Tamil Nadu"
                width="400"
                height="400"
                loading="lazy"
                decoding="async"
                itemProp="image"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=800"; }}
              />
              <div className="floating-elements">
                <div className="floating-particle"></div>
                <div className="floating-particle"></div>
                <div className="floating-particle"></div>
              </div>
            </div>
          </div>
          <div className="about-text">
            <div className="glass-card">
              <h3 itemProp="jobTitle">AI Engineer, Full Stack Developer &amp; Software Engineer</h3>
              <p itemProp="description">
                I'm <strong itemProp="name">Sarjan P</strong>, known online as <strong>SarjanTheCoder</strong> — an AI Engineer and Full Stack Developer from <span itemProp="homeLocation" itemScope itemType="https://schema.org/Place"><span itemProp="name">Vedharampatti Pudur, Dharmapuri, Tamil Nadu, India</span></span>. With 2+ years of hands-on experience in Full Stack Development and Data Science, I design and build end-to-end web applications powered by Artificial Intelligence and Machine Learning that solve real-world problems.
              </p>
              <p>
                As a Software Engineer and AI builder, I transform raw data into actionable insights using <span itemProp="knowsAbout">Python</span>, <span itemProp="knowsAbout">Flask</span>, <span itemProp="knowsAbout">React</span>, <span itemProp="knowsAbout">Firebase</span>, and <span itemProp="knowsAbout">Gemini API</span>. I specialize in building intelligent systems — from predictive models and natural language processing to cloud-integrated web applications and API development.
              </p>
              <p>
                From building scalable REST APIs to deploying ML models in production, I bring the complete stack expertise — frontend, backend, databases, and AI/ML integration. Whether it's a hackathon project or a production-grade application, I deliver innovative solutions that drive results.
              </p>
              <div className="about-highlights" role="list" aria-label="Sarjan's core expertise areas">
                <div className="highlight-item" role="listitem">
                  <i className="fas fa-check-circle" aria-hidden="true"></i>
                  <span>Full-Stack Web Development</span>
                </div>
                <div className="highlight-item" role="listitem">
                  <i className="fas fa-check-circle" aria-hidden="true"></i>
                  <span>AI &amp; Machine Learning Engineering</span>
                </div>
                <div className="highlight-item" role="listitem">
                  <i className="fas fa-check-circle" aria-hidden="true"></i>
                  <span>Data Analytics &amp; Cloud Integrations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}