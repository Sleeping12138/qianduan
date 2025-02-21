<template>
  <Test>
    <!-- <h1>hello world</h1> -->

    <!-- <template #hello>
      <h1>hello</h1>
    </template>

<template #world>
      <h1>world</h1>
    </template> -->
  </Test><br>
  {{ CountStore.num }}
  <router-link :to="{
    path: '/home',
    query: {
      id: '001',
      name: 'zhangsan',
      age: 18
    }
  }">点击跳转home</router-link><br>
  <router-link to="/news">点击跳转news</router-link><br>
  <router-link to="/title">点击跳转title</router-link>

  <router-view v-slot="{ Component }">
    <keep-alive :include="['home']">
      <component :is="Component"></component>
    </keep-alive>
  </router-view>

  <button @click="btn">点击pinia</button>
</template>

<script setup lang="js" name="app">
import { useCountStore } from './store/CountStore.js';
let CountStore = useCountStore();
import Test from './components/Test.vue';
import { storeToRefs } from 'pinia';
let handle = (data) => {
  console.log(data);
}

let btn = () => {
  CountStore.num += 100;
}
</script>

<style></style>