<template>
  <div>
    <ul>
      <li v-for="(m, index) in messages" :key="m.id">
        <router-link :to="`/home/message/detail/${m.id}?id=${m.id}`">{{m.name}}</router-link>&nbsp;&nbsp;&nbsp;
       <button @click="pushShow(m.id)">push查看</button>
       <button @click="replaceShow(m.id)">replace查看</button>
      </li>
      <button @click="$router.back()">返回</button><hr/>
      <router-view/>
    </ul>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        messages:[]
      }
    },
    mounted () {
      //模拟ajax发送数据
      setTimeout(()=>{
        const messages=[
          {id:3, name:'jack'},
          {id:4, name:'tom'},
          {id:5, name:'kore'},
          {id:6, name:'jao'},
          {id:7, name:'yue'},
        ];
        this.messages=messages;
  },1000)
    },
    methods:{
      pushShow(id){
          this.$router.push(`/home/message/detail/${id}`)
      },
      replaceShow(id){
        this.$router.replace(`/home/message/detail/${id}`)
      }
    }
  }
</script>
<style>
</style>
