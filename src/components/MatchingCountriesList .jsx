import React, { useState, useEffect } from 'react';
import "../styles/CountryDetail.css";

const MatchingCountriesList = ({ matchingCountries, showCountryDetails }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [displayCount, setDisplayCount] = useState(10);
  const [shuffledCountries, setShuffledCountries] = useState([]);

  useEffect(() => {
    // Shuffle the matchingCountries array when it changes
    const shuffled = [...matchingCountries].sort(() => Math.random() - 0.5);
    setShuffledCountries(shuffled);
  }, [matchingCountries]);

  const handleCountryClick = (country) => {
    setSelectedCountry(country.id);
    showCountryDetails(country);
  };

  const handleShowMoreClick = () => {
    setDisplayCount(displayCount + 20);
  };

  return (
    <>
      <p>Matching Countries:</p>
      <ul className="matching-countries-list">
        {shuffledCountries.slice(0, displayCount).map(country => (
          <li
            key={country.id}
            className={`matching-country-item ${selectedCountry === country.id ? 'selected' : ''}`}
          >
            <button onClick={() => handleCountryClick(country)}>{country.countryName}</button>
          </li>
        ))}
      </ul>
      {displayCount < matchingCountries.length && (
        <button className='matchingcountry' onClick={handleShowMoreClick}>Show More</button>
      )}
    </>
  );
};

export default MatchingCountriesList;
