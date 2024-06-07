import { fetchForecastWeather } from "../utils/fetchForecastWeather.js";
import { handleError } from "../utils/handleError.js";
import { updatePage } from "../utils/updatePage.js";

function searchBar() {
    const searchBar = document.createElement("div");
    const form = document.createElement("form");
    const input = document.createElement("input");

    searchBar.classList.add("search-bar");

    form.appendChild(input);
    searchBar.appendChild(form);

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        fetchForecastWeather(input.value)
            .then(data => updatePage(data))
            .catch(err => handleError(err));
    });

    return searchBar;
}

export { searchBar };