<script>
import { onMount } from "svelte";
import { page } from "$app/stores";

import {placemarkService} from "../services/placemark-service.js";
import PlacemarkMap from "$lib/PlacemarkMapList.svelte";
let event;

onMount(async () => {
    event = await placemarkService.getEvent($page.params.eventId);

});

function formatDate(dateString) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', options);
}

</script>


<main class="box">
    <div class="container">
        {#if event}
            <h1 class="title">{event.name}</h1>
            <div class="content">
                <div class="columns">
                    <div class="column is-three-fifths">
                        <p class="subtitle">{formatDate(event.date)}</p>
                        <p>{event.description}</p>
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
