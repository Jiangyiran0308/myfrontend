<style scoped>
  .deleteFrame{
    color: #245B90;
    line-height: 35px;
    border-radius: 4px;
    background-color: #F2F2F2;
    margin-bottom: 5px;
  }
  .el-checkbox {
    color: #245B90;
  }
</style>
<template>
    <div>
      <div style="margin: 30px;margin-bottom: 50px;margin-top: 40px">
        <span style="color: rgba(80,81,91,0.3);font-size: 20px;font-weight: bolder;font-family: 微软雅黑">
            草稿箱
            <span class="ji-iconfont-deletefill" style="font-size: 25px"></span>
        </span>
        <!--<span style="float: right; font-size: 10px;color:#2D64B3 ;line-height: 35px;cursor: pointer">批量处理</span>-->
        <hr color="#D0D0D0"/>
      </div>
      <div id="DraftsView" style="margin: 30px">
        <large-delete-show :blogData="blogData"/>
      </div>
    </div>
</template>

<script>
  import LargeDeleteShow from '../../../components/LargeDeleteShow'
    export default {
        name: "drafts-view",
        props: {},
        components: {LargeDeleteShow},
        data() {
            return {
              loading1:'',
              blogData:[],
              checkData:[],
            }
        },
        mounted() {
          let vm = this ;
          vm.loadingShow();
          this.init_1();
        },
        methods: {
          loadingShow(){
            let vm = this ;
            // vm.loading1 = this.$loading({
            //   lock: true,
            //   text: '正在加载',
            //   // spinner: 'el-icon-loading',
            //   background: 'rgba(255, 255, 255, 0.2)',
            //   target: document.querySelector('#BlogView')
            // });
          },
          init_1(){
            let vm = this ;
            vm.$http.get('/api/homeList').then(function (xhr) {
              let data = xhr.body.data ;
              if(data){
                if(data.data.length>0) {
                  vm.blogData = data.data;
                  // vm.loading1.close();
                }
              }
            })
          }
        },
    }
</script>
