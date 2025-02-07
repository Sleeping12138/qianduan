<template>
  <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="aside-container"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
  >
        <p class="logo-lg">DIDI陪诊</p>
        <TreeMenu :menuData="router.options.routes[0].children" :index="1"></TreeMenu>  
  </el-menu>
</template>

<script setup lang="ts" name="Aside">
    import TreeMenu from './TreeMenu.vue';
    import {useRouter} from 'vue-router';

    const router = useRouter();
    console.log(router);

    const handleOpen = ()=>{};
    const handleClose = ()=>{}
</script>

<style lang="less" scoped>
  .logo-lg{
    font-size: 20px;
    text-align: center;
    height: 50px;
    line-height: 50px;
    color: #fff;
  }
  .aside-container{
    height: 100%;
  }
</style>