const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.json());

const PORT = 8000;

const RAPIDAPI_KEY = 'b549879486mshfc0958f7127db8ep1b6c3ajsn3704d10b862d';

app.get('/daily', async (req, res) => {
    try {
        const response = await axios.get('https://horoscope-astrology.p.rapidapi.com/dailyphrase', {
            headers: {
                'x-rapidapi-key': RAPIDAPI_KEY,
                'x-rapidapi-host': 'horoscope-astrology.p.rapidapi.com'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));