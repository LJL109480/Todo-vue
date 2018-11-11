<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add"  v-model="title"/>
  </div>
</template>
<script scoped>
  //接收父组件传递的指定属性，属性名，属性值类型，属性方法
    export default{
        props:{
            addTodo:{
                type:Function,
                required:true
            }
        },
      data(){
        return{
          title:''
        }
      },
      methods:{
        add (){
                //根据用户输入封装todo对象
                const title = this.title.trim();
                if(!title){
                    return alert('请输入正确内容')
                }
                 const todo = {
                    title,
                   complete:false
                }
                //调用addTodo添加方法
                this.addTodo(todo);
                //重置输入框内容为空
              this.title=''
            }
      }

    }
</script>
<style>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
