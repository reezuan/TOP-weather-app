import "./style.css";
import { logo } from "../components/logo.js";
import { searchBar } from "../components/searchBar.js";
import { fetchCurrentWeather } from "../utils/fetchCurrentWeather.js";
import { fetchForecastWeather } from "../utils/fetchForecastWeather.js";

(() => {
    const API_KEY = "1e59001d3205403fa8a174857242905";

    // fetchCurrentWeather(API_KEY, "Singapore")
    //     .then(data => console.log(data))
    //     .catch(err => handleError(err));

    // fetchForecastWeather(API_KEY, "Singapore", 10)
    //     .then(data => console.log(data))
    //     .catch(err => handleError(err));

    const body = document.querySelector("body");
    
    const header = document.createElement("header");
    const section = document.createElement("section");
    const footer = document.createElement("footer");

    header.appendChild(logo());
    header.appendChild(searchBar());

    body.appendChild(header);
    body.appendChild(section);
    body.appendChild(footer);
})();