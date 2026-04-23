import React, { useEffect } from 'react';

const perks = [
  'Free on-site estimate — no charge ever',
  'Available Fri, Sat & Mon–Thu mornings',
  'Confirmation sent to your phone & email',
  'Easy rescheduling if plans change',
];

function Booking() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src   = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="booking">
      <div className="booking-inner">
        <div className="booking-left">
          <div data-reveal>
            <div className="section-label">
              <div className="line" aria-hidden="true" />
              <span>Book a Walkthrough</span>
            </div>
            <h2 className="section-title">
              Schedule Your<br /><em>Free Estimate</em>
            </h2>
          </div>

          <p data-reveal data-reveal-delay="1">
            Pick a time that works for you. I'll come out, look at the job,
            and give you a straight number — no pressure, no obligation.
          </p>

          <div className="booking-perks" data-reveal data-reveal-delay="2">
            {perks.map((text, idx) => (
              <div className="booking-perk" key={idx}>
                <span className="perk-dot" aria-hidden="true" />
                {text}
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-ghost" data-reveal data-reveal-delay="3">
            <span>Or Send a Message Instead</span>
            <span className="arrow" aria-hidden="true" />
          </a>
        </div>

        <div className="calendly-wrap" data-reveal data-reveal-delay="2">
          <div className="cal-header">
            <div className="cal-header-top">
              <span className="cal-badge">Free Estimate</span>
            </div>
            <h3>Free Estimate Walkthrough</h3>
            <p>I'll come to you — please provide your full address when booking.</p>
            <div className="cal-meta">
              <div className="cal-meta-item">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
                30 minutes
              </div>
              <div className="cal-meta-item">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                In-person · Queens, Brooklyn, Long Island
              </div>
              <div className="cal-meta-item">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8"  y1="2" x2="8"  y2="6" />
                  <line x1="3"  y1="10" x2="21" y2="10" />
                </svg>
                Select a Date &amp; Time Below
              </div>
            </div>
          </div>

          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/hello-builtbyjeany/free-estimate-walkthrough?hide_gdpr_banner=1&background_color=ffffff&text_color=111111&primary_color=d4722a"
            style={{ minWidth: '320px', height: '520px' }}
          />
        </div>
      </div>
    </section>
  );
}

export default Booking;
