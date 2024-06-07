import { convertTemperatureValues } from "./convertTemperatureValues.js";

function setFahrenheitSymbol() {
    const currentUnit = localStorage.getItem("temperatureUnit");
    const newUnit = "fahrenheit";

    localStorage.setItem("temperatureUnit", newUnit);

    const temperatureSymbols = document.querySelectorAll("[data-temperature-unit]");
    temperatureSymbols.forEach(symbol => {
        symbol.dataset.temperatureUnit = newUnit;
        symbol.textContent = "°F";
    });

    convertTemperatureValues(currentUnit, newUnit);
}

export { setFahrenheitSymbol };