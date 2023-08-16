<script>
    // @ts-nocheck
    import { onMount } from "svelte";
    import { saveImageToDatabase } from "../services/image-service.js";

    export let eventid;

    let widget;

    onMount(() => {
        if ('cloudinary' in window) {
            widget = window.cloudinary.createUploadWidget({
                cloudName: 'drwkr9duz',
                uploadPreset: 'fefoyqcu'
            }, (error, result) => {
                if (!error && result && result.event === "success") {
                    handleSuccess(result);
                }
            });

        }
    });

    async function handleSuccess(result) {
        const imageUrl = result.info.url;
        console.log("Image upload succ:", imageUrl);

        try {
            await saveImageToDatabase(eventid, imageUrl);
            console.log("Image saved to database.");
        } catch (error) {
            console.error("Error saving image to database:", error);
        }
    }

    function handleClick() {
        if (widget) {
            widget.open();
        }
    }
</script>

<button on:click|preventDefault={handleClick}>Upload</button>