<template>
  <div id='StockState' data-css='StockState' class='' >
    <p v-if="reminder > 10">In Stock: {{ reminder }} <span v-show="onSale">On Sale</span></p>
    <p v-else-if="reminder <= 10 && reminder > 0 ">Almost sold out! <span class="leftInStock">(only {{ reminder }} left...)</span><span v-show="onSale">and it is On Sale</span></p>
    <p v-else>Out of Stock</p>
  </div>
</template>

<script>
  export default {
    name: 'StockState',
    props: {
      reminder: {
        type: Number,
        required: true,
      },
      onSale: {
        type: Boolean,
        required: false,
      },
    }
  }
</script>

<style scoped>
  .leftInStock {
    font-size: 7px;
  }
</style>