<template>
    <div class="temp">
        <h1>{{ msg }}</h1>
        <div>{{ name }}</div>
        <div>{{ newAge+1 }}</div>
        <button @click="btn">点击我age++</button>
    </div>
</template>

<script>
    export default {    
        name:'Student',
        data() {
            return {
                msg:'hello world',
                // 使用其他变量进行中转
                newAge:this.age
            }
        },
        // props:['name','age']
        // props:{
        //     name:String,
        //     age:Number
        // },

        // 通过标签进行数据的传递
        props:{
            name:{
                type:String,
                required:true,
            },
            age:{
                type:Number,
                default:100
            }
        },
        methods: {
            btn(){
                this.newAge++
            }
        },
    }
</script>

<style>
    .temp{
        background-color: aquamarine;
    }
</style>
