import { buildForecastRequestUrl } from "../api-functions/buildForecastRequestUrl.js";
import { displayLoader } from "./displayLoader.js";
import { hideLoader } from "./hideLoader.js";
import { showMainContent } from "./showMainContent.js";
import { hideMainContent } from "./hideMainContent.js";

async function fetchWeatherData(query, key = "de15c36e45774dabab033138241306", numberOfDays = 8) {
    try {
        displayLoader();
        hideMainContent();

        const requestUrl = buildForecastRequestUrl(key, query, numberOfDays);
        const response = await fetch(requestUrl, {mode: "cors"});
        const responseJSON = await response.json();

        if (response.ok) {
            localStorage.setItem("lastSearch", query);
            return responseJSON;
        } else {
            hideLoader();
            showMainContent();
            throw responseJSON;
        }
    } catch (err) {
        hideLoader();
        showMainContent();
        throw err;
    }
};

export { fetchWeatherData };