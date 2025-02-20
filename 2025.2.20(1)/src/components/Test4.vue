<template>
    <div :style="box"></div>
    <button @click="btn">点击添加样式</button>
</template>

<script setup lang="js" name="test4">
import { ref } from 'vue';

let box = ref({});
let btn = () => {
    if (box.value) {
        box.value = ''
    } else {
        box.value = {
            width: '300px',
            height: '300px',
            backgroundColor: 'orange'
        };
    }
}
</script>

<style lang="less" scoped>
.temp {
    width: 300px;
    height: 300px;
    background-color: orange;
    border: 1px solid black;
}
</style>