<template>
    <div>
        <h1>Test</h1>
        <button>点击调用print</button>
    </div>
</template>

<script>
    export default {
        name:'Test',
        methods: {
            print(value){
                console.log(value);
            }
        },
        mounted(){
            this.$bus.$on('printMsg',this.print);
        },
        beforeDestroy(){
            this.$bus.$off('printMsg');
        }
    }
</script>

<style>

</style>