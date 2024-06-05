function buildRealtimeRequestUrl(key, query) {
    const baseUrl = "http://api.weatherapi.com/v1";
    const apiMethod = "/current.json";
    const keyParameter = `key=${key}`;
    const queryParameter = `q=${query}`;
    
    return `${baseUrl}${apiMethod}?${keyParameter}&${queryParameter}`;
}

export { buildRealtimeRequestUrl };