<template>
    <button @click="num++">点击n++</button>
    <button @click="obj.a.b.c++">点击c++</button>
    <h1>n: {{ num }}</h1>
    <h1>c: {{ obj.a.b.c }}</h1>
</template>

<script setup lang="js" name="test3">
import { reactive, ref, watch, watchEffect } from 'vue';

let num = ref(0);
let obj = reactive({
    a: {
        b: {
            c: 0
        }
    }
})

// watch([num], (newValue, oldValue) => {
//     console.log(newValue, oldValue);
// }, { immediate: true })

// watch(() => obj.a.b.c, (newValue, oldValue) => {
//     console.log(newValue, oldValue);
// })

watchEffect(() => {

})
</script>

<style></style>