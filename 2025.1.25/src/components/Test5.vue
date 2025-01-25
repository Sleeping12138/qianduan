<template>
    <div>
        <slot name="test" :array="array"></slot>
        <h1>{{ $store.state.number }}</h1>
        <button @click="btn">点击获取vuex</button>
    </div>
</template>

<script>
    export default {
        name:'Test',
        data() {
            return {
                array:['A','B','C','D'],
            }
        },
        methods: {
            btn(){
                console.log(this.$store);
            }
        },
    }
</script>

<style>

</style>