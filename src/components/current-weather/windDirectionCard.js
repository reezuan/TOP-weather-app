import Compass from "../../assets/cardinal-points.png";

function windDirectionCard() {
    const container = document.createElement("div");
    container.classList.add("current-weather-details");
    
    // ----- ICON -----------------------------------------------------
    const icon = new Image();
    icon.src = Compass;

    // ----- TITLE ----------------------------------------------------
    const title = document.createElement("p");
    title.textContent = "Wind direction";

    // ----- INFORMATION ----------------------------------------------
    const data = document.createElement("span");
    data.setAttribute("data-wind-direction", "");

    // ----- APPEND TO NODE -------------------------------------------
    container.appendChild(icon);
    container.appendChild(title);
    container.appendChild(data);
    
    return container;
}

export { windDirectionCard };