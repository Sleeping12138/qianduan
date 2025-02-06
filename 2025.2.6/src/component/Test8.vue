<template>
    {{ name }}
    {{ age }}
    {{ sex }}
</template>

<script setup lang="ts" name="Test8">
    import { reactive, toRefs } from 'vue';
import usePrint from '../hooks/usePrint';
    // const {temp,print} = usePrint();

    // print()

    let people = reactive({
        name:'zhangsan',
        age:18,
        sex:'male'
    })

    let {name,age,sex} = toRefs(people)
</script>

<style>

</style>