import React from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    window.location.href = "/worldflags";
  };

  return (
    <div className="app-container">
      <div id="box" onClick={handleClick}>
        {/* Content inside the box div */}
      </div>
    </div>
  );
}

export default App;
