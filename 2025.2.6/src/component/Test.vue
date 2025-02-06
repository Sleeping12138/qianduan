<template>
    <h1>hello world</h1>
</template>

<script setup lang="ts" name="Test">
    import { onUnmounted } from 'vue';
    import emitter from '../utils/emitter';

    emitter.on('temp',(value)=>{
        console.log(value);
    })

    onUnmounted(()=>{
        emitter.off('temp')
    })
</script>

<style>

</style>