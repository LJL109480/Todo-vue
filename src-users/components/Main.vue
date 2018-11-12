<template>
  <div>
    <h2 v-show="firstreveal">请输入关键字进行搜索</h2>
    <h2 v-show="loading">请求中....</h2>
    <h2 v-show="errorMsg">{{errorMsg}}</h2>
    <div class="row" v-show="users.length">
      <div class="card" v-for="(user, index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'

  export default {
    data () {
      return {
        //初始化时的数据，
        firstreveal: true, //是否显示搜索文字
        loading: false, //是否进行加载显示
        users: [], //用户列表初始化为空
        errorMsg: '',//初始化不现实错误信息
      }
    },

    mounted () {
      //订阅Search发布消息，使用async进行同步实现异步操作
      PubSub.subscribe('search', async (msg, userName) => {
        //搜索后更新数据状态
        this.firstreveal = false;//隐藏文本
        this.loading = true; //进行加载显示
        this.users = [];
        this.errorMsg = '';

        // 使用axios发ajax请求
        const url = `https://api.github.com/search/users?q=${userName}`;
        try {
          const response = await axios.get(url);
          const result = response.data;
          const users = result.items.map(item => ({
            name: item.login,
            url: item.html_url,
            avatar_url: item.avatar_url
          }));

          //数据状态更新成功，显示用户列表，隐藏loading加载
          this.loading = false;
          this.users = users
        } catch (error) {
        //数据请求失败，失败显示
          this.loading = false;
          this.errorMsg = '请求失败'
        }

      })
    }
  }
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
