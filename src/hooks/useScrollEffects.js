import { useEffect } from 'react';

export function useScrollEffects() {
  useEffect(() => {
    // ── 1. Scroll Progress Bar ────────────────────────────────
    const bar = document.getElementById('scroll-progress');
    const onScroll = () => {
      if (!bar) return;
      const scrollTop  = window.scrollY;
      const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
      const pct        = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width  = pct + '%';

      // ── 2. Sticky nav ──────────────────────────────────────
      const nav = document.querySelector('nav');
      if (nav) {
        nav.classList.toggle('scrolled', scrollTop > 40);
      }

      // ── 3. Active nav links ────────────────────────────────
      const sections = document.querySelectorAll('section[id], div[id]');
      const navLinks  = document.querySelectorAll('.nav-links a');
      let current = '';
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 120) {
          current = '#' + sec.id;
        }
      });
      navLinks.forEach((a) => {
        a.classList.toggle('active', a.getAttribute('href') === current);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on mount

    // ── 4. Scroll Reveal ──────────────────────────────────────
    const revealEls = document.querySelectorAll('[data-reveal]');
    const observer  = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);
}
