<template>
    <div>
        <h1>数字n：{{ number }}</h1>
        <h1>姓名：{{ name }}</h1>
        <h1>年龄：{{ age }}</h1>
        <h1>bigNumber：{{ bigNumber }}</h1>
        <!-- <h1>bigNumber：{{ $store.getters.bigNumber }}</h1> -->
        <button @click="add(10)">点击数字n+10</button> 
        <button @click="del(10)">点击数字n-10</button> 
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

    export default {
        name:'Test',
        computed:{
            ...mapState({number:'number',name:'name',age:'age'}),
            ...mapGetters(['bigNumber']),
        },
        methods: {
            // btn(){
            //     this.$store.dispatch('add',10)
            // },
            // btn2(){
            //     this.$store.dispatch('delete',10)
            // }

            ...mapActions({add:'add'}),
            ...mapMutations({del:'DEL'})
        },
    }
</script>

<style>

</style>