<template>
    <h1>admin</h1>
</template>

<script setup lang="ts" name="admin">
import { onMounted, reactive } from 'vue';
import { authAdmin, menuSelectlist } from '../../../api/index';

let countList = reactive({
    pageNum: 1,
    pageSize: 10
})

onMounted(() => {
    authAdmin(countList).then((data) => {
        console.log(data, 'countList');
    })
    menuSelectlist().then((result) => {
        console.log(result.data);
    }).catch((err) => {
        console.log(err.data);
    });
})
</script>

<style></style>