<template>
    <Son></Son>
</template>

<script setup lang="ts" name="App">
    import { onUnmounted } from 'vue';
import Son from './component/son.vue';


    import emitter from './utils/emitter';
    emitter.on('hello',(value)=>{
      console.log(value);
    })

    onUnmounted(()=>{
      emitter.off('hello')
    })
    
</script>

<style>

</style>