import { convertTemperatureValues } from "./convertTemperatureValues.js";

function setCelsiusSymbol() {
    const currentUnit = localStorage.getItem("temperatureUnit");
    const newUnit = "celsius";

    localStorage.setItem("temperatureUnit", newUnit);
    
    const temperatureSymbols = document.querySelectorAll("[data-temperature-unit]");
    temperatureSymbols.forEach(symbol => {
        symbol.dataset.temperatureUnit = newUnit;
        symbol.textContent = "°C";
    });

    convertTemperatureValues(currentUnit, newUnit);
}

export { setCelsiusSymbol };