import React from 'react';

export default function CodeHallLogo({ 
  size = 32,
  color = "#ffffff",
  accentColor = "#a855f7",
  showText = true 
}) {
  return (
    <div 
      style={{
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '12px',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        width: 'auto',
      }}
    >
      {/* 1. Vector Icon */}
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          flexShrink: 0,
          display: 'block'
        }}
      >
        {/* Outer Framing Brackets */}
        <path
          d="M20 10L6 32L20 54"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M44 10L58 32L44 54"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Inner Perspective Columns */}
        <path
          d="M26 18L18 32L26 46"
          stroke={accentColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.8"
        />
        <path
          d="M38 18L46 32L38 46"
          stroke={accentColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.8"
        />

        {/* Central Monolith */}
        <line
          x1="32"
          y1="24"
          x2="32"
          y2="40"
          stroke={accentColor}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>

      {/* 2. Wordmark Text */}
      {showText && (
        <span 
          style={{ 
            fontFamily: "'Cinzel', serif",
            color: color,
            fontSize: '1.25rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            lineHeight: 1,
            userSelect: 'none',
            display: 'inline-block'
          }}
        >
          Code<span style={{ color: accentColor, fontWeight: 700 }}>Hall</span>
        </span>
      )}
    </div>
  );
}
