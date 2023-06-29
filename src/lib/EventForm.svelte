<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";

    import {placemarkService} from "../services/placemark-service.js";
    import PlacemarkMap from "$lib/PlacemarkMapList.svelte";
    import {goto} from "$app/navigation";

    import { fetchWeather } from "../services/weather-service.js";
    let event;
    let weatherData;

    onMount(async () => {
        event = await placemarkService.getEvent($page.params.eventId);

        if (event) {
            weatherData = await fetchWeather(event.lat, event.lon);

        }
    });

    function formatDate(dateString) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('de-DE', options);
    }


    async function deleteEvent() {
        if (confirm("Delete Event?")) {
            try {
                await placemarkService.deleteEvent(event._id);
                await goto("/dashboard");
            } catch (error) {
                console.error("Error - event deletion:", error);
            }
        }
    }

</script>


<main class="box" style="padding: 50px;">
    <div class="container">
        {#if event}
            <h1 class="title">{event.name}</h1>
            <div class="content">
                <div class="columns">
                    <div class="column is-three-fifths">
                        <p class="subtitle">{formatDate(event.date)}</p>
                        <p>{event.description}</p>
                        {#if event && weatherData}
                            <div class="box weather-box">
                                <div class="columns">
                                    <div class="column">
                                        <h2 class="title is-4">{weatherData.weather[0].description}</h2>
                                        <img src="http://openweathermap.org/img/wn/{weatherData.weather[0].icon}@2x.png">
                                    </div>
                                    <div class="column">
                                        <h2 class="title is-4">Wind:</h2>
                                        <p>Speed: {weatherData.wind.speed} m/s</p>
                                        <p>Direction: {weatherData.wind.deg}°</p>
                                    </div>
                                    <div class="column">
                                        <h2 class="title is-4">Temperature:</h2>
                                        <p>{weatherData.main.temp} °K</p>
                                    </div>
                                </div>
                            </div>
                        {/if}
                    </div>
                    {#if event.image}
                        <div class="column">
                            <figure class="image">
                                <img class="event-image" src="{event.image}" alt="Event Image">
                            </figure>
                        </div>
                    {/if}
                </div>
                <PlacemarkMap {event} key={event._id} />
            </div>
        {:else}
            <p>Load Event...</p>
        {/if}
    </div>
</main>

<button on:click={deleteEvent} class="button is-danger">
    <i class="fas fa-trash" style="margin-right: 5px;"></i>
    <span style="font-weight: normal;">Danger</span>
</button>

<style>
    .weather-box {
        border: 2px solid purple;
    }
</style>