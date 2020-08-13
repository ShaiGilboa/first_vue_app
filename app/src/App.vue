<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Navbar />
    <Product :imageSrc="'../assets/socks-green.png'" :name="`soks-green`" :imageAlt='`green-socks`' product='Socks' :quantity="5" :details="['80% cotton', '20% polyester', 'Gender-neutral']" :varients="[{varientId: '1', varientColor: 'green'}, {varientId: '2', varientColor: 'blue'}]"/>
    <!-- <Product imageSrc="./assets/socks-green.png" imageAlt='blue-socks'/> -->

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Product from './components/Product.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Product,

    Navbar,
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
