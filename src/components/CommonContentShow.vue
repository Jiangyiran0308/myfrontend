<style scoped>
  .essay_frame{
    border: 1px solid #FFFFFF;
    /*border-radius: 15px;*/
    padding: 16px;
    margin: 30px;
    height: 120px;
    min-width: 700px;
    box-shadow:0 0 10px 2px #C7C7C7;
  }
  .commonTitleClass{
    height: 30px;
    color: #245B90;
    line-height: 30px;
    font-size: 22px;
    overflow:hidden;
    cursor:pointer;
  }
  .commonAuthorTime{
    height: 20px;
    color: #999999;
    line-height: 20px;
    font-size: 14px;
  }
</style>
<template>
  <div class="essay_frame">
    <div class="commonTitleClass" @click="clickTitle">
      <span>{{commonData.title}}</span>
    </div>
    <div class="commonAuthorTime">
      <span>发表日期：<span style="color: #245B90">{{commonData.createTime}}</span></span>
      <span style="margin-left: 50px">作者：<span style="color: #245B90;cursor: pointer" @click="clickAuthor">{{commonData.author}}</span></span>
    </div>
    <div style="height: 25px;line-height: 25px">
      <label v-for="item in commonData.tagList" style="cursor: pointer" @click="clickTag(item)">
        <el-tag size="mini" type="info">{{item}}</el-tag>
      </label>
    </div>
    <div style="height:30px;color: #999999;font-size: 14px;overflow:hidden;line-height: 30px">
      {{commonData.content}}
    </div>
    <div style="color: #999999">
      <span class="Jiconfont ji-iconfont-favor_light" style="font-size: 25px; float: right">
        <span style="font-size: 16px">({{commonData.collectNum}})</span>
      </span>
      <span class="Jiconfont ji-iconfont-appreciate_light" style="font-size: 25px ; float: right;margin-right: 10px">
        <span style="font-size: 16px">({{commonData.favorNum}})</span>
      </span>
      <span class="Jiconfont ji-iconfont-comment_light" style="font-size: 25px ; float: right;margin-right: 10px">
        <span style="font-size: 16px">({{commonData.commentNum}})</span>
      </span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "common-content-show",
        props: {
          commonData:{
            type:Object,
            default:function () {
              return{
                id:'',
                title:'title',
                author:'author',
                createTime:'2000-01-01 00:00:00',
                tagList:['tag'],
                content:'null',
                commentNum:0,
                favorNum:0,
                collectNum:0
              }
            }
          }
        },
        components: {},
        data() {
            return {}
        },
        mounted() {
        },
        methods: {
          clickTitle(){

          },
          clickAuthor(){

          },
          clickTag(val){

          }
        },
    }
</script>
