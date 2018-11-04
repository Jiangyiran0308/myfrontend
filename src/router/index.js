import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/BlogApp/menu/index'
import BlogHome from '../views/BlogApp/blogHome/HomeView'
import BlogAttention from '../views/BlogApp/attention/AttentionView'
import BlogContent from '../views/BlogApp/blogContent/BlogView'
import BlogWrite from '../views/BlogApp/blogWrite/WriteView'
import Drafts from '../views/BlogApp/drafts/DraftsView'
import AccountSetting from '../views/BlogApp/accountSetting/AccountSettingView'
import Collection from '../views/BlogApp/collection/CollectionView'
import SysManage from '../views/BlogApp/sysManage/SysManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/my.j.blog/'
    },
    {
      path:'/my.j.blog',
      name:'appframe',
      component:  Index,
      children:[
        {
          path: '',
          redirect: '/my.j.blog/home'
        },
        {
          path:'home',
          name:'bloghome',
          component:BlogHome,
        },
        {
          path:'attention',
          name:'blogatttion',
          component:BlogAttention,
        },
        {
          path:'content',
          name:'content',
          component:BlogContent,
        },
        {
          path:'write',
          name:'write',
          component:BlogWrite,
        },
        {
          path:'setting',
          name:'setting',
          component:AccountSetting,
        },
        {
          path:'drafts',
          name:'drafts',
          component:Drafts,
        },
        {
          path:'collection',
          name:'collection',
          component:Collection,
        },
        {
          path:'system',
          name:'system',
          component:SysManage,
        }
      ]
    },
  ]
})
