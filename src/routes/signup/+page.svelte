<script>
    import Header from '$lib/Header.svelte';
    import WelcomeNavigator from '$lib/WelcomeNavigator.svelte';
    import SignupForm from '$lib/SignupForm.svelte';
</script>

<Header>
    <WelcomeNavigator />
</Header>


<div class="columns">
    <div class="column">
        <SignupForm />
    </div>
</div>
