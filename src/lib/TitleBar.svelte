<script>
    import { user } from "../stores.js";
    import {goto} from "$app/navigation";
    export let title = '';
    export let subTitle = '';

    function redirectToHome() {
        goto('/');
    }
</script>

<div class="box">
    <div class="columns m-1">
        <div class="column is-2">
            <i class="fas fa-vihara fa-4x" style="color:rgb(95, 96, 173)" on:click={redirectToHome} />
        </div>
        <div class="column">
            <div class="title is-3">{title}</div>
            <div class="subtitle is-6">{subTitle}</div>
        </div>
        <div class="column is-2">
            <i class="fas fa-user fa-3x" style="color:rgb(95, 96, 173)" />
            {#if $user.email}
                <div class="is-size-7">{$user.email}</div>
            {:else}
                <div class="is-size-7">Please log in</div>
            {/if}
        </div>
    </div>
</div>

<style>
    .column:last-child {
        text-align: center;
    }
</style>

