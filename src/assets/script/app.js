    async function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    const apiKey = 'c2f9ce70640bfba6c96152c21239f205'; // Replace with your OpenWeatherMap API key
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const params = `?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
    const resultDiv = document.getElementById('weatherResult');

    if (!city) {
        resultDiv.textContent = 'Please enter a city name.';
    return;
    }

    try {
        resultDiv.textContent = 'Fetching weather...';
    const response = await fetch(baseUrl + params);
    if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    const data = await response.json();

    if (data.cod !== 200) {
        resultDiv.textContent = `Error: ${data.message}`;
    return;
        }

    const weather = data.weather[0].description;
    const temp = data.main.temp;
    resultDiv.textContent = `Current weather in ${city}: ${weather}, Temperature: ${temp}°C`;
    } catch (error) {
        resultDiv.textContent = `Error fetching weather data: ${error.message}`;
    }
}