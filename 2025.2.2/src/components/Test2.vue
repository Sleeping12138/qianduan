<template>
    <h2>{{ name }}</h2>
</template>

<script lang="ts" setup name="Test2">
    import { ref } from 'vue';
    let name = ref('hello world');
</script>

<style>

</style>