<template>

</template>

<script setup lang="js" name=test>
import { reactive, toRefs } from 'vue';
import { useMath } from '../hook/useMath';
let { a, b, add, del } = useMath();
console.log(a);
console.log(b);
console.log(add());
console.log(del());

let stu = reactive({
    name: 'zhangsan',
    age: 18,
    sex: 'male'
});

let { name, age, sex } = toRefs(stu);
console.log(name);
console.log(age);
console.log(sex);

</script>

<style></style>