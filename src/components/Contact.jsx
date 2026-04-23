import React, { useState } from 'react';

const EMAILJS = {
  serviceId:  import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'service_4b6vegm',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_u4t46px',
  publicKey:  import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'qKqoKFtaOrQQhfdrR',
};

const contactDetails = [
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.07 2 2 2 0 012 .07h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
      </svg>
    ),
    label: 'Phone',
    value: <a href="tel:+13475842350" style={{ color: 'inherit', textDecoration: 'none' }}>347-584-2350</a>,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: <a href="mailto:hello@builtbyjeany.com" style={{ color: 'inherit', textDecoration: 'none' }}>hello@builtbyjeany.com</a>,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Service Area',
    value: 'Queens · Brooklyn · Long Island & NYC Metro',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
    label: 'Availability',
    value: 'Fri–Sat all day · Mon–Thu mornings',
  },
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot bot check
    const honeypot = e.target.querySelector('input[name="_honeypot"]');
    if (honeypot?.value) return;

    setLoading(true);
    const form     = e.target;
    const formData = new FormData(form);

    const data = {
      service_id:  EMAILJS.serviceId,
      template_id: EMAILJS.templateId,
      user_id:     EMAILJS.publicKey,
      template_params: {
        name:        formData.get('name'),
        phone:       formData.get('phone'),
        email:       formData.get('email'),
        service:     formData.get('service'),
        description: formData.get('description'),
        time:        formData.get('time'),
      },
    };

    try {
      await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error(err);
      alert('Failed to send. Please call or email directly instead.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      {/* Left column */}
      <div>
        <div data-reveal>
          <div className="section-label">
            <div className="line" aria-hidden="true" />
            <span>Contact</span>
          </div>
          <h2 className="section-title">
            Ready To Get<br /><em>Started?</em>
          </h2>
          <p className="contact-left" style={{ marginTop: '16px', marginBottom: '48px', color: 'var(--gray)', fontSize: '15px', fontWeight: 300, lineHeight: '1.95' }}>
            Tell me what you need and I'll get back to you within 24 hours with a free estimate.
            No pressure, no obligation.
          </p>
        </div>

        <div className="contact-details">
          {contactDetails.map((item, idx) => (
            <div className="contact-item" key={idx} data-reveal data-reveal-delay={String(idx + 1)}>
              <div className="contact-icon-wrap">{item.icon}</div>
              <div className="contact-item-text">
                <span className="label">{item.label}</span>
                <span className="value">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right column — Form */}
      <form className="contact-form" onSubmit={handleSubmit} data-reveal data-reveal-delay="1">
        {/* Honeypot */}
        <input type="text" name="_honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact-name">Full Name</label>
            <input id="contact-name" type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="contact-phone">Phone Number</label>
            <input id="contact-phone" type="tel" name="phone" placeholder="Your Phone" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="contact-email">Email Address</label>
          <input id="contact-email" type="email" name="email" placeholder="Your Email" required />
        </div>

        <div className="form-group">
          <label htmlFor="contact-service">Type of Service</label>
          <select id="contact-service" name="service" defaultValue="" required>
            <option value="" disabled>Select a service...</option>
            <option value="Bathroom Remodel">Bathroom Remodel</option>
            <option value="Plumbing Repair">Plumbing Repair</option>
            <option value="Electrical Work">Electrical Work</option>
            <option value="Painting">Painting</option>
            <option value="Vinyl Flooring">Vinyl Flooring</option>
            <option value="General Handyman">General Handyman</option>
            <option value="Property Turnover">Property Turnover</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="contact-description">Project Description</label>
          <textarea
            id="contact-description"
            name="description"
            placeholder="Briefly describe what you need help with..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact-time">Best Time to Reach You</label>
          <input
            id="contact-time"
            type="text"
            name="time"
            placeholder="e.g. Saturday mornings, weekday afternoons"
          />
        </div>

        <button
          className="form-submit"
          type="submit"
          disabled={submitted || loading}
          style={submitted ? { background: '#1e7e34' } : {}}
          id="contact-submit"
        >
          {loading
            ? 'Sending…'
            : submitted
            ? '✓ Message Sent — I\'ll be in touch soon!'
            : 'Send My Request'}
        </button>

        {submitted && (
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            style={{
              marginTop: '12px',
              width: '100%',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'var(--gray)',
              fontFamily: 'var(--sans)',
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '13px',
              cursor: 'pointer',
              borderRadius: 'var(--radius)',
              transition: 'border-color 0.2s, color 0.2s',
            }}
          >
            Send Another Message
          </button>
        )}
      </form>
    </section>
  );
}

export default Contact;
