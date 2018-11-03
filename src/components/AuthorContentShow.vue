<style scoped>
 .attentionlistClass{
   position: relative;
   /*float: left;*/
   margin: 5px;
   padding: 5px;
   height: 300px;
   width: 450px;
   border: 1px solid #FFFFFF;
   box-shadow:0 0  8px 2px #C7C7C7;
 }
 .profilDiv{
   display:inline-block;
   margin:5px auto;
   width:46px;
   height:46px;
   border-radius:46px;
   -webkit-border-radius:46px;
   -moz-border-radius:46px;
   border:2px solid #fff;
   /*box-shadow:0 0 3px #ccc;*/
   overflow:hidden;
   float: left;
   cursor:pointer;
 }
  .userNameClass{
    display:inline-block;
    cursor:pointer;
    line-height: 60px;
    margin-left: 15px;
    color: #245B90;
    font-size: 20px;
  }
  .userInfoClass{
    float: right;
    cursor:pointer;
    line-height: 30px;
    margin-right: 16px;
    color: #666666;
    font-size: 15px;
  }
  .showContentClass{
    height: 140px;
    margin: 10px;
    color: #999999;
    font-size: 14px;
    overflow:hidden
  }
  .showTimeClass{
    height: 20px;
    /*父元素属性为 relative 才能定位到父div的底部*/
    position: absolute;
    bottom: 0;
    right: 5px;
    color: #999999;
    font-size: 13px;
    line-height: 20px
  }
</style>
<template>
    <div class="attentionlistClass" :style="{width:showWidth+'px'}">
      <!--关注人信息-->
      <div style="height: 60px">
        <div class="profilDiv" style="margin-left: 10px" @click="clickUser">
          <!--头像圆形显示-->
          <img v-if="briefData.userPic!==''&&briefData.userPic.length>0" :src="briefData.userPic" style="width: auto;height: auto;max-width: 100%;max-height: 100%"/>
          <img v-else :src="defaultPic" style="width: auto;height: auto;max-width: 100%;max-height: 100%"/>
        </div>
        <div class="userNameClass">
          <span  @click="clickUser">{{briefData.userName}}</span>
        </div>
        <div class="userInfoClass">
          <span @click="clickFans">
            <span style="margin-right: 10px">粉丝</span><span>{{briefData.userFans}}</span>
          </span><br/>
          <span @click="clickEssay">
            <span style="margin-right: 10px">文章</span><span>{{briefData.userEssay}}</span>
          </span>
        </div>
      </div>
      <!--文章标题-->
      <div style="height: 50px;line-height: 50px;font-size: 20px;color: #245B90;overflow:hidden;">
        <span style="margin-left: 10px;cursor:pointer;" @click="clickTitle">{{briefData.title}}</span>
      </div>
      <!--文章标签-->
      <div style="height: 22px;overflow: hidden">
        <label v-for="item in briefData.tagList" style="margin: 3px;cursor:pointer;">
          <el-tag size="mini" type="info" @click.native="clickTag(item)">{{item}}</el-tag>
        </label>
      </div>
      <!--内容（部分）-->
      <div class="showContentClass">
          {{briefData.content}}
      </div>
      <!--发表日期-->
      <div class="showTimeClass">
        {{briefData.createTime}}
      </div>
    </div>
</template>

<script>
  import defaultPic from '../assets/picture/defaulthead.png'
  import {time_format} from '../../static/js/format.js'
    export default {
        name: "author-content",
        props: {
          briefData:{
            type:Object,
            default:function () {
              return{
                contentId:'',
                userId:'',
                userPic:defaultPic,
                userName:'admin',
                userFans:0,
                userEssay:0,
                title:'title',
                tagList:['tag'],
                createTime:'2000-01-01 00:00:00',
                content:'null'
              }
            }
          },
          showWidth:{
            type:Number,
            default:function () {
              return 450
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
        },
        methods: {
          clickUser(val){
            console.log("user");
          },
          clickFans(val){
            console.log("fans");
          },
          clickEssay(val){
            console.log("essay");
          },
          clickTitle(val){
            console.log("title");
          },
          clickTag(val){
            console.log("tag");
          },
          formatDate(date,f){
            return time_format(date,f);
          }
        },
    }
</script>
