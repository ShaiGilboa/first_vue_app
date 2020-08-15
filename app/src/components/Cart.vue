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
  
</style>