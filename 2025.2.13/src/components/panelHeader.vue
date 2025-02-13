<template>
    <div class="panel-heading">
        <div class="panel-lead">
            <div class="title">{{ route.name }}</div>
            <p class="description">{{ route.describe }}</p>
        </div>
    </div>
</template>

<script setup name="panelHeader">
import { defineProps } from 'vue';
const prop = defineProps(['route'])
</script>

<style lang="less" scoped>
.panel-heading {
    padding: 15px;
    background: #e8edf0;
    border-color: #e8edf0;
    position: relative;

    .panel-lead {
        font-size: 14px;

        .title {
            font-weight: bold;
            font-style: normal;
        }

        .description {
            margin-top: 5px;
        }
    }
}
</style>
