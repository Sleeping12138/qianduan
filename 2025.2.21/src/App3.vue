<template>
  <Suspense>
    <template v-slot:default>
      <Test></Test>
    </template>
    <template v-slot:fallback>
      <Test></Test>
    </template>
  </Suspense>
</template>

<script setup lang="js" name="app">
import { defineAsyncComponent } from 'vue';
const Test = defineAsyncComponent(() => import('./components/Test.vue'))

let handler = (data) => {
  console.log(data);
}
</script>

<style></style>