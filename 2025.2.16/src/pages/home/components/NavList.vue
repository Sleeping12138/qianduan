<template>
    <div v-for="(item, index) of navList" :key="index">
        <NavListItem :itemContent="item"></NavListItem>
    </div>
</template>

<script setup lang="js" name="navList">
import { defineProps } from 'vue';
import NavListItem from './NavListItem.vue';
defineProps(['navList'])

</script>

<style></style>