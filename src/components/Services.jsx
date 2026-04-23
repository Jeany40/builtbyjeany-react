import React from 'react';

const servicesData = [
  {
    num: '01',
    name: 'Bathroom Remodels',
    desc: 'Complete architectural builds — from framing and plumbing rough-ins to precision marble tiling and glass installation.',
    tags: ['Full Gut', 'Marble', 'Lighting'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M4 8V20H20V8M2 8H22M8 4H16M10 4V8M14 4V8" />
        <circle cx="12" cy="14" r="2" />
      </svg>
    )
  },
  {
    num: '02',
    name: 'Pro Plumbing',
    desc: 'Expert installation of high-end fixtures, shut-off valve systems, and full-stack drain maintenance.',
    tags: ['Fixtures', 'Drainage', 'Repairs'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 2L12 10M12 10C10 10 8 12 8 14C8 16.2 9.8 18 12 18C14.2 18 16 16.2 16 14C16 12 14 10 12 10ZM12 18L12 22M7 22H17" />
      </svg>
    )
  },
  {
    num: '03',
    name: 'Electrical Systems',
    desc: 'Precision wiring for LED mirror systems, modern lighting fixtures, and integrated home power solutions.',
    tags: ['LED', 'Smart Home', 'Safety'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
      </svg>
    )
  },
  {
    num: '04',
    name: 'Interior Refinement',
    desc: 'Museum-grade painting, trim work, and surface prep. Pristine lines with zero environmental impact.',
    tags: ['Painting', 'Drywall', 'Finishing'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M4 11V19C4 20.1 4.9 21 6 21H18C19.1 21 20 20.1 20 19V11M2 11L12 2L22 11M12 15V21" />
      </svg>
    )
  },
  {
    num: '05',
    name: 'Architectural Floors',
    desc: 'Specializing in waterproof LVP and custom vinyl tiling for high-traffic, durable, and aesthetic living spaces.',
    tags: ['LVP', 'Waterproof', 'Install'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M3 3H21V21H3V3ZM3 9H21M3 15H21M9 3V21M15 3V21" />
      </svg>
    )
  },
  {
    num: '06',
    name: 'Handyman Elite',
    desc: 'TV mounting, custom assembly, and precision adjustments. The small details that make a house a home.',
    tags: ['Mounting', 'Assembly', 'Repairs'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M14.7 6.3L20 11.6L9.4 22.2L4.1 16.9L14.7 6.3ZM18.3 2.7L21.3 5.7L19.3 7.7L16.3 4.7L18.3 2.7ZM2 22L5 19L3 17L2 20V22Z" />
      </svg>
    )
  }
];

function Services() {
  return (
    <section id="services">
      <div className="services-container">
        <div className="services-header">
          <div data-reveal>
            <div className="section-label">
              <div className="line" aria-hidden="true" />
              <span>Capabilities</span>
            </div>
            <h2 className="section-title">
              Precision <em>Craft.</em><br />Versatile Solutions.
            </h2>
          </div>
          <div className="services-header-right" data-reveal data-reveal-delay="2">
            <p>
              I don't just fix things — I build solutions that last. Each project is handled with 
              an obsession for detail and professional-grade durability.
            </p>
            <div className="services-scroll-hint">
              <span>Scroll to Explore</span>
              <div className="scroll-line" />
            </div>
          </div>
        </div>

        <div className="services-grid-premium">
          {servicesData.map((s, idx) => (
            <div
              className="service-card-v2"
              key={idx}
              data-reveal
              data-reveal-delay={String(Math.min(idx % 3 + 1, 5))}
            >
              <div className="card-top">
                <span className="card-num">{s.num}</span>
                <div className="card-icon">{s.icon}</div>
              </div>
              
              <div className="card-content">
                <h3 className="card-title">{s.name}</h3>
                <p className="card-desc">{s.desc}</p>
                
                <div className="card-tags">
                  {s.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="card-footer">
                <a href="#contact" className="card-link">
                  <span>Enquire</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor">
                    <path d="M1 11L11 1M11 1H3M11 1V9" />
                  </svg>
                </a>
              </div>
              
              <div className="card-glow" />
              <div className="card-scanner" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
