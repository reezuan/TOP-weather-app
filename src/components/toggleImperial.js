import { setImperialUnits } from "../utils/setImperialUnits.js";

function toggleImperial() {
    const button = document.createElement("button");

    button.classList.add("unit-toggle");
    button.textContent = "°F, mph";

    button.addEventListener("click", () => {
        setImperialUnits();
    });

    return button;
}

export { toggleImperial };