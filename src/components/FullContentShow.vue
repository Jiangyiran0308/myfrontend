<style scoped>
  .fullcontentFrame{
    margin-left: 20px;
    margin-right: 20px;
    background-color: rgba(0, 85, 179, 0.11);
    color: #00376E;
  }
  .fulltitleClass{
    font-size: 25px;
    font-weight: bolder;
    font-family: 黑体;
    line-height: 70px;
    height: 70px;
    text-align: center;
  }
</style>
<template>
    <div>
      <div class="homeFrame">
        <div class="profilDiv" style="margin-left: 10px" @click="clickUser">
          <!--头像圆形显示-->
          <!--<img v-if="briefData.userPic!==''&&briefData.userPic.length>0" :src="briefData.userPic" style="width: auto;height: auto;max-width: 100%;max-height: 100%"/>-->
          <img  :src="defaultPic" style="width: auto;height: auto;max-width: 100%;max-height: 100%"/>
        </div>
        <div style="margin-left: 30px;float: left;height: 100px;">
          <div class="userName">
            测试用户
            <el-button class="attentionStyle" size="small" round>
              关注&nbsp;<span class="ji-iconfont-likefill" style="font-size: 12px"></span>
            </el-button>
          </div>
          <div class="userIntroduction">
            暂无
          </div>
        </div>
      </div>
      <div class="fullcontentFrame">
        <span class="ji-iconfont-back_android" style="font-size: 14px;color: #858585;cursor: pointer" @click="goback">返回</span>
        <div class="fulltitleClass">{{blogData.title}}</div>
        <div id="content">

        </div>
      </div>
    </div>
</template>

<script>
  import $ from 'jquery'
  import defaultPic from '../assets/picture/defaulthead.png'
    export default {
        name: "full-content-show",
        props: {
          blogData:{
            type:Object,
            default:()=>{
              return{
                id:'null',
                title:''
              }
            }
          }
        },
        components: {},
        data() {
            return {
              defaultPic:defaultPic,
            }
        },
        mounted() {
          // let vm = this ;
          // console.log(vm.blogData);
          // let id = "#"+vm.blogData.id;
          // $(id).html(vm.blogData.content);
        },
      watch:{
          "blogData":"loadData"
      },
        methods: {
          clickUser(){
            let vm = this ;
            vm.$router.push({path:'/my.j.blog/setting/editHeadProfile'});
          },
          goback(){
            this.$router.go(-1);
          },
          loadData(){
            let vm = this ;
            console.log(vm.blogData);
            let id = "#"+vm.blogData.id;
            // $("#content").html(vm.blogData.content);
          }
        },
    }
</script>
