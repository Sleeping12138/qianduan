<template>
    <div class="navheader">
        <van-icon name="arrow-left" class="icon" />
        <div>{{ dianpu }}</div>
    </div>
</template>

<script setup lang="js" name="NavHeader">
import { defineProps } from 'vue';
defineProps(['dianpu'])
</script>

<style lang="less" scoped>
.navheader {
    background-color: #fff;
    height: 40px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #d7d7d7;

    .edit {
        font-size: 16px;
        position: absolute;
        right: 15px;
        font-weight: normal;
    }

    .icon {
        position: absolute;
        left: 10px;
    }
}
</style>