import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import ProblemSolutionSection from './components/ProblemSolutionSection';
import WorkflowSection from './components/WorkflowSection';
import LiveDashboard from './components/LiveDashboard';
import FeaturesSection from './components/FeaturesSection';
import TechnologySection from './components/TechnologySection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import FloatingDemoButton from './components/FloatingDemoButton';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-navy text-accentWhite dark:bg‑navy dark:text‑accentWhite">
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <HeroSection />
        <ProblemSolutionSection />
        <WorkflowSection />
        <LiveDashboard />
        <FeaturesSection />
        <TechnologySection />
        <AboutSection />
        <Footer />
        <FloatingDemoButton />
      </div>
    </div>
  );
}

export default App;
