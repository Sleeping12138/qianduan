<template>
    <h1>hello home</h1>
    <div>{{ id }}</div>
    <div>{{ name }}</div>
    <div>{{ age }}</div>
    <router-link to="/home/homeIn">跳转homeIn</router-link>
    <router-view v-slot="{ Component }">
        <keep-alive :include="['homeIn']">
            <component :is="Component"></component>
        </keep-alive>
    </router-view>
    <input type="text">
</template>

<script setup lang="js" name="home">
import { useRoute } from 'vue-router';
const props = defineProps(['id', 'name', 'age'])
const route = useRoute();
console.log(route);
</script>

<style></style>