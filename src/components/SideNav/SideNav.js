import React from 'react';
import '../SideNav/SideNav.css';
import logoImage from '../../images/logos/logo.png';
import populationImage from '../../images/icons/population_icon.png';
import landAreaImage from '../../images/icons/landArea_icon.png';

function SideNav({ sortedFlagsByPopulation, sortedFlagsByLandArea, sortedFlagsByDefault, handleSortByPopulation, handleSortByLandArea, handleSortByDefault }) {

  return (
    <nav className="sidenav">
      <ul>
        <li>
          <div align="center">
            <a href="/">
              <img src={logoImage} alt="Logo" width="125" height="125" />
            </a>
          </div>
        </li>
        <li className="group-heading">Real-Time of All Information:</li>
        <li>
          <a href="https://www.worldometers.info/" target="_blank" rel="noopener noreferrer">
            Real-Time World information
          </a>
        </li>
        <li>
          <a href="https://www.worldometers.info/world-population/" target="_blank" rel="noopener noreferrer">
            Real-Time World Population
          </a>
        </li>
        <li>
          <a href="https://www.worldometers.info/watch/world-population/" target="_blank" rel="noopener noreferrer">
            All People In 1 Page
          </a>
        </li>
        <li>
          <a href="https://www.worldometers.info/coronavirus/" target="_blank" rel="noopener noreferrer">
            Coronavirus
          </a>
        </li>
        <li className="group-heading">Worldometers Details:</li>
        <li>
          <a href="https://www.worldometers.info/about/" target="_blank" rel="noopener noreferrer">
            About - Worldometers
          </a>
        </li>
        <li>
          <a href="https://www.worldometers.info/contact/" target="_blank" rel="noopener noreferrer">
            Contact - Worldometers
          </a>
        </li>
        <li>
          <a href="https://www.worldometers.info/languages/" target="_blank" rel="noopener noreferrer">
            Languages - Worldometers
          </a>
        </li>
        <li>
          <a href="https://www.worldometers.info/faq/" target="_blank" rel="noopener noreferrer">
            FAQ - Worldometers
          </a>
        </li>
        <li className="group-heading">Sort Flags By:</li>
        <li className="flags-container">
          <div className="logo-container">
            <img
              src={populationImage}
              alt="Population Icon"
              width="105"
              height="90"
              className="logo"
              onClick={handleSortByPopulation}
            />
            <img
              src={landAreaImage}
              alt="Land Area Icon"
              width="105"
              height="90"
              className="logo"
              onClick={handleSortByLandArea}
            />
          </div>
          <table className="table-heading">
            <thead>
              <tr>
                <th onClick={handleSortByPopulation}>Population</th>
                <th onClick={handleSortByLandArea}>Land Area</th>
              </tr>
            </thead>
          </table>
          <table className="table-heading-default">
            <thead>
              <tr>
                <th onClick={handleSortByDefault}>Default</th>
              </tr>
            </thead>
          </table>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
