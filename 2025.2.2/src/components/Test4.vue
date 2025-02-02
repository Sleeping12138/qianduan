<template>
  
</template>

<script setup lang="ts" name="Test4">
    import {type Peoples } from '../types/index';

    withDefaults(defineProps<{list?:Peoples}>(),{
        list:()=>[{id:'004',name:'zhaoliu',age:20}]
    });

</script>

<style>

</style>