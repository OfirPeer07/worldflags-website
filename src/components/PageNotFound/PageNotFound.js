import React from 'react';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <div className="page-not-found-container">
      <div id="moon"></div>
      <div className="astronaut"></div>
      <div className="text">
        <span>Houston We Have 404 Problem</span> 
      </div>
    </div>
  );
};

export default PageNotFound;
