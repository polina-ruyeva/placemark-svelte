<script>
    import {afterUpdate, createEventDispatcher, onMount} from "svelte";
    import { placemarkService } from "../services/placemark-service.js";
    import PlacemarkMap from "./PlacemarkMapList.svelte";
    const dispatch = createEventDispatcher();

    let events = [];
    let categories = [];
    let selectedCategory = "";
    let filteredEvents = [];

    onMount(async () => {
        events = await placemarkService.getEvents();
        console.log("Events:");
        console.log(events);
        categories = await placemarkService.getCategories();
        console.log(categories);
        filteredEvents = events;
    });

    function formatDate(dateString) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('de-DE', options);
    }

    function filterEvents() {
        if (selectedCategory === "") {
            return events;
        }
        return events.filter(event => event.categoryid === selectedCategory);
    }

    afterUpdate(() => {
        if (events.length > 0 && categories.length > 0) {
            filteredEvents = filterEvents();
        }
    });

    function updateList() { // Filter events based on selected category
        filteredEvents = filterEvents();
        dispatch("updateList", filteredEvents); // Dispatch the updated list to the parent component
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


<label class="label" for="category-select">Select Category:</label>
<div class="control">
    <div class="select">
        <select id="category-select" class="input" bind:value={selectedCategory} on:change={updateList}>
            <option value="">All</option>
            {#each categories as category}
                <option value="{category._id}">{category.name}</option>
            {/each}
        </select>
    </div>
</div>

<div class="tile is-ancestor">
    {#each filteredEvents as event (event._id)}
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
                <PlacemarkMap {event} key={event._id} />
            </article>
        </div>
    {/each}
</div>

