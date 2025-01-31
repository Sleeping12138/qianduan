<template>
    <div class="app">
      <h3>这是app组件</h3>
      <Father></Father>
    </div>
</template>

<script>
  import { provide } from 'vue';
  import Father from './components/Father.vue';

  export default {
    name:'App',
    components:{Father},
    setup(){
      let temp = 'hello world';
      provide('temp',temp)
      return {
        temp
      }
    }
  }
</script>
        Children

<style scoped>
  .app{
    background-color: rgb(255, 185, 94);
    padding: 10px;
  }
</style>