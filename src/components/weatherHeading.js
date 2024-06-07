function weatherHeading() {
    const weatherHeading = document.createElement("section");
    weatherHeading.classList.add("weather-heading");

    // Location
    const location = document.createElement("h2");
    const city = document.createElement("span");
    const country = document.createElement("span");

    city.textContent = "Singapore";
    country.textContent = "Singapore";

    city.setAttribute("data-city", "");
    country.setAttribute("data-country", "");

    location.append(city, ", ", country);

    // Date/time
    const dateTime = document.createElement("p");
    const date = document.createElement("span");
    const timeNow = document.createElement("span");

    date.setAttribute("data-current-date", "");
    timeNow.setAttribute("data-time-now", "");

    dateTime.append(date, " | ", timeNow);

    weatherHeading.appendChild(location);
    weatherHeading.appendChild(dateTime);

    return weatherHeading;
}

export { weatherHeading };