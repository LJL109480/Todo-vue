/**
 * vuex最核心的管理对象store
 */
import Vue from 'vue';
import Vuex from 'vuex';
//声明使用Vuex
Vue.use(Vuex);
const state = {
  conunt:0
};
const mutations={
  INCREMENT(state){
    state.conunt++
  },
  DECREMENT(state){
    state.conunt--
  }
};
const actions = {
  increment({commit}){
    commit('INCREMENT')
  },
  decrement({commit}){
    commit('DECREMENT')
  },
  incrementIfOdd({commit, state}){
  if(state.conunt%2===1){
    commit('INCREMENT')
   }
  },
  incrementAsync({commit}){
    setTimeout(()=>{
      commit('INCREMENT')
    },1000)
  }
};
const getters={
  evenOrodd(state){
    return state.conunt%2===1?'奇数':'偶数'
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
