<template>
  <div id='AddRemoveBtns' data-css='AddRemoveBtns' class='buttons' >
    <button v-on:click="addToCart" :disabled="reminder <= 0" :class="{disabledButton: reminder <= 0}">add</button>
        <button v-on:click="removeFromCart" :disabled="cart === 0" :class="{disabledButton: cart === 0}">remove</button>
  </div>
</template>

<script>
  export default {
    name: 'AddRemoveBtns',
    props: {
      reminder: Number,
      cart: Number,
    },
    methods: {
      addToCart() {
        console.log('this.reminder',this.reminder)
        console.log('this.cart',this.cart)
        if(this.reminder > 0){
          this.$emit('add-to-cart', 1)
        } else {
          if(this.reminder > 0) this.inStock = true
        }
      },
      removeFromCart(){
        if(this.cart > 0){
          this.$emit('remove-from-cart', -1)
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  button {
    background-color: salmon;
    border: 1px solid black;
    width: 75px;
    height: 60px;
    color: white;
    font-size: 16px;
  }

  .buttons {
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

  .disabledButton {
    background-color: grey;
    color: black;
  }
</style>