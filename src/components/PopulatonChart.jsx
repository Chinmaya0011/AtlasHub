import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js
import countries from '../Data/countries';

const PopulatonChart = () => {
  const [populations, setPopulations] = useState([]);

  useEffect(() => {
    // Extract country name, population, and year data from the countries array
    const extractedPopulations = countries.map(country => ({
      name: country.countryName,
      population: country.population,
      year: country.year
    }));
    setPopulations(extractedPopulations);
  }, []);

  useEffect(() => {
    // Initialize Chart.js once populations data is set
    if (populations.length > 0) {
      renderChart();
    }
  }, [populations]);

  const renderChart = () => {
    const ctx = document.getElementById('populationChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: populations.map(country => country.name),
        datasets: [{
          label: 'Population (Millions)',
          data: populations.map(country => country.population / 1000000), // Convert population to millions
          backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue color
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Population (Millions)'
            }
          }
        }
      }
    });
  };

  return (
    <div>
      <h2>Population Chart</h2>
      <canvas id="populationChart"></canvas>
      <h3>Population List</h3>
      <ul>
        {populations.map((country, index) => (
          <li key={index}>
            {index + 1}. {country.name} - {formatPopulation(country.population)}
          </li>
        ))}
      </ul>
    </div>
  );
};
const formatPopulation = (population) => {
  if (typeof population === 'number') {
    // Check if population is in millions or precise number
    if (population >= 1000000) {
      const millionSuffix = population >= 1000000000 ? 'b' : 'm';
      const roundedPopulation = population >= 1000000000 ? (population / 1000000000).toFixed(1) : (population / 1000000).toFixed(1);
      return `${roundedPopulation}${millionSuffix}`;
    } else {
      return population.toLocaleString(); // Add commas for precise numbers
    }
  } else {
    return population; // If population is not a number, return as is
  }
};


export default PopulatonChart;
