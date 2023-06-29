// @ts-ignore
export async function fetchWeather(lat, lon) {
    const apiKey = "9562303699afeed5479d26d8b8dc9e09";
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log("Weather response:", data);

        if (response.ok) {
            return data;
        } else {
            console.error("Error response:", data.message);
            return null;
        }
    } catch (error) {
        console.error("Error response:", error);
        return null;
    }
}
