import React from "react";
import { Mail } from "lucide-react";
import founderImg from "../assets/founder.jpg";
import "./ContactSection.css";

function InstagramIcon({ size = 22, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left Column: Heading, Subtitle & Direct Links */}
        <div className="contact-info-col">
          <h2 className="contact-heading">
            Let's build something <br />
            <span className="contact-heading-accent">extraordinary.</span>
          </h2>

          <p className="contact-subheading">
            Ready to elevate your digital presence? Fill out the form or book a
            direct consultation call with our engineering lead.
          </p>

          <div className="contact-methods">
            {/* Email */}
            <a
              href="mailto:hello@zubbysportolio.dev"
              className="contact-method-item"
            >
              <div className="contact-method-icon">
                <Mail size={22} className="method-icon-svg" />
              </div>
              <div className="contact-method-text">
                <span className="contact-method-label">Email Us</span>
                <span className="contact-method-value">
                  hello@zubbysportolio.dev
                </span>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/codehall.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method-item"
            >
              <div className="contact-method-icon">
                <InstagramIcon size={22} className="method-icon-svg" />
              </div>
              <div className="contact-method-text">
                <span className="contact-method-label">Instagram</span>
                <span className="contact-method-value">codehall.dev</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Consultation Card */}
        <div className="contact-card-col">
          <div className="contact-card">
            <div className="contact-card-header">
              <img
                src={founderImg}
                alt="Zubby - Founder & Lead Developer"
                className="contact-card-avatar"
              />
              <div className="contact-card-info">
                <h4 className="contact-card-title">Let's Discuss Your Project</h4>
                <p className="contact-card-subtitle">
                  With Zubby, Founder & Lead Developer
                </p>
              </div>
            </div>

            <a
              href="mailto:hello@zubbysportolio.dev?subject=Booking%20a%20Discovery%20Call"
              className="contact-card-btn"
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
