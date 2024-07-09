// Header.js
import React from 'react';
import '../styles/Header.css';
import { IoHome } from "react-icons/io5";
import { FaSearchLocation } from "react-icons/fa";
import { SiAtlassian } from "react-icons/si";
import { FaCogs } from "react-icons/fa"; // Importing an icon for API

const Header = ({ searchCountry, handleSearch, handleSearchButtonClick }) => {
  return (
    <header className="header">
      <div className="logo">
        <h1><SiAtlassian /></h1>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search..." value={searchCountry} onChange={handleSearch} />
        <button type="button" onClick={handleSearchButtonClick}><FaSearchLocation /></button>
      </div>

      <nav className="nav">
        <ul>
          <li><a href="/"><IoHome /> Home</a></li>
          <li><a href="/api"><FaCogs /> API</a></li> {/* Adding the API icon and text */}
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
