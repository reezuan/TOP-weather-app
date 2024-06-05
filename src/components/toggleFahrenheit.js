function toggleFahrenheit() {
    const button = document.createElement("button");

    button.classList.add("unit-toggle");
    button.textContent = "°F, mph";

    return button;
}

export { toggleFahrenheit };