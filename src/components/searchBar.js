import { fetchWeatherData } from "../utils/fetchWeatherData.js";
import { handleError } from "../utils/handleError.js";
import { updateWeatherValues } from "../utils/updateWeatherValues.js";

function searchBar() {
    const searchBar = document.createElement("div");
    const form = document.createElement("form");
    const input = document.createElement("input");

    searchBar.classList.add("search-bar");

    form.appendChild(input);
    searchBar.appendChild(form);

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        fetchWeatherData(input.value)
            .then(data => updateWeatherValues(data))
            .catch(err => handleError(err));
    });

    return searchBar;
}

export { searchBar };