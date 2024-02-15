const  axios = require("axios");

// Fetch sports data from the API and update the HTML content
document.addEventListener('DOMContentLoaded', async function () {
    try {
        const apiEndpoint = 'https://api.sports-scores.com/scores';
      const response = await axios.get(apiEndpoint); // Replace with the actual API endpoint
      const sportsData = await response.json();
  
      // Update the HTML content with sports data
      const sportsDataContainer = document.getElementById('sportsDataContainer');
      sportsDataContainer.innerHTML = generateHTMLForSportsData(sportsData);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Error fetching data. Please try again later.');
    }
  });
  
  // Helper function to generate HTML content based on sports data
  function generateHTMLForSportsData(data) {
    // Customize this function based on the structure of your API response
    // Example: Displaying a list of matches
    const matchesHTML = data.matches.map(match => `
      <div class="match">
        <h2>${match.team1} vs ${match.team2}</h2>
        <p>Date: ${match.date}</p>
        <p>Score: ${match.score}</p>
        
        
      </div>
    `).join('');
  
    return `<div id="matches">${matchesHTML}</div>`;
  }
  