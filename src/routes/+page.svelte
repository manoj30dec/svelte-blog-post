<script>
    let {data} = $props();
    	import { message } from '$lib/sharedmessage.js';
</script>
<h1>Welcome to home page {data.visited ? 'friend':'stranger'}</h1>
<h2 style="background-color: burlywood;">{message}</h2>

