import Rain from "../../assets/rain.png";

function chanceOfRainCard() {
    const container = document.createElement("div");
    
    // ----- ICON -----------------------------------------------------
    const icon = new Image();
    icon.src = Rain;

    // ----- TITLE ----------------------------------------------------
    const title = document.createElement("p");
    title.textContent = "Chance of rain";

    // ----- INFORMATION ----------------------------------------------
    const infoContainer = document.createElement("div");

    const data = document.createElement("span");
    data.setAttribute("data-chance-of-rain", "");

    infoContainer.append(data, "%");

    // ----- APPEND TO NODE -------------------------------------------
    container.appendChild(icon);
    container.appendChild(title);
    container.appendChild(infoContainer);
    
    return container;
}

export { chanceOfRainCard };