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
    width: 15%;
    min-width: 150px;
    color: #444444;
    background: #CDCDCD;
  }
  .menuColor{
    height: 60px;
    line-height: 60px;
    color: #000000;
    background-color: #CDCDCD;
    text-align: center;
  }
  .menuColor:hover{
    background-color: #A2A2A2;
  }
  .clickmenuColor{
    height: 60px;
    line-height: 60px;
    color: #FFFFFF;
    background-color: #5D5D5D;
    text-align: center;
  }


</style>
<template>
  <div id = "app">
    <div :class="{'topFrame':topFrame}">
      <span>NAME</span>
    </div>
    <div style="position: absolute;width: 100%;top: 50px;left: 0;right: 0;bottom: 0;background-color: #e5e7ea">
      <div :class="{'leftFrame':leftFrame}">

        <!--<div v-for="item in menuData" :class="{'itemClass':item.itemClass}" @click="navigator(item.id)">-->
          <!--<span>{{item.name}}</span>-->
        <!--</div>-->

        <el-menu
          class="el-menu-vertical-demo"
          background-color="#CDCDCD"
          active-text-color="#7A7A7A">

          <label v-for="(item,index) in menuData">
            <el-menu-item  :index="{'i':index}">
              <i :class="{'icon':item.icon}"></i>
              <span>{{item.name}}</span>
            </el-menu-item>
          </label>
        </el-menu>
      </div>
    </div>

    <router-view/>
  </div>
</template>

<script>
  import 'element-ui'

    export default {
        name: "index",
        components: {},
        data() {
            return {
              topFrame:"topFrame",
              topFrame2:"topFrame2",
              leftFrame:"leftFrame",
              menuColor:"menuColor",

              menuData:[],
              itemData:{
                id:'',
                icon:'',
                name:'',
                itemClass:''
              },
              nowMenu: "/",


            }
        },
        mounted() {
          let vm = this ;
          vm.loadHome();
          vm.menutest();
        },
        methods: {
          loadHome(){
            let vm = this ;
            vm.nowMenu = "/";
            let item = vm.itemData ;
            item.id = "/";
            item.name = "HOME";
            item.itemClass = (item.id === vm.nowMenu)?"clickmenuColor":"menuColor";
            vm.menuData.push(item);
          },
          menutest(){
            let vm = this ;
            let item = vm.itemData ;
            for(let i = 1 ; i < 8 ; i++ ){
              item.id = i;
              item.name = "TEST";
              item.itemClass = (item.id === vm.nowMenu)?"clickmenuColor":"menuColor";
              vm.menuData.push(item);
            }

          },
          navigator(id){
            console.log(id);
          }
        },
    }
</script>
