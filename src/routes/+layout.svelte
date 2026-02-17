<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Primeheader from '$lib/components/primeheader.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Primeheader></Primeheader>

{@render children()}
<h1>Footer</h1>
