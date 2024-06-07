function updateWeatherValues(data) {
    console.log(data);
    
    // Set location
    const city = document.querySelector("[data-city]");
    city.textContent = data.location.name;

    const country = document.querySelector("[data-country]");
    country.textContent = data.location.country;

    // Set day, date & time
    const dateTimeNow = new Date(data.location.localtime);
    const months = ["January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October", "November", "December"];
    
    const dayOfWeek = document.querySelector("[data-day-of-week]");
    
    // Set day of week
    switch (dateTimeNow.getDay()) {
        case 0:
            dayOfWeek.textContent = "Sunday";
            break;
        case 1:
            dayOfWeek.textContent = "Monday";
            break;
        case 2:
            dayOfWeek.textContent = "Tuesday";
            break;
        case 3:
            dayOfWeek.textContent = "Wednesday";
            break;
        case 4:
            dayOfWeek.textContent = "Thursday";
            break;
        case 5:
            dayOfWeek.textContent = "Friday";
            break;
        case 6:
            dayOfWeek.textContent = "Saturday";
            break;
        default:
            dayOfWeek.textContent = "";
    }

    // Set date
    const date = document.querySelector("[data-date]");
    date.textContent = `${dateTimeNow.getDate()} ${months[dateTimeNow.getMonth()]} ${dateTimeNow.getFullYear()}`

    // Set time
    const time = document.querySelector("[data-time-now]");
    const timeString = dateTimeNow.toTimeString();
    time.textContent = `${timeString.substring(0, 2)}:${timeString.substring(3, 5)}`;

    // Set morning/night icon
    const timeOfDayIcon = document.querySelector("[data-is-day]");
    timeOfDayIcon.dataset.isDay = data.current.is_day === 1 ? "true" : "false";
    
    // Set current temperature
    const currentTemp = document.querySelector("[data-current-temp]");
    currentTemp.dataset.temperatureFahrenheit = data.current.temp_f;
    currentTemp.dataset.temperatureCelsius = data.current.temp_c;

    // Set 'feels like' temperature
    const feelsLikeTemp = document.querySelector("[data-feels-like]");
    feelsLikeTemp.dataset.temperatureFahrenheit = data.current.feelslike_f;
    feelsLikeTemp.dataset.temperatureCelsius = data.current.feelslike_c;

    if (localStorage.getItem("temperatureUnit") === "celsius") {
        currentTemp.textContent = data.current.temp_c;
        feelsLikeTemp.textContent = data.current.feelslike_c;
    } else if (localStorage.getItem("temperatureUnit") === "fahrenheit") {
        currentTemp.textContent = data.current.temp_f;
        feelsLikeTemp.textContent = data.current.feelslike_f;
    }

    // Set general forecast
    const generalForecast = document.querySelector("[data-general-forecast]");
    generalForecast.textContent = data.current.condition.text;
    
    // Set wind direction
    const windDirection = document.querySelector("[data-wind-direction]");
    windDirection.textContent = data.current.wind_dir;

    // Set humidity
    const humidity = document.querySelector("[data-humidity]");
    humidity.textContent = data.current.humidity;

    // Set wind speed
    const windSpeed = document.querySelector("[data-wind-speed]");
    windSpeed.dataset.speedMph = data.current.wind_mph;
    windSpeed.dataset.speedKph = data.current.wind_kph;

    if (localStorage.getItem("speedUnit") === "kph") {
        windSpeed.textContent = data.current.wind_kph;
    } else if (localStorage.getItem("speedUnit") === "mph") {
        windSpeed.textContent = data.current.wind_mph;
    }

    // Set chance of rain
    const chanceOfRain = document.querySelector("[data-chance-of-rain]");
    chanceOfRain.textContent = data.forecast.forecastday[0].day.daily_chance_of_rain;

    const UVIndex = document.querySelector("[data-uv-index]");
    UVIndex.textContent = data.current.uv;
};

export { updateWeatherValues };