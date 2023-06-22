<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';

    let lat = $page.url.searchParams.get('lat');
    let lon = $page.url.searchParams.get('lon');

    console.log(lat, lon);

    onMount(() => {

    });
</script>


