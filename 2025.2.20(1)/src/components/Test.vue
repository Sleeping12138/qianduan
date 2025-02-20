<template>
    <slot name="hello"></slot>
    <slot name="world"></slot>

    <h1 ref="hello">hello java</h1>
</template>

<script setup lang="js" name="test">
import { ref } from 'vue';

let hello = ref();
console.log(hello);
</script>

<style></style>