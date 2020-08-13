<template>
  <div id='Product' data-css='Product' class='' >
    <div class="product-image">
      <img v-bind:src='imageSrc' />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Product',
    props: {
      imageSrc: String,
    }
  }
</script>

<style scoped>
  
</style>