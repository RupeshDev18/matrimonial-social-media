import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

function Header() {
  return (
    <header className="header">
      <div className="logo">Your Logo</div>
      <nav className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/matrimonial">Matrimonial Profiles</Link></li>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
