import Humidity from "../../assets/humidity.png";

function humidityCard() {
    const container = document.createElement("div");
    
    // ----- ICON -----------------------------------------------------
    const icon = new Image();
    icon.src = Humidity;

    // ----- TITLE ----------------------------------------------------
    const title = document.createElement("p");
    title.textContent = "Humidity";

    // ----- INFORMATION ----------------------------------------------
    const infoContainer = document.createElement("div");

    const data = document.createElement("span");
    data.setAttribute("data-humidity", "");

    infoContainer.append(data, "%");

    // ----- APPEND TO NODE -------------------------------------------
    container.appendChild(icon);
    container.appendChild(title);
    container.appendChild(infoContainer);
    
    return container;
}

export { humidityCard };