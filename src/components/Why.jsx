import React from 'react';

const points = [
  {
    num: '01',
    title: 'Years of Professional Experience',
    text: 'Real-world maintenance work across residential and commercial properties.',
  },
  {
    num: '02',
    title: 'I Do the Work Myself',
    text: 'No subcontracting surprises. The person you hire is the person who shows up.',
  },
  {
    num: '03',
    title: 'Respectful of Your Home',
    text: "I treat every job site like it's my own space. Clean, careful, and considerate.",
  },
  {
    num: '04',
    title: 'Transparent Pricing',
    text: 'Free estimate before any work starts. No hidden fees, no surprises.',
  },
  {
    num: '05',
    title: 'Weekend Availability',
    text: 'Open Fridays, Saturdays, and Mon–Thu mornings — when most contractors aren\'t.',
  },
  {
    num: '06',
    title: 'NYC Local',
    text: 'I know these buildings, these neighborhoods, and how things work here.',
  },
];

function Why() {
  return (
    <section id="why">
      <div className="section-label" data-reveal>
        <div className="line" aria-hidden="true" />
        <span>Why BuiltByJeany</span>
      </div>
      <h2 className="section-title" data-reveal data-reveal-delay="1">
        Why Homeowners<br /><em>Trust Me</em>
      </h2>

      <div className="why-inner">
        <ul className="trust-list">
          {points.map((p, idx) => (
            <li
              className="trust-item"
              key={idx}
              data-reveal
              data-reveal-delay={String(Math.min(idx + 1, 5))}
            >
              <div className="trust-icon-wrap">
                <span className="trust-num">{p.num}</span>
              </div>
              <div className="trust-text">
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="why-quote-wrap" data-reveal data-reveal-delay="2">
          <blockquote className="why-pull">
            "I treat every home like it's <em>my own.</em>"
          </blockquote>
          <cite className="why-cite">— BuiltByJeany, New York</cite>
        </div>
      </div>
    </section>
  );
}

export default Why;
