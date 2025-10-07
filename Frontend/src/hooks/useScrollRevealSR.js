import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

/**
 * useScrollRevealSR
 * ScrollReveal.js initializer to apply animations across pages.
 * Matches the configuration style you requested.
 */
export default function useScrollRevealSR(dep) {
  const srRef = useRef(null);

  useEffect(() => {
    // Initialize on the next animation frame to ensure DOM is painted
    const rafId = requestAnimationFrame(() => {
      // Destroy any previous instance to avoid stale references (StrictMode safe)
      if (srRef.current) {
        try { srRef.current.destroy(); } catch (_) {}
        srRef.current = null;
      }

      const sr = ScrollReveal({
        // reset: true, // uncomment if you want animations to repeat on scroll back
        distance: '80px',
        duration: 1500,
        delay: 150,
        easing: 'ease',
      });
      srRef.current = sr;

      const selectElements = (selector) => {
        try {
          // Support comma-separated selectors by running qSA once (which already supports commas)
          const nodes = Array.from(document.querySelectorAll(selector));
          // Deduplicate and filter valid HTMLElements
          const unique = Array.from(new Set(nodes)).filter(
            (el) => el && el.nodeType === 1 && typeof el.getBoundingClientRect === 'function'
          );
          return unique;
        } catch (_) {
          return [];
        }
      };

      const safeReveal = (selector, options) => {
        try {
          const targets = selectElements(selector);
          if (targets.length > 0) sr.reveal(targets, options);
        } catch (_) {}
      };

      // Top origin
      safeReveal('.home .home-content, .heading', {
        origin: 'top',
        interval: 80,
      });

      // Bottom origin (mapped to your actual DOM)
      safeReveal('.skills .skill-card, .certificate .box, .contact form', {
        origin: 'bottom',
        interval: 120,
      });

      // Left origin
      safeReveal('.home .home-content h1, .about .about-img', {
        origin: 'left',
        interval: 60,
      });

      // Right origin
      safeReveal('.home .home-content p, .about .about-content', {
        origin: 'right',
        interval: 80,
      });

      // Extra: socials and buttons for a nicer effect
      safeReveal('.home .social-media a, .btn', {
        origin: 'bottom',
        interval: 70,
        distance: '40px',
        duration: 1200,
      });

      // Interests, education boxes, contact meta blocks
      safeReveal('.interests .interest-card, .education .box, .contact .contact-info-row > *', {
        origin: 'bottom',
        interval: 120,
        distance: '60px',
      });
    });

    // Cleanup for route changes and StrictMode re-renders
    return () => {
      cancelAnimationFrame(rafId);
      if (srRef.current) {
        try { srRef.current.destroy(); } catch (_) {}
        srRef.current = null;
      }
    };
  // Re-run on route changes
  }, [dep]);
}
