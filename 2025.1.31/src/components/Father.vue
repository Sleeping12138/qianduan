<template>
    <div class="father">
        <h3>这是father组件</h3>
        <Children></Children>
    </div>
</template>

<script>
    import Children from './Children.vue';

    export default {
        name:'Father',
        components:{Children}
    }
</script>

<style scoped>
    .father{
        background-color: red;
        padding: 10px;
    }
</style>