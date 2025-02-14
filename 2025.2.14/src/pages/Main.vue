<template>
    <!-- 项目底部的操作栏 -->
    <router-view></router-view>
    <van-tabbar v-model="active">
        <van-tabbar-item v-for="item of router.options.routes[0].children" :key="item.path" :icon="item.meta.icon"
            :url="`#/${item.path}`">
            {{ item.meta.name }}
        </van-tabbar-item>
    </van-tabbar>

</template>

<script setup lang="js" name="main">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
let active = ref(0);

onMounted(() => {
    console.log(router);
    console.log(route);
    let data = router.options.routes[0];
    active.value = data.children.findIndex(item => '/' + item.path === route.path)
})
</script>

<style></style>