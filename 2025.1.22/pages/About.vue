<template>
    <div>
        <h1>这是About组件</h1>
    </div>
</template>

<script>
    export default {
        name:'About',
        mounted(){
            console.log(this);
        },
        // 通过路由规则进入
        beforeRouteEnter(to,from,next){
            console.log("进入...");
            next();
        },
        // 通过路由规则离开
        beforeRouteLeave(to,from,next){
            console.log("离开...");
            next();
        }
    }
</script>

<style>

</style>