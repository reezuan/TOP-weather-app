import "./style.css";
import { logo } from "../components/logo.js";
import { searchBar } from "../components/searchBar.js";
import { toggleMetric } from "../components/toggleMetric.js";
import { toggleImperial } from "../components/toggleImperial.js";
import { mainWeatherSection } from "../components/mainWeatherSection.js";
import { updateWeatherValues } from "../utils/updateWeatherValues.js";
import { fetchWeatherData } from "../utils/fetchWeatherData.js";
import { handleError } from "../utils/handleError.js";
import { loadingAnimation } from "../components/loadingAnimation.js";
import { setDefaults } from "../utils/setDefaults.js";

(() => {
    // Set default search & measurement system if user visits for the first time.
    setDefaults();

    // Construct webpage.
    const body = document.querySelector("body");
    
    const header = document.createElement("header");
    const toggleButtonsContainer = document.createElement("div");
    toggleButtonsContainer.appendChild(toggleMetric());
    toggleButtonsContainer.appendChild(toggleImperial());
    header.appendChild(logo());
    header.appendChild(searchBar());
    header.appendChild(toggleButtonsContainer);
    
    const footer = document.createElement("footer");

    body.appendChild(header);
    body.appendChild(mainWeatherSection());
    body.appendChild(loadingAnimation());
    body.appendChild(footer);

    // Populate page with weather data.
    fetchWeatherData(localStorage.getItem("lastSearch"))
        .then(data => updateWeatherValues(data))
        .catch(err => handleError(err));
})();