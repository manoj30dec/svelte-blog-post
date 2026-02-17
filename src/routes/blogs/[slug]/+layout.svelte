<script>
    let {data, children} = $props();
    // console.log("in blog side bar", data)
</script>

<div class="layout">
    <main>
        {@render children()}
    </main>
    <aside class="rightnav">
        <h2>More posts</h2>
        <ul>
            {#each data.summaries as {slug, title}}
            <li>
                <a href="/blogs/{slug}">{title.slice(0,20)}...</a>
            </li>
            {/each}
        </ul>
    </aside>
</div>
<style>
     .layout{
            display: grid;
            gap: 2rem;
            grid-template-columns: 1fr 16em;
        }
.rightnav h2{
    margin: 0 0 10px 0;
    padding: 0;
}
</style>