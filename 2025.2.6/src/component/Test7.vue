<template>
    <button @click="flag = !flag">点击触发动画</button>
    <transition name="hello">
        <h1 v-show="flag">hello world</h1>
    </transition>

    <button @click="add">点击添加storage</button>
</template>

<script setup lang="ts" name="Test7">
import { ref } from 'vue';

    function add(){
        sessionStorage.setItem('name','lisi');
    }

    let flag = ref(true)
</script>

<style scoped>
    h1{
        background-color: orange;
    }

    .hello-enter-from,.hello-leave-to{
        transform: translateX(-100%);
    }
    .hello-enter-to,.hello-leave-from{
        transform: translateX(0);
    }
    .hello-enter-active,.hello-leave-active{
        transition: 1s;
    }

    /* .hello-enter-active{
        animation: movie 1s;
    }

    .hello-leave-active{
        animation: movie 1s reverse;
    } */

    /* @keyframes movie {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0);
        }
    } */
</style>