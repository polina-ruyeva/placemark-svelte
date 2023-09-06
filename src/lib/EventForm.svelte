<script>
    // @ts-nocheck
    import { onMount } from "svelte";
    import { page } from "$app/stores";

    import {placemarkService} from "../services/placemark-service.js";
    import PlacemarkMap from "$lib/PlacemarkMapList.svelte";
    import {goto} from "$app/navigation";
    import WeatherChart from "$lib/WeatherChart.svelte";
    import UploadWidget from "$lib/UploadWidget.svelte";
    import Carousel from 'svelte-carousel'
    import ImageSlide from "$lib/ImageSlide.svelte";

    import { fetchWeather } from "../services/weather-service.js";
    let event;
    let weatherData;
    let report = {};
    let reading;

    let viewData;

    onMount(async () => {
        event = await placemarkService.getEvent($page.params.eventId);

        if (event) {
            weatherData = await fetchWeather(event.lat, event.lon);

            if (weatherData){
                reading = weatherData.current;
                report.code = reading.weather[0].id;
                report.temperature = reading.temp;
                report.windSpeed = reading.wind_speed;
                report.pressure = reading.pressure;
                report.windDirection = reading.wind_deg;

                report.tempTrend = [];
                report.trendLabels = [];
                const trends = weatherData.daily;
                for (let i=0; i<trends.length; i++) {
                    report.tempTrend.push(trends[i].temp.day);
                    const date = new Date(trends[i].dt * 1000);
                    report.trendLabels.push(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}` );
                }
            }

            viewData = {
                title: "Weather Report",
                reading: report
            };
        }
    });

    function formatDate(dateString) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('de-DE', options);
    }

    async function deleteEvent() {
        if (confirm("Delete Event?")) {
            try {
                await placemarkService.deleteEvent(event._id);
                await goto("/dashboard");
            } catch (error) {
                console.error("Error - event deletion:", error);
            }
        }
    }

</script>


<main class="box" style="padding: 50px;">
    <div class="container">
        {#if event}
            <h1 class="custom-heading" >{event.name}</h1>
            <p class="subtitle">{formatDate(event.date)}</p>
            <div class="event-carousel">
                <Carousel autoplay autoplayDuration={5000} arrows={false}>
                    {#each event.image as imageUrl (imageUrl)}
                        <ImageSlide image="{imageUrl}" />
                    {/each}
                </Carousel>
            </div>
            <div class="columns mr-4 ml-4 mt-6">
                <div class="column is-one-third">
                    <h1 class="custom-heading">ABOUT</h1>
                </div>
                <div class="column is-two-thirds">
                    <div class="column">
                        <p class="description-container">{event.description}</p>
                    </div>
                </div>
            </div>

            <div class="columns mr-6 mt-6 mb-6">
                <div class="column is-two-thirds">
                    <PlacemarkMap {event} key={event._id} />
                </div>

                <div class="column is-one-third has-text-right ">
                    <h1 class="custom-heading">WHERE?</h1>
                </div>
            </div>

            {#if event && weatherData}
                <div class="columns ml-4 mt-6">
                    <div class="column is-one-third">
                        <h1 class="custom-heading">WEATHER RIGHT NOW</h1>
                    </div>
                    <div class="column is-two-thirds">
                        <div class="box weather-box">
                            <div class="columns">
                                <div class="column">
                                    <h2 class="title is-4">{reading.weather[0].description}</h2>
                                    <img src="http://openweathermap.org/img/wn/{reading.weather[0].icon}@2x.png">
                                </div>
                                <div class="column">
                                    <h2 class="title is-4">Wind:</h2>
                                    <p>Speed: {reading.wind_speed} m/s</p>
                                    <p>Direction: {reading.wind_deg}°</p>
                                </div>
                                <div class="column">
                                    <h2 class="title is-4">Temperature:</h2>
                                    <p>{reading.temp} °C</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/if}

            <UploadWidget eventid={event._id}/>

        {:else}
            <p>Load Event...</p>
        {/if}
    </div>
    
    <div class="box" id="weather-trend-box">
        {#if event && weatherData}
            <WeatherChart {viewData} />
        {/if}
    </div>


</main>


<button on:click={deleteEvent} class="button is-danger">
    <i class="fas fa-trash" style="margin-right: 5px;"></i>
    <span style="font-weight: normal;">Danger</span>
</button>

<style>
    @import '../styles/fonts.css';


    .custom-heading {
        font-family: "RobotoMono-Regular", cursive;
        font-size: 60px;
    }

    .weather-box {
        border: 2px solid purple;
    }

    #weather-trend-box {
        margin-top: 50px;
    }

    .description-container {
        font-family: "RobotoMono-Regular", cursive;
        font-size: 15px;
        text-align: left;
        line-height: 2;
    }
</style>