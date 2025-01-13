<template>
    <div>
        <div class="todo-footer" v-show="todos.length">
          <label>
            <!-- <input type="checkbox" :checked="checkAll" @change="changeAll($event)"/> -->
            <input type="checkbox" v-model="checkAll"/>
          </label>
          <span>
            <span> 已完成{{finish}}</span> / 全部{{todos.length}}
          </span>
          <button class="btn btn-danger" @click="clearFinish">清除已完成任务</button>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Footer',
        props:['todos','checkBoxAll','deleteAllFinishTodo'],
        computed:{
          finish(){
            let i = 0;
            this.todos.forEach(element => {
                if(element.done===true) i++;
            });
            return i;
          },
          checkAll:{
            get(){
              return this.finish === this.todos.length;
            },
            set(value){
              this.checkBoxAll(value)
            }
          },
      },
      methods:{
            clearFinish(){
              if(confirm('确认要删除所有完成事项吗？')){
                this.deleteAllFinishTodo()
              }
            }
        }
    }
</script>

<style>
    /*footer*/
    .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
    }

    .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    }

    .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
    }

    .todo-footer button {
    float: right;
    margin-top: 5px;
    }
</style>