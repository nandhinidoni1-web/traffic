import React from 'react';

const ThemeToggle = ({ darkMode, setDarkMode }) => (
  <button
    className="fixed top-4 right-4 p-2 rounded-full bg‑navy hover:bg‑navy/80 transition"
    onClick={() => setDarkMode(!darkMode)}
  >
    {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
  </button>
);

export default ThemeToggle;
