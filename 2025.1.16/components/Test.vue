<template>
    <div>
        <!-- 一个控制 -->
        <button @click="btn">进入 / 退出</button>
        <transition name="hello" :appear="true">
            <h1 v-show="show">hello world</h1>
        </transition>
    </div>
</template>

<script>
    export default {
        name:'Test',
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
        background-color: orange;
    }

    /* 两个样式 */
    .hello-enter-active{
        animation: movie 1s;
    }
    .hello-leave-active{
        animation: movie 1s reverse;
    }

    /* 设置动画关键帧 */
    @keyframes movie {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0);
        }
    }
</style>