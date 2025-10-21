import React from 'react';
import './animations.css';

const HeroSection = () => (
  <section className="relative flex items-center justify-center h-screen px-6">
    <div className="text-center max-w‑2xl">
      <h1 className="text‑5xl font‑extrabold mb‑4 text‑electricCyan drop‑shadow‑neon">
        AI‑Driven Traffic Optimization for Smart Cities
      </h1>
      <p className="text‑lg mb‑8 text‑accentWhite">
        Reduce congestion, prioritize emergency vehicles, and make commuting smarter.
      </p>
      <div className="space-x‑4">
        <button className="px‑6 py‑3 bg‑neonRed text‑white rounded‑md hover:bg‑neonRed/80 transition">
          View Dashboard
        </button>
        <button className="px‑6 py‑3 border border‑electricCyan text‑electricCyan rounded‑md hover:bg‑electricCyan/10 transition">
          Learn More
        </button>
      </div>
    </div>
    {/* Animated hero illustration placeholder */}
    <div className="absolute right‑10 bottom‑10 w‑1/2 opacity‑75 animate‑float">
      {/* could be SVG/Canvas/HTML animation of traffic lights, vehicles, AI overlays */}
      <img src="/hero‑traffic‑animation.svg" alt="Traffic AI illustration" />
    </div>
  </section>
);

export default HeroSection;
