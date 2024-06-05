import { buildRealtimeRequestUrl } from "../api-functions/buildRealtimeRequestUrl.js";

async function fetchCurrentWeather(key, city) {
    try {
        const requestUrl = buildRealtimeRequestUrl(key, city);
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

export { fetchCurrentWeather };