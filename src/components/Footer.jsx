import React from 'react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo">BuiltBy<span>Jeany</span></div>
          <div className="tagline">"Quality work. Honest pricing. Every time."</div>
          <p>
            Proudly serving Queens, Brooklyn, Long Island, the Bronx,
            Manhattan, and Staten Island. Local, reliable, and always on time.
          </p>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul className="footer-links">
            <li><a href="#services">Bathroom Remodels</a></li>
            <li><a href="#services">Vinyl Flooring</a></li>
            <li><a href="#services">Plumbing</a></li>
            <li><a href="#services">Electrical</a></li>
            <li><a href="#services">Painting</a></li>
            <li><a href="#services">General Handyman</a></li>
            <li><a href="#services">Property Turnovers</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-contact-list">
            <li>
              <strong>Phone</strong>
              <a href="tel:+13475842350" style={{ color: 'inherit', textDecoration: 'none' }}>
                347-584-2350
              </a>
            </li>
            <li>
              <strong>Email</strong>
              <a href="mailto:hello@builtbyjeany.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                hello@builtbyjeany.com
              </a>
            </li>
            <li><strong>Location</strong>New York, NY</li>
            <li><strong>Hours</strong>Fri–Sat all day · Mon–Thu mornings</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} BuiltByJeany. All rights reserved.</p>
        <p>NYC Metro Area — Handyman &amp; Renovation Services</p>
      </div>
    </footer>
  );
}

export default Footer;
