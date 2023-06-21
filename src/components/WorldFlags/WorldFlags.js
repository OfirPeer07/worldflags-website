import React, { useState, useEffect } from 'react';
import '../WorldFlags/WorldFlags.css';
import flagNames from '../../data/flagNames';
import sortedFlagNamesPopulation from '../../data/flagNamesPopulation';
import sortedFlagNamesLandArea from '../../data/flagNamesLandArea';
import sortedFlagNamesDefault from '../../data/flagNamesDefault';
import SideNav from '../SideNav/SideNav';

function WorldFlags() {
  const [sortedFlagsByPopulation, setSortedFlagsByPopulation] = useState(sortedFlagNamesPopulation);
  const [sortedFlagsByLandArea, setSortedFlagsByLandArea] = useState(sortedFlagNamesLandArea);
  const [sortedFlagsByDefault, setSortedFlagsByDefault] = useState(sortedFlagNamesDefault);

  const [hoveredFlag, setHoveredFlag] = useState(null);

  const [sortingByPopulation, setSortingByPopulation] = useState(false);
  const [sortingByLandArea, setSortingByLandArea] = useState(false);
  const [sortingByDefault, setSortingByDefault] = useState(false);

  const [animateSort, setAnimateSort] = useState(false);

  useEffect(() => {
    setAnimateSort(true);
    const timer = setTimeout(() => {
      setAnimateSort(false);
    }, 500); // Adjust the duration of the animation here (in milliseconds)

    return () => clearTimeout(timer);
  }, [sortingByPopulation, sortingByLandArea, sortingByDefault]);

  const handleFlagHover = (flagName) => {
    setHoveredFlag(flagName);
  };

  const handleFlagLeave = () => {
    setHoveredFlag(null);
  };

  const handleSortByPopulation = () => {
    setSortedFlagsByPopulation([...sortedFlagNamesPopulation]);
    setSortingByPopulation(true);
    setSortingByLandArea(false);
    setSortingByDefault(false);
  };

  const handleSortByLandArea = () => {
    setSortedFlagsByLandArea([...sortedFlagNamesLandArea]);
    setSortingByLandArea(true);
    setSortingByPopulation(false);
    setSortingByDefault(false);
  };

  const handleSortByDefault = () => {
    setSortedFlagsByDefault([...sortedFlagNamesDefault]);
    setSortingByLandArea(false);
    setSortingByPopulation(false);
    setSortingByDefault(true);
  };

  const openCountryPage = (flagName, e) => {
    const validFlagNames = {
      'dr-congo': 'democratic-republic-of-the-congo',
      'cote-d\'ivoire': 'cote-d-ivoire',
      'eswatini': 'swaziland',
      'falkland-islands': 'falkland-islands-malvinas',
      'hong-kong': 'china-hong-kong-sar',
      'macao': 'china-macao-sar',
      'u.s.-virgin-islands': 'united-states-virgin-islands',
      'united-states': 'us',
      'united-kingdom': 'uk',
      'wallis-and-futuna': 'wallis-and-futuna-islands',
    };

    const normalizedFlagName = flagName.replace(/_/g, '-');
    const kebabCaseFlagName = normalizedFlagName.toLowerCase();

    const validFlagName = validFlagNames[kebabCaseFlagName];

    let countryName;
    if (validFlagName) {
      countryName = validFlagName.replace(/_/g, '-');
    } else {
      countryName = flagName.replace(/_/g, '-');
    }

    const url = `https://www.worldometers.info/world-population/${countryName.toLowerCase()}-population/`;

    if (e.button === 0 && !e.ctrlKey && !e.metaKey) {
      e.preventDefault(); // Prevent default behavior of left-click event
      window.open(url, '_blank');
    } else if (e.button === 1 || (e.button === 0 && (e.ctrlKey || e.metaKey))) {
      e.preventDefault(); // Prevent default behavior of middle-click event
      window.open(url, '_blank', 'noopener');
    }
  };

  const getSortedFlagNames = () => {
    if (sortingByPopulation) {
      return sortedFlagsByPopulation;
    } else if (sortingByLandArea) {
      return sortedFlagsByLandArea;
    } else if (sortingByDefault) {
      return sortedFlagsByDefault;
    } else {
      return flagNames;
    }
  };

  return (
    <div className="app-container">
      <SideNav
        handleSortByPopulation={handleSortByPopulation}
        handleSortByLandArea={handleSortByLandArea}
        handleSortByDefault={handleSortByDefault}
      />
      <div className="main-content">
        <h1 className="title">Information about the countries of the world</h1>
        <p className="subtitle">Click on a country to get more details</p>
        <div className={`image-feed ${animateSort ? 'animate-sort' : ''}`}>
          {getSortedFlagNames().map((flagName, index) => (
            <div key={index} className="flag-container">
              <a href={`${process.env.PUBLIC_URL}/flags/${flagName}.svg`} target="_blank" rel="noopener noreferrer">
                <img
                  src={`${process.env.PUBLIC_URL}/flags/${flagName}.svg`}
                  alt={`Flag ${flagName}`}
                  className="flag-image"
                  onMouseEnter={() => handleFlagHover(flagName)}
                  onMouseLeave={handleFlagLeave}
                  onClick={(e) => openCountryPage(flagName, e)}
                  onAuxClick={(e) => openCountryPage(flagName, e)}
                />
                {hoveredFlag === flagName && <p className="flag-name">{flagName.replace(/_/g, ' ').replace('Cote_d_Ivoire', "Cote d'Ivoire")}</p>}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorldFlags;
