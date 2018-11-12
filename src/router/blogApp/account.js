const accountmessage = resolve => {require(['../../views/BlogApp/accountSetting/AccountMessage'],resolve)};
const editaccountdata = resolve => {require(['../../views/BlogApp/accountSetting/EditAccountData'],resolve)};
const accountSetting = resolve => {require(['../../views/BlogApp/accountSetting/AccountSettingView'],resolve)};
const editHeadProfile = resolve => {require(['../../views/BlogApp/accountSetting/EditHeadProfile'],resolve)};
const othersnote = resolve => {require(['../../views/BlogApp/accountSetting/OthersNote'],resolve)};
const userattention = resolve => {require(['../../views/BlogApp/accountSetting/UsersAttentionList'],resolve)};

console.log("11111111111111111");
const list = [
  {path:'setting',name:'setting',component:accountSetting},
  {path:'setting/editData',name:'editData',component:editaccountdata},
  {path:'setting/editHeadProfile',name:'editHeadProfile',component:editHeadProfile},
  {path:'setting/usersAttentionList',component:userattention},
  {path:'setting/othersNote',component:othersnote},
  {path:'setting/accountMessage',component:accountmessage},
];

export default list // 给当前模块使用
export { list } // 给 portal 使用
