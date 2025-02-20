<template>
  <Test>
    <!-- <h1>hello world</h1> -->

    <template #hello>
      <h1>hello</h1>
    </template>

    <template #world>
      <h1>world</h1>
    </template>
  </Test>
</template>

<script setup lang="js" name="app">
import Test from './components/Test.vue';
let handle = (data) => {
  console.log(data);
}
</script>

<style></style>