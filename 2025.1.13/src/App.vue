<template>
    <div>
      <MyHeader :receive="receive"></MyHeader>
      <List :todos="todos" :checkTode="checkTode" :deleteTodo="deleteTodo"></List>
      <MyFooter :todos="todos" :checkBoxAll="checkBoxAll" 
      :deleteAllFinishTodo="deleteAllFinishTodo"></MyFooter>
    </div>
</template>

<script>
    import MyHeader from './components/MyHeader.vue';
    import MyFooter from './components/MyFooter.vue';
    import List from './components/List.vue';
    export default {
      name:'App',
      components:{MyHeader,List,MyFooter},
      data() {
        return {
          todos:[
                    {id:'001',title:'吃饭',done:true},
                    {id:'002',title:'睡觉',done:false},
                    {id:'003',title:'学习',done:true}
                ]
        }
      },
      methods:{
        receive(obj){
          this.todos.push(obj);
        },
        checkTode(id){
          this.todos.forEach(item=>{
            if(item.id===id) {
              item.done = !item.done;
              return
            }
          })
        },
        deleteTodo(id){
          this.todos = this.todos.filter(item=>{
              return item.id !== id;
          })
        },
        checkBoxAll(check){
            this.todos.forEach(item=>{
              item.done=check
            })
        },
        deleteAllFinishTodo(){
          this.todos = this.todos.filter(item=>{
            return item.done === false;
          })
        }
      }
    }
</script>

<style>
  /*base*/
  body {
    background: #dadada;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>