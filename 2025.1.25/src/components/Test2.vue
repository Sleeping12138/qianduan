<template>
    <div>
        <div ref="hello">HELLO WORLD</div>
        <button @click="btn">点击获取元素</button>
        <h1>{{ name }}---{{ age }}</h1>
        <button @click="btn2">点击添加sessionStorage</button>
        <button @click="btn3">调用函数</button>
    </div>
</template>

<script>
    import Minin from '../minin.js';
    export default {
        name:'Test',
        data() {
            return {
                msg:'hello world'
            }
        },
        props:{
            name:{
                type:String,
                required:false,
                default:'zhu'
            },
            age:{
                type:Number,
                required:false,
                default:0
            }
        },
        mixins:[Minin],
        methods: {
            btn(){
                console.log(this.$refs.hello);
                console.log(this);
            },
            btn2(){
                sessionStorage.setItem('zhangsan',18)
            },
            btn3(){
                this.$emit('printMsg','hello the world')
            }
        },
    }
</script>

<style>

</style>