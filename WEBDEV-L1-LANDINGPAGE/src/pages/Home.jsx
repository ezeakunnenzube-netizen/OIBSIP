import React from "react"
import { useNavigate } from "react-router-dom"
import { ArrowUpRight, Layers, ArrowRight, Sparkles } from "lucide-react"
import "./Home.css"
import infibuyPortrait from "../assets/infibuy potrait.png"
import AutoFeatureSlider from "../components/AutoFeatureSlider"
import InfoSlider from "../components/InfoSlider"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import PortfolioPotrait from "../assets/portfolio potrait.png"
import StoneAppPotrait from "../assets/stone app potrait.png"

export default function Home(){
  const navigate = useNavigate();

  return(
    <>
      {/* ===================================================================
          HERO SECTION
          =================================================================== */}
      <section className="company-info" id="home">
        <div className="hero-split-layout">
          {/* Left Column: Headline, Subheadline, CTAs */}
          <div className="hero-left">
            <div className="company-title">
              <div className="company-title-line"></div>
              <p className="company-title-paragraph">
                <Sparkles size={16} className="title-sparkle-icon" />
                CODING AGENCY
              </p>
            </div>

            <h1 className="company-role">
              WE BUILD YOUR <span className="role-highlight">IMAGINATIONS.</span>
            </h1>

            <p className="company-description">
              We partner with bold brands to shape their digital identity, fusing deep technical execution with striking design to build unforgettable web experiences.
            </p>

            <div className="company-buttons">
              <button 
                className="view-work-button"
                onClick={() => {
                  const el = document.getElementById("work");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                VIEW OUR WORK
              </button>
              <button 
                className="lets-talk-button"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                LET'S TALK
              </button>
            </div>

           
          </div>

        </div>
      </section>

      {/* ===================================================================
          CORE AGENCY PILLARS
          =================================================================== */}
      <section className="company-features">
        <div className="company-feature">
          <ArrowUpRight className="feature-icon"/>
          <h2 className="feature-heading">
            Intentional Design
          </h2>
          <p className="company-feature-paragraph">
            Data-backed layouts built to maximize engagement and user retention
          </p>
        </div>
        <div className="company-feature">
          <Layers className="feature-icon"/>
          <h2 className="feature-heading">
            Robust Infrastructure
          </h2>
          <p className="company-feature-paragraph">
            High-performance, modular architectures engineered for long-term scalability
          </p>
        </div>
      </section>

      {/* ===================================================================
          SELECTED WORK SECTION
          =================================================================== */}
      <section className="projects" id="work">
        <div className="projects-intro">
          <div className="projects-intro-left">
            <h2 className="projects-intro-title">
              Selected Work
            </h2>
            <p className="projects-intro-paragraph">
              A Curation of our most recent technical challenges and design triumphs
            </p>
          </div>
          
        </div>

        <div className="project-images">
          {/* Project 1 */}
          <div className="projects-image-container">
            <a href="https://buy-oh-code-house1.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img className="projects-image" src={infibuyPortrait} alt="INFIBUY E-COMMERCE PLATFORM" />
            </a>
            <div className="hud-footer">
              <h3 className="hud-title">INFIBUY</h3>
              <span className="hud-category">E-COMMERCE PLATFORM</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="projects-image-container">
            <img className="projects-image" src={PortfolioPotrait} alt="PORTFOLIO DIGITAL SHOWCASE" />
            <div className="hud-footer">
              <h3 className="hud-title">PORTFOLIO</h3>
              <span className="hud-category">DIGITAL SHOWCASE</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="projects-image-container">
            <img className="projects-image" src={StoneAppPotrait} alt="STONE APP WEB APPLICATION" />
            <div className="hud-footer">
              <h3 className="hud-title">STONE APP</h3>
              <span className="hud-category">WEB APPLICATION</span>
            </div>
          </div>
        </div>
      </section> 

      {/* ===================================================================
          PROCESS & FEATURES SECTION
          =================================================================== */}
      <section className="feature-section" id="process">
        <AutoFeatureSlider/>
      </section> 

      {/* ===================================================================
          IMPACT & METRICS SECTION
          =================================================================== */}
      <section className="information-section" id="impact">
        <div className="information-badge">
          <span className="info-badge-dot"></span>
          <span className="info-badge-text">ENGINEERED FOR IMPACT</span>
        </div>

        <h2 className="information-header">
          Chosen by businesses, adored by their customers.
        </h2>

        <p className="information-paragraph">
          We help ambitious companies build powerful, custom web platforms designed for real-world speed, conversion, and long-term scalability.
        </p>

        {/* Agency Capability & Trust Metrics Slider */}
        <InfoSlider />
      </section>

      {/* ===================================================================
          CONTACT & CONSULTATION SECTION
          =================================================================== */}
      <ContactSection />

      {/* ===================================================================
          PROFESSIONAL CODEHALL FOOTER
          =================================================================== */}
      <Footer />
    </>
  )
}
