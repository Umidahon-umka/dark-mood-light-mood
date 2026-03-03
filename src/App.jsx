import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Rejim o'zgarganda body rangini ham o'zgartirish uchun
  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  return (
    <div className="container">
      <h1>{isDarkMode ? "Tun rejimi" : "Kun rejimi"}</h1>
      
      {/* Rasmdagi kabi Toggle Switch */}
      <div 
        className={`toggle-container ${isDarkMode ? 'dark' : 'light'}`}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        <div className="icon-wrapper">
          {/* Oy belgisi */}
          <span className={`icon moon ${!isDarkMode ? 'active' : ''}`}>🌙</span>
          
          {/* Yashil harakatlanuvchi doira */}
          <div className="toggle-circle">
            {isDarkMode ? '☀️' : '🌙'}
          </div>

          {/* Quyosh belgisi */}
          <span className={`icon sun ${isDarkMode ? 'active' : ''}`}>☀️</span>
        </div>
      </div>
    </div>
  );
}

export default App;