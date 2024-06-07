function setCelsiusSymbol() {
    const temperatureSymbols = document.querySelectorAll("[data-temperature-unit]");

    temperatureSymbols.forEach(symbol => {
        localStorage.setItem("temperatureUnit", "celsius");
        symbol.dataset.temperatureUnit = "celsius";
        symbol.textContent = "°C";
    });
}

export { setCelsiusSymbol };