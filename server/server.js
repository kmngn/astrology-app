const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const PORT = 8000;

const RAPIDAPI_KEY = 'b549879486mshfc0958f7127db8ep1b6c3ajsn3704d10b862d';
const RAPIDAPI_HOST = 'horoscope-astrology.p.rapidapi.com';

// Reusable function to fetch data from RapidAPI
const fetchDataFromRapidAPI = async (endpoint) => {
    try {
        const response = await axios.get(`https://horoscope-astrology.p.rapidapi.com/${endpoint}`, {
            headers: {
                'x-rapidapi-key': RAPIDAPI_KEY,
                'x-rapidapi-host': RAPIDAPI_HOST
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching data from RapidAPI');
    }
};

// Endpoint to fetch quote
app.get('/quote', async (req, res) => {
    try {
        const quoteData = await fetchDataFromRapidAPI('dailyphrase');
        res.json(quoteData);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

  
// Endpoint to fetch sign
app.get('/signs/:signName', async (req, res) => {
    const { signName } = req.params;
    
    try {
        const signData = await fetchDataFromRapidAPI(`sign?s=${signName}`);
        res.json(signData);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
