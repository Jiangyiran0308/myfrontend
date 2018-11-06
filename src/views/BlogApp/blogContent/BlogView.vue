<style scoped>

</style>
<template>
    <div>
      <div style="margin: 30px;margin-bottom: 50px;margin-top: 40px">
        <span style="color: rgba(0,85,179,0.4);font-size: 20px;font-weight: bolder;font-family: 微软雅黑">
            全部文章
            <span class="ji-iconfont-formfill" style="font-size: 25px"></span>
        </span>
        <!--<span style="float: right; font-size: 10px;color:#2D64B3 ;line-height: 35px;cursor: pointer">批量处理</span>-->
        <hr color="#D0D0D0"/>
      </div>
      <div id="BlogView">
        <div v-for="item in myBlogData">
          <simple-content-show :simpleData="item"/>
        </div>
      </div>
    </div>
</template>

<script>
  import SimpleContentShow from '../../../components/SimpleContentShow'
    export default {
        name: "blog-view",
        props: {},
        components: {SimpleContentShow},
        data() {
            return {
              loading1:'',
              myBlogData:[],
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
            vm.loading1 = this.$loading({
              lock: true,
              text: '正在加载',
              // spinner: 'el-icon-loading',
              background: 'rgba(255, 255, 255, 0.2)',
              target: document.querySelector('#BlogView')
            });
          },
          init_1(){
            let vm = this ;
            vm.$http.get('/api/homeList').then(function (xhr) {
              let data = xhr.body.data ;
              if(data){
                if(data.data.length>0) {
                  vm.myBlogData = data.data;
                  vm.loading1.close();
                }
              }
            })
          }
        },
    }
</script>
