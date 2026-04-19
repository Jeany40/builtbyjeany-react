import React from 'react';

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="portfolio-header">
        <div className="section-label">
          <div className="line"></div>
          <span>Portfolio</span>
        </div>
        <h2 className="section-title">See The <em>Work</em></h2>
        <p>Real projects. Real results. No filters.</p>
      </div>
      <div className="ba-grid">
        <div className="ba-panel">
          <img src="/images/extracted_2.jpg" alt="Bathroom before renovation" />
          <span className="ba-label before">Before</span>
        </div>
        <div className="ba-panel">
          <img src="/images/extracted_3.jpg" alt="Bathroom after renovation" />
          <span className="ba-label after">After</span>
        </div>
      </div>
      <div className="portfolio-info">
        <div className="portfolio-desc">
          <h3>Full Bathroom Renovation — Queens, New York</h3>
          <p>Built completely from scratch — framing, insulation, plumbing rough-in, marble tile, vanity, LED mirror, glass shower enclosure, and all fixtures. Every element installed by hand.</p>
          <div className="portfolio-tags">
            <span className="tag">Tile Work</span>
            <span className="tag">Plumbing</span>
            <span className="tag">Electrical</span>
            <span className="tag">Glass Enclosure</span>
            <span className="tag">Framing</span>
          </div>
        </div>
        <a href="#contact" className="btn-primary" style={{ whiteSpace: "nowrap", alignSelf: "center" }}>Get a Free Quote</a>
      </div>
    </section>
  );
}

export default Portfolio;
