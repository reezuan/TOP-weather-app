import { convertTemperatureValues } from "./convertTemperatureValues.js";
import { convertSpeedValues } from "./convertSpeedValues.js";

function setImperialUnits() {
    const currentTemperatureUnit = localStorage.getItem("temperatureUnit");
    const currentSpeedUnit = localStorage.getItem("speedUnit");
    
    const newTemperatureUnit = "fahrenheit";
    const newSpeedUnit = "mph";

    localStorage.setItem("temperatureUnit", newTemperatureUnit);
    localStorage.setItem("speedUnit", newSpeedUnit);

    const temperatureSymbols = document.querySelectorAll("[data-temperature-unit]");
    temperatureSymbols.forEach(symbol => {
        symbol.dataset.temperatureUnit = newTemperatureUnit;
        symbol.textContent = "°F";
    });

    const speedSymbols = document.querySelectorAll("[data-speed-unit]");
    speedSymbols.forEach(symbol => {
        symbol.dataset.speedUnit = newSpeedUnit;
        symbol.textContent = "mph";
    });

    convertTemperatureValues(currentTemperatureUnit, newTemperatureUnit);
    convertSpeedValues(currentSpeedUnit, newSpeedUnit);
}

export { setImperialUnits };