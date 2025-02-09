<template>
    <h1>admin</h1>
</template>

<script setup lang="ts" name="admin">
import { onMounted, reactive } from 'vue';
import { authAdmin } from '../../../api/index';

let countList = reactive({
    pageNum: 1,
    pageSize: 10
})

onMounted(() => {
    authAdmin(countList).then((data) => {
        console.log(data, 'countList');
    })
})
</script>

<style></style>