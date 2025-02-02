<template>
    {{ age }}
    <!-- {{ obj }} -->
</template>

<script setup lang="ts" name="Test">
// import type { People } from '@types'
import { reactive, ref, toRef, toRefs } from 'vue';

    // let age = ref<number>(18)
    
    // let obj = reactive<People>({
    //     id:'001',
    //     name:'zhangsan',
    //     age:18
    // })

    let person = reactive({name:'张三', age:18, gender:'男'})
    let {name,gender} =  toRefs(person)
    let age = toRef(person,'age')

</script>
    
<style>

</style>