function buildForecastRequestUrl(key, query, numberOfDays) {
    const baseUrl = "https://api.weatherapi.com/v1";
    const apiMethod = "/forecast.json";
    const keyParameter = `key=${key}`;
    const queryParameter = `q=${query}`;
    const daysParameter = `days=${numberOfDays}`;
    
    return `${baseUrl}${apiMethod}?${keyParameter}&${queryParameter}&${daysParameter}`;
}

export { buildForecastRequestUrl };