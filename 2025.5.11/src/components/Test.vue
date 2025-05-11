<template>

</template>

<script setup lang="js" name="test">

// import { useCountStore } from '@/store/useCountStore.js';
// import { storeToRefs } from 'pinia';

// let countStore = useCountStore();
// console.log(countStore.id);

// console.log(countStore.id + "-------");

// let { id, name, age } = storeToRefs(countStore);
// console.log(id);
// console.log(name.value);
// console.log(age.value);
// console.log(countStore.getAge);

import emitter from '@/utils/emitter.js';
emitter.emit('hello', "hello world");

</script>

<style></style>