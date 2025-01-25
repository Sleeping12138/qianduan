<template>
    <div>
        <transition name="hello">
            <h2 v-show="flag">hello world</h2>
        </transition>
        <button @click="flag = !flag">点击</button>
        <button @click="send">发送Ajax请求1</button>
        <button @click="send2">发送Ajax请求2</button>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        naem:'Test',
        data() {
            return {
                flag:true
            }
        },
        methods: {
            send(){
                axios.get('http://localhost:8080/zjy/students').then((result) => {
                    console.log(result.data);
                }).catch((err) => {
                    console.log(err.data);
                });
            },
            send2(){
                axios.get('http://localhost:8080/lsr/cars').then((result) => {
                    console.log(result.data);
                }).catch((err) => {
                    console.log(err.data);
                });
            }
        },
    }
</script>

<style scoped>
    h2{
        background-color: orange;
    }

    .hello-enter,.hello-leave-to{
        transform: translateX(-100%);
    }

    .hello-enter-active,.hello-leave-active{
        transition: 1s;
    }

    .hello-enter-to,.hello-leave{
        transform: translateX(0);
    }

    /* .hello-enter-active{
        animation: 1s movie;
    }

    .hello-leave-active{
        animation: 1s movie reverse;
    }

    @keyframes movie {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0);
        }
    } */
</style>