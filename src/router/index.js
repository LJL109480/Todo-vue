/**
 * Created by Administrator on 2018/11/12.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Message from '../views/Message.vue';
import News from '../views/News.vue';
import MessageDetail from  '../views/MessageDetail.vue';
//声明使用路由
Vue.use(VueRouter);
//暴露路由组件
export default new VueRouter({
  //定义路由
  routes:[
    //一级路由
    {
      path:'/about',
      component:About
    },
    {//嵌套路由属于二级路由
      path:'/home',
      component:Home,
      children:[
        {
          path:"/home/news",
          component:News
        },
        {
          path:"message",
          component:Message,
          children:[
            {
              path:"/home/message/detail/:id",
              component:MessageDetail
            }
          ]
        },
        {
          path:'',
          redirect:'/home/news'
        }
      ]
    },
    {
      path:'/',
      redirect:'/about'
    }
  ]
})
