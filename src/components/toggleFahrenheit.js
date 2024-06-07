import { setFahrenheitSymbol } from "../utils/setFahrenheitSymbol.js";

function toggleFahrenheit() {
    const button = document.createElement("button");

    button.classList.add("unit-toggle");
    button.textContent = "°F, mph";

    button.addEventListener("click", () => {
        setFahrenheitSymbol();
    });

    return button;
}

export { toggleFahrenheit };