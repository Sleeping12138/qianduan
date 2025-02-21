<template>
    <transition name="hello">
        <h1 v-show="flag">hello world</h1>
    </transition>
    <button @click="flag = !flag">点击切换</button>
</template>

<script setup lang="js" name="test">
import { ref } from 'vue';

let flag = ref(true)
</script>

<style>
h1 {
    width: 100%;
    height: 50px;
    background-color: orange;
}

.hello-enter-active,
.hello-leave-active {
    transition: 1s;
}

.hello-enter-from,
.hello-leave-to {
    transform: translateX(-100%);
}

.hello-enter-to,
.hello-leave-from {
    transform: translateX(0);
}
</style>