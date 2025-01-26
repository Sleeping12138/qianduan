<template>
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <button @click="hello">点击获取数据</button>
</template>

<script>
import { reactive, ref } from 'vue';

  export default {
    name:'App',
    setup(){
      let name= ref('zhangsan');
      let age = ref(18);
      let obj = reactive({
        a:100,
        b:200
      })

      function hello(){
        console.log('hello world');
        console.log(obj.a);
        console.log(obj.b);
      }

      return{
        name,age,obj,hello
      }
    }
  }
</script>

<style>

</style>