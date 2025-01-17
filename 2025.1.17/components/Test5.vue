<template>
    <div>

        <!-- 当失去焦点的时候触发事件 -->
        <input ref="inputTask" type="text" @blur="blur">

        <button @click="btn">点击获取焦点</button>
    </div>
</template>

<script>
    export default {
        name:"Test5",
        methods:{
            blur(){
                console.log('hello world');
            },

            
            btn(){
                // 想要获取焦点
                this.$refs.inputTask.focus()
            }
        }
    }
</script>

<style>

</style>