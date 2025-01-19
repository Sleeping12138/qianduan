<template>
    <div>
        <h1>开始位置</h1>
        <!-- 使用slot来占位置 -->
        <slot name="arr" :array="array">这是命名插槽</slot>
        <h1>结束位置</h1>
    </div>
</template>

<script>
    export default {
        name:'Demo2',
        data() {
            return {
                array:['A','B','C','D'],
            }
        },
    }
</script>

<style>

</style>