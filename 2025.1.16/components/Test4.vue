<template>
    <div>
        <button @click="btn">获取学生信息</button>
        <button @click="btn2">获取汽车信息</button>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name:'Test4',
        methods: {
            btn(){
                axios.get('http://localhost:8080/zjy/students').then((result) => {
                    console.log(result.data);
                }).catch((err) => {
                    console.log(err.data);
                });
            },
            btn2(){
                axios.get('http://localhost:8080/lsr/cars').then((result) => {
                    console.log(result.data);
                }).catch((err) => {
                    console.log(err.data);
                });
            }
        },
    }
</script>

<style>

</style>