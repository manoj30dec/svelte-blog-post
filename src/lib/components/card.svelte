<div class="card" style="width: 18rem;">
    <figure>
        <slot name="img"></slot>
    </figure>
  <div class="card-body">
    <h5 class="card-title"><slot name="heading"></slot></h5>
    <p class="card-text"><slot name="para"></slot></p>
    <slot name="link"><a href="#">Go somewhere...</a></slot>
  </div>
</div>
<style>
    .card figure{width: 100%;}
</style>