import { formatDate } from "./formatDate.js";

function updateWeatherValues(data) {
    console.log(data);
    
    // ----- SET LOCATION ---------------------------------------------
    const city = document.querySelector("[data-city]");
    city.textContent = data.location.name;

    const country = document.querySelector("[data-country]");
    country.textContent = data.location.country;

    // ----- SET CURRENT DATE -----------------------------------------
    const dateTimeNow = new Date(data.location.localtime);
    
    const date = document.querySelector("[data-current-date]");
    date.textContent = formatDate(dateTimeNow);

    // ----- SET TIME -------------------------------------------------
    const time = document.querySelector("[data-time-now]");
    const timeString = dateTimeNow.toTimeString();
    time.textContent = `${timeString.substring(0, 2)}:${timeString.substring(3, 5)}`;

    // ----- SET MORNING/NIGHT ICON -----------------------------------
    const timeOfDayIcon = document.querySelector("[data-is-day]");
    timeOfDayIcon.dataset.isDay = data.current.is_day === 1 ? "true" : "false";
    
    // ----- SET CURRENT TEMPERATURE ----------------------------------
    const currentTemp = document.querySelector("[data-current-temp]");
    currentTemp.dataset.temperatureFahrenheit = data.current.temp_f;
    currentTemp.dataset.temperatureCelsius = data.current.temp_c;

    // ----- SET 'FEELS LIKE' TEMPERATURE -----------------------------
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

    // ----- SET GENERAL FORECAST -------------------------------------
    const generalForecast = document.querySelector("[data-general-forecast]");
    generalForecast.textContent = data.current.condition.text;
    
    // ----- SET WIND DIRECTION ---------------------------------------
    const windDirection = document.querySelector("[data-wind-direction]");
    windDirection.textContent = data.current.wind_dir;

    // ----- SET HUMIDITY ---------------------------------------------
    const humidity = document.querySelector("[data-humidity]");
    humidity.textContent = data.current.humidity;

    // ----- SET WIND SPEED -------------------------------------------
    const windSpeed = document.querySelector("[data-wind-speed]");
    windSpeed.dataset.speedMph = data.current.wind_mph;
    windSpeed.dataset.speedKph = data.current.wind_kph;

    if (localStorage.getItem("speedUnit") === "kph") {
        windSpeed.textContent = data.current.wind_kph;
    } else if (localStorage.getItem("speedUnit") === "mph") {
        windSpeed.textContent = data.current.wind_mph;
    }

    // ----- SET CHANCE OF RAIN ---------------------------------------
    const chanceOfRain = document.querySelector("[data-chance-of-rain]");
    chanceOfRain.textContent = data.forecast.forecastday[0].day.daily_chance_of_rain;

    // ----- SET UV INDEX ---------------------------------------------
    const UVIndex = document.querySelector("[data-uv-index]");
    UVIndex.textContent = data.current.uv;

    // ----- SET WEEKLY FORECAST --------------------------------------
    for (let i = 1; i <= 7; i++) {
        const forecastDate = document.querySelector(`[data-forecast-date][data-forecast-day="${i}"]`);
        forecastDate.textContent = formatDate(new Date(data.forecast.forecastday[i].date));
        
        const forecastMaxTemp = document.querySelector(`[data-forecast-max-temp][data-forecast-day="${i}"]`);
        const forecastMinTemp = document.querySelector(`[data-forecast-min-temp][data-forecast-day="${i}"]`);

        if (localStorage.getItem("temperatureUnit") === "celsius") {
            forecastMaxTemp.textContent = data.forecast.forecastday[i].day.maxtemp_c;
            forecastMinTemp.textContent = data.forecast.forecastday[i].day.mintemp_c;
        } else if (localStorage.getItem("temperatureUnit") === "fahrenheit") {
            forecastMaxTemp.textContent = data.forecast.forecastday[i].day.maxtemp_f;
            forecastMinTemp.textContent = data.forecast.forecastday[i].day.mintemp_f;
        }

        const forecastRainChance = document.querySelector(`[data-forecast-rain][data-forecast-day="${i}"]`);
        forecastRainChance.textContent = data.forecast.forecastday[i].day.daily_chance_of_rain;
    }
};

export { updateWeatherValues };