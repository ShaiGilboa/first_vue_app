<template>
  <div id='ProductInfo' data-css='ProductInfo' class='' >
    <h2>{{ name }}</h2>
      <StockState :reminder="reminder" />
      <p>Shipping: {{ shipping }}</p>
      <ul>
        <li v-for="detail in details" :key="detail">{{ detail }} </li>
      </ul>
  </div>
</template>

<script>
  import StockState from './StockState.vue';

  export default {
    name: 'ProductInfo',
    props: {
      name: {
        type: String,
        required: true,
      },
      reminder: {
        type: Number,
        required: true,
      },
      onSale: {
        type: Boolean,
        required: false,
      },
      premium: {
        type: Boolean,
        reqiured: true,
      },
      details: {
        type: Array,
        required: true,
      }
    },
    components: {
      StockState
    },
    computed: {
      shipping() {
        if(this.premium){
          return 'free'
        } else {
          return '2.99'
        }
      },
    }
  }
</script>

<style scoped>
  
</style>