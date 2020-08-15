<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Navbar />
    <div class="content">
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
      </div>
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
  padding-top: 10px;
  margin: 0;
  background-color: #e9c46a;
  min-width: 100%;
  box-sizing: border-box;
  min-height: 100%;
}
body{
  margin: 0;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
}
.content {
  display: flex;
  justify-content: space-between;
}

/* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
  display: none;
}

body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
body {overflow: -moz-scrollbars-none;}
</style>
