<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import Project from './Project.svelte';
</script>

<Meta title="Projects" description="My projects." />

<main class="wrapper fade">
	<h1 class="header">Projects</h1>

	<p class="mt-4 mb-8 text-gray-400">Some of my projects.</p>

	<Project
		name="Personal Website V1"
		href="https://rivalakmalll.netlify.app/"
		src="/images/projects/Website-V1.png"
	>
		My first website featuring a modern design and presenting various content.
		This was the initial project I created for my portfolio needs.
	</Project>

	<Project
		name="Protofolio Website"
		href="https://rivalakmal.netlify.app/"
		src="/images/projects/Website-V2.png"
	>
		My second website, which is more advanced and modern, featuring new
		capabilities that enhance user experience. Discover an engaging design
		and intuitive functionality, perfect for various timed debate formats.
	</Project>
</main>
