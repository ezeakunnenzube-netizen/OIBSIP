import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import CodeHallLogo from './CodeHallLogo';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (target) => {
    setIsMenuOpen(false);
    if (target.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate(`/${target}`);
      } else {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <div
        className={`menu ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {isMenuOpen && (
        <div className="menu-content" onClick={() => setIsMenuOpen(false)}>
          <nav className="menu-nav-list" onClick={(e) => e.stopPropagation()}>
            <Link
              to="/"
              className="menu-link"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="menu-index">01</span>
              <p className="menu-paragraph">Home</p>
            </Link>

            <a
              href="/#work"
              className="menu-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#work');
              }}
            >
              <span className="menu-index">02</span>
              <p className="menu-paragraph">Our Work</p>
            </a>

            <a
              href="/#process"
              className="menu-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#process');
              }}
            >
              <span className="menu-index">03</span>
              <p className="menu-paragraph">Process</p>
            </a>

            <a
              href="/#impact"
              className="menu-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#impact');
              }}
            >
              <span className="menu-index">04</span>
              <p className="menu-paragraph">Impact</p>
            </a>

            <a
              href="/#contact"
              className="menu-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
            >
              <span className="menu-index">05</span>
              <p className="menu-paragraph">Contact</p>
            </a>
          </nav>
        </div>
      )}

      <header className="navbar">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo" aria-label="CodeHall Home">
            <CodeHallLogo className="logo" color="#ffffff" accentColor="#a855f7" />
          </Link>

          {/* Direct Navigation Links for Desktop */}
          <nav className="navbar-desktop-nav" aria-label="Desktop Navigation">
            <a
              href="#work"
              className="nav-desktop-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#work');
              }}
            >
              Our Work
            </a>
            <a
              href="#process"
              className="nav-desktop-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#process');
              }}
            >
              Process
            </a>
            <a
              href="#impact"
              className="nav-desktop-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#impact');
              }}
            >
              Impact
            </a>
            <a
              href="#contact"
              className="nav-desktop-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
            >
              Contact
            </a>
          </nav>

          {/* Desktop Call to Action Button */}
          <div className="navbar-desktop-action">
            <button
              className="navbar-talk-button"
              onClick={() => handleNavClick('#contact')}
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="menu-button-container">
            <button
              className="menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
