// CountryDetail.js (Snippet)
import React, { useState, useEffect } from 'react';
import countries from '../Data/countries';
import MatchingCountriesList from './MatchingCountriesList ';
import '../styles/CountryDetail.css';

function CountryDetail({ searchCountry }) {
  const [matchingCountries, setMatchingCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

   useEffect(() => {
    // Find the default country (India)
    const defaultCountry = getDefaultCountry();
    
    // Set the default country initially
    setSelectedCountry(defaultCountry);

    // Filter matching countries based on search
    const matchingCountriesList = countries.filter(country =>
      country.countryName.toLowerCase().includes(searchCountry.toLowerCase())
    );

    // Update the matching countries list
    setMatchingCountries(matchingCountriesList);
  }, [searchCountry]);
  const showCountryDetails = (country) => {
    setSelectedCountry(country);
  };
  function getDefaultCountry() {
    return countries.find((country) => country.countryName.toLowerCase() === 'india') || {};
  }
  return (
    <div className="country-detail-container">
      {selectedCountry && (
        <div className='countryDetails'>

        {/* General Information Section */}
      {/* General Information Section */}
<div className="section-container" id="general-info-section">
  <h2 className="section-title" id="general-info">General Information:</h2>

  <p className="info-item" id="country-name">
    Country Name:
    <button className="country-name-button" type="button">
      {selectedCountry?.countryName}
    </button>
  </p>

  <p className="info-item" id="capital">
    Capital:
    <button className="capital-button" type="button">
      {selectedCountry?.capital}
    </button>
  </p>

  <p className="info-item" id="population">
    Population:
    <button className="population-button" type="button">
      {selectedCountry?.population}
    </button>
  </p>

  <p className="info-item" id="area">
    Area:
    <button className="area-button" type="button">
      {selectedCountry?.area}
    </button>
  </p>
</div>

      
        {/* Geography Section */}
      {/* Geography Section */}
<div className="section-container" id="geography-section">
  <h2 className="section-title" id="geography">Geography:</h2>

  <p className="info-item" id="continent">
    Continent:
    <button className="continent-button" type="button">
      {selectedCountry?.geography?.continent}
    </button>
  </p>

  <ul className="border-list">
    <p className="info-item" id="borders">
      Borders:
      {selectedCountry?.geography?.borders?.length > 0 ? (
        selectedCountry?.geography?.borders?.map((country, index) => (
          <button className="border-country" key={index} type="button">
            {country}
          </button>
        ))
      ) : (
        <span className="no-borders-message"> No borders available.</span>
      )}
    </p>
  </ul>
</div>

      
        {/* Government Section */}
 {/* Government Section */}
<div className="section-container" id="government-section">
  <h2 className="section-title" id="government">Government:</h2>

  <p className="info-item" id="gov-type">
    Type of Government:
    <button className="gov-type-button" type="button">
      {selectedCountry?.government?.type}
    </button>
  </p>

  <p className="info-item" id="head-of-state">
    Head of State:
    <button className="head-of-state-button" type="button">
      {selectedCountry?.government?.headOfState}
    </button>
  </p>

  <p className="info-item" id="political-system">
    Political System:
    <button className="political-system-button" type="button">
      {selectedCountry?.government?.politicalSystem}
    </button>
  </p>
</div>

        {/* Economy Section */}
        <div className="section-container" id="economy-section">
          <h2 className="section-title" id="economy">Economy:</h2>
          <p className="info-item" id="gdp">GDP: {selectedCountry?.economy?.GDP}</p>
          <p className="info-item" id="industries">
  Industries: 
  {selectedCountry?.economy?.industries?.map((industry, index) => (
    <button className="industry-button" key={index} type="button">
      {industry}
    </button>
  ))}
</p>
<p className="info-item" id="major-exports">
  Major Exports:
  {selectedCountry?.economy?.majorExports?.map((exportItem, index) => (
    <button className="export-button" key={index} type="button">
      {exportItem}
    </button>
  ))}
</p>

<p className="info-item" id="major-imports">
  Major Imports:
  {selectedCountry?.economy?.majorImports?.map((importItem, index) => (
    <button className="import-button" key={index} type="button">
      {importItem}
    </button>
  ))}
</p>

         </div>
      
        {/* Culture Section */}
        <div className="section-container" id="culture-section">
  <h2 className="section-title" id="culture">Culture:</h2>

  <p className="info-item" id="ethnic-groups">
    Ethnic Groups:
    {selectedCountry?.culture?.ethnicGroups && Object.entries(selectedCountry.culture.ethnicGroups).map((entry, index) => (
      <button className="ethnic-group-button" key={index} type="button">
        {`${entry[0]}: ${entry[1]}`}
      </button>
    ))}
  </p>

  <p className="info-item" id="religion">
  Religion:
  {selectedCountry?.culture?.religion && selectedCountry.culture.religion.split(', ').map((religion, index) => (
    <button className="religion-button" key={index} type="button">
      {religion}
    </button>
  ))}
</p>




  <p className="info-item" id="national-holidays">
    National Holidays:
    {selectedCountry?.culture?.nationalHolidays?.map((holiday, index) => (
      <button className="holiday-button" key={index} type="button">
        {holiday}
      </button>
    ))}
  </p>

  <p className="info-item" id="famous-landmarks">
    Famous Landmarks:
    {selectedCountry?.culture?.famousLandmarks?.map((landmark, index) => (
      <button className="landmark-button" key={index} type="button">
        {landmark}
      </button>
    ))}
  </p>
</div>

      
<div className="section-container" id="history-section">
  <h2 className="section-title" id="history">History:</h2>

  <p className="info-item" id="historical-events">
    Historical Events:
    {selectedCountry?.history?.historicalEvents?.map((event, index) => (
      <button className="historical-event-button" key={index} type="button">
        {event}
      </button>
    ))}
  </p>

  <p className="info-item" id="independence-day">
    Independence Day:
    {selectedCountry?.history?.independenceDay && (
      <button className="independence-day-button" type="button">
        {selectedCountry.history.independenceDay}
      </button>
    )}
  </p>

  <p className="info-item" id="notable-figures">
    Notable Figures:
    {selectedCountry?.history?.notableFigures?.map((figure, index) => (
      <button className="notable-figure-button" key={index} type="button">
        {figure}
      </button>
    ))}
  </p>
</div>


  {/* Education Section */}
  <div className="section-container" id="education-section">
  <h2 className="section-title" id="education">Education:</h2>

  <p className="info-item" id="education-system">
    Education System:
    <button className="education-button" type="button">
      {selectedCountry?.education?.educationSystem}
    </button>
  </p>

  <p className="info-item" id="literacy-rate">
    Literacy Rate:
    <button className="literacy-rate-button" type="button">
      {selectedCountry?.education?.literacyRate}
    </button>
  </p>
</div>


{/* Infrastructure Section */}
<div className="section-container" id="infrastructure-section">
  <h2 className="section-title" id="infrastructure">Infrastructure:</h2>

  <p className="info-item" id="transportation">
    Transportation:
    {selectedCountry?.infrastructure?.transportation?.map((mode, index) => (
      <button className="transportation-button" key={index} type="button">
        {mode}
      </button>
    ))}
  </p>

  <p className="info-item" id="energy-sources">
    Energy Sources:
    {selectedCountry?.infrastructure?.energySources?.map((source, index) => (
      <button className="energy-source-button" key={index} type="button">
        {source}
      </button>
    ))}
  </p>
</div>


  {/* Healthcare Section */}
 {/* Healthcare Section */}
<div className="section-container" id="healthcare-section">
  <h2 className="section-title" id="healthcare">Healthcare:</h2>

  <p className="info-item" id="access">
    Access:
    <button className="access-button" type="button">
      {selectedCountry?.healthcare?.access}
    </button>
  </p>

  <p className="info-item" id="infant-mortality-rate">
    Infant Mortality Rate:
    <button className="infant-mortality-rate-button" type="button">
      {selectedCountry?.healthcare?.infantMortalityRate}
    </button>
  </p>

  <p className="info-item" id="life-expectancy">
    Life Expectancy:
    <button className="life-expectancy-button" type="button">
      {selectedCountry?.healthcare?.lifeExpectancy}
    </button>
  </p>
</div>


  {/* Miscellaneous Section */}
{/* Miscellaneous Section */}
<div className="section-container" id="miscellaneous-section">
  <h2 className="section-title" id="miscellaneous">Miscellaneous:</h2>

  <p className="info-item" id="time-zone">
    Time Zone:
    <button className="time-zone-button" type="button">
      {selectedCountry?.miscellaneous?.timeZone}
    </button>
  </p>

  <p className="info-item" id="internet-tld">
    Internet TLD:
    <button className="internet-tld-button" type="button">
      {selectedCountry?.miscellaneous?.internetTLD}
    </button>
  </p>

  <p className="info-item" id="calling-code">
    Calling Code:
    <button className="calling-code-button" type="button">
      {selectedCountry?.miscellaneous?.callingCode}
    </button>
  </p>
</div>
     
      </div>
      
      )}

<div className="matching-countries">
        {matchingCountries.length > 0 ? (
          <MatchingCountriesList matchingCountries={matchingCountries} showCountryDetails={showCountryDetails} />
        ) : (
          <p className="no-matching-countries">No matching countries found</p>
        )}
      </div>
    </div>
  );
}

export default CountryDetail;
