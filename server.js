import express from 'express';
import cors from 'cors';
import path from 'path';
import countries from './src/Data/countries.js';

const app = express();
const port = "https://atlas-hub-omega.vercel.app/"|| 3000;

// Middleware
app.use(cors());

// Define a route to serve all countries
app.get('/api/countries', (req, res) => {
  res.json(countries);
});

// Define a route to serve a single country by id
app.get('/api/countries/:id', (req, res) => {
  const country = countries.find(c => c.id === parseInt(req.params.id));
  if (country) {
    res.json(country);
  } else {
    res.status(404).json({ message: 'Country not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
