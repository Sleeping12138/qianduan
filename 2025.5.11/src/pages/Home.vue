<template>
    <h1>hello home</h1>
    <input type="text">
    <router-link to="/home/detail">进入detail</router-link>
    <router-view v-slot="{ Component }">
        <keep-alive>
            <component :is="Component" />
        </keep-alive>
    </router-view>
</template>

<script setup lang="js" name="home">
import { useRoute } from 'vue-router';

// let route = useRoute();
// console.log(route.query);

</script>


<style></style>