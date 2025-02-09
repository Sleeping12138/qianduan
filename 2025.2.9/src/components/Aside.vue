<template>
  <el-menu
    :style="{ width: !menuStore.isCollapse ? '230px' : '64px' }"
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="aside-container"
    default-active="2"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
    :collapse="menuStore.isCollapse"
  >
    <p class="logo-lg">{{ menuStore.isCollapse ? "DIDI" : "DIDI陪诊" }}</p>
    <TreeMenu
      :menuData="router.options.routes[0].children"
      :index="1"
    ></TreeMenu>
  </el-menu>
</template>

<script setup lang="ts" name="Aside">
import TreeMenu from "./TreeMenu.vue";
import { useRouter } from "vue-router";
import useMenuStore from "../store/menu";

const router = useRouter();
const menuStore = useMenuStore();
console.log(router);

const handleOpen = () => {};
const handleClose = () => {};
</script>

<style lang="less" scoped>
.logo-lg {
  font-size: 20px;
  text-align: center;
  height: 50px;
  line-height: 50px;
  color: #fff;
}
.aside-container {
  height: 100%;
}
</style>