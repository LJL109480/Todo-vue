<template>
    <div>
      <h2 v-if="!repoName">Loading.....</h2>
      <p v-else>
        wo is heihei haha
        <a :href="repoUrl">{{repoName}}</a>
      </p>
    </div>
</template>
<script>
    import axios from 'axios'
    export default{
      data(){
        return{
          repoName:"",
          repoUrl:""
        }
      },
      mounted(){
        const url = 'https://api.github.com/search/repositories?q=v&sort=stars';
        //发送异步的ajax请求
//        this.$http.get(url)
//          .then(response=>{
//            const result = response.data;
//            const mosthRepo = result.items[0];
//            this.repoName = mosthRepo.name;
//            this.repoUrl = mosthRepo.html_url;
//          })
//          .catch(err=>{
//                alert('请求出错~~')
//          })

        // 使用axios发异步ajax请求获取数据
        axios.get(url)
         .then(response => {
         const result = response.data;
         const mostRepo = result.items[0];
         // 更新状态数据;
         this.repoName = mostRepo.name;
         this.repoUrl = mostRepo.html_url
         })
         .catch(response => {
         alert('请求出错了222....')
         })
      }
    }
</script>
<style scoped>

</style>
