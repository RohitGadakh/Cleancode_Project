const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 4000;

// Set up static files and views
app.use(express.static('public'));
 app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');
app.set('views', path.join(__dirname, 'views'));


app.get('/', async (req, res) => {
  try {
    // Fetch sports data from the API 
    const apiEndpoint = `https://api.sports-scores.com/scores`;
    const apiResponse = await axios.get(apiEndpoint,{timeout:5000});
    const sportsData = apiResponse.data;

    // Render home page with sports data
    res.render('index', { sportsData });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
