fetch("PASTE_YOUR_API_URL_HERE", {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "YOUR_API_KEY",
    "X-RapidAPI-Host": "YOUR_API_HOST"
  }
})
.then(response => response.json())
.then(data => {
  document.getElementById("output").innerHTML = `
    <h2>📍 Location</h2>
    <p>Latitude: ${data.coord.lat}</p>
    <p>Longitude: ${data.coord.lon}</p>

    <h2>🌤 Weather</h2>
    <p>Main: ${data.weather[0].main}</p>
    <p>Description: ${data.weather[0].description}</p>

    <h2>🌡 Temperature</h2>
    <p>Current: ${data.main.temp}</p>
    <p>Feels like: ${data.main.feels_like}</p>
    <p>Humidity: ${data.main.humidity}%</p>
  `;
})
.catch(err => console.error(err));
