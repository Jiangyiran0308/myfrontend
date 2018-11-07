<style scoped>
  .titleCLass{
    color: #00376E;
    font-size: 22px;
    margin-bottom: 10px;
    /*text-align: center;*/
    font-family: 黑体;
    overflow: hidden;
  }
  .title2Class{
    color: #9C9C9C;
    font-size: 13px;
  }
  .contentFrame{
    /*width: 700px;*/
    margin-left: 0px;
    padding: 15px;
    background-color: rgba(0, 85, 179, 0.11);
    margin-bottom: 20px;
    /*height: 100px;*/
  }
</style>
<template>
  <div class="contentFrame">
    <div class="titleCLass">
      {{blogData.title}}
    </div>
    <div class="title2Class">
      <span style="margin-right: 20px">{{blogData.createTime}}</span>
      <span>
        标签：
        <label  v-for="item in blogData.tagList">
          <el-tag type="info" size="mini">{{item}}</el-tag>
        </label>
      </span>
      <span style="float: right;color: #00376E;cursor: pointer" @click="fullBlog">查看全文<span class="ji-iconfont-right" style="font-size: 12px"></span></span>
    </div>
    <hr color="#FFFFFF"/>
    <br/>
    <div style="max-height: 400px;color: #00376E">
      <div :id="blogData.id"></div>
    </div>
    <hr color="#FFFFFF"/>
    <div style="color: #00376E;height: 30px">
      <span class="Jiconfont ji-iconfont-favor_light" style="font-size: 20px;float: right;cursor: pointer">
        <span style="font-size: 14px">({{blogData.collectNum}})</span>
      </span>
      <span class="Jiconfont ji-iconfont-appreciate_light" style="font-size: 20px;float: right;cursor: pointer">
        <span style="font-size: 14px">({{blogData.favorNum}})</span>
      </span>
      <span class="Jiconfont ji-iconfont-comment_light" style="font-size: 20px;float: right;cursor: pointer">
        <span style="font-size: 14px">({{blogData.commentNum}})</span>
      </span>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
    export default {
        name: "content-show",
        props: {
          blogData:{
            type:Object,
            default:()=>{
              return{
                id:'00',
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
            return {
              loading1:'',
              blogShowData:[],
            }
        },
      watch:{
        "blogData" : "loadContent"
      },
        mounted() {
          this.loadContent();
        },
        methods: {
          fullBlog(){
            let vm = this ;
            let data = vm.blogData ;
            this.$router.push({
              path:'/my.j.blog/blogShow',
              query:{
                data:data
              },
            })
          },
          loadContent(){
            let vm = this ;
            let id = "#"+vm.blogData.id;
            $(id).html(vm.blogData.content);
            // document.getElementById(vm.blogData.contentId.toString()).style.font
          }
        },
    }
</script>
