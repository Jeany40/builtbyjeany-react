import React, { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const form = e.target;
    const formData = new FormData(form);
    // EmailJS payload
    // You MUST replace the three placeholders below with your actual EmailJS credentials
    const data = {
      service_id: 'service_jeany',
      template_id: 'template_u4t46px',
      user_id: 'qKqoKFtaOrQQhfdrR',
      template_params: {
        'name': formData.get('name'),
        'phone': formData.get('phone'),
        'email': formData.get('email'),
        'service': formData.get('service'),
        'description': formData.get('description'),
        'time': formData.get('time')
      }
    };

    try {
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please send an email directly instead.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div>
        <div className="section-label">
          <div className="line"></div>
          <span>Contact</span>
        </div>
        <h2 className="section-title">Ready To Get<br/><em>Started?</em></h2>
        <p>Tell me what you need and I'll get back to you within 24 hours with a free estimate. No pressure, no obligation.</p>
        <div className="contact-details">
          <div className="contact-item">
            <div className="contact-icon-wrap">
              <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.07 2 2 2 0 012 .07h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
            </div>
            <div className="contact-item-text"><span className="label">Phone</span><span className="value">347-584-2350</span></div>
          </div>
          <div className="contact-item">
            <div className="contact-icon-wrap">
              <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div className="contact-item-text"><span className="label">Email</span><span className="value">hello@builtbyjeany.com</span></div>
          </div>
          <div className="contact-item">
            <div className="contact-icon-wrap">
              <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div className="contact-item-text"><span className="label">Service Area</span><span className="value">Queens · Brooklyn · Long Island &amp; NYC Metro</span></div>
          </div>
          <div className="contact-item">
            <div className="contact-icon-wrap">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
            </div>
            <div className="contact-item-text"><span className="label">Availability</span><span className="value">Fri–Sat all day · Mon–Thu mornings</span></div>
          </div>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group"><label>Full Name</label><input type="text" name="name" placeholder="Your Name" required /></div>
          <div className="form-group"><label>Phone Number</label><input type="tel" name="phone" placeholder="Your Phone" required /></div>
        </div>
        <div className="form-group"><label>Email Address</label><input type="email" name="email" placeholder="Your Email" required /></div>
        <div className="form-group">
          <label>Type of Service</label>
          <select name="service" defaultValue="" required>
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
        <div className="form-group"><label>Project Description</label><textarea name="description" placeholder="Briefly describe what you need help with..." required></textarea></div>
        <div className="form-group"><label>Best Time to Reach You</label><input type="text" name="time" placeholder="e.g. Saturday mornings, weekday afternoons" /></div>
        <button 
          className="form-submit" 
          type="submit" 
          disabled={submitted || loading}
          style={submitted ? { background: '#2d7a3a' } : {}}
        >
          {loading ? "Sending..." : submitted ? "Message Sent — I'll be in touch soon." : "Send My Request"}
        </button>
      </form>
    </section>
  );
}

export default Contact;
