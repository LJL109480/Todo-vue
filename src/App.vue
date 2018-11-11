<template>
    <div id="app">
      <div class="todo-container">
        <div class="todo-wrap">
          <TodoHeader :addTodo="addTodo"/>
          <TodoMain :todos="todos" :deleteTodo="deleteTodo"/>
          <TodoFooter :todos="todos" :deleteDoneTodo="deleteDoneTodo" :selectAllTodos="selectAllTodos"/>
        </div>
      </div>
    </div>
</template>
<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import Main from './components/Main.vue';
  import storageUtils from './utils/storageUtils'
    export default{
      //定义数据传递给子组件
      data(){
        return{
            todos:storageUtils.readTodos()
        }
      },
      //数据定义在哪里，更新数据的方法就相应的在哪个组件
      methods:{
          //添加todo
        addTodo(todo){
              this.todos.unshift(todo)
          },
        //删除指定下标的todo
        deleteTodo(index){
            this.todos.splice(index, 1)
        },
        //删除已经完成的todo
        deleteDoneTodo(){
       this.todos = this.todos.filter(todo=>!todo.complete)
        },
        //全选或不选todo
        selectAllTodos (isCheck) {
          this.todos.forEach(todo => todo.complete = isCheck)
        }

      },
       components:{
         TodoHeader:Header,
         TodoFooter:Footer,
         TodoMain:Main
       },
      watch:{
        todos:{
          deep:true,
//          handler:function (value) { //value 是todos最新的值
            //保存todos的json到localStorage
//            localStorage.setItem('todos_key', JSON.stringify(value))
            handler:storageUtils.saveTodos

          }
        }
    }
</script>
<style scoped>
  /*app*/
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
