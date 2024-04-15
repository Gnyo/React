import React, { useState, useEffect } from 'react';
import './style.css';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: '20px', right: '70px'});

  /* 버튼 누르면 바뀜*/
  const darkMode = () => {
    setIsDarkMode(!isDarkMode);

    document.body.classList.toggle('dark-mode', !isDarkMode);
    document.querySelectorAll('.arrow').forEach((arrow) => {
      arrow.classList.toggle('dark-mode', !isDarkMode);
    });
    document.querySelector('.container').classList.toggle('dark-mode', !isDarkMode);
    document.querySelector('.darkmode-button').classList.toggle('dark-mode', !isDarkMode);
    document.querySelector('header').classList.toggle('dark-mode', !isDarkMode);
    document.querySelectorAll('th').forEach((th) => {
      th.classList.toggle('dark-mode', !isDarkMode);
    });
  };

  /* 스크롤 시에 버튼도 같이 스크롤 */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setButtonPosition({ top: `${window.scrollY + 20}px`, right: '70px'});
      } else {
        setButtonPosition({ top: '20px', right: '70px'});
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="darkmode" style={{ position: 'absolute', zIndex: '1000', ...buttonPosition, transition: 'top 0.2s ease-out' }}>
      <button className="darkmode-button" onClick={darkMode}>
        {isDarkMode ? '☀️' : '🌙'}
      </button>
    </div>
  );
}