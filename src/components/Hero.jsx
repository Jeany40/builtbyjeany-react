import React from 'react';

function Hero() {
  return (
    <section id="hero">
      <div className="hero-line-left"></div>
      <div className="hero-line-right"></div>
      <div className="hero-content">
        <div className="hero-location">
          <div className="line"></div>
          <span>Queens · Brooklyn · Long Island</span>
        </div>
        <h1 className="hero-title">Your Home<br/>Deserves<br/><em>Skilled Hands.</em></h1>
        <p className="hero-sub">Skilled maintenance professional serving the NYC metro area. From full bathroom builds to everyday repairs — done right, the first time.</p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">Get a Free Quote</a>
          <a href="#portfolio" className="btn-ghost">
            <span>See the Work</span><span className="arrow"></span>
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">100%</span>
            <span className="stat-label">Done Myself</span>
          </div>
          <div className="stat">
            <span className="stat-num">$85</span>
            <span className="stat-label">Starting Rate</span>
          </div>
          <div className="stat">
            <span className="stat-num">24hr</span>
            <span className="stat-label">Response Time</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
