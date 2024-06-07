function setFahrenheitSymbol() {
    const temperatureSymbols = document.querySelectorAll("[data-temperature-unit]");

    temperatureSymbols.forEach(symbol => {
        localStorage.setItem("temperatureUnit", "fahrenheit");
        symbol.dataset.temperatureUnit = "fahrenheit";
        symbol.textContent = "°F";
    });
}

export { setFahrenheitSymbol };