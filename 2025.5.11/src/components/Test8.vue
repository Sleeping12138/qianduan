<template>
    <button @click="btn">click</button>
</template>

<script setup lang="js" name="test">
import axios from 'axios';
import { getUserInfoList } from '../api/request.js';
function btn() {
    // axios.get('api/user/getUserInfoList').then((result) => {
    //     console.log(result.data);
    // }).catch((err) => {
    //     console.log(err.data);
    // });
    getUserInfoList().then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err.data);
    });


}
</script>

<style></style>