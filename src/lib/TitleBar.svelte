<script>
    import { user } from "../stores.js";
    export let title = '';
    export let subTitle = '';
</script>

<div class="columns m-1">
    <div class="column ml-5 is-1">
        <i class="fas fa-vihara fa-4x" style="color:rgb(95, 96, 173)" />
    </div>
    <div class="column ml-6">
        <div class="title is-3">{title}</div>
        <div class="subtitle is-6">{subTitle}</div>
    </div>
    <div class="column">
        <i class="fas fa-user fa-3x" style="color:rgb(95, 96, 173)" />
        {#if $user.email}
            <div class="is-size-7">{$user.email}</div>
        {:else}
            <div class="is-size-7">Please log in</div>
        {/if}
    </div>
</div>

<style>
    .column:last-child {
        text-align: right;
    }
</style>

