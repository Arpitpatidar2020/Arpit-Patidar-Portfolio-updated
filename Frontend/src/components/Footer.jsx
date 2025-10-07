import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const handleBackToTop = (event) => {
    event.preventDefault();
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-iconTop">
        <a href="#" aria-label="Back to top" onClick={handleBackToTop}>
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>
      <div className="abc">
        <span>
          Created By{' '}
          <a
            href="https://www.linkedin.com/in/arpit-patidar-32205724b"
            target="_blank"
            rel="noreferrer"
          >
            Arpit Patidar
          </a>{' '}
          | <span className="far fa-copyright"></span>{' '}
          <span>{currentYear}</span> All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;


