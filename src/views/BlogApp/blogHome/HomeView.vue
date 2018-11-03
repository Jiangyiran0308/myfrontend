<style scoped>
  .rightButtonClass{
    position:relative;
    width: 20px;
    height: 312px;
    float: right;
    background-color: rgba(36,91,144,0.2);
    margin-right: 20px;
    margin-top: 5px;
    line-height: 312px;
    text-align: center;
    cursor: pointer;
  }
  .rightButtonClass:hover{
    background-color: rgba(36,91,144,0.3);
  }
</style>
<template>
    <div>
      <hot-tag/>

      <div style="height: 350px;" id="fireView">
        <el-carousel indicator-position="outside" height="330px" arrow="always">
          <el-carousel-item v-for="item in homeList" :key="item.userName">
            <div style="margin-left: 90px">
              <author-content :briefData="item" :showWidth="800"/>
            </div>
          </el-carousel-item>
        </el-carousel>
        <!--<div v-for="item in homeList" style=" margin: 10px">-->
          <!--<author-content :briefData="item"/>-->
        <!--</div>-->
        <!--<div class="rightButtonClass" @click="showSwitch">-->
          <!--<span class="ji-iconfont-right" style="font-size: 18px;color: #FFFFFF"></span>-->
        <!--</div>-->
      </div>

      <div style="margin: 30px;margin-bottom: 60px">
        <span style="color: #245B90;font-size: 20px;font-weight: bolder;font-family: 微软雅黑">
            推荐
            <span class="ji-iconfont-formfill" style="font-size: 25px"></span>
          </span>
        <hr color="#D0D0D0"/>
      </div>
      <div id="recommandView">
        <div v-for="item in homeList2" style="margin-top: 30px">
          <common-content-show :commonData="item"/>
        </div>
      </div>
    </div>
</template>

<script>
    import HotTag from './HotTag'
    import AuthotContent from '../../../components/AuthorContentShow'
    import CommonContent from '../../../components/CommonContentShow'

    export default {
        name: "home-view",
        props: {},
        components: {
          'common-content-show':CommonContent,
          'hot-tag':HotTag,
          'author-content':AuthotContent
        },
        data() {
            return {
              loading1:'',
              loading2:'',
              homeList:[],
              homeList2:[],
            }
        },
        mounted() {
          this.loadingShow();
          this.inithome()
        },
        methods: {
          loadingShow(){
            let  vm = this ;
            vm.loading1 = vm.$loading({
              lock: true,
              text: '正在加载',
              // spinner: 'el-icon-loading',
              background: 'rgba(255, 255, 255, 0.2)',
              target: document.querySelector('#fireView')
            });
            vm.loading2 = vm.$loading({
              lock: true,
              text: '正在加载',
              // spinner: 'el-icon-loading',
              background: 'rgba(255, 255, 255, 0.2)',
              target: document.querySelector('#recommandView')
            });
          },
          inithome(){
            let vm =this ;
            vm.$http.get('/api/homeList').then(function (xhr) {
              let data = xhr.body.data ;
              if(data){
                if(data.data.length>0){
                  vm.homeList = data.data ;
                  vm.loading1.close();
                }
              }
            });

            vm.$http.get('/api/attentionList').then(function (xhr) {
              let data = xhr.body.data ;
              if(data){
                if(data.data.length>0){
                  vm.homeList2 = data.data ;
                  vm.loading2.close();
                }
              }
            })
          },
          showSwitch(){

          }
        },
    }
</script>
