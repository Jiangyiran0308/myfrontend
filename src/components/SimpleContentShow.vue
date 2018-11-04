<style scoped>
  .el-row {
    margin-bottom: 5px;
    margin-left: 30px;
    margin-right: 30px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #ECF0F9;
  }
  .bg-purple-light:hover {
    background: #e5e9f2;
  }
  .grid-content {
    color: #245B90;
    line-height: 35px;
    border-radius: 4px;
    min-height: 35px;
    /*cursor: pointer;*/
    /*overflow: hidden;*/
  }
</style>
<template>
    <div>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-light">
            <div style="float: left;margin-left: 20px;max-width: 850px;overflow: hidden;cursor: pointer;" @click="readBlog">
              {{simpleData.title}}
            </div>
            <div style="float: right;margin-right: 20px">
              <el-tooltip class="item" effect="dark" content="详情" placement="top-end">
                <span class="ji-iconfont-attentionfill" style="font-size: 18px" @click="readBlog"></span>
              </el-tooltip>&nbsp;
              <el-tooltip class="item" effect="dark" content="编辑" placement="top-end">
                <span class="ji-iconfont-writefill" style="font-size: 18px" @click="writeBlog"></span>
              </el-tooltip>&nbsp;
              <el-tooltip class="item" effect="dark" content="删除" placement="top-end">
                <span class="ji-iconfont-deletefill" style="font-size: 17px" @click="deleteBlog"></span>
              </el-tooltip>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "simple-content-show",
        props: {
          simpleData:{
            type:Object,
            default: function () {
              return {
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
          readBlog(){

          },
          writeBlog(){

          },
          deleteBlog(){

          }
        }

    }
</script>
