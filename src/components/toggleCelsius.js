import { setCelsiusSymbol } from "../utils/setCelsiusSymbol.js";

function toggleCelsius() {
    const button = document.createElement("button");

    button.classList.add("unit-toggle");
    button.textContent = "°C, m/s";

    button.addEventListener("click", () => {
        setCelsiusSymbol();
    });

    return button;
}

export { toggleCelsius };