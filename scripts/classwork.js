const API_KEY = "df48c01f5amshbaad1b170a13276p1b37c5jsn28f4c0c70e8f";
const API_HOST = "open-weather13.p.rapidapi.com";

$(document).ready(function (){
    $("#searchBtn").click(function (){
        let city = $("#cityInput").val().trim();

        if(city === ""){
            alert("Enter a city name.");

            return;
        }

        $.ajax({
            url: `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`,
            method: "GET",
            headers:{
                "x-rapidapi-key": API_KEY,
                "x-rapidapi-host": API_HOST
            },
            success: function(data){
                console.log("SUCCESS:", data);

                const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                const tempC = ((data.main.temp - 32) * 5 / 9).toFixed(1);
                const feelsC = ((data.main.feels_like - 32) * 5 / 9).toFixed(1);

                $("#cityName").text(data.name + ", " + data.sys.country);
                $("#weatherIcon").attr("src", iconUrl);
                $("#weatherDesc").text(data.weather[0].description);
                $("#temp").text(tempC + "°C");
                $("#feelsLike").text("Feels like: " + feelsC + "C");
                $("#humidity").text(data.main.humidity + "%");
                $("#wind").text(data.wind.speed + " m/s");
                $("#visibility").text((data.visibility / 1000).toFixed(1) + " km");
                $("#pressure").text(data.main.pressure + " hPa");

                $("#weatherCard").removeClass("hidden");
            },
            error: function(xhr){
                if(xhr.status === 404){
                    alert("City not found.");
                }else if(xhr.status === 401 || xhr.status === 403){
                    alert("API key is invalid or access is denied.");
                }else{
                    alert("Something went wrong. Please try again.");
                }
            }
        });
    });
});