import Rain from "../../assets/rain.png";

function forecastRow(daysAfterCurrent) {
    const row = document.createElement("div");
    row.classList.add("forecast-item");

    // --------------- DATE ---------------
    const date = document.createElement("p");
    date.setAttribute("data-forecast-date", "");
    date.setAttribute("data-forecast-day", daysAfterCurrent);
    
    // --------------- MAX TEMP ---------------
    const maxTemp = document.createElement("p");
    
    const maxTempValue = document.createElement("span");
    maxTempValue.setAttribute("data-forecast-max-temp", "");
    maxTempValue.setAttribute("data-forecast-day", daysAfterCurrent);

    const maxTempUnit = document.createElement("span");
    maxTempUnit.setAttribute("data-temperature-unit", "");

    maxTemp.append(maxTempValue, maxTempUnit);
    
    // --------------- MIN TEMP ---------------
    const minTemp = document.createElement("p");

    const minTempValue = document.createElement("span");
    minTempValue.setAttribute("data-forecast-min-temp", "");
    minTempValue.setAttribute("data-forecast-day", daysAfterCurrent);

    const minTempUnit = document.createElement("span");
    minTempUnit.setAttribute("data-temperature-unit", "");

    minTemp.append(minTempValue, minTempUnit);
    
    // --------------- CHANCE OF RAIN ---------------
    const rainInfoContainer = document.createElement("div");
    rainInfoContainer.classList.add("rain-forecast");

    const rainIcon = new Image();
    rainIcon.src = Rain;
    
    const chanceOfRain = document.createElement("p");
    const chanceOfRainData = document.createElement("span");
    chanceOfRainData.setAttribute("data-forecast-rain", "");
    chanceOfRainData.setAttribute("data-forecast-day", daysAfterCurrent);
    chanceOfRain.append(chanceOfRainData, "%");

    rainInfoContainer.appendChild(rainIcon);
    rainInfoContainer.appendChild(chanceOfRain);

    // ---------------------------------------
    row.appendChild(date);
    row.appendChild(maxTemp);
    row.appendChild(minTemp);
    row.appendChild(rainInfoContainer);
    
    return row;
}

export { forecastRow };