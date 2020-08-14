<template>
  <div id='Product' data-css='Product' class='' >
    <img v-show="selected === 0" src="../assets/socks-green.png" :alt='imageAlt' />
    <img v-show="selected === 1" src="../assets/socks-blue.png" :alt='imageAlt' />
    <div>
      <h2>{{ product }}</h2>

      <p v-if="left > 10 && inStock">In Stock: {{ quantity() }} <span v-show="onSale">On Sale</span></p>
      <p v-else-if="left <= 10 && left > 0 && inStock">Almost sold out! <span v-show="onSale">and it is On Sale</span></p>
      <p v-else>Out of Stock</p>

      <ul>
        <li v-for="detail in details" :key="detail">{{ detail }} </li>
      </ul>

      <div data-css='color options' id='colors'>
      <div v-for="(varient, index) in varients" :key="varient.varientId"
        :style="{ backgroundColor: varient.varientColor, width: '40px', height: '40px', border: '1px grey solid', margin: '5px', borderRadius: '25%'}"
        @mouseover="changeColor(index)"
      >
      </div>
      </div>

      <div data-css='buttons' id='buttons'>
        <button v-on:click="addToCart" :class="{disabledButton: left <= 0}">add</button>
        <button v-on:click="removeFromCart" :class="{disabledButton: cart === 0}">remove</button>
      <div>
        <p>Cart ({{ cart }})</p>
      </div>
      </div>
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
        selected: 0,
        left: 100,
      }
    },
    props: {
      product: String,
      // imageSrc: String,
      // imageAlt: String,
      // quantity: Number,
      name: String,
      onSale: Boolean,
      details: Array,
      varients: Array,
    },
    computed: {
      image() {
        return this.varients[this.selected].varientImage
      },
      imageAlt() {
        return this.varients[this.selected].varientImageAlt
      },
    },
    methods: {
      quantity() {
        const ret = this.varients[this.selected].varientQuantity;
        console.log('ret',ret)
        return ret
      },
      addToCart() {
        if(this.inStock){
          this.cart += 1;
          this.left = this.varients[this.selected].varientQuantity - this.cart;
          if(this.cart >= this.varients[this.selected].varientQuantity) this.inStock = false
        }
      },
      changeColor(index){
        this.selected = index;
        this.cart = Math.min(this.cart, this.varients[this.selected].varientQuantity)
        this.left = this.varients[this.selected].varientQuantity - this.cart;
      },
      removeFromCart(){
        if(this.cart > 0){
          this.cart -= 1;
          this.left = this.varients[this.selected].varientQuantity - this.cart;
          if(this.cart < this.varients[this.selected].varientQuantity) this.inStock = true
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  .disabledButton {
    background-color: grey;
    color: black;
  }

  #Product {
    display: flex;
    /* flex-direction: row-reverse; */
    }
  
  img {
    width: 150px;
    height: 150px;
  }

  #colors {
    display: flex;
    flex-direction: row;
    height: fit-content;
    width: fit-content;
    margin: 0 auto;
  }

  button {
    background-color: salmon;
    border: 1px solid black;
    width: 75px;
    height: 60px;
    color: white;
    font-size: 16px;
  }

  #buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    button, div {
      margin: 5px;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        padding: 0;
        margin: 0;
      }
    }
  }
</style>