import { useEffect } from 'react';

/**
 * useScrollReveal
 * Adds a fade-up reveal effect to elements when they enter the viewport.
 * You can pass an array of CSS selectors; all matching elements will be observed.
 * Enhanced: supports per-selector configs (origin, distance, scale, interval) to emulate ScrollReveal.
 */
export default function useScrollReveal(selectors = [], deps = []) {
  useEffect(() => {
    const defaultConfigs = [
      // Headings
      { sel: '.heading', origin: 'top', distance: 24, interval: 80 },
      // Home
      { sel: '.home .home-content h3', origin: 'top', distance: 20, interval: 0 },
      { sel: '.home .home-content h1', origin: 'left', distance: 28, interval: 0 },
      { sel: '.home .home-content p', origin: 'bottom', distance: 20, interval: 0 },
      { sel: '.home .home-content .social-media a', origin: 'bottom', distance: 18, interval: 70 },
      { sel: '.home .home-content .btn', origin: 'bottom', distance: 18, interval: 0 },
      // About
      { sel: '.about .about-img', origin: 'left', distance: 28, scale: 0.98 },
      { sel: '.about .about-content > *', origin: 'right', distance: 28, interval: 80 },
      { sel: '.interests .interest-card', origin: 'bottom', distance: 22, interval: 120, scale: 0.99 },
      // Education
      { sel: '.education .box', origin: 'bottom', distance: 22, interval: 120 },
      // Skills
      { sel: '.skills .skill-card', origin: 'bottom', distance: 22, interval: 100 },
      // Certificates
      { sel: '.certificate .box', origin: 'bottom', distance: 22, interval: 90 },
      // Contact
      { sel: '.contact .contact-info-row > *', origin: 'left', distance: 24, interval: 120 },
      { sel: '.contact form .field-group', origin: 'right', distance: 24, interval: 90 },
      { sel: '.contact form .btn', origin: 'bottom', distance: 18 }
    ];

    const configs = selectors.length
      ? selectors.map((sel) => ({ sel }))
      : defaultConfigs;

    // Collect elements with their config and set initial styles
    const entries = [];
    configs.forEach((cfg) => {
      const list = Array.from(document.querySelectorAll(cfg.sel));
      list.forEach((el, i) => {
        const distance = (cfg.distance ?? 16) + 'px';
        let x = '0px';
        let y = distance;
        switch (cfg.origin) {
          case 'left':
            x = `-${distance}`;
            y = '0px';
            break;
          case 'right':
            x = distance;
            y = '0px';
            break;
          case 'top':
            x = '0px';
            y = `-${distance}`;
            break;
          case 'bottom':
          default:
            x = '0px';
            y = distance;
            break;
        }
        el.classList.add('reveal');
        el.style.setProperty('--reveal-x', x);
        el.style.setProperty('--reveal-y', y);
        if (cfg.scale) {
          el.style.setProperty('--reveal-scale', String(cfg.scale));
        }
        const baseDelay = 60;
        const interval = cfg.interval ?? 0;
        const delay = interval ? (i * interval) : (i % 6) * baseDelay;
        el.style.setProperty('--reveal-delay', `${delay}ms`);
        entries.push(el);
      });
    });

    if (!entries.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1,
      }
    );

    entries.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  // Re-run on selector changes or external deps (e.g., route changes)
  }, [JSON.stringify(selectors), ...deps]);
}
