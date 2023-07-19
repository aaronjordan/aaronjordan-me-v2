<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { ContentData } from '$lib/types/content';

	export let data: ContentData;
</script>

<Header navigationEntries={data.navigation} />
<slot />
<span />
<Footer />

<style>
	span {
		flex-grow: 1;
	}
</style>
