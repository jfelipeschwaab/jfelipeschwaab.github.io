import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <div className="logo">
        <h1>João Dev</h1>
      </div>
      <nav className={isMobileMenuOpen ? 'nav-active' : 'nav'}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projetos</Link></li>
        </ul>
        <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </nav>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
