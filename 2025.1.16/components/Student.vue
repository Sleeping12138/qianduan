<template>
    <div>
        <div>姓名：{{ name }}</div>
        <div>年龄：{{ age }}</div>
        <button @click="btn">点击获取姓名</button>
        <button @click="unbind">解绑数据</button>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js';
    export default {
        name:'Student',
        data() {
            return {
                name:'zhangsan',
                age:18
            }
        },
        methods: {
            btn(){
                pubsub.publish('getStudentName',this.name)
            },
            unbind(){
                this.$off('getName');
            }
        },
    }
</script>

<style>

</style>