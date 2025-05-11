<template>
    <!-- <ul>
        <li v-for="item of people" :key="item.id">
            {{ item.id }}--{{ item.name }}--{{ item.age }}
        </li>
    </ul> -->
    <ul>
        <li v-for="(value, key) of people" :key="key">
            {{ key }}--{{ value }}
        </li>
    </ul>
</template>

<script setup lang="js" name="test">
import { reactive } from 'vue';

// let people = reactive([
//     { id: '001', name: 'zhangsan', age: 18 },
//     { id: '002', name: 'lisi', age: 18 },
//     { id: '003', name: 'wangwu', age: 18 },
// ])

let people = reactive({
    id: '001',
    name: 'zhangsan',
    sex: 'male'
})
</script>

<style></style>