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
    background-color: #A2A2A2;
    text-align: center;
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

</style>
<template>
  <div id = "app">

    <div :class="topFrame">
      <div style="margin-top: 5px;margin-bottom: 5px;margin-left: 65px">
        <span class="ji-iconfont-home_fill_light" style="font-size: 35px;color: #FFFFFF" ></span>
      </div>
    </div>
    <div style="position: absolute;width: 100%;top: 50px;left: 0;right: 0;bottom: 0;background-color: #e5e7ea">
      <div class="viewsFrame">
        <router-view/>
      </div>
      <div :class="leftFrame">
        <div v-for="(item,index) in menuData" :class="selectMenuDivColor(item.id)" @click="navigator(item,index)" :style='{height:"oneMenuHeight"}'>
          <span>{{item.name}}</span>
        </div>
        <!--<el-menu-->
          <!--class="el-menu-vertical-demo"-->
          <!--background-color="#CDCDCD"-->
          <!--active-text-color="#7A7A7A">-->

          <!--<label v-for="(item,index) in menuData">-->
            <!--<el-menu-item  :index="index">-->
              <!--<i :class="{'icon':item.icon}"></i>-->
              <!--<span>{{item.name}}</span>-->
            <!--</el-menu-item>-->
          <!--</label>-->
        <!--</el-menu>-->
      </div>

    </div>
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

              oneMenuHeight:40,
              minHeight:100,

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
            for(let i = 0 ; i < 8 ; i++ ){
              let id = i;
              let name = "TEST" + i;
              let itemClass = (id === vm.nowMenu)?"clickmenuColor":"menuColor";

              vm.menuData.push({id:id,icon:'',name:name,itemClass:itemClass});
            }
          },
          navigator(item,index){
            let vm = this ;
            let id = item.id ;
            vm.nowMenu = id;
          },
          selectMenuDivColor(id){
            let vm = this ;
            if(id === vm.nowMenu ){
              return "clickmenuColor";
            }else {
              return "menuColor";
            }
          },
        },
    }
</script>
