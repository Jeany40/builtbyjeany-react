import React, { useEffect } from 'react';

function Booking() {
  useEffect(() => {
    // Dynamically load the Calendly script only when the component mounts
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="booking">
      <div className="booking-inner">
        <div className="booking-left">
          <div className="section-label">
            <div className="line"></div>
            <span>Book a Walkthrough</span>
          </div>
          <h2 className="section-title">Schedule Your<br/><em>Free Estimate</em></h2>
          <p>Pick a time that works for you. I'll come out, look at the job, and give you a straight number — no pressure, no obligation.</p>
          <div className="booking-perks">
            <div className="booking-perk"><span className="perk-dot"></span>Free on-site estimate — no charge ever</div>
            <div className="booking-perk"><span className="perk-dot"></span>Available Fri, Sat &amp; Mon–Thu mornings</div>
            <div className="booking-perk"><span className="perk-dot"></span>Confirmation sent to your phone &amp; email</div>
            <div className="booking-perk"><span className="perk-dot"></span>Easy rescheduling if plans change</div>
          </div>
          <a href="#contact" className="btn-ghost">
            <span>Or Send a Message Instead</span><span className="arrow"></span>
          </a>
        </div>
        <div className="calendly-wrap">
          <div className="cal-header">
            <div className="cal-header-top">
              <span className="cal-badge">Free Estimate</span>
            </div>
            <h3>Free Estimate Walkthrough</h3>
            <p>I'll come to you — please provide your full address when booking.</p>
            <div className="cal-meta">
              <div className="cal-meta-item">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                30 minutes
              </div>
              <div className="cal-meta-item">
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                In-person · Queens, Brooklyn, Long Island
              </div>
              <div className="cal-meta-item">
                <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Select a Date &amp; Time Below
              </div>
            </div>
          </div>
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/hello-builtbyjeany/free-estimate-walkthrough?hide_gdpr_banner=1&background_color=ffffff&text_color=111111&primary_color=d4722a" 
            style={{minWidth: "320px", height: "500px"}}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Booking;
