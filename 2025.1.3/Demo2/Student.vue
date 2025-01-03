<!-- 模板的编写 -->
<template>
    <div>
        <h2>{{ name }}</h2>
        <h2>{{ age }}</h2>
    </div>
</template>

<!-- 脚本的编写 -->
<script>
    // 通常使用默认暴露，方便导入
    export default {
        data() {
            return {
                name:'zhangsan',
                age:18
            }
        },
    }
</script>

<!-- 样式的编写 -->
<style>
</style>