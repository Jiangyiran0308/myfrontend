<style scoped>
  .topFrame{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    min-width: 1260px;
    height: 50px;
    color: #FFFFFF;
    background: #444444;
  }
  .leftFrame{
    float: left;
    height: 100%;
    width: 140px;
    color: #444444;
    background: #D6D6D6;
  }
  .menuColor{
    height: 50px;
    line-height: 50px;
    color: #444444;
    background-color: #D6D6D6;
    padding-left: 18px;
    cursor:pointer;
  }
  .menuColor:hover{
    background-color: #B6B6B6;
  }
  .clickmenuColor{
    cursor:pointer;
    height: 50px;
    line-height: 50px;
    color: #FFFFFF;
    background-color: #A2A2A2;
    padding-left: 18px;
  }
  .viewsFrame{
    float: left;
    margin-left: 10px;
    width: 1000px;
    height: 100%;
    background-color: #FFFFFF;
  }
  .secondMenuFrame{
    float: left;
    height: 50px;
  }

</style>
<template>
  <div id = "app">
    <div :class="topFrame">
      <div style="float: left;width: 170px;text-align:center">
        <!--<span class="ji-iconfont-home_fill_light" style="font-size: 35px;color: #FFFFFF" ></span>-->
        <img :src="logoUrl"/>
      </div>
      <!--二级，三级++菜单-->
      <div class="secondMenuFrame" :style="{marginLeft:(screenWidth-1000)/2-130+'px'}">
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
      <div style="height: 100%;width: 1260px;margin: 0 auto">
        <!--左侧一级菜单-->
        <div :class="leftFrame">
          <el-scrollbar style="height: 100%">
            <div v-for="(item,index) in menuData" :class="selectMenuDivColor(item.entity.id)" @click="clickMenu(item.entity,index)" :style='{height:"oneMenuHeight"}'>
              <span :class="item.entity.iconClass" style="font-size: 20px"></span>&nbsp&nbsp
              <span style="font-size: 15px">{{item.entity.name}}</span>
            </div>
            <!--<div style="height: 30px;cursor:pointer;margin-bottom: 2px">click</div>-->
          </el-scrollbar>
        </div>
        <!--窗口-->
        <div class="viewsFrame">
          <el-scrollbar style="height: 100%">
            <router-view/>
          </el-scrollbar>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import 'element-ui'
  import SecondMenu from './SecondMenu'
  import img_logo from '../../../../static/logo.png'
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
              //窗口宽度
              screenWidth:document.body.clientWidth,

              topFrame:"topFrame",
              topFrame2:"topFrame2",
              leftFrame:"leftFrame",
              menuColor:"menuColor",

              menuShoeflag:true,

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
              firstMenuUrl:{},

            }
        },
        watch:{
            'screenWidth' : function(val){
                console.log(val);
              },
        },
        mounted() {
          let vm = this ;
          vm.logoUrl = img_logo;
          // vm.loadItem() ;

          //开启窗口监听事件
          // const that = this ;
          // window.onresize = function () {
          //   return function () {
          //     window.screenWidth = document.body.clientWidth ;
          //     that.screenWidth = window.screenWidth ;
          //   }
          // };

        },
        methods: {
          loadItem(){
            let vm = this ;
            vm.$http.get('/api/firstMenu').then(function (xhr) {
              // console.log(xhr.body.data) ;
              let data = xhr.body.data ;
              if(data.child.length > 0){
                vm.menuData = data.child;
                vm.clickMenu(vm.menuData[0].entity,0);
              }
            })
          },
          clickMenu(entity,index){
            let vm = this ;
            let id = entity.id ;
            vm.nowMenu = id;

            let url = vm.menuData[index].entity.value ;
            vm.$router.push({path:url});

            let data = vm.menuData[index].child;
            // console.log(data);
            vm.secondMenuData = data ;
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
            // let vm = this ;
            // vm.activeIndex = index ;
            // console.log(index);
          }
        },
    }
</script>
