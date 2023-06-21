<script>
import { onMount } from "svelte";
import { page } from "$app/stores";

import {placemarkService} from "../services/placemark-service.js";
let event;

onMount(async () => {
    event = await placemarkService.getEvent($page.params.eventId);

});

</script>