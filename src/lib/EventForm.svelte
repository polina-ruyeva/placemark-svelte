<script>
import { onMount } from "svelte";
import { page } from "$app/stores";

import {placemarkService} from "../services/placemark-service.js";
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
                <p><strong>Datum:</strong> {formatDate(event.date)}</p>
                <p><strong>Beschreibung:</strong> {event.description}</p>
            </div>
        {:else}
            <p>Lade Event...</p>
        {/if}
    </div>
</main>