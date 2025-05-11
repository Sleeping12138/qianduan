<template>
    <Test></Test>
</template>

<script setup lang="js" name="app">
import Test from '@/components/Test.vue';
import emitter from '@/utils/emitter.js';
import { onUnmounted } from 'vue';

emitter.on('hello', (data) => {
    console.log(data);
})

onUnmounted(() => [
    emitter.off('hello')
])

</script>

<style></style>