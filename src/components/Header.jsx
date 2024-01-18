// Header.js
import React from 'react';
import '../styles/Header.css';
import { IoHome } from "react-icons/io5";
import { FaMapMarked } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { FaBlog } from "react-icons/fa6";
import { FaSearchLocation } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { SiAtlassian } from "react-icons/si";

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
          <li><a href="/"><IoHome /></a></li>
          <li><a href="/explore"><FaMapMarked /></a></li>
          <li><a href="/categories"><TbCategoryFilled /></a></li>
          <li><a href="/contact"><GrContact /></a></li>
          <li><a href="/blog"><FaBlog /></a></li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
