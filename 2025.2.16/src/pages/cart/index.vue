<template>
    <div class="cart">
        <div class="content"></div>
        <Footer></Footer>
    </div>
</template>

<script setup lang="js" name="cart">
import Footer from '../../components/Footer.vue';
</script>

<style lang="less" scoped>
.cart {
    display: flex;
    flex-flow: column;
    height: 100%;

    .content {
        flex: 1;
        overflow-y: auto;
    }
}
</style>