<template>
  <div id='Cart' data-css='Cart' class='' >
    <p>Cart ({{ cart }})</p>
  </div>
</template>

<script>
  export default {
    name: 'Cart',
    props: {
      cart: Number,
    },
    methods: {
      // updateCart(amount) {
      //   console.log('fff')
      //   this.cart += amount;
      // }
    },
  }
</script>

<style scoped>
  #Cart {
    width: 100px;
    height: 100%;
    border: 1px grey solid;
    margin: 20px;
    background-color: #2a9d8f;
    color: black;
  }
</style>