<template>
    姓：<input type="text" v-model="firstName"><br>
    名：<input type="text" v-model="lastName"><br>
    全名：{{ fullname }}
</template>

<script>
import { computed, ref } from 'vue';

    export default {
        name:'Test',
        props:['name'],
        setup(props,context){
            console.log(props);
            console.log(context);
            let firstName = ref('aaa');
            let lastName = ref('bbb');
            // let fullname = computed(()=>{
            //     return firstName.value+'-'+lastName.value;
            // })

            let fullname = computed({
                get(){
                    return firstName.value+'-'+lastName.value;
                },
                set(value){

                }
            })
            return {
                firstName,
                lastName,
                fullname
            }
        }
    }
</script>

<style>

</style>