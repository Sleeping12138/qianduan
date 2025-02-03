<template>
    <h1>money:{{ money }}</h1>
    <Son ref="c1"></Son>
    <Son2 ref="c2"></Son2>
    <button @click="btn($refs)">点击获取所有的子组件</button>
</template>

<script setup lang="ts" name="App">
  import { ref } from 'vue';
  import Son from './component/son.vue';
  import Son2 from './component/son2.vue';

  let money = ref(100);

  function btn(refs:any){
    refs.c1.book +=1
  }

  defineExpose({money})
</script>

<style>

</style>