<script>
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service.js";

    let events = [];

    onMount(async () => {
        events = await placemarkService.getEvents();
    });

    function formatDate(dateString) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('de-DE', options);
    }
</script>

<style>
    .tile {
        margin-bottom: 1rem;
    }

    .event-image {
        width: 100%;
        max-height: 200px;
        object-fit: cover;
        border-radius: 4px;
        margin-bottom: 0.5rem;
    }
</style>

<h1 class="title">Events</h1>

<div class="tile is-ancestor">
    {#each events as event}
        <div class="tile is-parent">
            <article class="tile is-child box">
                <h2 class="title is-4">{event.name}</h2>
                <p class="subtitle">{formatDate(event.date)}</p>
                {#if event.image}
                    <figure class="image">
                        <img class="event-image" src="{event.image}" alt="Event Image">
                    </figure>
                {/if}
                <p>{event.description}</p>
                <p>Longitude: {event.lon}</p>
                <p>Latitude: {event.lat}</p>
            </article>
        </div>
    {/each}
</div>
