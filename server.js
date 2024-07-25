// api/countries.js
import express from 'express';
import cors from 'cors';
import countries from '../src/Data/countries.js';

const app = express();
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

// Only start the server if running locally
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

export default app;
