function convertSpeedValues(currentUnit, newUnit) {
    const windSpeed = document.querySelector("[data-wind-speed]");
    
    if (currentUnit === "mph" && newUnit === "kph") {
        windSpeed.textContent = windSpeed.dataset.speedKph;
    } else if (currentUnit === "kph" && newUnit === "mph") {
        windSpeed.textContent = windSpeed.dataset.speedMph;
    }
}

export { convertSpeedValues };