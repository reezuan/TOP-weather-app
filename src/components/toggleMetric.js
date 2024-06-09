import { setMetricUnits } from "../utils/setMetricUnits.js";
import { updateWeatherValues } from "../utils/updateWeatherValues.js";
import { handleError } from "../utils/handleError.js";
import { fetchWeatherData } from "../utils/fetchWeatherData.js";

function toggleMetric() {
    const button = document.createElement("button");
    button.textContent = "°C, km/h";
    button.classList.add("unit-toggle");

    if (localStorage.getItem("measurementSystem") === "metric" || !localStorage.getItem("measurementSystem")) {
        button.classList.add("active");
    }

    button.addEventListener("click", () => {
        setMetricUnits();

        const currentActiveButton = document.querySelector(".unit-toggle.active");
        currentActiveButton.classList.remove("active");

        button.classList.add("active");

        fetchWeatherData(localStorage.getItem("lastSearch"))
            .then(data => updateWeatherValues(data))
            .catch(err => handleError(err));
    });

    return button;
}

export { toggleMetric };