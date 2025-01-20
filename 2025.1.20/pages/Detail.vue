<template>
    <div>
        <div>id为：{{ id }}</div>
        <div>title为：{{ title }}</div>
    </div>
</template>

<script>
    export default {
        name:'Detail',
        props:['id','title'],
        mounted(){
            console.log(this);
        }
    }
</script>

<style>

</style>