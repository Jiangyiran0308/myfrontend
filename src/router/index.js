import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserHome from '../components/UserHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      redirect:'/my.j.blog/'
    },
    {
      path:'/my.j.blog',
      name:'userhome',
      component:UserHome,
      children:[
        {
          path:'home',
          name:'userhome',
          component:UserHome,
        }
      ]
    }
  ]
})
