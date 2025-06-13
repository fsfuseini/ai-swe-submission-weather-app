# Weather App

## Description
The Weather App is a simple, web-based application that allows users to retrieve current weather data for any city by entering its name. Built with HTML, CSS, and JavaScript, it fetches temperature (in Celsius) and weather description (e.g., "clear sky") from the OpenWeatherMap API. Designed for beginner web developers, the app demonstrates asynchronous JavaScript, API integration, and DOM manipulation, aligning with a Systems Analyst’s role in analyzing and implementing technical solutions.

## Features
- **City Search**: Users enter a city name in a text field and click "Get Weather" to fetch data.
- **Weather Display**: Shows temperature and weather description (e.g., "Current weather in Tokyo: clear, Temperature: 24°C").
- **Error Handling**: Manages invalid inputs (e.g., empty fields) and API errors (e.g., "city not found") with user-friendly messages.
- **Responsive UI**: Clean, centered layout with minimal CSS, compatible with desktop and mobile browsers.

## Installation
1. Clone or download the repository to your local machine.
2. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/api).
3. Open `index.html` in a text editor and replace `'your_api_key_here'` in the `<script>` section with your API key.
4. Host the app on a local server (e.g., using `live-server` via npm) or open `index.html` directly in a modern browser (note: direct file access may face CORS restrictions).

## Usage
1. Open the app in a browser.
2. Enter a city name (e.g., "Tokyo") in the input field.
3. Click "Get Weather" to view the current temperature and weather description.
4. If an error occurs (e.g., invalid city), a message like "Error: city not found" will display.

## Technologies Used
- **HTML5**: Structure for the web interface.
- **CSS3**: Basic styling for a clean, responsive layout.
- **JavaScript (ES6)**: JavaScript handles API requests, DOM updates, and error handling using async/await.
- **OpenWeatherMap API**: Provides real-time weather data.

## AI Contributions
Grok 3 (via xAI) was used to:
- Generate the initial JavaScript code based on a TRACI-crafted prompt: "As a web development tutor, create a JavaScript-based weather app for beginner web developers."
- Suggest security improvements (e.g., input sanitization with `encodeURIComponent`) after identifying a hardcoded API key risk.
- Debug async/await issues, recommending `response.ok` checks for robust error handling.
All AI suggestions were reviewed and validated to ensure security and compliance.

## Challenges
- **Security**: The initial AI-generated code exposed the API key in client-side JavaScript, requiring a manual review to identify. A server-side proxy (e.g., Node.js) was recommended but not implemented due to time constraints.
- **API Error Handling**: Ensuring user-friendly error messages for various API responses (e.g., HTTP errors, invalid cities) required iterative testing.
- **Compliance**: Adding a GDPR-compliant privacy notice for API data usage was necessary to align with legal standards.

## Future Improvements
- Implement a Node.js backend to securely handle API requests, eliminating client-side API key exposure.
- Enhance the UI with CSS animations and weather icons for better user experience.
- Add local storage to save recent city searches, improving usability.
- Include additional weather metrics (e.g., humidity, wind speed) for richer data display.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.