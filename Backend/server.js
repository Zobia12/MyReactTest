const express = require('express');
// const axios = require('axios');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const port = 5000;

// const mockApiUrl = process.env.MOCK_API_URL;
// const apiKey = process.env.API_KEY;

const dbPath = path.join(__dirname, 'db.json');
const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const corsOptions = {
  origin: 'http://localhost:3000', // alowing only my frontend
};
app.use(cors(corsOptions)); 

app.get('/api/properties', async (req, res) => {
  try {
    // const response = await axios.get(mockApiUrl, {
    //   headers: {
    //     'Authorization': `Bearer ${apiKey}`,
    //   },
    // }); 
    // res.json(response)

    // I AM COMMENTING FOR NOW BUT THIS CODE WILL WORK WHEN EXTERNAL API URL WORKS
    // BECAUSE THE MOCK ENDPOINT GIVEN IN TEST IS NOT WORKING AND REAL I.E " https://mockrealestateapi.com/properties"
    //I AM USING MY LOCAL DATA FOR NOW FROM db.json
    const properties = dbData.properties;  
     res.json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch properties' });
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
