<script>
    let {data, children} = $props();
    console.log("in blog side bar", data)
</script>

<div class="layout">
    <main>
        {@render children()}
    </main>
    <aside>
        <h2>More posts</h2>
        <ul>
            {#each data as {slug, title}}
            <li>
                <a href="/blogs/{slug}">{title}</a>
            </li>
            {/each}
        </ul>
    </aside>
</div>
<style>
    @media (min-width:640px){
        .layout{
            display: grid;
            gap: 2rem;
            grid-template-columns: 1fr 16em;
        }
    }
</style>