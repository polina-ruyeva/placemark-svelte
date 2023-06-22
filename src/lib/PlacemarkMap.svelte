<script>
    import "leaflet/dist/leaflet.css";
    import { LeafletMap } from "../services/leaflet-map";
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service.js";
    import {goto} from "$app/navigation";

    const mapConfig = {
        location: { lat: 49.0139, lng: 12.1016 },
        zoom: 8,
        minZoom: 1
    };
    let map;

    onMount(async () => {
        map = new LeafletMap("placemark-map", mapConfig);
        map.showZoomControl();
        map.addLayerGroup("Placemarks");
        map.showLayerControl();
        const events = await placemarkService.getEvents();
        events.forEach((event) => {
            addEventMarker(map, event);
        });

    });

    function addEventMarker(map, event) {
        const eventStr = `<a href="${getEventLink(event)}"> ${event.name}: <br> ${event.description}</a>`;
        map.addMarker({ lat: event.lat, lng: event.lon }, eventStr, "Events");
        map.moveTo(8, { lat: event.lat, lng: event.lon });
    }

    function getEventLink(event) {
        return(`/event/${event._id}`);
    }




</script>

<div class="box" id="placemark-map" style="height: 75vh" />