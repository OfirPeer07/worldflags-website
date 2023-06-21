import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import WorldFlags from './components/WorldFlags/WorldFlags';
import PageNotFound from './components/PageNotFound/PageNotFound';
import reportWebVitals from './reportWebVitals';

// Add the link to the Codystar font
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Codystar:wght@300&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const handleFlagClick = (event) => {
  event.preventDefault();
  const countryName = event.target.getAttribute('data-country');
  const url = `https://www.worldometers.info/country/${countryName}/`;
  window.open(url, '_blank');
};

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/worldflags" element={<WorldFlags handleFlagClick={handleFlagClick} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
