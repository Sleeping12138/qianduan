<template>
    <div>
        <h1 ref="hh">hello world</h1>
        <button @click="btn">点击获取数据</button>
        <Student ref="student" name="zhangsan" :age="18"></Student>
    </div>
</template>

<script>
    import Student from './components/Student.vue'
    export default {
        name:'App',
        components:{Student},
        methods:{
            btn(){
                console.log(this.$refs.hh);
                console.log(this.$refs.student);
            }
        }
    }
</script>

<style>

</style>