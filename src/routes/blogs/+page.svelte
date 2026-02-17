<script>
    let {data} = $props()
</script>

<h1>Blog Page</h1>
<!-- <ul class="child-nav">
    {#each data.summaries as { slug }}
		<li>
            <a href="/blogs/{slug}">{slug}</a>
        </li>
	{/each}
</ul> -->
<ul>
    {#each data.summaries as { slug, title, content }}
		<li>
            <h2><a href="/blogs/{slug}">{title}</a></h2>
            <h3>{title}</h3>
            <p>{@html content}</p>
        </li>
	{/each}
</ul>

<style>
    .child-nav{
        background-color: cadetblue;
        display: flex;
        list-style: none;
        margin: 0;
        padding: 10px;
    }
    .child-nav li{
        margin: 0 10px;
    }
</style>