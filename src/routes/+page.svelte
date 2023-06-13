<script>
    import Header from '$lib/Header.svelte';
</script>

<Header />

<div class="columns is-vcentered content">
    <div class="column has-text-centered">
        <div class="image-container">
            <img src="/welcome.jpg" alt="welcome" class="blur-image"/>
            <h1 class="image-text">Welcome to Evento</h1>
        </div>
    </div>
</div>

<style>
    .image-container {
        position: relative;
    }

    .image-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 50px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    }

    .blur-image {
        filter: blur(3px);
    }
</style>