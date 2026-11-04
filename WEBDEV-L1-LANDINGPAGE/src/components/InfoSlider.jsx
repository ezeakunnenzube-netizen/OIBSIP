import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Zap, Code2, ShieldCheck, UserCheck } from "lucide-react";
import "./InfoSlider.css";

export default function InfoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const infoCards = [
    {
      id: 1,
      icon: <Zap size={22} className="info-card-svg" />,
      tag: "PERFORMANCE",
      value: "<0.8s",
      label: "Average Load Speed",
      desc: "Sub-second response rates optimized for top Core Web Vitals, immediate retention, and SEO rank."
    },
    {
      id: 2,
      icon: <Code2 size={22} className="info-card-svg" />,
      tag: "QUALITY",
      value: "100%",
      label: "Bespoke Architecture",
      desc: "Zero generic page-builder bloat. Handcrafted modular code engineered for maintainability and speed."
    },
    {
      id: 3,
      icon: <ShieldCheck size={22} className="info-card-svg" />,
      tag: "RELIABILITY",
      value: "99.9%",
      label: "Cloud Availability",
      desc: "Resilient deployment pipelines built to handle unexpected traffic spikes without downtime."
    },
    {
      id: 4,
      icon: <UserCheck size={22} className="info-card-svg" />,
      tag: "TRANSPARENCY",
      value: "1-on-1",
      label: "Direct Engineering Access",
      desc: "Direct technical collaboration with our lead developer without project manager overhead."
    }
  ];

  // Auto-advance every 5 seconds unless hovered/touched
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % infoCards.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, infoCards.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : infoCards.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < infoCards.length - 1 ? prev + 1 : 0));
  };

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) {
      setIsPaused(false);
      return;
    }
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
    setIsPaused(false);
  };

  return (
    <div
      className="info-slider-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider Stage (Peeking adjacent cards) */}
      <div className="info-slider-stage">
        <div
          className="info-slider-track"
          style={{
            transform: `translateX(calc(50% - (var(--card-width) / 2) - (${currentIndex} * (var(--card-width) + var(--card-gap)))))`
          }}
        >
          {infoCards.map((card, idx) => {
            const isActive = idx === currentIndex;
            const isPrev = idx === currentIndex - 1;
            const isNext = idx === currentIndex + 1;

            return (
              <div
                key={card.id}
                className={`info-stat-card-slide ${
                  isActive
                    ? "active"
                    : isPrev
                    ? "prev-peek"
                    : isNext
                    ? "next-peek"
                    : "inactive"
                }`}
                onClick={() => setCurrentIndex(idx)}
              >
                <div className="info-slide-header">
                  <div className="info-slide-icon-box">{card.icon}</div>
                  <span className="info-slide-tag">{card.tag}</span>
                </div>

                <span className="info-slide-value">{card.value}</span>
                <span className="info-slide-label">{card.label}</span>
                <p className="info-slide-desc">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls: Chevrons + Halo Dot Indicators */}
      <div className="info-slider-controls">
        <button
          className="slider-arrow-btn"
          onClick={handlePrev}
          aria-label="Previous card"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="info-slider-dots">
          {infoCards.map((_, idx) => (
            <button
              key={idx}
              className={`slider-dot-btn ${idx === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            >
              <span className="dot-core"></span>
            </button>
          ))}
        </div>

        <button
          className="slider-arrow-btn"
          onClick={handleNext}
          aria-label="Next card"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
