import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>Email: your@email.com</p>
        <p>Phone: +123456789</p>
        <p>Address: 123 Main St, City</p>
      </div>
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      <div className="quick-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-use">Terms of Use</a>
      </div>
    </footer>
  );
}

export default Footer;
