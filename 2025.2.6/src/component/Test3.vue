<template>
    a:{{ a }}
    str:{{ str }}
</template>

<script>
    import { ref } from 'vue';

    export default {
        name:'Test3',
        setup(){
            let a = ref(100);
            let str = ref('hello')

            function hello(){
                console.log('hello world');
            }

            return {a,str,hello}
        }
    }
</script>

<style>

</style>