import React from 'react';

const prices = [
  { service: 'Handyman (per hour)',              cost: '$85 / hr'    },
  { service: 'Bathroom Remodel (labor)',          cost: 'From $1,500' },
  { service: 'Vinyl Flooring Installation',       cost: 'From $2 / sq ft' },
  { service: 'Room Painting',                     cost: 'From $300'   },
  { service: 'Plumbing Repair',                   cost: 'From $150'   },
  { service: 'Electrical (fixtures / outlets)',   cost: 'From $100'   },
  { service: 'Property Turnover Package',         cost: 'Custom Quote'},
];

function Pricing() {
  return (
    <section id="pricing">
      <div className="pricing-header" data-reveal>
        <div className="section-label">
          <div className="line" aria-hidden="true" />
          <span>Pricing</span>
        </div>
        <h2 className="section-title">
          Simple, Honest<br /><em>Pricing</em>
        </h2>
        <p>Every project starts with a free estimate. No surprises, no hidden fees.</p>
      </div>

      <table className="pricing-table" data-reveal data-reveal-delay="1">
        <thead>
          <tr>
            <th scope="col">Service</th>
            <th scope="col" style={{ textAlign: 'right' }}>Starting At</th>
          </tr>
        </thead>
        <tbody>
          {prices.map((p, idx) => (
            <tr key={idx}>
              <td>{p.service}</td>
              <td>{p.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="pricing-note" data-reveal data-reveal-delay="2">
        * All prices are starting rates for labor. Materials quoted separately.
        Final pricing depends on scope.
      </p>

      <div className="pricing-actions" data-reveal data-reveal-delay="3">
        <a href="#contact" className="btn-primary" id="pricing-cta">
          Request a Free Estimate
        </a>
        <span className="pricing-note-inline">I'll get back to you within 24 hours</span>
      </div>
    </section>
  );
}

export default Pricing;
