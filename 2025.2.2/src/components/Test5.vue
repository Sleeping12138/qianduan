<template>
    <ul>
        <li v-for="p of list" :key="p.id">
            {{ p.name }}--{{ p.age }}
        </li>
    </ul>
</template>

<script setup lang="ts" name="Test5">
    import { type Peoples } from '../types';


    defineProps<{list:Peoples}>();

    defineProps<{list?:Peoples}>();

    withDefaults( defineProps<{list:Peoples}>(),{
        list:()=>[{id:'004',name:'zhangsan',age:18}]
    })



    defineEmits(['hello']);
    
</script>

<style>

</style>