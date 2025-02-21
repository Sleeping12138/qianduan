<template>
    <!-- <h1>num:{{ num }}</h1>
    <button @click="num++">num++</button>
    <h1 v-test="num">{{ num }}</h1> -->
    <transition name="hello">
        <div class="box" v-show="flag">hello world</div>
    </transition>
    <button @click="flag = !flag">点击切换flag</button>
</template>

<script setup lang="js" name="test5">
import { onUpdated, ref } from 'vue';

// let num = ref(0);
// const vTest = {
//     updated(element, binding) {
//         element.innerText = binding.value * 10;
//     },
// }

let flag = ref(true)
</script>

<style lang="less" scoped>
.box {
    width: 100%;
    height: 50px;
    background-color: orange;
}

// @keyframes movie {
//     from {
//         transform: translateX(100%);
//     }

//     to {
//         transform: translateX(0);
//     }
// }

// .hello-enter-active {
//     animation: movie 1s;
// }

// .hello-leave-active {
//     animation: movie 1s reverse;
// }

.hello-enter,
.hello-leave-to {
    transform: translateX(100%);
}

.hello-leave,
.hello-enter-to {
    transform: translateX(0);
}

.hello-enter-active,
.hello-leave-active {
    transition: 1s;
}
</style>