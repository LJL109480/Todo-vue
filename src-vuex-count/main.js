/**
 * 入口文件js
 */
import Vue from 'vue';
import App from './App.vue';
import store from './vuex/store'
new Vue({
  el:"#app",
  components:{ App },
  template:'<App/>',
  store//配置store
});
