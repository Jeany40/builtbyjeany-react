import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu  = () => setIsOpen(false);

  return (
    <>
      <nav>
        <a href="#hero" className="nav-brand">
          <img src="/images/logo.png" alt="BuiltByJeany Logo" className="logo-img" />
        </a>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#booking">Book</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact" className="nav-cta">Get a Quote</a></li>
        </ul>
        <div
          className={`hamburger${isOpen ? ' open' : ''}`}
          onClick={toggleMenu}
          role="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
        >
          <span /><span /><span />
        </div>
      </nav>

      <div
        className={`mobile-menu${isOpen ? ' open' : ''}`}
        id="mobileMenu"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <a href="#services"  onClick={closeMenu}>Services</a>
        <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
        <a href="#reviews"   onClick={closeMenu}>Reviews</a>
        <a href="#booking"   onClick={closeMenu}>Book a Walkthrough</a>
        <a href="#pricing"   onClick={closeMenu}>Pricing</a>
        <a href="#contact"   onClick={closeMenu}>Get a Quote</a>
      </div>
    </>
  );
}

export default Navbar;
