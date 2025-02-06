<template>
    <h1>hello world</h1>
    <slot name="hello" :array="array"></slot>
    <slot name="temp" temp="hello world"></slot>
</template>

<script setup lang="ts" name="Test4">

    import {defineProps, useAttrs} from 'vue';
    // defineProps(['name'])

    // const attrs = useAttrs();
    // console.log(attrs);

    let array = [1,2,3,4,5]

    // const slots = defineSlots();
    // console.log(slots.hello);

    const emits = defineEmits(['btn']);
    emits('btn','this is btn')
</script>

<style>

</style>