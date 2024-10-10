<script lang="ts">
	import Clock from './Clock.svelte';
	import DiscordInfo from './DiscordInfo.svelte';
	import SocialLink from './SocialLink.svelte';
	import SpotifyInfo from './SpotifyInfo.svelte';
	import Weather from './Weather.svelte';

	import GitHub from '$lib/components/icons/GitHub.svelte';
	import Envelope from '$lib/components/icons/Envelope.svelte';
	import Linkedin from '$lib/components/icons/Linkedin.svelte';
	import Spotify from '$lib/components/icons/Spotify.svelte';
	import Twitter from '$lib/components/icons/Twitter.svelte';
	import Meta from '$lib/components/Meta.svelte';
</script>

<Meta title="Rival" description="My portfolio and personal website." />

<main class="wrapper fade">
	<h1 class="header">Rival Akmal</h1>

	<p class="mt-4 text-gray-400">
		Hey! I'm <b>Rival</b>, a Full-Stack Web developer from
		<b>Jakarta, Indonesia</b>.
	</p>

	<div class="mt-4 flex gap-6">
		<SocialLink href="https://github.com/rivalakmalll" name="GitHub">
			<GitHub />
		</SocialLink>

		<SocialLink
			href="https://www.linkedin.com/in/rivalakmal"
			name="LinkedIn"
		>
			<Linkedin />
		</SocialLink>

		<SocialLink href="https://twitter.com/rival_akmall7" name="Twitter">
			<Twitter />
		</SocialLink>

		<SocialLink
			href="https://open.spotify.com/user/rivalakmal10?si=166441098de840e0 "
			name="Spotify"
		>
			<Spotify />
		</SocialLink>

		<SocialLink href="mailto:rivalakmal10@gmail" name="Email">
			<Envelope />
		</SocialLink>
	</div>

	<Clock />
	<Weather />

	<DiscordInfo />
	<SpotifyInfo />
</main>
