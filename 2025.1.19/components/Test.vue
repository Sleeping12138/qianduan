<template>
    <div class="container">
        <h1>hello world</h1>
        <slot :game="game" :hello="hello"></slot>
    </div>
</template>

<script>
    export default {
        name:'Test',
        data() {
            return {
                game:['A','B','C','D'],
                hello:'hello'
            }
        },
    }
</script>

<style>
    .container{
        width: 300px;
        height: 400px;
    }
</style>