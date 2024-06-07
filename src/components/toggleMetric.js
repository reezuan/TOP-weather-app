import { setMetricUnits } from "../utils/setMetricUnits.js";

function toggleMetric() {
    const button = document.createElement("button");

    button.classList.add("unit-toggle");
    button.textContent = "°C, km/h";

    button.addEventListener("click", () => {
        setMetricUnits();
    });

    return button;
}

export { toggleMetric };