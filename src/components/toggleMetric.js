import { setMetricUnits } from "../utils/setMetricUnits.js";
import { updateWeatherValues } from "../utils/updateWeatherValues.js";
import { handleError } from "../utils/handleError.js";
import { fetchWeatherData } from "../utils/fetchWeatherData.js";

function toggleMetric() {
    const button = document.createElement("button");

    button.classList.add("unit-toggle");
    button.textContent = "°C, km/h";

    button.addEventListener("click", () => {
        setMetricUnits();

        fetchWeatherData(localStorage.getItem("lastSearch"))
            .then(data => updateWeatherValues(data))
            .catch(err => handleError(err));
    });

    return button;
}

export { toggleMetric };