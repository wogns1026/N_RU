<template>
  <section class="bg-light">
    <div class="container py-5">
      <div class="row text-center py-3">
        <div class="col-lg-6 m-auto">
          <h1 class="h1">New Beverage</h1>
          <p>
            새로운 커피에 대한 소개글 대충~~~
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-4 mb-4">
          <div class="card h-100">
            <a href="shop-single.html">
              <img src="../../public/assets/img/americano.jpg" class="product-img">
            </a>
            <div class="card-body">
              <a href="shop-single.html" class="h2 text-decoration-none text-dark">AMERICANO</a>
              <p class="card-text">
                This is Ice Americano!!
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-4">
          <div class="card h-100">
            <a href="shop-single.html">
              <img src="../../public/assets/img/malchalatte.jpg" class="product-img">
            </a>
            <div class="card-body">
              <a href="shop-single.html" class="h2 text-decoration-none text-dark">MALCHA LATTE</a>
              <p class="card-text">
                This is Ice Malch Latte~~!!!
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-4">
          <div class="card h-100">
            <a href="shop-single.html">
              <img src="../../public/assets/img/banillalatte.jpg" class="product-img">
            </a>
            <div class="card-body">
              <a href="shop-single.html" class="h2 text-decoration-none text-dark">BANILLA LATTE</a>
              <p class="card-text">
                This is Ice Banilla Latte~!~!~!
              </p>
              <p class="text-muted">Reviews (74)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainPage"
}
</script>

<style scoped>
.product-img {
  width: 100%;
  height: 300px;
}
</style>
