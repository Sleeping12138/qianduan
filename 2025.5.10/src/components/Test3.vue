<template>
    姓名：<input type="text" v-model="name">
    年龄：<input type="text" v-model="age">
    总结：{{ fullInfo }}
</template>

<script setup lang="js" name="test">
import { computed, reactive, ref, watch, watchEffect } from 'vue';

let name = ref();
let age = ref()

let fullInfo = computed(() => {
    if (name.value != null && age.value != null) {
        return name.value + "---" + age.value;
    }
})

let fullInfo2 = computed({
    get() {

    },
    set() {

    }
})

let watchParam = watch(name, (newValue, oldValue) => {
    console.log(newValue, oldValue);

}, { immediate: true });

let watchEffectParam = watchEffect(() => {
    console.log("name发生改变", name.value);
})


// let name = ref('zhangsan');

// let stu = reactive({
//     name: 'zhangsan',
//     age: 18,
//     sex: 'male'
// })


</script>

<style></style>