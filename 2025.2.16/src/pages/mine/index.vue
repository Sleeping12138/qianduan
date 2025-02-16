<template>
    <div class="mine">
        <div class="content"></div>
        <Footer></Footer>
    </div>
</template>

<script setup lang="js" name="mine">
import Footer from '../../components/Footer.vue';
</script>

<style lang="less" scoped>
.mine {
    display: flex;
    flex-flow: column;
    height: 100%;

    .content {
        flex: 1;
        overflow-y: auto;
    }
}
</style>