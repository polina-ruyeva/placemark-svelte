<script>
    import { beforeUpdate } from "svelte";
    import { placemarkService } from "../services/placemark-service.js";

    beforeUpdate(() => {
        placemarkService.reload();
    });
</script>

<div class="container">
    <slot />
</div>
