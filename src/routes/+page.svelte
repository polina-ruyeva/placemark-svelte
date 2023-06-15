<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    import Header from '$lib/Header.svelte';
    import WelcomeNavigator from '$lib/WelcomeNavigator.svelte';
    import MainNavigator from '$lib/MainNavigator.svelte';
    import WelcomeForm from "$lib/WelcomeForm.svelte";

    let userLoggedIn = false;

    onMount(() => {
        console.log(localStorage);
        if (localStorage.cred) {
            goto('/map');
        }
    });

    function navigateToMap() {
        goto('/map');
    }
</script>

<Header>
    {#if userLoggedIn}
        <MainNavigator on:mapClick={navigateToMap} />
    {:else}
        <WelcomeNavigator />
    {/if}
</Header>


<WelcomeForm />

