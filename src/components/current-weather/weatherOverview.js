import Sun from "../../assets/sun.png";
import Moon from "../../assets/moon.png";

function weatherOverview() {
    const container = document.createElement("section");
    container.classList.add("current-weather-overview");
    
    // ----- ICON -----------------------------------------------------
    const icon = new Image();
    icon.setAttribute("data-is-day", "");

    // Listens to data attribute change, then changes icon as needed.
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === "attributes") {
                console.log("Day/night changed");

                // Disconnect observer to prevent infinite loop
                observer.disconnect();
                
                if (icon.getAttribute("data-is-day") === "true") {
                    icon.src = Sun;
                } else {
                    icon.src = Moon;
                }

                // Reconnect observer
                observer.observe(icon, {
                    attributes: true
                });
            }
        });
    });

    observer.observe(icon, {
        attributes: true
    });
    
    // ----- CURRENT TEMPERATURE --------------------------------------
    const temperature = document.createElement("span");
    temperature.setAttribute("data-current-temp", "");

    const unit = document.createElement("span");
    unit.setAttribute("data-temperature-unit", "");

    const currentTemp = document.createElement("p");
    currentTemp.append(temperature, unit);
    
    // ----- GENERAL FORECAST -----------------------------------------
    const generalForecast = document.createElement("p");
    generalForecast.setAttribute("data-general-forecast", "");

    container.appendChild(icon);
    container.appendChild(currentTemp);
    container.appendChild(generalForecast);

    return container;
}

export { weatherOverview };