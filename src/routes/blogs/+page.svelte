<script>
    let {data} = $props()
</script>

<h1>Blog Page</h1>
<ul>
    <li><a href="/blogs/one">one</a></li>
	<li><a href="/blogs/two">two</a></li>
	<li><a href="/blogs/three">three</a></li>
    {#each data.summaries as { slug, title, content }}
		<li>
            <h2><a href="/blogs/{slug}">{title}</a></h2>
            <h3>{title}</h3>
            <p>{@html content}</p>
        </li>
	{/each}
</ul>