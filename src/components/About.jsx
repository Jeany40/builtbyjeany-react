import React from 'react';

function About() {
  return (
    <section id="about">
      <div className="about-img-wrap" data-reveal>
        <img
          className="about-img"
          src="/images/jeany-about.jpg"
          alt="Jean in his workshop — professional handyman and renovation expert at BuiltByJeany"
          loading="lazy"
        />
        <div className="about-img-badge">
          <span className="num">NYC</span>
          <span className="txt">Based &amp; Local</span>
        </div>
      </div>

      <div className="about-body">
        <div data-reveal>
          <div className="section-label">
            <div className="line" aria-hidden="true" />
            <span>About</span>
          </div>
          <h2 className="section-title" style={{ marginBottom: '28px' }}>
            Who's Behind<br />The <em>Work?</em>
          </h2>
        </div>

        <p data-reveal data-reveal-delay="1">
          I'm a skilled maintenance technician with hands-on experience in plumbing,
          electrical, tile work, painting, and full room renovations. I've built bathrooms
          from the ground up — framing, waterproofing, tiling, fixture installation, the works.
        </p>
        <p data-reveal data-reveal-delay="2">
          This isn't a second job I picked up last week. It's a craft I've developed over years
          of real-world work. When I show up to your home, you're getting someone who takes pride
          in every detail — the kind you can actually see in the finished product.
        </p>

        <div className="about-avail" data-reveal data-reveal-delay="3">
          <span className="avail-dot" aria-hidden="true" />
          <span>Available weekends &amp; select weekday mornings · Queens · Brooklyn · Long Island</span>
        </div>
      </div>
    </section>
  );
}

export default About;
