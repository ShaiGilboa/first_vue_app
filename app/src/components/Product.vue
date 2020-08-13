<template>
  <div id='Product' data-css='Product' class='' >
    <img v-show="green" src="../assets/socks-green.png" :alt='imageAlt' />
    <img v-show="blue" src="../assets/socks-blue.png" :alt='imageAlt' />
    <div>
      <h2>{{ product }}</h2>

      <p v-if="quantity > 10 && inStock">In Stock: {{ quantity }} <span v-show="onSale">On Sale</span></p>
      <p v-else-if="quantity <=10 && quantity > 0 && inStock">Almost sold out! <span v-show="onSale">and it is On Sale</span></p>
      <p v-else>Out of Stock</p>

      <ul>
        <li v-for="detail in details" :key="detail">{{ detail }} </li>
      </ul>

      <div v-for="varient in varients" :key="varient.varientId">
        <p @mouseover="changeColor(varient.varientColor)">{{varient.varientColor}} </p>
      </div>

      <button v-on:click="addToCart">add</button>
      <div>
        <p>Cart ({{ cart }})</p>
      </div>
      <button>remove</button>
    </div>
    <!-- <img alt="Vue logo" src="../assets/socks-green.png"> -->
  </div>
</template>

<script>
  export default {
    name: 'Product',
    data() {
      return {
        cart: 0,
        inStock: true,
        imageSrc2: '../assets/socks-green.png',
        green: true,
        blue: false,
      }
    },
    props: {
      product: String,
      imageSrc: String,
      imageAlt: String,
      quantity: Number,
      name: String,
      onSale: Boolean,
      details: Array,
      varients: Array,
    },
    methods: {
      addToCart() {
        if(this.inStock){
          this.cart += 1;
          if(this.cart >= this.quantity) this.inStock = false
        }
      },
      changeColor(color){
        switch (color) {
          case 'green':
            this.green = true;
            this.blue = false;
            break;
          case 'blue':
            this.green = false;
            this.blue = true;
            break;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  #Product {
    display: flex;
    /* flex-direction: row-reverse; */
    }
  
  img {
    width: 150px;
    height: 150px;
  }
</style>