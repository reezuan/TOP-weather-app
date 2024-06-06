import WindSpeed from "../../assets/wind-speed.png";

function windSpeedCard() {
    const container = document.createElement("div");
    
    // ----- ICON -----------------------------------------------------
    const icon = new Image();
    icon.src = WindSpeed;

    // ----- TITLE ----------------------------------------------------
    const title = document.createElement("p");
    title.textContent = "Wind speed";

    // ----- INFORMATION ----------------------------------------------
    const infoContainer = document.createElement("div");

    const data = document.createElement("span");
    data.setAttribute("data-wind-speed", "");

    const unit = document.createElement("span");
    unit.setAttribute("data-speed-unit", "");

    infoContainer.append(data, unit);

    // ----- APPEND TO NODE -------------------------------------------
    container.appendChild(icon);
    container.appendChild(title);
    container.appendChild(infoContainer);
    
    return container;
}

export { windSpeedCard };