import { useState } from "react";
import { Thermometer, RotateCcw, Copy, Check, ArrowRightLeft, Sparkles } from "lucide-react";
import "./TemperatureConverter.css";

type Unit = "°C" | "°F" | "°K";

interface UnitConfig {
  unit: Unit;
  name: string;
  symbol: string;
}

const UNITS: UnitConfig[] = [
  { unit: "°C", name: "Celsius", symbol: "°C" },
  { unit: "°F", name: "Fahrenheit", symbol: "°F" },
  { unit: "°K", name: "Kelvin", symbol: "K" },
];

const PRESETS = [
  { label: "Freezing", temp: "0", unit: "°C" as Unit },
  { label: "Room Temp", temp: "22", unit: "°C" as Unit },
  { label: "Body Temp", temp: "37", unit: "°C" as Unit },
  { label: "Boiling", temp: "100", unit: "°C" as Unit },
];

export default function TemperatureConverter() {
  const [tempInput, setTempInput] = useState<string>("25");
  const [fromUnit, setFromUnit] = useState<Unit>("°C");
  const [copiedUnit, setCopiedUnit] = useState<Unit | null>(null);

  const numericTemp = parseFloat(tempInput);
  const isValid = !isNaN(numericTemp) && tempInput.trim() !== "";

  // Convert input value to Celsius as the baseline
  const getCelsius = (val: number, unit: Unit): number => {
    switch (unit) {
      case "°C":
        return val;
      case "°F":
        return ((val - 32) * 5) / 9;
      case "°K":
        return val - 273.15;
    }
  };

  // Convert from Celsius to target unit
  const fromCelsius = (celsius: number, target: Unit): number => {
    switch (target) {
      case "°C":
        return celsius;
      case "°F":
        return (celsius * 9) / 5 + 32;
      case "°K":
        return celsius + 273.15;
    }
  };

  const formatNumber = (num: number): string => {
    if (Math.abs(num) < 0.0001 && Math.abs(num) > 0) {
      return num.toExponential(2);
    }
    const rounded = Math.round(num * 100) / 100;
    return Number.isInteger(rounded) ? rounded.toString() : rounded.toFixed(2);
  };

  const getFormulaText = (target: Unit): string => {
    if (!isValid) return "";
    const val = tempInput;
    if (fromUnit === target) return "Identical unit";

    if (fromUnit === "°C") {
      if (target === "°F") return `(${val}°C × 9/5) + 32`;
      if (target === "°K") return `${val}°C + 273.15`;
    }
    if (fromUnit === "°F") {
      if (target === "°C") return `(${val}°F - 32) × 5/9`;
      if (target === "°K") return `(${val}°F - 32) × 5/9 + 273.15`;
    }
    if (fromUnit === "°K") {
      if (target === "°C") return `${val}K - 273.15`;
      if (target === "°F") return `(${val}K - 273.15) × 9/5 + 32`;
    }
    return "";
  };

  const handleCopy = (text: string, targetUnit: Unit) => {
    navigator.clipboard.writeText(text);
    setCopiedUnit(targetUnit);
    setTimeout(() => setCopiedUnit(null), 1800);
  };

  const handleClear = () => {
    setTempInput("");
  };

  const baselineCelsius = isValid ? getCelsius(numericTemp, fromUnit) : null;
  const targetUnits = UNITS.filter((u) => u.unit !== fromUnit);

  return (
    <div className="app">
      <div className="converter-container">
        {/* UPPER CARD */}
        <div className="converter-upper">
          <div className="app-title">
            <div className="thermometer-container">
              <Thermometer size={28} color="#fff" strokeWidth={2.4} />
            </div>
            <div>
              <p className="title-text">Temp Scale</p>
              <span className="title-badge">Real-Time</span>
            </div>
          </div>

          <div className="converter-para1">INSTANT CONVERSION</div>

          <div className="converter-para3">
            Move effortlessly between Celsius, Fahrenheit, and Kelvin with our intuitive temperature converter.
          </div>

          {/* Quick Presets */}
          <div className="presets-wrapper">
            <span className="presets-label">
              <Sparkles size={13} style={{ display: "inline", marginRight: "4px" }} />
              Quick Presets
            </span>
            <div className="presets-row">
              {PRESETS.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  className={`preset-chip ${fromUnit === preset.unit && tempInput === preset.temp ? "preset-chip-active" : ""}`}
                  onClick={() => {
                    setFromUnit(preset.unit);
                    setTempInput(preset.temp);
                  }}
                >
                  {preset.label} ({preset.temp}{preset.unit})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* LOWER CARD */}
        <div className="converter-lower">
          <p className="enter-text">ENTER YOUR VALUE</p>

          <div className="input-header-row">
            <label htmlFor="temp-input" className="temperature-text">
              Temperature
            </label>
            {tempInput && (
              <button
                type="button"
                className="clear-button"
                onClick={handleClear}
                title="Clear input"
              >
                <RotateCcw size={14} /> Clear
              </button>
            )}
          </div>

          <div className="temperature-input-container">
            <input
              id="temp-input"
              type="number"
              step="any"
              className="temperature-input"
              placeholder="Enter temperature..."
              value={tempInput}
              onChange={(e) => setTempInput(e.target.value)}
            />
            <div className="temperature-unit">{fromUnit}</div>
          </div>

          <p className="convert-text">Convert from</p>
          <div className="units-container">
            {UNITS.map((u) => (
              <button
                key={u.unit}
                type="button"
                className={fromUnit === u.unit ? "one-unit-active" : "one-unit"}
                onClick={() => setFromUnit(u.unit)}
              >
                <span className="one-unit-para">{u.unit}</span>
                <span className="one-unit-sub">{u.name}</span>
              </button>
            ))}
          </div>

          {/* RESULTS SECTION */}
          <div className="results-container">
            <div className="results-header">
              <ArrowRightLeft size={16} />
              <span>Converted Results</span>
            </div>

            {isValid && baselineCelsius !== null ? (
              <div className="results-list">
                {targetUnits.map((target) => {
                  const convertedValue = formatNumber(fromCelsius(baselineCelsius, target.unit));
                  const formula = getFormulaText(target.unit);
                  const isCopied = copiedUnit === target.unit;

                  return (
                    <div key={target.unit} className="result-card">
                      <div className="result-card-top">
                        <span className="result-unit-name">{target.name}</span>
                        <button
                          type="button"
                          className="copy-btn"
                          title="Copy value"
                          onClick={() => handleCopy(`${convertedValue} ${target.unit}`, target.unit)}
                        >
                          {isCopied ? (
                            <>
                              <Check size={13} color="#22c55e" />
                              <span className="copied-text">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy size={13} />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="result-value-row">
                        <span className="result-number">{convertedValue}</span>
                        <span className="result-symbol">{target.unit}</span>
                      </div>

                      {formula && (
                        <div className="result-formula">
                          Formula: <code>{formula}</code>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="results-empty">
                <p>Enter a temperature above to see instant conversions.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
