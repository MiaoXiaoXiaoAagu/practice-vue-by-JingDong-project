import Vue from 'vue'
import Router from 'vue-router'
import axios from "axios"
import Home from "./../components/home/Home"
import Category from "./../components/category/Category"
import Mine from "./../components/mine/Mine"
import Find from "./../components/find/Find"
import Detail from '../components/detail/Detail'

Vue.use(Router);
axios.defaults.baseURL="http://127.0.0.1:3333/";
axios.defaults.headers['Content-Type']= 'application/x-www-form-urlencoded';
Vue.prototype.$http=axios;


export  default new Router({
  routes:[{
    path:"/home",
    component:Home
  },
  {
      path:"/",
      redirect:"/home"
  },
  {
      path:"*",
      redirect:"/home"
  },
  {
      path:"/category",
      component:Category
  },
  {
      path:"/mine",
      component:Mine
  },
   {
      path:"/find",
      component:Find
   },
   {
      path: '/detail/:id',
      component: Detail
   }
  ]
})
