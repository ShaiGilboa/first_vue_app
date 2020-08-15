<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Navbar />
    <Product
      @change-cart="changeCart"
      @update-cart="updateCart"
      product='Socks'
      :cart="cart"
      :details="['80% cotton', '20% polyester', 'Gender-neutral']" 
      :premium='true'
      :varients="[
      {
        varientId: '1',
        varientColor: 'green',
        varientImage: '../assets/socks-green.png',
        varientImageAlt: 'green socks',
        varientQuantity: 20,
      },
      {
        varientId: '2',
        varientColor: 'blue',
        varientImage: '../assets/socks-blue.png',
        varientImageAlt: 'blue socks',
        varientQuantity: 1,
      }
      ]"/>
      <Cart :cart="cart" />
    <!-- <Product imageSrc="./assets/socks-green.png" imageAlt='blue-socks'/> -->

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Product from './components/Product.vue';
import Navbar from './components/Navbar.vue';
import Cart from './components/Cart.vue';

export default {
  name: 'App',
  data() {
    return {
      cart: 0,
    }
  },
  components: {
    // HelloWorld,
    Product,
    Cart,
    Navbar,
  },
  methods: {
    updateCart(amount) {
      console.log('amount',amount)
      this.cart += amount;
      },
    changeCart(amount) {
      this.cart = amount;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
