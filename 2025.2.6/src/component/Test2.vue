<template>
    <h1>hello world</h1>
    姓：<input type="text" v-model="firstName">
    名：<input type="text" v-model="lastName">
    <h2>全名：{{ fullName }}</h2>
</template>

<script setup lang="ts" name='Tes2'>
    import { computed, ref } from 'vue';

    let firstName = ref('');
    let lastName = ref('');

    // let fullName = computed(()=>{
    //     return firstName.value+lastName.value
    // })

    let fullName = computed({
        set(value){

        },
        get(){
            return firstName.value+lastName.value
        }
    })
    
    
</script>

<style>

</style>