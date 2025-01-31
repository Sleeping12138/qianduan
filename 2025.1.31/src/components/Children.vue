<template>
    <div class="children">
        <h3>这是children组件</h3>
        <div>{{ ret }}</div>
    </div>
</template>

<script>
import { inject } from 'vue';

    export default {
        name:'Children',
        setup(){
            let ret = inject('temp');
            return {
                ret
            }
        }
    }
</script>

<style scoped>
    .children{
        background-color: aqua;
        padding: 10px;
    }
</style>