function toggleCelsius() {
    const button = document.createElement("button");

    button.classList.add("unit-toggle");
    button.textContent = "°C, m/s";

    return button;
}

export { toggleCelsius };