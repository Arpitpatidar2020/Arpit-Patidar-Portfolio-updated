import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  // Back-to-top navigates to the #top anchor for accessibility and native behavior

  return (
    <footer className="footer">
      <div className="footer-iconTop">
        <a href="#top" aria-label="Back to top">
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


