<template>
  <div id='Product' data-css='Product' class='' >
    <img v-show="selected === 0" src="../assets/socks-green.png" :alt='imageAlt' />
    <img v-show="selected === 1" src="../assets/socks-blue.png" :alt='imageAlt' />
    <div>
      <ProductInfo :name="product" :reminder="reminder"
      :details="details" :premium="premium" />

      <div data-css='color options' 
        
      >
        <ColorOption :varients="varients" :changeColor="changeColor" />
      </div>

      <AddRemoveBtns :reminder="reminder" :cart="cart" 
        @add-to-cart="updateCart"
        @remove-from-cart="updateCart"
      />
    </div>
  </div>
</template>

<script>
  import ProductInfo from './ProductInfo.vue';
  import ColorOption from './ColorOptions.vue';
  import AddRemoveBtns from './AddRemoveBtns.vue';

  export default {
    name: 'Product',
    data() {
      return {
        imageSrc2: '../assets/socks-green.png',
        green: true,
        blue: false,
        selected: 0,
      }
    },
    props: {
      product: String,
      name: String,
      onSale: Boolean,
      details: Array,
      varients: Array,
      cart: Number,
      premium: {
        type: Boolean,
        reqiured: true,
      }
    },
    computed: {
      image() {
        return this.varients[this.selected].varientImage
      },
      imageAlt() {
        return this.varients[this.selected].varientImageAlt
      },
      shipping() {
        if(this.premium){
          return 'free'
        } else {
          return '2.99'
        }
      },
      reminder() {
        return this.varients[this.selected].varientQuantity - this.cart
      },
    },
    methods: {
      quantity() {
        return this.varients[this.selected].varientQuantity;
      },
      changeColor(index){
        this.selected = index;
        this.$emit('change-cart', Math.min(this.varients[this.selected].varientQuantity, this.cart))
      },
      updateCart(amount) {
        this.$emit('update-cart', amount)
      }
    },
    components: {
      ProductInfo,
      ColorOption,
      AddRemoveBtns,
    }
  }
</script>

<style lang="scss" scoped>
  #Product {
    display: flex;
    }
  
  img {
    width: 150px;
    height: 150px;
  }

</style>