<template>
    姓名：{{ name }}
    年龄：{{ age }}
</template>

<script setup lang="ts" name="Test3">
    // const props = defineProps(['test']);
    // console.log(props.test);

    const emits = defineEmits(['hello']);
    emits('hello','这里传递数据');

    const slots = defineSlots();
    console.log(slots.hello);

    const attrs = useAttrs();
    console.log(attrs.test);

    import {ref, useAttrs} from 'vue'

    let name = ref('zhangsan');
    let age = ref(18);
</script>

<style>

</style>