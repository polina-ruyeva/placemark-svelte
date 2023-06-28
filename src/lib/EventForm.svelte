<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";

    import {placemarkService} from "../services/placemark-service.js";
    import PlacemarkMap from "$lib/PlacemarkMapList.svelte";
    import {goto} from "$app/navigation";
    let event;

    onMount(async () => {
        event = await placemarkService.getEvent($page.params.eventId);
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
                        <button on:click={deleteEvent} class="button is-danger">
                            <i class="fas fa-trash"></i>
                        </button>
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