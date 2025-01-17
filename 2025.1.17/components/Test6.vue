<template>
    <div>
        <button @click="flag = !flag">显示 / 消失</button>

        <transition-group name="hello">
            <h1 v-show="flag" key="1">hello</h1>
            <h1 v-show="flag" key="2">the</h1>
            <h1 v-show="flag" key="3">world</h1>
        </transition-group>

    </div>
</template>

<script>
    export default {
        name:'Test6',
        data() {
            return {
                flag:true
            }
        },
    }
</script>

<style>
    h1{
        background-color: orange;
    }

    .hello-enter,.hello-leave-to{
        transform: translateX(100%);
    }
    .hello-enter-active,.hello-leave-active{
        transition: 1s;
    }
    .hello-enter-to,.hello-leave{
        transform: translateX(0);
    }

    /* .hello-enter-active{
        animation: movie 1s;
    }
    .hello-leave-active{
        animation: movie 1s reverse;
    }

    @keyframes movie {
        from{
            transform: translateX(100%);
        }
        to{
            transform: translateX(0);
        }
    } */
</style>