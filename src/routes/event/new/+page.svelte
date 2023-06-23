<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import Header from "$lib/Header.svelte";
    import MainNavigator from "$lib/MainNavigator.svelte";
    import {placemarkService} from "../../../services/placemark-service.js";
    import {goto} from "$app/navigation";

    let lat = $page.url.searchParams.get('lat');
    let lon = $page.url.searchParams.get('lon');
    let event = {
        name: '',
        description: '',
        date: ''
    };
    let categories = [];

    onMount(async () => {
        categories = await placemarkService.getCategories();
    });

    async function handleSubmit() {
        event.lat = lat;
        event.lon = lon;
        await placemarkService.createEvent(event).then(() => {
            goto('/map');
        });
    }

</script>

<Header>
    <MainNavigator />
</Header>


<h2 class="title">New Event</h2>
<p class="subtitle">Fill in the information to create new event</p>

<div class="box">
    <form on:submit={handleSubmit}>
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" bind:value={event.name} required />
            </div>
        </div>

        <div class="field is-grouped">
            <div class="control">
                <label class="label">Date</label>
                <input class="input" type="date" bind:value={event.date} required />
            </div>
            <div class="control">
                <label class="label">Category</label>
                <div class="select">
                    <select bind:value={event.categoryid}>
                        {#each categories as category}
                            <option value={category._id}>{category.name}</option>
                        {/each}
                    </select>
                </div>
            </div>
        </div>

        <div class="field">
            <label class="label">Description</label>
            <div class="control">
                <textarea class="textarea" bind:value={event.description} required></textarea>
            </div>
        </div>

        <div class="field">
            <div class="control">
                <button class="button is-primary" type="submit">Create</button>
            </div>
        </div>
    </form>
</div>