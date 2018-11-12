import Vue from 'vue'
import Router from 'vue-router'

import blog_router_list from './blogApp/blogapp'

Vue.use(Router)

export default new Router({
  routes: blog_router_list,
})
