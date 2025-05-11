<template>
    <Test>
        <!-- <h1>hello world</h1> -->
        <!-- <template #hello>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </template> -->

        <!-- <template v-slot:hello="{ array }">
            <ul>
                <li v-for="(item, index) of array" :key="index">
                    {{ item.name }}--{{ item.age }}
                </li>
            </ul>
        </template> -->
    </Test>
    <!-- <h1 ref="hello">hello world</h1> -->
    <router-view></router-view>
</template>

<script setup lang="js" name="app">
import { ref } from 'vue';
import Test from './components/Test.vue';

// let test = ref();
// let hello = ref();

// console.log(test);
// console.log(hello);

</script>

<style></style>