<template>
    <el-select>
        <el-option v-for="(item, index) in difficultyList" :key="index" :label="item.difficultyName"
            :value="item.difficulty" />
    </el-select>
</template>

<script setup>
import { reactive } from 'vue'

const difficultyList = reactive([
    {
        "difficulty": 1,
        "difficultyName": "简单",
    },
    {
        "difficulty": 2,
        "difficultyName": "中等",
    },
    {
        "difficulty": 3,
        "difficultyName": "困难",
    }
]) 
</script>