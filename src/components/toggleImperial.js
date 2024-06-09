import { setImperialUnits } from "../utils/setImperialUnits.js";
import { updateWeatherValues } from "../utils/updateWeatherValues.js";
import { handleError } from "../utils/handleError.js";
import { fetchWeatherData } from "../utils/fetchWeatherData.js";

function toggleImperial() {
    const button = document.createElement("button");
    button.textContent = "°F, mph";
    button.classList.add("unit-toggle");
    
    if (localStorage.getItem("measurementSystem") === "imperial") {
        button.classList.add("active");
    }

    button.addEventListener("click", () => {
        setImperialUnits();

        const currentActiveButton = document.querySelector(".unit-toggle.active");
        currentActiveButton.classList.remove("active");

        button.classList.add("active");

        fetchWeatherData(localStorage.getItem("lastSearch"))
            .then(data => updateWeatherValues(data))
            .catch(err => handleError(err));
    });

    return button;
}

export { toggleImperial };