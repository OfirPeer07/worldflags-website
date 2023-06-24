import React from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    window.location.href = "/worldflags";
  };

  return (
    <div className="app-container">
      <div id="earth" onClick={handleClick} className="xbox">
        <div class="xbox" data-char="O"></div>
        </div>
      <h1 className="jt --debug">
        <span className="jt__row">
          <span className="jt__text">
            <span className="flickerProblem">Welcome</span> To The{' '}
            <span className="flicker">World Flags</span>{' '}
            <span className="fallWord">Website</span>
          </span>
        </span>
        <span className="jt__row jt__row--sibling" aria-hidden="true">
          <span className="jt__text">
            <span className="flickerProblem">Welcome</span> To The{' '}
            <span className="flicker">World Flags</span>{' '}
            <span className="fallWord">Website</span>
          </span>
        </span>
        <span className="jt__row jt__row--sibling" aria-hidden="true">
          <span className="jt__text">
            <span className="flickerProblem">Welcome</span> To The{' '}
            <span className="flicker">World Flags</span>{' '}
            <span className="fallWord">Website</span>
          </span>
        </span>
        <span className="jt__row jt__row--sibling" aria-hidden="true">
          <span className="jt__text">
            <span className="flickerProblem">Welcome</span> To The{' '}
            <span className="flicker">World Flags</span>{' '}
            <span className="fallWord">Website</span>
          </span>
        </span>
      </h1>
    </div>
  );
}

export default App;