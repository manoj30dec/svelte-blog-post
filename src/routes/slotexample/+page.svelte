<script>
    import Card from "$lib/components/card.svelte"
</script>
<h1>Example of Slot</h1>
<ul class="card-page">
    <li>
        <Card>
            <img slot="img" src="picture.jpg" alt="Picture example" class="w-100" style="max-height: 160px;" />
            <span slot="heading">Card 1</span>
            <span slot="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse possimus excepturi odio nisi error culpa iste voluptatibus dolores ea harum, perferendis numquam minima explicabo rerum ex libero maiores reprehenderit commodi.</span>
            <a href="https://www.google.co.in" slot="link">Read more...</a>
        </Card>
    </li>
    <li>
        <Card>
            <img slot="img" src="picture-2.jpg" alt="Picture example" class="w-100"  style="max-height: 160px;" />
            <span slot="heading">Card 2</span>
            <span slot="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse possimus excepturi odio nisi error culpa iste voluptatibus dolores ea harum, perferendis numquam minima explicabo rerum ex libero maiores reprehenderit commodi.</span>
            <a href="https://yahoo.co.in" slot="link">Read more...</a>
        </Card>
    </li>
</ul>

<style>
    .card-page{
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        gap: 10px;
    }
    .card-page li{

    }
</style>