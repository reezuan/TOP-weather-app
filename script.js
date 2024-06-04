(() => {
    const API_KEY = "1e59001d3205403fa8a174857242905";

    fetchRealtimeWeather("Singapore")
        .then(data => console.log(data))
        .catch(err => handleError(err));

    fetchForecastWeather("Singapore", "7")
        .then(data => console.log(data))
        .catch(err => handleError(err));
    
    // ----- Functions to fetch weather -------------------------------

    async function fetchRealtimeWeather(city) {
        try {
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`, {mode: "cors"});
            const weatherData = await response.json();

            if (response.ok) {
                return weatherData;
            } else {
                throw weatherData;
            }
        } catch (err) {
            throw err;
        }
    }

    async function fetchForecastWeather(city, numberOfDays) {
        try {
            const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=${numberOfDays}`, {mode: "cors"});
            const weatherData = await response.json();

            if (response.ok) {
                return weatherData;
            } else {
                throw weatherData;
            }
        } catch (err) {
            throw err;
        }
    }

    // ----- Functions to handle errors -------------------------------

    function handleError(err) {
        console.log(err);
        if (err.error && err.error.code) {
            switch (err.error.code) {
                case 1006:
                    console.log("Error: No matching location found.");
                    break;
                default:
                    console.error(`Error: ${err.error.message}`);
            }
        } else {
            console.error("An unknown error occurred.", err);
        }
    }
})();