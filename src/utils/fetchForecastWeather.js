import { buildForecastRequestUrl } from "../api-functions/buildForecastRequestUrl.js";

async function fetchForecastWeather(key, city, numberOfDays) {
    try {
        const requestUrl = buildForecastRequestUrl(key, city, numberOfDays);
        const response = await fetch(requestUrl, {mode: "cors"});
        const responseJSON = await response.json();

        if (response.ok) {
            return responseJSON;
        } else {
            throw responseJSON;
        }
    } catch (err) {
        throw err;
    }
};

export { fetchForecastWeather };