import { convertTemperatureValues } from "./convertTemperatureValues.js";

function setMetricUnits() {
    const currentTemperatureUnit = localStorage.getItem("temperatureUnit");
    const currentSpeedUnit = localStorage.getItem("speedUnit");
    
    const newTemperatureUnit = "celsius";
    const newSpeedUnit = "km/h";

    localStorage.setItem("temperatureUnit", newTemperatureUnit);
    localStorage.setItem("speedUnit", newSpeedUnit);
    
    const temperatureSymbols = document.querySelectorAll("[data-temperature-unit]");
    temperatureSymbols.forEach(symbol => {
        symbol.dataset.temperatureUnit = newTemperatureUnit;
        symbol.textContent = "°C";
    });

    const speedSymbols = document.querySelectorAll("[data-speed-unit]");
    speedSymbols.forEach(symbol => {
        symbol.dataset.speedUnit = newSpeedUnit;
        symbol.textContent = "km/h";
    });

    convertTemperatureValues(currentTemperatureUnit, currentSpeedUnit);
}

export { setMetricUnits };