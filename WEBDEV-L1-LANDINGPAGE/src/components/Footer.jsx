import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowUp, ArrowUpRight, Mail, MapPin, Clock, Sparkles } from "lucide-react";
import CodeHallLogo from "./CodeHallLogo";
import "./Footer.css";

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function TwitterIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

function DiscordIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="12" r="1.5" fill="currentColor" />
      <circle cx="15" cy="12" r="1.5" fill="currentColor" />
      <path d="M7.5 7.5c3.5-1 5.5-1 9 0 1.5 3.5 2 7 1.5 10-3 1.5-5 1.5-6 1.5s-3 0-6-1.5c-.5-3 0-6.5 1.5-10z" />
      <path d="M15.5 17c0 1-1.5 2-3.5 2s-3.5-1-3.5-2" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (targetId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="codehall-footer">
      <div className="footer-glow-ambient"></div>
      
      <div className="footer-inner">
        {/* Main Grid: Brand + 3 Structured Columns */}
        <div className="footer-main-grid">
          {/* Brand Column */}
          <div className="footer-brand-side">
            <Link to="/" className="footer-brand-logo" onClick={scrollToTop}>
              <CodeHallLogo size={34} color="#ffffff" accentColor="#a855f7" />
            </Link>

            <p className="footer-tagline">
              Fusing deep technical precision with intentional design to engineer unforgettable digital experiences for high-growth brands.
            </p>

            <div className="footer-status-pill">
              <span className="footer-status-dot"></span>
              <span className="footer-status-text">Accepting Client Projects for 2026</span>
            </div>

            <div className="footer-cta-box">
              <span className="footer-cta-label">Ready to scale your vision?</span>
              <button 
                className="footer-cta-button"
                onClick={() => handleNavClick("contact")}
              >
                <span>LET'S TALK</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Column 1: Navigation */}
          <div className="footer-column">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <button onClick={() => handleNavClick("home")} className="footer-link-btn">
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("work")} className="footer-link-btn">
                  <span>Selected Work</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("process")} className="footer-link-btn">
                  <span>Engineering Process</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("impact")} className="footer-link-btn">
                  <span>Impact & Benchmarks</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("contact")} className="footer-link-btn">
                  <span>Consultation</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Capabilities */}
          <div className="footer-column">
            <h4 className="footer-col-title">Capabilities</h4>
            <ul className="footer-links-list">
              <li className="footer-static-item">
                <span className="footer-item-bullet"></span>
                <span>Full-Stack Web Apps</span>
              </li>
              <li className="footer-static-item">
                <span className="footer-item-bullet"></span>
                <span>Headless E-Commerce</span>
              </li>
              <li className="footer-static-item">
                <span className="footer-item-bullet"></span>
                <span>Interactive 3D & WebGL</span>
              </li>
              <li className="footer-static-item">
                <span className="footer-item-bullet"></span>
                <span>Design Systems & Brand</span>
              </li>
              <li className="footer-static-item">
                <span className="footer-item-bullet"></span>
                <span>Cloud Backend & APIs</span>
              </li>
              <li className="footer-static-item">
                <span className="footer-item-bullet"></span>
                <span>Performance & SEO Tuning</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Direct Connect */}
          <div className="footer-column">
            <h4 className="footer-col-title">Direct Connect</h4>
            <div className="footer-contact-block">
              <a href="mailto:hello@codehall.tech" className="footer-contact-item">
                <Mail size={16} className="contact-item-icon" />
                <span className="contact-item-text">hello@codehall.tech</span>
              </a>
              
              <div className="footer-contact-item">
                <Clock size={16} className="contact-item-icon" />
                <span className="contact-item-text">Mon - Fri · 09:00 - 18:00 PST</span>
              </div>

              <div className="footer-contact-item">
                <MapPin size={16} className="contact-item-icon" />
                <span className="contact-item-text">San Francisco · Remote Global</span>
              </div>
            </div>

            <div className="footer-social-wrapper">
              <span className="footer-social-label">Join Our Orbit</span>
              <div className="footer-social-row">
                <a 
                  href="https://github.com" 
                  className="footer-social-btn" 
                  aria-label="GitHub" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <GithubIcon size={18} />
                </a>
                <a 
                  href="https://twitter.com" 
                  className="footer-social-btn" 
                  aria-label="Twitter / X" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <TwitterIcon size={18} />
                </a>
                <a 
                  href="https://discord.com" 
                  className="footer-social-btn" 
                  aria-label="Discord" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <DiscordIcon size={18} />
                </a>
                <a 
                  href="https://instagram.com/codehall.dev" 
                  className="footer-social-btn" 
                  aria-label="Instagram" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <InstagramIcon size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Tech Badge & Back to Top */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            <p className="footer-copyright">
              © {new Date().getFullYear()} CodeHall Technologies Inc. All rights reserved.
            </p>
            <span className="footer-dot-separator">•</span>
            <span className="footer-sub-note">Architected with Precision & Clean Code</span>
          </div>

          <button 
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>BACK TO TOP</span>
            <div className="back-to-top-icon-circle">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}

