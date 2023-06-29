<script>
    import { onMount } from "svelte";
    export let viewData;

    onMount(() => {
        if (viewData) {
            const data = {
                labels: [
                    ...viewData.reading.trendLabels
                ],
                datasets: [
                    {
                        name: "Temperature",
                        type: "line",
                        values: [
                            ...viewData.reading.tempTrend
                        ]
                    }
                ]
            };

            new frappe.Chart("#chart", {
                title: "Temperature Trend",
                data: data,
                type: "line",
                height: 250
            });
        }
    });
</script>

<div class="ui segment" id="chart"></div>

