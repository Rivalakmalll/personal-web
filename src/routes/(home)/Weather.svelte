<script lang="ts">
	import { onMount } from 'svelte';
	import type { WeatherResponse } from '$lib/types';
	import Cloud from '$lib/components/icons/Cloud.svelte';

	let data: WeatherResponse | undefined;
	const apiKey = '3e70984fc4d9b8d73c63a8211c3290c7'; // Replace with your OpenWeather API key
	const city = 'Jakarta'; // City to display

	const fetchWeather = () => {
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
			.then(res => res.json())
			.then(res => {
				data = res;
			})
			.catch(err => console.error('Error fetching weather data:', err));
	};

	onMount(() => {
		fetchWeather(); // Fetch weather data on initial load
		const interval = setInterval(fetchWeather, 60000); // Update every 60 seconds
		return () => clearInterval(interval); // Clean up interval on component destroy
	});

	const names: Record<string, string> = {
		'clear sky': 'clear sky',
		'few clouds': 'few clouds',
		'scattered clouds': 'scattered clouds',
		'broken clouds': 'broken clouds',
		'shower rain': 'shower rain',
		rain: 'rain',
		thunderstorm: 'thunderstorm',
		snow: 'snow',
		mist: 'mist'
	};
</script>

<p class="mt-2 flex text-sm gap-2 items-center text-white">
	<Cloud />

	<span>
		{#if data}
			The current temperature is
			<b>{data.main.temp.toFixed(0)} °C</b> with
			{names[data.weather[0].description] ?? data.weather[0].description}
			in
			<b>{data.name}</b>.
		{:else}
			In <b>{city}</b>
		{/if}
	</span>
</p>

<style lang="postcss">
	b {
		@apply font-semibold;
	}
</style>
