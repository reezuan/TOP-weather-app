import "./style.css";
import { logo } from "../components/logo.js";
import { searchBar } from "../components/searchBar.js";
import { toggleCelsius } from "../components/toggleCelsius.js";
import { toggleFahrenheit } from "../components/toggleFahrenheit.js";
import { weatherSection } from "../components/weatherCard.js";
import { fetchCurrentWeather } from "../utils/fetchCurrentWeather.js";
import { fetchForecastWeather } from "../utils/fetchForecastWeather.js";

(() => {
    const API_KEY = "1e59001d3205403fa8a174857242905";

    const body = document.querySelector("body");
    
    const header = document.createElement("header");
    const toggleButtonsContainer = document.createElement("div");
    toggleButtonsContainer.appendChild(toggleCelsius());
    toggleButtonsContainer.appendChild(toggleFahrenheit());
    header.appendChild(logo());
    header.appendChild(searchBar());
    header.appendChild(toggleButtonsContainer);
    
    const footer = document.createElement("footer");

    body.appendChild(header);
    body.appendChild(weatherSection());
    body.appendChild(footer);
})();