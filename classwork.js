fetch("https://open-weather13.p.rapidapi.com/city/Tirana", {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "36f2960f93msh9d7c8df1cecbd22p187536jsn6b03b62eba9a",
    "X-RapidAPI-Host": "open-weather13.p.rapidapi.com"
  }
})
.then(response => response.json())
.then(data => {
  document.getElementById("output").innerHTML = `
    <h2>📍 ${data.name}, ${data.sys.country}</h2>

    <h3>🌤 Weather</h3>
    <p>Main: ${data.weather[0].main}</p>
    <p>Description: ${data.weather[0].description}</p>

    <h3>🌡 Temperature</h3>
    <p>Current: ${data.main.temp}</p>
    <p>Feels like: ${data.main.feels_like}</p>
    <p>Humidity: ${data.main.humidity}%</p>

    <h3>🌬 Wind</h3>
    <p>Speed: ${data.wind.speed}</p>
  `;
})
.catch(err => console.error(err));
