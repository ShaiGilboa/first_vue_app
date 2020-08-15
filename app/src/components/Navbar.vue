<template>
  <div id='Navbar' data-css='Navbar' class='' >
    <h1>How many socks would you like?</h1>
    <p>First attempt at Vue.js, playiong around with states, props, amd emiting events</p>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    props: {
      
    }
  }
</script>

<style scoped>
  h1{
    margin:0;
    padding: 10px;
  }

  div{
    background-color: #e76f51;
    border-radius: 5px;
  }
  
  p {
    margin: 0 0 5px 0;
  }
</style>