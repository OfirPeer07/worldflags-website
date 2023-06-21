import React from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    window.location.href = "/worldflags";
  };

  return (
    <div className="app-container">
      <div id="box" onClick={handleClick}></div>
      <h1 class="jt --debug">
        <span class="jt__row">
          <span class="jt__text">Welcome To The World Flags Website</span>
        </span>
        <span class="jt__row jt__row--sibling" aria-hidden="true">
          <span class="jt__text">Welcome To The World Flags Website</span>
        </span>
        <span class="jt__row jt__row--sibling" aria-hidden="true">
          <span class="jt__text">Welcome To The World Flags Website</span>
        </span>
        <span class="jt__row jt__row--sibling" aria-hidden="true">
           <span class="jt__text">Welcome To The World Flags Website</span>
        </span>
      </h1>
    </div>
  );
}

export default App;