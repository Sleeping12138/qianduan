<template>
    <div>
        <!-- 一个控制 -->
        <button @click="btn">进入 / 退出</button>
        <transition name="animate__animated animate__bounce"

         enter-active-class="animate__swing" 
         leave-active-class="animate__backOutLeft">
          
        <h1 v-show="show">hello world</h1>
        </transition>
    </div>
</template>

<script>
    import 'animate.css';
    export default {
        name:'Test3',
        data() {
            return {
                show:true
            }
        },
        methods: {
            btn(){
                this.show = !this.show;
            }
        },
    }
</script>

<style scoped>
    h1{
        background-color: skyblue;
    }
</style>