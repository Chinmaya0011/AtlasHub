// server.cjs
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Use dynamic import for ES Modules
import('./src/Data/countries.js').then(module => {
    const countriesData = module.default;

    // Endpoint to get all countries
    app.get('/api/countries', (req, res) => {
        try {
            res.json(countriesData);
        } catch (error) {
            console.error("Error fetching countries data:", error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
    // Endpoint to get details of a specific country by ID
    app.get('/api/countries/:id', (req, res) => {
        const countryId = parseInt(req.params.id);
        const country = countriesData.find(country => country.id === countryId);
        if (country) {
            res.json(country);
        } else {
            res.status(404).json({ error: 'Country not found' });
        }
    });

    // Endpoint to get a list of all country names
 
    app.get('/api/countries/search/:name', (req, res) => {
        const countryName = req.params.name.toLowerCase();
        const country = countriesData.find(country => country.countryName.toLowerCase() === countryName);
        if (country) {
            res.json(country);
        } else {
            res.status(404).json({ error: 'Country not found' });
        }
    });

    // Add more endpoints as needed for different aspects of country data

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}).catch(err => {
    console.error('Error importing module:', err);
    process.exit(1); // Exit the process if module import fails
});