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
        height: 450px;
    }

    .image-slide img {
        max-width: 100%;
        width: auto;
        height: auto;
        border-radius: 10px;
    }

</style>
