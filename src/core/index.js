import "./style.css";
import { logo } from "../components/logo.js";
import { searchBar } from "../components/searchBar.js";
import { toggleMetric } from "../components/toggleMetric.js";
import { toggleImperial } from "../components/toggleImperial.js";
import { mainWeatherSection } from "../components/mainWeatherSection.js";
import { updateWeatherValues } from "../utils/updateWeatherValues.js";
import { fetchWeatherData } from "../utils/fetchWeatherData.js";
import { handleError } from "../utils/handleError.js";

(() => {
    const body = document.querySelector("body");
    
    const header = document.createElement("header");
    const toggleButtonsContainer = document.createElement("div");
    toggleButtonsContainer.appendChild(toggleMetric());
    toggleButtonsContainer.appendChild(toggleImperial());
    header.appendChild(logo());
    header.appendChild(searchBar());
    header.appendChild(toggleButtonsContainer);
    
    const footer = document.createElement("footer");

    if (!localStorage.getItem("lastSearch")) {
        fetchWeatherData("Singapore")
            .then(data => updateWeatherValues(data))
            .catch(err => handleError(err));
    } else {
        fetchWeatherData(localStorage.getItem("lastSearch"))
            .then(data => updateWeatherValues(data))
            .catch(err => handleError(err));
    }

    body.appendChild(header);
    body.appendChild(mainWeatherSection());
    body.appendChild(footer);
})();