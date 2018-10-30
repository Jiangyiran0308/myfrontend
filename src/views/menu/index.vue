<style scoped>
  .topFrame{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    color: #FFFFFF;
    background: #444444;
  }
  .leftFrame{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-right:3px solid #A2A2A2;
    width: 160px;
    color: #444444;
    background: #CDCDCD;
  }
  .menuColor{
    height: 50px;
    line-height: 60px;
    color: #444444;
    background-color: #CDCDCD;
    padding-left: 18px;
    /*text-align: center;*/
  }
  .menuColor:hover{
    background-color: #B6B6B6;
  }
  .clickmenuColor{
    height: 50px;
    line-height: 60px;
    color: #FFFFFF;
    background-color: #A2A2A2;
    padding-left: 18px;
    /*text-align: center;*/
  }
  .viewsFrame{
    position: absolute;
    left: 165px;
    right: 5px;
    top: 10px;
    bottom: 10px;
    background-color: #FFFFFF;
    border-radius: 10px;
  }

  .el-scrollbar .el-scrollbar__wrap {overflow-x: hidden;}

</style>
<template>
  <div id = "app">
    <div :class="topFrame">
      <div style="float: left;width: 170px;text-align:center">
        <!--<span class="ji-iconfont-home_fill_light" style="font-size: 35px;color: #FFFFFF" ></span>-->
        <img :src="logoUrl"/>
      </div>
      <!--二级，三级++菜单-->
      <div style="float: left">
        <el-menu
          :default-active="activeIndex"
          background-color="#444444"
          class="el-menu"
          mode="horizontal" @select="clickMenu2">
          <second-menu :menuData="secondMenuData"/>
        </el-menu>
      </div>
      <div style="float: right">
        <user-info/>
      </div>
    </div>
    <div style="position: absolute;width: 100%;top: 50px;left: 0;right: 0;bottom: 0;background-color: #e5e7ea">
      <div class="viewsFrame">
        <el-scrollbar style="height: 100%">
          <router-view/>
        </el-scrollbar>
      </div>
      <div :class="leftFrame">
        <div v-for="(item,index) in menuData" :class="selectMenuDivColor(item.entity.id)" @click="clickMenu(item.entity,index)" :style='{height:"oneMenuHeight"}'>
          <span :class="item.entity.iconClass" style="font-size: 20px"></span>&nbsp&nbsp
          <span style="font-size: 15px">{{item.entity.name}}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import 'element-ui'
  import SecondMenu from './SecondMenu'
  import img_logo from '../../../static/logo.png'
  import UserInfo from '../userInfo/UserInfo'

    export default {
        name: "index",
        props: {},
        components: {
          UserInfo,
          'second-menu': SecondMenu,
          'user-info': UserInfo
        },
        data() {
            return {
              topFrame:"topFrame",
              topFrame2:"topFrame2",
              leftFrame:"leftFrame",
              menuColor:"menuColor",

              oneMenuHeight:40,
              minHeight:100,

              logoUrl:'',

              menuData:[],
              nowMenu: '',

              secondMenuData:[
                {
                  entity:null,
                  child:[]
                }
              ],
              activeIndex:'1',

            }
        },
        mounted() {
          let vm = this ;
          vm.logoUrl = img_logo;
          vm.loadItem() ;
        },
        methods: {
          loadItem(){
            let vm = this ;
            vm.$http.get('/api/firstMenu').then(function (xhr) {
              // console.log(xhr.body.data) ;
              let data = xhr.body.data ;
              if(data.child.length > 0){
                vm.menuData = data.child;
                // vm.nowMenu = vm.menuData[0].entity.id ;
                vm.clickMenu(vm.menuData[0].entity,0)
              }
            })
          },
          clickMenu(entity,index){
            let vm = this ;
            let id = entity.id ;
            vm.nowMenu = id;
            vm.$http.get('/api/secondMenu').then(function (xhr) {
              // console.log(xhr.body.data) ;
              let data = xhr.body.data ;
              vm.secondMenuData = data.child ;
            })
          },
          selectMenuDivColor(id){
            let vm = this ;
            if(id === vm.nowMenu ){
              return "clickmenuColor";
            }else {
              return "menuColor";
            }
          },
          clickMenu2(index){
            let vm = this ;
            vm.activeIndex = index ;
            console.log(index);
          }
        },
    }
</script>
