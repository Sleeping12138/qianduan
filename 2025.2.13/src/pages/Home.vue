<template>
  <div class="common-layout">
    <el-container>
      <!-- <el-aside width="200px">Aside</el-aside> -->
      <Aside></Aside>
      <el-container>
        <el-header>
          <NavHeader></NavHeader>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts" name="Home">
import Aside from "../components/Aside.vue";
import NavHeader from "../components/navHeader.vue";
</script>

<style lang="less" scoped>
.common-layout {
  height: 100%;
  .el-container {
    height: 100%;
  }
}
</style>