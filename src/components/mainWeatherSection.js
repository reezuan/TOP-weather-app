import { weatherHeading } from "./weatherHeading.js";
import { weatherOverview } from "./current-weather/weatherOverview.js";
import { feelsLikeCard } from "./current-weather/feelsLikeCard.js";
import { chanceOfRainCard } from "./current-weather/chanceOfRainCard.js";
import { humidityCard } from "./current-weather/humidityCard.js";
import { UVCard } from "./current-weather/UVCard.js";
import { windDirectionCard } from "./current-weather/windDirectionCard.js";
import { windSpeedCard } from "./current-weather/windSpeedCard.js";
import { weeklyForecastSection } from "./weeklyForecastSection.js";

function mainWeatherSection() {
    const weatherSection = document.createElement("main");

    // Key information
    const weatherDetails = document.createElement("section");
    weatherDetails.classList.add("current-weather-details");

    weatherDetails.appendChild(feelsLikeCard());
    weatherDetails.appendChild(windDirectionCard());            // Feels like           |       Wind direction
    weatherDetails.appendChild(humidityCard());                 // Humidity             |       Wind speed
    weatherDetails.appendChild(windSpeedCard());                // Chance of rain       |       UV
    weatherDetails.appendChild(chanceOfRainCard());
    weatherDetails.appendChild(UVCard());

    // ----------------------------------------------------------------
    weatherSection.appendChild(weatherHeading());
    weatherSection.appendChild(weatherOverview());
    weatherSection.appendChild(weatherDetails);
    weatherSection.appendChild(weeklyForecastSection());

    return weatherSection;
}

export { mainWeatherSection };