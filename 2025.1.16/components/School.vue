<template>
    <div>
        <div>班级：{{ name }}</div>
        <div>住址：{{ address }}</div>
    </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                name:'Vue',
                address:'杭州'
            }
        },
    }
</script>

<style>

</style>