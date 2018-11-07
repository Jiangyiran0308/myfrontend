import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/BlogApp/menu/index'
import BlogHome from '../views/BlogApp/blogHome/HomeView'
import BlogAttention from '../views/BlogApp/attention/AttentionView'
import BlogContent from '../views/BlogApp/blogContent/BlogView'
import BlogWrite from '../views/BlogApp/blogWrite/WriteView'
import Drafts from '../views/BlogApp/drafts/DraftsView'
import AccountSetting from '../views/BlogApp/accountSetting/AccountSettingView'
import EditAccountData from '../views/BlogApp/accountSetting/EditAccountData'
import EditHeadProfile from '../views/BlogApp/accountSetting/EditHeadProfile'
import AccountMessage from '../views/BlogApp/accountSetting/AccountMessage'
import UserAttentionList from '../views/BlogApp/accountSetting/UsersAttentionList'
import OthersNote from '../views/BlogApp/accountSetting/OthersNote'
import Collection from '../views/BlogApp/collection/CollectionView'
import SysManage from '../views/BlogApp/sysManage/SysManage'
import FullBlogShow from '../views/BlogApp/blogContent/FullBlogView'
import AttentionList from '../views/BlogApp/attention/AttentionListView'

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
          path:'attention/list',
          name:'blogatttion',
          component:AttentionList,
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
          path:'setting/editData',
          name:'editData',
          component:EditAccountData
        },
        {
          path:'setting/editHeadProfile',
          name:'editHeadProfile',
          component:EditHeadProfile
        },
        {
          path:'setting/accountMessage',
          name:'accountMessage',
          component:AccountMessage
        },
        {
          path:'setting/usersAttentionList',
          name:'usersAttentionList',
          component:UserAttentionList
        },
        {
          path:'setting/othersNote',
          name:'othersNote',
          component:OthersNote
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
        },

        {
          path:'blogShow',
          name:'blogShow',
          component:FullBlogShow
        }

      ]
    },
  ]
})
