<template>
    <h1>姓名：{{ name }}</h1><br>
    <h1>年龄：{{ age }}</h1><br>
    <button @click="age++">点击年龄增加</button>
    <h1>c:{{ obj.a.b.c }}</h1>
    <button @click="obj.a.b.c++">点击c++</button>
    <div>--------------------------------------------------------</div>
    <input type="text" v-model="keyword">
    <h2>keyword:{{ keyword }}</h2>
</template>

<script>
import { customRef, reactive, readonly, ref, shallowReactive, toRaw, toRef, toRefs } from 'vue';

    export default {
        name:'Test',
        setup(){
            let timer;
            function myRef(value){
                return customRef((track,trggle)=>{
                    return {
                        get(){
                            track();
                            return value;
                        },
                        set(newValue){
                            value = newValue;
                            clearTimeout(timer)
                            timer = setTimeout(()=>{
                                trggle();
                            },500);
                        }
                    }
                })
            }
            let keyword = myRef('hello');
            let name = ref('zhangsan');
            let age = ref(19);
            let obj = reactive({
                a:{
                    b:{
                        c:100,
                    }
                }
            })

            // console.log(obj);
            // console.log(toRaw(obj));
            return {
                name,age,obj,keyword
            }
        }
    }
</script>

<style>

</style>