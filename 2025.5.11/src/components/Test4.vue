<template>
    <h1 v-if="flag">hello world</h1>
    <button @click="btn">click</button>
</template>

<script setup lang="js" name="test">
import { ref } from 'vue';

let flag = ref(true);
function btn() {
    flag.value = !flag.value;
    console.log(flag.value);
}

// let type = ref();

// function btn() {
//     type.value = type.value == null ? 'temp' : null;
// }

// function btn() {
//     type.value = {
//         color: 'orange',
//         fontSize: 30 + 'px'
//     }
// }

</script>

<style scoped>
/* .temp {
    font-size: 30px;
    color: yellowgreen;
} */
</style>