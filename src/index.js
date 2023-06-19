import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import WorldFlags from './components/WorldFlags/WorldFlags';
import PageNotFound from './components/PageNotFound/PageNotFound';
import reportWebVitals from './reportWebVitals';

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

