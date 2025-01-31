<template>
    <div  class="first">
        <h2>第一层</h2>
        <div class="second">
            <h2>第二层</h2>
            <div class="third">
                <h2>第三层</h2>
                <button @click="flag = true">点击展开</button>
                <Teleport to="body">
                    <div v-if="flag" class="box">
                        <h3>数据</h3>
                        <h3>数据</h3>
                        <h3>数据</h3>
                        <button @click="flag = false">点击关闭</button>
                    </div>
                </Teleport>
            </div>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';

    export default {
        name:'Test',
        setup(){
            let flag = ref(false);
            return {
                flag
            }
        }
    }
</script>

<style>
    .first{
        background-color: aquamarine;
    }
    .second{
        background-color: antiquewhite;
    }
    .third{
        background-color: rgb(255, 174, 174);
    }
</style>