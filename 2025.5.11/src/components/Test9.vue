<template>
    <router-link :to="{
        name: 'news',
        query: {
            id: '001',
            message: 'hello world'
        }
    }">跳转news</router-link>
    <br>
    <router-link to='/home'>跳转home</router-link>
    <router-view v-slot="{ Component }">
        <keep-alive :include="['home', 'detail']">
            <component :is="Component" />
        </keep-alive>
    </router-view>
    <br>
    <button @click="btn">跳转到detail页面</button>
</template>

<script setup lang="js" name="test">
import { useRouter } from 'vue-router';

let router = useRouter();
function btn() {
    router.push({
        name: 'detail',
    })
}
</script>

<style></style>