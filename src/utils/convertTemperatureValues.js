function convertTemperatureValues(currentUnit, newUnit) {
    const currentTemp = document.querySelector("[data-current-temp]");
    const feelsLikeTemp = document.querySelector("[data-feels-like]");
    
    if (currentUnit === "fahrenheit" && newUnit === "celsius") {
        currentTemp.textContent = currentTemp.dataset.temperatureCelsius;
        feelsLikeTemp.textContent = feelsLikeTemp.dataset.temperatureCelsius;
    } else if (currentUnit === "celsius" && newUnit === "fahrenheit") {
        currentTemp.textContent = currentTemp.dataset.temperatureFahrenheit;
        feelsLikeTemp.textContent = feelsLikeTemp.dataset.temperatureFahrenheit;
    }
}

export { convertTemperatureValues };