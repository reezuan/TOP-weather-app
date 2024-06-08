import { buildForecastRequestUrl } from "../api-functions/buildForecastRequestUrl.js";

async function fetchWeatherData(query, key = "1e59001d3205403fa8a174857242905", numberOfDays = 8) {
    try {
        const requestUrl = buildForecastRequestUrl(key, query, numberOfDays);
        const response = await fetch(requestUrl, {mode: "cors"});
        const responseJSON = await response.json();

        if (response.ok) {
            localStorage.setItem("lastSearch", query);
            return responseJSON;
        } else {
            throw responseJSON;
        }
    } catch (err) {
        throw err;
    }
};

export { fetchWeatherData };