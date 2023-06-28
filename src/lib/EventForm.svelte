<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { fetchWeather } from "../services/weather-service.js";
    //import "weather-icons/css/weather-icons.css";
    import {placemarkService} from "../services/placemark-service.js";
    import PlacemarkMap from "$lib/PlacemarkMapList.svelte";
    import {goto} from "$app/navigation";

    import "weather-icons-master/css/weather-icons.css";

let event;
    let weather;

    onMount(async () => {
        event = await placemarkService.getEvent($page.params.eventId);

        if (event) {
            weather = await fetchWeather(event.lat, event.lon);

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

<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/weather-icons/css/weather-icons.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/weather-icons/css/weather-icons-wind.min.css">

</head>

<main class="box" style="padding: 50px;">
    <div class="container">
        {#if event}
            <h1 class="title">{event.name}</h1>
            <div class="content">
                <div class="columns">
                    <div class="column is-three-fifths">
                        <p class="subtitle">{formatDate(event.date)}</p>
                        <p>{event.description}</p>
                        {#if event && weather}
                            <h2 class="title is-4"> {weather.description}</h2>
                            <i class="wi wi-owm-{weather.id} weather-icon is-size-1"></i>
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