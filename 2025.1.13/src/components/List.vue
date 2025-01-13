<template>
    <div>
        <ul class="todo-main">
            <Item v-for="(todoObj) of todos" :key="todoObj.id" 
            :todo="todoObj" :checkTode="checkTode" :deleteTodo="deleteTodo"></Item>
        </ul>
    </div>
</template>

<script>
    import Item from './Item.vue';

    export default {
        name:'List',
        components:{Item},
        props:['todos','checkTode','deleteTodo'],
        data() {
            return {
                
            }
        },
    }
</script>

<style>
    /*main*/
    .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
    }

    .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
    }
</style>