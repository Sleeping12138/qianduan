<template>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="name+='~'">点击姓名~~</button>
    <button @click="age++">点击age++</button>
    <h2>e:{{ e }}</h2>
    <button @click="e+=100">点击e+=100</button>
    <h2>b:{{ obj.b }}</h2>
    <button @click="obj.b-=100">点击b-=100</button>
    <h2>全部信息：{{ fullInfo }}</h2>
</template>

<script>
    import { computed, reactive, ref, toRef, watch, watchEffect } from 'vue';

    export default {
        name:'Test',
        setup(){
            let name = ref('zhangsan');
            let age = ref(18);
            let obj = reactive({
                a:100,
                b:200,
                c:{
                    d:{
                        e:300
                    }
                }
            })
            let fullInfo = computed({
                get(){
                    return name.value + '-' + age.value;
                },
                set(){
                    
                }
            });

            watchEffect(()=>{
                // 上来就会调用一次，其中使用了什么就会进行调用
                const temp = obj.b;
                const temp2 = age.value
                console.log('watchEffect调用了');
            })
            // let fullInfo = computed(()=>{
            //     return name + '-' + age;
            // })
            // watch(age,()=>{
            //     console.log(age,'@@@');
            // })

            // watch([name,age],(newValue,oldValue)=>{
            //     console.log(newValue,oldValue);
            // })
            // // 默认开启deep
            // // 无法获取oldValue
            // watch(obj,(newValue,oldValue)=>{
            //     console.log(newValue,oldValue);
            // })

            // watch(()=>obj.b,(newValue,oldValue)=>{
            //     console.log(newValue,oldValue);
            // })
            return {
                name,age,fullInfo,
                e:toRef(obj.c.d.e),
            }
        }
    }
</script>

<style>

</style>