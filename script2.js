// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = 'YOUR_API_KEY';

// Function to fetch weather data
function fetchWeatherData() {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=CityName&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // Update the HTML with weather information
      const weatherContainer = document.querySelector('.weather-data');
      weatherContainer.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
    })
    .catch((error) => {
      console.error('There was a problem fetching the weather data:', error);
    });
}

// Call the fetchWeatherData function to load weather data when the page loads
fetchWeatherData();
