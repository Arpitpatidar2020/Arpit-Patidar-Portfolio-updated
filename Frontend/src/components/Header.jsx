import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const letters = ['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o'];

  // Close mobile menu when resizing above 900px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  return (
    <header className="header">
      <span className="logo" aria-label="Portfolio logo">
        {letters.map((letter, index) => (
          <span key={index} id={index === 0 ? 'uppercase' : undefined}>
            {letter}
          </span>
        ))}
      </span>

      <button
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(prev => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="underline" onClick={() => setMenuOpen(false)}>
          <i className="fa fa-home"></i> Home
        </Link>
        <Link to="/about" className="underline" onClick={() => setMenuOpen(false)}>
          <i className="fa fa-user"></i> About
        </Link>
        <Link to="/education" className="underline" onClick={() => setMenuOpen(false)}>
          <i className="fas fa-graduation-cap"></i> Education
        </Link>
        <Link to="/skills" className="underline" onClick={() => setMenuOpen(false)}>
          <i className="fas fa-atom"></i> Skills
        </Link>
        <Link to="/certificate" className="underline" onClick={() => setMenuOpen(false)}>
          <i className="fa fa-certificate"></i> Certificate
        </Link>
        <Link to="/contact" className="underline" onClick={() => setMenuOpen(false)}>
          <i className="fa fa-envelope"></i> Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
