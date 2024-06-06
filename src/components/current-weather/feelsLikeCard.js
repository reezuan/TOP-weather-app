import Thermometer from "../../assets/thermometer.png";

function feelsLikeCard() {
    const container = document.createElement("div");
    container.classList.add("current-weather-details");
    
    // ----- ICON -----------------------------------------------------
    const icon = new Image();
    icon.src = Thermometer;

    // ----- TITLE ----------------------------------------------------
    const title = document.createElement("p");
    title.textContent = "Feels like";

    // ----- INFORMATION ----------------------------------------------
    const infoContainer = document.createElement("div");

    const data = document.createElement("span");
    data.setAttribute("data-feels-like", "");

    const unit = document.createElement("span");
    unit.setAttribute("data-temperature-unit", "");

    infoContainer.append(data, unit);

    // ----- APPEND TO NODE -------------------------------------------
    container.appendChild(icon);
    container.appendChild(title);
    container.appendChild(infoContainer);
    
    return container;
}

export { feelsLikeCard };