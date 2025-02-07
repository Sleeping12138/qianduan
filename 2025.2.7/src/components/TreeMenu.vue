<template>
  <!-- <el-sub-menu index="1">
    <template #title>
    <el-icon><location /></el-icon>
    <span>Navigator One</span>
    </template>
    <el-menu-item-group title="Group One">
    <el-menu-item index="1-1">item one</el-menu-item>
    <el-menu-item index="1-2">item two</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="Group Two">
    <el-menu-item index="1-3">item three</el-menu-item>
    </el-menu-item-group>
    <el-sub-menu index="1-4">
    <template #title>item four</template>
    <el-menu-item index="1-4-1">item one</el-menu-item>
    </el-sub-menu>
</el-sub-menu>

    <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <span>Navigator Two</span>
    </el-menu-item>

    <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <span>Navigator Three</span>
    </el-menu-item> -->

    <template v-for="(item,index) of menuData" :key="`${index}-${item.meta.id}`">
        <el-menu-item v-if="!item.children || item.children.length==0" index="`${index}-${item.meta.id}`">
            <el-icon size="20">
                <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{item.meta.name}}</span>
        </el-menu-item>
        <el-sub-menu v-else index="`${index}-${item.meta.id}`">
            <template #title>
                <el-icon size="20">
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <span>{{item.meta.name}}</span>
            </template>
            <tree-menu index="`${index}-${item.meta.id}" :menuData="item.children"></tree-menu>
        </el-sub-menu>
    </template>

    
</template>

<script setup lang="ts" name="treeMenu">
    import {defineProps} from 'vue';
    defineProps(['menuData','index'])
</script>

<style>

</style>