<template>
    <h1>hello world</h1>
    {{ obj.name }}
    {{ obj.age }}
</template>

<script setup lang="js" name="test6">
import { defineProps, defineEmits, reactive, readonly } from 'vue';
const props = defineProps(['x', 'y'])
console.log(props.x, props.y);

let obj = readonly(reactive({
    name: 'zhangsan',
    age: 18
}))

obj.age = 30;

</script>

<style></style>