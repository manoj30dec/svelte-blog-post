<script>
    import {count, inflation, time} from "$lib/store"
    const increase=()=>{
        count.update((n)=>n+1);
    }
    const decrease=()=>{
        count.update((n)=>n-1);
    }
    const reset=()=>{
        count.set(0);
    }
</script>
<h1>Store example</h1>
<div class="layout">
    <div class="items">
        <h5>Writable Store</h5>
        <p>Count value is : <b>{$count}</b></p>
        <button onclick={increase}>Increase</button>
        <button onclick={decrease}>Decrease</button>
        <button onclick={reset}>Reset</button>
    </div>
    <div class="items">
        <h5>Computed Derived Store</h5>
        <p>Derived inflation rate : <b>{$inflation}</b></p>
    </div>
    <div class="items">
        <h5>Read only store</h5>
        <p>Local time is : <b>{$time.toLocaleTimeString()}</b></p>
    </div>
</div>
<style>
    .layout{
        display: flex;
        width: 100%;
    }
    .layout .items{
        border: 1px solid cadetblue;
        flex: 1;
        padding: 10px;
    }
</style>