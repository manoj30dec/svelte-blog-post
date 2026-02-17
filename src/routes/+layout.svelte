<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Primefooter from '$lib/components/primefooter.svelte';
	import Primeheader from '$lib/components/primeheader.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Primeheader></Primeheader>
<main class="main-content">
	{@render children()}
</main>
<Primefooter></Primefooter>
