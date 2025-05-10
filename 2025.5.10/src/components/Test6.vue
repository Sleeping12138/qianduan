<template>
    <!-- <h2>this is a slot</h2>
    <slot name="hello" :array="people"></slot> -->
    <ul>
        <li v-for="(value, key) of people" :key="key">
            {{ key }}---{{ value }}
        </li>
    </ul>
    <button @click="btn">click</button>
</template>

<script setup lang="js" name="test">
import { onBeforeMount, onMounted, reactive } from 'vue';

let people = reactive({
    id: '001',
    name: 'zhangsan',
    sex: 'male'
})

function btn() {
    Object.assign(people, { id: '002', name: 'lisi', sex: 'female' })
}

// let people = reactive([
//     { id: '001', name: 'zhangsan', age: 18 },
//     { id: '002', name: 'lisi', age: 18 },
//     { id: '003', name: 'wangwu', age: 18 },
// ])

// function data() {
//     const defaultData = { count: 0, user: { name: '' } }
//     const customData = { count: 5 }

//     return Object.assign({}, defaultData, customData)
// }

// let ret = data();
// console.log(ret);




// onBeforeMount(()=>{

// })

// onMounted(()=>{

// })

defineExpose({ people })
</script>

<style></style>