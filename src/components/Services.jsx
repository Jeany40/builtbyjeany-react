import React from 'react';

const servicesData = [
  {
    num: '01',
    name: 'Bathroom Remodels',
    desc: 'Full gut-and-rebuild or targeted upgrades. Tile, shower enclosures, vanities, LED mirrors, fixtures — start to finish.',
  },
  {
    num: '02',
    name: 'Plumbing',
    desc: 'Leaky pipes, fixture replacements, toilet installs, drain issues, shut-off valves. No job too small.',
  },
  {
    num: '03',
    name: 'Electrical Work',
    desc: 'Outlet and switch replacements, light fixture installs, ceiling fans, LED mirror wiring, and more.',
  },
  {
    num: '04',
    name: 'Painting',
    desc: 'Interior walls, trim, doors, ceilings. Clean lines, proper prep, zero mess left behind.',
  },
  {
    num: '05',
    name: 'Vinyl Flooring',
    desc: 'Professional vinyl plank and tile installation. Durable, waterproof, and clean — perfect for kitchens, bathrooms, and living spaces.',
  },
  {
    num: '06',
    name: 'General Handyman',
    desc: 'TV mounting, furniture assembly, caulking, drywall patching, door adjustments — whatever your home needs.',
  },
  {
    num: '07',
    name: 'Property Turnovers',
    desc: 'Fast, reliable unit prep between tenants. Painting, repairs, fixture swaps — rent-ready, on schedule.',
  },
];

function Services() {
  return (
    <section id="services">
      <div className="services-header">
        <div data-reveal>
          <div className="section-label">
            <div className="line" aria-hidden="true" />
            <span>Services</span>
          </div>
          <h2 className="section-title">
            What I Can<br /><em>Do For You</em>
          </h2>
        </div>
        <p data-reveal data-reveal-delay="2">
          From quick repairs to full renovations — one call handles it all.
        </p>
      </div>

      <div className="services-grid">
        {servicesData.map((s, idx) => (
          <div
            className="service-card"
            key={idx}
            data-reveal
            data-reveal-delay={String(Math.min(idx % 3 + 1, 5))}
          >
            <span className="service-num">{s.num}</span>
            <div className="service-name">{s.name}</div>
            <p className="service-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
