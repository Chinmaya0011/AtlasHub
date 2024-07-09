import express from 'express';
import cors from 'cors';
import countriesData from './src/Data/countries.js';

const app = express();
const port = 3000;

app.use(cors());

app.get('/api/countries', (req, res) => {
    try {
        res.json(countriesData);
    } catch (error) {
        console.error("Error fetching countries data:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
