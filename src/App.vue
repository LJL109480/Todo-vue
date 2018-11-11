<template>
    <div id="app">
      <div class="todo-container">
        <div class="todo-wrap">
          <TodoHeader/>
          <TodoMain :todos="todos"/>
          <TodoFooter/>
        </div>
      </div>
    </div>
</template>
<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import Main from './components/Main.vue'
    export default{
      //定义数据传递给子组件
      data(){
        return{
            todos:[
            {title:'吃饭', complete:false},
            {title:'睡觉', complete:true},
            {title:'敲代码', complete:false}
            ]
        }
      },
       components:{
         TodoHeader:Header,
         TodoFooter:Footer,
         TodoMain:Main
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
