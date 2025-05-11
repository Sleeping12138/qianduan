<template>
    <h1>hello news</h1>
</template>

<script setup lang="js" name="news">
import { useRoute } from 'vue-router';
let route = useRoute();
console.log(route);
</script>

<style></style>