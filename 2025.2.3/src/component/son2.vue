<template>
    <h1>c2:{{ book }}</h1>
</template>

<script setup lang="ts" name="son2">
import { ref } from 'vue';

    let book = ref(6)
    defineExpose({book})
</script>

<style>

</style>