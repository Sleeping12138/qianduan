<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}</h2>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
  import { ref } from 'vue';

  import {useCountStore} from '../store/Count';
import { storeToRefs } from 'pinia';
  // 在store中自己定义的变量，会变为一个hook
  let countStore= useCountStore();
  console.log(countStore.sum);

  countStore.$subscribe((mutations,state)=>{
    console.log('countStore中的数据发生了改变');
  })

  let {sum,name,age} = storeToRefs(countStore);

  let n = ref(1) // 用户选择的数字

  // 方法
  function add(){
    countStore.sum += n.value
  }

  function temp(){
    countStore.$patch({
      sum:10,
      name:'lisi',
      age:20
    })
  }

  function minus(){
    countStore.sum -= n.value
  }
</script>

<style scoped>
  .count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  select,button {
    margin: 0 5px;
    height: 25px;
  }
</style>