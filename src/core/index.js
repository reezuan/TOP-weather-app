import "./style.css";
import { logo } from "../components/logo.js";
import { searchBar } from "../components/searchBar.js";
import { toggleMetric } from "../components/toggleMetric.js";
import { toggleImperial } from "../components/toggleImperial.js";
import { mainWeatherSection } from "../components/mainWeatherSection.js";

(() => {
    const API_KEY = "1e59001d3205403fa8a174857242905";

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
    body.appendChild(footer);
})();