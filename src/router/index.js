import Vue from 'vue'
import Router from 'vue-router'

import blog_router_list from './blogApp/blogapp'

Vue.use(Router)

export default new Router({
  mode:'hash',
  base:'/my.j.blog/',
  routes: blog_router_list,
})
