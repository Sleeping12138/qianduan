<template>
    <div>
        <div>班级：{{ name }}</div>
        <div>地址：{{ address }}</div>
    </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                name:'school113',
                address:'杭州'
            }
        },
        mounted(){
            this.$bus.$on('getStudentName',(data)=>{
                console.log(data);
            })            
        },
        beforeDestroy(){
            this.$bus.$off('getStudentName')
        }
    }
</script>

<style>

</style>