<script>
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service.js";

    let events = [];

    onMount(async () => {
        events = await placemarkService.getEvents();
        console.log(events);
    });

    function formatDate(dateString) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('de-DE', options);
    }
</script>


<h1 class="title">Events</h1>

<table class="table is-fullwidth">
    <thead>
        <tr>
            <th>Event</th>
            <th>Description</th>
            <th>Longitude</th>
            <th>Latitude</th>
            <th>Date</th>
        </tr>
    </thead>
    <tbody>
    {#each events as event}
        <tr>
            <td>{event.name}</td>
            <td>{event.description}</td>
            <td>{event.lon}</td>
            <td>{event.lat}</td>
            <td>{formatDate(event.date)}</td>
        </tr>
    {/each}
    </tbody>
</table>
