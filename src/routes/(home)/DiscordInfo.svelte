<script lang="ts">
	import { useLanyard } from 'sk-lanyard';
	import Discord from '$lib/components/icons/Discord.svelte';
	import { onDestroy } from 'svelte';

	const discordId = '391800933480398850';
	const lanyard = useLanyard({
		method: 'rest',
		id: discordId
	});

	const statusColors: Record<string, string> = {
		online: 'bg-emerald-500',
		idle: 'bg-amber-400',
		dnd: 'bg-rose-400',
		offline: 'bg-gray-600'
	};

	const activityColors: Record<string, string> = {
		0: 'text-blue-500', // Game activity
		2: 'text-green-500', // Streaming activity (e.g., Spotify)
	};

	$: currentActivity = $lanyard?.activities.find(a => (a.type === 0 || a.type === 2) && a.name !== 'Spotify') || null; // Filter out Spotify
	$: displayStatus = currentActivity || { name: 'Now Playing', state: 'No current activity' };
	$: statusColor = currentActivity ? activityColors[currentActivity.type] || 'text-gray-500' : 'text-gray-500';
</script>

<div class="mt-8 flex rounded-full items-center bg-gray-900">
	<div class="relative w-20 h-20 shrink-0 rounded-full">
		{#if $lanyard}
			<object
				data="https://cdn.discordapp.com/avatars/{discordId}/{$lanyard.discord_user.avatar}"
				type="image/png"
				class="w-20 h-20 rounded-full bg-gray-800 text-gray-400 grid place-items-center"
				aria-label="Discord Avatar"
			>
				<Discord />
			</object>

			<span
				class="z-10 absolute w-4 h-4 bottom-1 right-1 rounded-full ring-4 ring-gray-900
					{statusColors[$lanyard.discord_status]}"/>
		{:else}
			<div class="w-20 h-20 rounded-full bg-gray-800 text-gray-400 grid place-items-center">
				<Discord />
			</div>
		{/if}
	</div>

	<div class="ml-4 py-2 pr-6">
		<p class="line-clamp-1 break-all text-gray-400">
			{#if $lanyard}
				<span class="font-semibold text-white">
					{$lanyard.discord_user.display_name}
				</span>
				<span class="ml-1 text-gray-500">
					@{$lanyard.discord_user.username}
				</span>
			{/if}
		</p>

		{#if displayStatus}
			<div class="flex flex-col">
				<span class="text-sm font-semibold">
					{displayStatus.name}
				</span>
				<span class={`text-sm ${statusColor}`}>
					{displayStatus.state}
				</span>
			</div>
		{:else}
			<p class="text-sm text-gray-500">No current activity</p>
		{/if}
	</div>
</div>
