import {writable} from "svelte/store";

export const user = writable({
    email: "",
    token: "",
});

export const latestEvent = writable(null);