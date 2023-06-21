import React from 'react';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <div className="page-not-found-container">
      <a id="moon" href="/">/</a>
      <div className="astronaut"></div>
      <div className="text">
        <span class="flicker">Houston We <span class="Have_a">Have a</span> <span className="blink _404">404</span> <span class="flickerProblem">Problem</span></span>
      </div>
    </div>
  );
};

export default PageNotFound;
