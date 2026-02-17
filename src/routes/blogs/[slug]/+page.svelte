<script>
    let {data} = $props();

</script>


<h1>Blog Post</h1>
<h1>{data.title}</h1>
<div>{@html data.content}</div>