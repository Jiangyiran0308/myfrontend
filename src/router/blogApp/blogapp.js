import account_list from './account'

import Index from '../../views/BlogApp/menu/index'
import BlogHome from '../../views/BlogApp/blogHome/HomeView'
import BlogAttention from '../../views/BlogApp/attention/AttentionView'
import AccountSetting from '../../views/BlogApp/accountSetting/AccountSettingView'
import BlogContent from '../../views/BlogApp/blogContent/BlogView'
import BlogWrite from '../../views/BlogApp/blogWrite/WriteView'
import Drafts from '../../views/BlogApp/drafts/DraftsView'
import Collection from '../../views/BlogApp/collection/CollectionView'
import SysManage from '../../views/BlogApp/sysManage/SysManage'
import FullBlogShow from '../../views/BlogApp/blogContent/FullBlogView'
import AttentionList from '../../views/BlogApp/attention/AttentionListView'

const list = [
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
      },
      {
        path:'setting',
        name:'setting',
        component:AccountSetting,
      },

      ...account_list,

    ]
  },
];


export default list

export { list }
