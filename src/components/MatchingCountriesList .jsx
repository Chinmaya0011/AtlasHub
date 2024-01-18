import React, { useState } from 'react';
import "../styles/CountryDetail.css";

const MatchingCountriesList = ({ matchingCountries, showCountryDetails }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryClick = (country) => {
    setSelectedCountry(country.id);
    showCountryDetails(country);
  };

  return (
    <>
      <p>Matching Countries:</p>
      <ul className="matching-countries-list">
        {matchingCountries.map(country => (
          <li
            key={country.id}
            className={`matching-country-item ${selectedCountry === country.id ? 'selected' : ''}`}
          >
            <button onClick={() => handleCountryClick(country)}>{country.countryName}</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MatchingCountriesList;
