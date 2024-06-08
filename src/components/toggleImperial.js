import { setImperialUnits } from "../utils/setImperialUnits.js";
import { updateWeatherValues } from "../utils/updateWeatherValues.js";
import { handleError } from "../utils/handleError.js";
import { fetchWeatherData } from "../utils/fetchWeatherData.js";

function toggleImperial() {
    const button = document.createElement("button");

    button.classList.add("unit-toggle");
    button.textContent = "°F, mph";

    button.addEventListener("click", () => {
        setImperialUnits();

        fetchWeatherData(localStorage.getItem("lastSearch"))
            .then(data => updateWeatherValues(data))
            .catch(err => handleError(err));
    });

    return button;
}

export { toggleImperial };