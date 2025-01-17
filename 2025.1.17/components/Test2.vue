<template>
    <div>
        <!-- 一个控制 -->
        <button @click="btn">进入 / 退出</button>
        <transition name="hello">
            <h1 v-show="show">hello world</h1>
        </transition>
    </div>
</template>

<script>
    export default {
        name:'Test2',
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

    /* 直接使用样式 */
    .hello-enter{
        transform: translateX(-100%);
    }
    .hello-enter-to{
        transform: translateX(0);
    }

    .hello-enter-active,.hello-leave-active{
        transition: 1s;
    }

    .hello-leave{
        transform: translateX(0);
    }
    .hello-leave-to{
        transform: translateX(-100%);
    }

</style>