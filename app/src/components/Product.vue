<template>
  <div id='Product' data-css='Product' class='' >
    <h2>{{ product }}</h2>
    <div class="product-image">
      <p>{{ img() }} </p>
      <img src="./assets/socks-green.png" :alt='imageAlt' />
    <!-- <img alt="Vue logo" src="../assets/socks-green.png"> -->

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Product',
    props: {
      product: String,
      imageSrc: String,
      imageAlt: String,
      quantity: String,
      name: String,
    },
    methods: {
      img() {
        retrun `./images/cameras/${encodeURIComponent(this.imageSrc)}.png`;
      }
    }
  }
</script>

<style lang="scss" scoped>
  #Product {
    display: flex;
    }
</style>