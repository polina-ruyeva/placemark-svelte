<script>
    import Header from "$lib/Header.svelte";
    import MainNavigator from "$lib/MainNavigator.svelte";
    import PlacemarkMap from "$lib/PlacemarkMap.svelte";
    import { onMount } from "svelte";



    onMount(async () => {
        console.log("onMount-------");
    });

</script>

<Header>
    <MainNavigator />
</Header>

<PlacemarkMap />