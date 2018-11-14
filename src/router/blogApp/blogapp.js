import account_list from './account'

const index = resolve => {require(['../../views/BlogApp/menu/index'],resolve)};
const bloghome = resolve => {require(['../../views/BlogApp/blogHome/HomeView'],resolve)};
const blogattention = resolve => {require(['../../views/BlogApp/attention/AttentionView'],resolve)};
const blogcontent = resolve => {require(['../../views/BlogApp/blogContent/BlogView'],resolve)};
const blogwrite = resolve => {require(['../../views/BlogApp/blogWrite/WriteView'],resolve)};
const drafts = resolve => {require(['../../views/BlogApp/drafts/DraftsView'],resolve)};
const collection = resolve => {require(['../../views/BlogApp/collection/CollectionView'],resolve)};
const sysmanage = resolve => {require(['../../views/BlogApp/sysManage/SysManage'],resolve)};
const fullblogshow = resolve => {require(['../../views/BlogApp/blogContent/FullBlogView'],resolve)};
const attemtionList = resolve => {require(['../../views/BlogApp/attention/AttentionListView'],resolve)};

const visitor = resolve => {require(['../../components/Visitor'],resolve)};
const testview = resolve => {require(['../../components/Test'],resolve)};

const list = [
  // {
  //   path: '/',
  //   redirect:'/my.j.blog/'
  // },
  {
    path:'/',
    name:'appframe',
    component:  index,
    children:[
      {path: '', redirect: '/home/'},
      {path:'home',name:'bloghome', component:testview,},
      {path:'login',name:'bloghome', component:visitor,},
      // {path:'home',name:'bloghome', component:bloghome,},
      // {path:'attention', name:'blogatttion', component:blogattention,},
      // {path:'attention/list', name:'blogatttion', component:attemtionList,},
      // {path:'content', name:'content', component:blogcontent,},
      // {path:'write', name:'write', component:blogwrite,},
      // {path:'drafts', name:'drafts', component:drafts,},
      // {path:'collection', name:'collection', component:collection,},
      // {path:'system', name:'system', component:sysmanage,},
      // {path:'blogShow', name:'blogShow', component:fullblogshow},
      // ...account_list,

    ]
  },
];


export default list

export { list }
