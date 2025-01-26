<template>
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <button @click="hello">点击触发hello函数</button>
    <button @click="btn">点击修改年龄</button>
</template>

<script>
import { ref } from 'vue';
  export default {
    name:'App',
    setup(){
      let name = ref('zhangsan');
      let age = ref(19);
      let obj = ref({
        id:'001',
        title:'hello world'
      })
      function hello(){
        console.log(hello);
      };
      function btn(){
        console.log(obj);
        age.value++;
        console.log(obj.value.id);
      }
      return {
        name,
        age,
        hello,
        btn,
        obj
      }
    }
  }
</script>

<style>

</style>