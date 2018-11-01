<style scoped>

</style>
<template>
    <div class="main_min_frame">
      <!--搜索框-->
      <div style="width:  75%;text-align: center;margin: 0 auto">
        <div style="margin-top: 40px">
          <span class="ji-iconfont-search" style="font-size: 40px;color:#245B90 "></span>
          <span style="font-size: 30px;color:#245B90;margin-left: 16px;font-family: 方正兰亭超细黑简体">搜    索</span>
        </div>
        <el-radio-group v-model="searchChoose" style="margin-top: 30px">
          <el-radio :label="1">标签</el-radio>
          <el-radio :label="2">文章</el-radio>
          <el-radio :label="3">作者</el-radio>
        </el-radio-group>
        <el-input placeholder="请输入内容" v-model="searchInfo" class="input-with-select" style="margin-top: 20px">
          <el-button slot="append" icon="el-icon-search" @click="startsearch"></el-button>
        </el-input>
      </div>
      <!--热门-->
      <div style="margin-top: 100px;margin-left: 30px;margin-right: 30px">
        <span style="color: #8B0014;font-size: 20px;font-weight: bolder;font-family: 微软雅黑">
          热门
          <span class="ji-iconfont-hotfill" style="font-size: 25px"></span>
        </span>
        <hr color="#D0D0D0"/>
        <div style="height: 150px">
          <div v-for="(item,index) in fireTag" style="float:left;margin-top: 10px;margin-left: 2px; height: 20px;cursor:pointer">
            <el-tag size="small" :type="tagType[index%4]" @click.native="searchTag(item)">
              <span class="ji-iconfont-tagfill" style="font-size: 13px"></span>
              {{item}}
            </el-tag>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "hot-tag",
        props: {},
        components: {},
        data() {
            return {
              searchInfo:'',
              searchChoose:1,

              fireTag:[],
              tagType:[
                '',
                'success',
                'warning',
                'danger'
              ],
            }
        },
        mounted() {
          this.$http.get('/api/fireTag').then(function (xhr) {
            let data = xhr.body.data ;
            if(data) {
              this.fireTag = data.tagList;
            }
          })
        },
        methods: {
          startsearch(){
            let vm = this ;
            let searchInfo = vm.searchInfo ;
            if(searchInfo.length === 0 || searchInfo === null || searchInfo=== undefined){
              vm.$message({
                showClose:true,
                type: 'warning',
                message: '搜索内容不能为空！'
              });
            }
            else{
              switch (vm.searchChoose){
                case 1:
                  vm.searchTag(searchInfo);
                  break;
                case 2:
                  vm.searchEssay(searchInfo);
                  break;
                case 3:
                  vm.searchAuthor(searchInfo);
              }
            }
          },
          searchTag(val){
            console.log("searchTag  "+val);
          },
          searchEssay(val){
            console.log("searchEssay  "+val);
          },
          searchAuthor(val){
            console.log("searchAuthor  "+val);
          },

        }

    }
</script>
