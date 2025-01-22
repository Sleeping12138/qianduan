<template>
    <div>
        <button @click="btn">点击按钮发送Ajax请求</button>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name:'Test2',
        methods: {
            btn(){
                axios.get("http://localhost:8081/test/data").then((result) => {
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