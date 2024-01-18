// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import Category from './components/Category';
import CountryDetail from './components/CountryDetail';

function App() {
  const [searchCountry, setSearchCountry] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  function handleSearch(e) {
    setSearchCountry(e.target.value.toLowerCase());
  }

  function handleSearchButtonClick(selectedCountryFromUI) {
    // Your existing logic for handling the search button click
    // ...

    // Set the selected country using the passed parameter
    setSelectedCountry(selectedCountryFromUI);
  }

  const handleButtonClick = (selectedCountryFromUI) => {
    handleSearchButtonClick(selectedCountryFromUI);
  };

  return (
    <>
      <Header searchCountry={searchCountry} handleSearch={handleSearch} handleSearchButtonClick={handleSearchButtonClick} />
      <Category />
      <CountryDetail handleButtonClick={handleButtonClick} searchCountry={searchCountry} selectedCountry={selectedCountry} />
    </>
  );
}

export default App;
