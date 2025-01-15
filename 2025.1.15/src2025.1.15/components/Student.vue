<template>
    <div>
        <div>姓名：{{ name }}</div>
        <div>年龄：{{ age }}</div>
        <button @click="btn">点击获取学生姓名</button>
        <!-- <button @click="btn">点击获取学生信息</button>
        <button @click="removeBtn">点击解绑</button> -->
    </div>
</template>

<script>
    export default {
        name:'Student',
        // props:['getName'],
        data() {
            return {
                name:'zhangsan',
                age:18
            }
        },
        methods: {
            btn(){
                this.$bus.$emit('getStudentName',this.name);
            }
            // btn(){
            //     this.$emit('getName',this.name);
            // },
            // removeBtn(){
            //     // 同时解绑多个使用数组包括
            //     this.$off('getName')
            // }
        },
    }
</script>

<style>

</style>