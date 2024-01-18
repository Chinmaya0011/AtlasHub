import React, { useState } from 'react';
import '../styles/Category.css'; // Adjust the path based on your project structure
import { FaPeopleGroup } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";
import { SiRelianceindustrieslimited } from "react-icons/si";
import { MdTempleHindu } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
import { TbPhoneCalling } from "react-icons/tb";
import { IoIosTime } from "react-icons/io";
import { FcNightLandscape } from "react-icons/fc";
import CategorySelectItem from './CategorySelectItem';

function Category() {
  const [selectedButton, setSelectedButton] = useState(false);
  const [selectedCat, setSelectedCat] = useState();

  function handleCat(selectItem) {
    setSelectedCat(selectItem);
    setSelectedButton(true);
  }

  return (
    
    <div>
    <div className="category">
      <p className={selectedCat === 'population' ? 'selected' : ''} onClick={() => { handleCat('population') }}><FaPeopleGroup /></p>
      <p className={selectedCat === 'currency' ? 'selected' : ''} onClick={() => { handleCat('currency') }}><MdCurrencyRupee /></p>
      <p className={selectedCat === 'industries' ? 'selected' : ''} onClick={() => { handleCat('industries') }}><SiRelianceindustrieslimited /></p>
      <p className={selectedCat === 'religion' ? 'selected' : ''} onClick={() => { handleCat('religion') }}><MdTempleHindu /></p>
      <p className={selectedCat === 'education' ? 'selected' : ''} onClick={() => { handleCat('education') }}><MdCastForEducation /></p>
      <p className={selectedCat === 'energy' ? 'selected' : ''} onClick={() => { handleCat('energy') }}><SlEnergy /></p>
      <p className={selectedCat === 'callingCode' ? 'selected' : ''} onClick={() => { handleCat('callingCode') }}><TbPhoneCalling /></p>
      <p className={selectedCat === 'timeZone' ? 'selected' : ''} onClick={() => { handleCat('timeZone') }}><IoIosTime /></p>
      <p className={selectedCat === 'area' ? 'selected' : ''} onClick={() => { handleCat('area') }}><FcNightLandscape /></p>
    </div>
      {selectedButton && <CategorySelectItem selectedCat={selectedCat} />}
    </div>
  );
}

export default Category;
