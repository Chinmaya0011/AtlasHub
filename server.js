import express from 'express';
import cors from 'cors';
import countries from './src/Data/countries.js';

const app = express();
const localPort = 3000; // Local development port

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

// Start the server
const port = process.env.PORT || localPort; // Use PORT environment variable if available, otherwise use localPort

app.listen(port, () => {
  const baseURL = process.env.PORT ? `https://atlas-hub-omega.vercel.app` : `http://localhost:${localPort}`;
  console.log(`Server is running on ${baseURL}`);
});
