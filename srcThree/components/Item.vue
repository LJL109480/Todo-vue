<template>
      <li :style="bgColour" @mouseenter="headerEnter(true)" @mouseleave="headerEnter(false)">
        <label>
          <input type="checkbox" v-model="todo.complete"/>
          <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" v-show="isShow" @click="deleteTo">删除</button>
      </li>
</template>
<script>
  import PubSub from 'pubsub-js'
    export default{
        //props接收父组件类型的第二中方法,接收指定属性的属性名，属性值类型
        props:{
          todo:Object,
          index:Number
        },
      data(){
            return{
              bgColour:'Whiter',
              isShow:false
            }
      },
      methods:{
        headerEnter(isEnter){
          this.bgColour=isEnter?"#ccc":"whiter";
          this.isShow=isEnter
          },
        deleteTo(){
            const {index, todo} = this;
            if(confirm(`确定删除${todo}吗？`)){
              PubSub.publish('deleteTodo', index)
            }
        }
      }
    }
</script>
<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

</style>
