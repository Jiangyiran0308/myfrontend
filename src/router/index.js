import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/menu/index'
import BlogHome from '../views/blogHome/HomeView'
import BlogAttention from '../views/attention/AttentionView'
import BlogContent from '../views/blogContent/BlogView'
import BlogWrite from '../views/blogWrite/WriteView'
import Drafts from '../views/drafts/DraftsView'
import AccountSetting from '../views/accountSetting/AccountSettingView'
import AccountMessage from '../views/accountMessage/MessageView'
import OthersNote from '../views/othersNote/NoteView'
import Collection from '../views/collection/CollectionView'
import SysManage from '../views/sysManage/SysManage'

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
          path:'message',
          name:'message',
          component:AccountMessage,
        },
        {
          path:'note',
          name:'note',
          component:OthersNote,
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
