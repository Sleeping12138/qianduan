<template>
    <h2 v-once>{{ number }}</h2>
    <button @click="number++">点击number++</button>
</template>

<script setup lang="ts" name="Test6">
    import { ref } from 'vue';

    let number = ref(0);
    console.log('setup--------');
</script>

<!-- <script>
    export default{
        name:'Test',
        setup(){

        },
        directives:{
            temp:{
                mounted() {
                    console.log('自定义事件开启');
                },
            }   
        }
    }
</script> -->


<style>

</style>