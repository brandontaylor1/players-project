import express from 'express';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 5174;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/teampage', async (req, res) => {
    try {
        const options = {
            headers: {
                'X-RapidAPI-Key': 'ba5bba66e7msh4d67f7a5909ce85p1001bdjsnefb21fbd6220',
                'X-RapidAPI-Host': 'nfl-api-data.p.rapidapi.com'
            }
        };
        const response = await axios.get('https://nfl-api-data.p.rapidapi.com/nfl-team-listing/v1/data', options);
        const result = response.data;
        console.log(result);
        res.json(result); // Sending fetched data as response
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});