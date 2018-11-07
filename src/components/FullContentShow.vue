<style scoped>
  .fullcontentFrame{
    margin-left: 20px;
    margin-right: 20px;
    background-color: rgba(0, 94, 224, 0.11);
    color: #00376E;
    overflow: hidden;
  }
  .fulltitleClass{
    font-size: 30px;
    font-weight: 900;
    font-family: 黑体;
    line-height: 70px;
    height: 70px;
    text-align: center;
    overflow: hidden;
  }
  .contentFrame{
    width: 920px;
    padding: 20px;
    margin-left: 0px;
    /*margin-right: 20px;*/
    /*background-color: rgba(0, 85, 179, 0.11);*/

  }
</style>
<template>
    <div>
      <div class="homeFrame">
        <div class="profilDiv_big" style="margin-left: 10px" @click="clickUser">
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
        <div style="color: #9C9C9C;font-size: 13px;">
          <span style="margin:30px">发表日期：{{blogData.createTime}}</span>
          <span>
            标签：
            <label  v-for="item in blogData.tagList">
              <el-tag type="info" size="mini">{{item}}</el-tag>
            </label>
          </span>
          <span style="margin: 30px">
            评论：{{blogData.commentNum}}
            赞：{{blogData.favorNum}}
            收藏：{{blogData.collectNum}}
          </span>
        </div>
        <hr color="#FFFFFF"/>
        <div class=" contentFrame">
          <div id = "content"></div>
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
            // console.log(vm.blogData);
            let id = "#"+vm.blogData.id;
            // $("#content").html(vm.blogData.content);
            document.getElementById("content").innerHTML = vm.blogData.content;
          }
        },
    }
</script>
