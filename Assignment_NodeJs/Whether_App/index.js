const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// app.post('/weather', async (req, res) => {
//   const apiKey = 'cbe5ca98cdcfe2f79192326e2e3a894f';
//   const city = req.body.city;
//   const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//   try {
//     const response = await axios.get(apiUrl);
//     const weatherData = response.data;
//     res.json(weatherData);
//   } catch (error) {
//     res.status(500).json({ error: `Error fetching weather data: ${error.message}` });
//   }
// });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
