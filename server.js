import express from 'express';
import cors from 'cors';
import countries from './src/Data/countries.js';

const app = express();

// Determine if we are in a Vercel environment or local environment
const isVercel = false; // Set this to `true` when deploying to Vercel, or use a condition to detect the environment
const localPort = 3000; // Local development port
const vercelPort = 3000; // Vercel deploys on a port assigned by the platform

// Port configuration
const port = isVercel ? vercelPort : localPort; // Use `vercelPort` if deploying to Vercel or `localPort` otherwise

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
app.listen(port, () => {
  const baseURL = isVercel ? 'https://atlas-hub-omega.vercel.app' : `http://localhost:${port}`;
  console.log(`Server is running on ${baseURL}`);
});
