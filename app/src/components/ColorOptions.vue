<template>
  <div id='ColorOptions' data-css='ColorOptions' class='colors'>
    <div  
      v-for="(varient, index) in varients" :key="varient.varientId"
      class="color"
          :style="{ backgroundColor: varient.varientColor }"
          @click="changeColor(index)"
    />
  </div>
</template>

<script>
  export default {
    name: 'ColorOptions',
    props: {
      varients: Array,
      changeColor: Function,
    },
    methods: {
    }
  }
</script>

<style scoped>
  .colors {
    display: flex;
    flex-direction: row;
    height: fit-content;
    width: fit-content;
    margin: 0 auto;
  }

  .color {
    width: 40px;
    height: 40px;
    border: 1px grey solid;
    margin: 5px;
    border-radius: 25%;
    cursor: pointer;
  }
</style>