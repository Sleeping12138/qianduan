<template>
    <h2>hello homeIn</h2>
    <input type="text" placeholder="请输入内容" v-model="text">
    <button @click="btn">点击跳转home</button>
</template>

<script setup lang="js" name="homeIn">
import { onBeforeUnmount, ref } from 'vue';
import { useRouter } from 'vue-router';
let router = useRouter()
let text = ref('');

let btn = () => {
    router.push({
        name: 'home',

    })
}

onBeforeUnmount(() => {
    console.log('组件销毁');
})
</script>

<style></style>