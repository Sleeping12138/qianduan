<template>
    <!-- {{ temp }} -->
      <h1></h1>
</template>

<script setup lang="ts" name="Test5">

    //  使用接口对数据进行限制
    interface People{
        name:string,
        age:number
    }
    // withDefaults( defineProps<{temp?:People}>(),{
    //     temp:{ name:'lisi', age: 20 }
    // });
</script>

<style>

</style>