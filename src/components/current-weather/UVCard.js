import SunRays from "../../assets/sun-rays.png";

function UVCard() {
    const container = document.createElement("div");
    container.classList.add("current-weather-details");
    
    // ----- ICON -----------------------------------------------------
    const icon = new Image();
    icon.src = SunRays;

    // ----- TITLE ----------------------------------------------------
    const title = document.createElement("p");
    title.textContent = "UV index";

    // ----- INFORMATION ----------------------------------------------
    const data = document.createElement("span");
    data.setAttribute("data-uv-index", "");

    // ----- APPEND TO NODE -------------------------------------------
    container.appendChild(icon);
    container.appendChild(title);
    container.appendChild(data);
    
    return container;
}

export { UVCard };