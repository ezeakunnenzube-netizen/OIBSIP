# Temp Scale — Temperature Converter Website

A simple, responsive temperature converter built with React, TypeScript, and Vite. It converts between Celsius (°C), Fahrenheit (°F), and Kelvin (K) in real time, with step-by-step formulas and quick presets.

Developed for the **Oasis Infobyte (OIBSIP) Web Development Internship** (Level 1, Task 3).

---

## What It Does

- **Instant multi-unit conversion**: Type a number and choose your starting scale. The other two scales update automatically as you type.
- **Conversion formulas**: Every result shows the exact formula used (e.g. `(37°C × 9/5) + 32`), so you can verify the math.
- **Quick presets**: One-click chips for Freezing (0°C), Room Temp (22°C), Body Temp (37°C), and Boiling (100°C).
- **One-click copy & clear**: Copy any converted output directly to your clipboard, or hit Clear to reset the input.
- **Glassmorphic UI**: Translucent cards with backdrop blur, mauve accents, and an Unsplash laboratory background.

---

## Tech Stack

- **React 19**
- **TypeScript**
- **Vite 8**
- **Lucide React** (clean vector icons)
- **Vanilla CSS** (custom glassmorphism, responsive flexbox layout)

---

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18 or newer recommended) installed on your machine.

### Installation

1. Open your terminal and navigate to the project directory:
   ```bash
   cd tempconv
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the Vite development server:
```bash
npm run dev
```

Open `http://localhost:5173` (or the local URL printed in your terminal) in your browser.

### Building for Production

To create an optimized production build:
```bash
npm run build
```

To preview the build output:
```bash
npm run preview
```

---

## Project Structure

```text
tempconv/
├── src/
│   ├── TemperatureConverter.tsx   # Core component with state and conversion math
│   ├── TemperatureConverter.css   # Glassmorphic styles, layout, and animations
│   ├── App.tsx                    # Main app wrapper
│   ├── main.tsx                   # React root entry point
│   └── index.css                  # Global base reset
├── public/                        # Static assets
├── index.html                     # HTML root page
├── package.json                   # Dependencies and npm scripts
└── tsconfig.json                  # TypeScript configuration
```

---

## Conversion Reference

| From | To | Formula |
| :--- | :--- | :--- |
| **Celsius (°C)** | Fahrenheit (°F) | `(°C × 9/5) + 32` |
| **Celsius (°C)** | Kelvin (K) | `°C + 273.15` |
| **Fahrenheit (°F)** | Celsius (°C) | `(°F - 32) × 5/9` |
| **Fahrenheit (°F)** | Kelvin (K) | `(°F - 32) × 5/9 + 273.15` |
| **Kelvin (K)** | Celsius (°C) | `K - 273.15` |
| **Kelvin (K)** | Fahrenheit (°F) | `(K - 273.15) × 9/5 + 32` |

---

## Author

Created for the Oasis Infobyte Web Development and Designing Internship program.
