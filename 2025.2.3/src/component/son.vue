<template>
    <h1>c1:{{ book }}</h1>
    <button @click="btn($parent)">点击获取父元素</button>
</template>

<script setup lang="ts" name="Son">
import { ref } from 'vue';

    let book = ref(4)
    function btn(parent:any){
        console.log(parent);
        parent.money -=10
    }
    defineExpose({book})
</script>

<style>

</style>