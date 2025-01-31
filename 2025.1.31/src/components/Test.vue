<template>
    <h2>c的值为:{{ a.b.c }}</h2>
</template>

<script>
    import { reactive, readonly, ref, shallowReadonly, toRef, toRefs } from 'vue';
    export default {
        name:'Test',
        setup() {
            let name ='zhangsan';
            let obj = reactive({
                a:{
                    b:{
                        c:100
                    }
                }
            })
            console.log(shallowReadonly(name));
            console.log(readonly(obj));
            return {
                // 只会将最外面的对象转化为ref对象，直接在外部使用
                ...toRefs(obj)
            }
        }   
    }
</script>

<style>

</style>