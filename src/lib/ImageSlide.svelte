<script>
    export let image;
</script>

<div class="image-slide">
    <img src={image} alt="Slide Image">
</div>

<style>
    .image-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .image-slide img {
        max-width: 100%;
        max-height: 100%;
    }
</style>
