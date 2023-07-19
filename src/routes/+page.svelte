<script lang="ts">
	import HeroImage from '$lib/components/HeroImage.svelte';
	import FunFactCarousel from '$lib/components/FunFactCarousel.svelte';
	import ProjectTile from '$lib/components/ProjectTile.svelte';

	export let data;

	const featuredProjects = data.projects.filter(({ featured }) => featured);
</script>

<HeroImage />
<main class="container">
	<FunFactCarousel />
	{@html data.markdown}
	<article>
		<h2>Featured Projects</h2>
		{#each featuredProjects as project}
			<ProjectTile {project} />
		{/each}
	</article>
</main>

<style>
	h2 {
		padding-bottom: var(--spacing);
		border-bottom: 1px solid var(--muted-border-color);
		margin-bottom: 0;
	}
</style>
