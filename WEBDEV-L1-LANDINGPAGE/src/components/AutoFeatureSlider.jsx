import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";
import "./AutoFeatureSlider.css";

export default function AutoFeatureSlider() {
  const featureData = [
    {
      id: 1,
      number: "01",
      title: "Seamless Across All Screens",
      description: "Crafted with fluid layouts that adapt instantly to mobile, tablet, and desktop displays.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      number: "02",
      title: "Engineered for Growth",
      description: "Built on clean, scalable code foundations using modern frameworks for long-term reliability.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      number: "03",
      title: "Lightning-Fast Speed",
      description: "Optimized asset delivery and clean code architectures ensure instant load times for every user.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % featureData.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [featureData.length]);

  const activeFeature = featureData[currentIndex];

  return (
    <div className="features-container">
      <h1 className="feature-title">Our Process & Features</h1>

      <div className="features-content">
        <div className="features-image-container">
          <img
            src={activeFeature.image}
            alt={activeFeature.title}
            className="features-image"
          />
        </div>

        <div className="features-list">
          {featureData.map((item, index) => {
            const isActive = index === currentIndex;
            const isChecked = index < currentIndex;

            return (
              <div
                key={item.id}
                className={`feature-container ${isActive ? "active" : ""} ${isChecked ? "checked" : ""}`}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="feature-mark">
                  {isActive ? (
                    <Check className="is-active-mark" />
                  ) : isChecked ? (
                    <Check className="is-checked-mark" />
                  ) : (
                    index + 1
                  )}
                </div>

                <div className="feature-text">
                  <div className="feature-text-header">
                    {item.title}
                  </div>
                  {isActive && (
                    <div className="feature-text-description">
                      {item.description}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}