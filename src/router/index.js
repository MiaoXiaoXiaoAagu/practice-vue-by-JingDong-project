import Vue from 'vue'
import Router from 'vue-router'
import Home from "./../components/home/Home"
import Category from "./../components/category/Category"
import Mine from "./../components/mine/Mine"
import Find from "./../components/find/Find"
Vue.use(Router);
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
  ]
})
