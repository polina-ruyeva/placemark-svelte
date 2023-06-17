<script>
    import TitleBar from './TitleBar.svelte';
    import WelcomeNavigator from './WelcomeNavigator.svelte';
</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar title={'Evento'} subTitle={'stay connected with events effortlessly'} />
    </div>
    <div class="column">
        <slot />
    </div>
</div>
