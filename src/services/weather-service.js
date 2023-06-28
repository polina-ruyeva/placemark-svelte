// @ts-ignore
export async function fetchWeather(lat, lon) {
    const apiKey = "9562303699afeed5479d26d8b8dc9e09";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            console.log("Weather responce:", data.weather[0]);
            return data.weather[0];
        } else {
            console.error("Error responce:", data.message);
            return null;
        }
    } catch (error) {
        console.error("Error responce:", error);
        return null;
    }
}
