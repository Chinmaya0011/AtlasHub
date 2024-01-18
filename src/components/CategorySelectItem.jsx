import React, { useEffect, useState } from 'react';
import countriesData from '../Data/countries';
import '../styles/CategorySelectItem.css';

function CategorySelectItem({ selectedCat }) {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    // Simulating an API call to fetch country data
    // In a real-world scenario, you would fetch data from an actual API
    setCountryData(countriesData);
  }, []);
const headingTitle=selectedCat.toUpperCase()
  return (
    <div>
            <h1 className="category-title" style={{textAlign:'center'}}>{selectedCat.toUpperCase()}</h1>

    <div className="category-select-container">
      {countryData.map((country) => (
        <div key={country.id} className="country-item">
          <h2 className="country-name">{country.countryName}</h2>
          {renderCategoryData(selectedCat, country)}
        </div>
      ))}
    </div>
    </div>
  );
}

function renderCategoryData(selectedCat, country) {
  switch (selectedCat) {
    case 'population':
      return <p className="category-info">Population: {country.population}</p>;
    case 'currency':
      return <p className="category-info">Currency: {country.currency}</p>;
    case 'industries':
      return <p className="category-info">Industries: {country.economy.industries.join(', ')}</p>;
    case 'religion':
      return <p className="category-info">Religion: {country.culture.religion}</p>;
    case 'education':
      return <p className="category-info">Education System: {country.education.educationSystem}</p>;
    case 'energy':
      return <p className="category-info">Energy Sources: {country.infrastructure.energySources.join(', ')}</p>;
    case 'callingCode':
      return <p className="category-info">Calling Code: {country.miscellaneous.callingCode}</p>;
    case 'timeZone':
      return <p className="category-info">Time Zone: {country.miscellaneous.timeZone}</p>;
    case 'area':
      return <p className="category-info">Area: {country.area}</p>;
    default:
      return null;
  }
}

export default CategorySelectItem;
