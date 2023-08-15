<script>
    // @ts-nocheck
    import { onMount } from "svelte";

    let widget;

    onMount(() => {
        if ('cloudinary' in window) {
            widget = window.cloudinary.createUploadWidget({
                cloudName: 'drwkr9duz',
                uploadPreset: 'fefoyqcu'
            }, (error, result) => {
                console.log(result);
            });

        }
    });

    function handleClick() {
        if (widget) {
            widget.open();
        }
    }
</script>

<button on:click|preventDefault={handleClick}>Upload</button>