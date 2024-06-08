import { forecastRow } from "./weekly-forecast/forecastRow.js";

function weeklyForecastSection() {
    const weeklyForecastSection = document.createElement("section");
    weeklyForecastSection.classList.add("weekly-forecast");

    // ----- SECTION HEADING ------------------------------------------
    const sectionHeading = document.createElement("h2");
    sectionHeading.textContent = "Weekly Forecast";

    // ----- CONTAINER FOR FORECAST ROWS ------------------------------
    const forecastList = document.createElement("div");
    forecastList.classList.add("forecast-list");

    for (let i = 1; i <= 7; i++) {
        forecastList.appendChild(forecastRow(i));
    }

    weeklyForecastSection.appendChild(sectionHeading);
    weeklyForecastSection.appendChild(forecastList);
    
    return weeklyForecastSection;
}

export { weeklyForecastSection };