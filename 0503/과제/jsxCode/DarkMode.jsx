import React, { useState } from 'react';
import './style.css';
import useScrollPosition from './useScrollPosition';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { scrollY } = useScrollPosition();
  const buttonPosition = {
    top: scrollY > 50 ? `${scrollY + 20}px` : '20px',
    right: '70px'
  };

  const darkMode = () => {
    setIsDarkMode(!isDarkMode);
    toggleDarkModeClass(!isDarkMode);
  };

  const toggleDarkModeClass = (darkModeEnabled) => {
    const elementsToToggle = [
      document.body,
      ...document.querySelectorAll('.arrow'),
      document.querySelector('.container'),
      document.querySelector('.darkmode-button'),
      document.querySelector('header'),
      ...document.querySelectorAll('th')
    ];

    elementsToToggle.forEach((element) => {
      element.classList.toggle('dark-mode', darkModeEnabled);
    });
  };

  return (
    <div className="darkmode" style={{ position: 'absolute', zIndex: '1000', ...buttonPosition, transition: 'top 0.2s ease-out' }}>
      <button className="darkmode-button" onClick={darkMode}>
        {isDarkMode ? '☀️' : '🌙'}
      </button>
    </div>
  );
}
