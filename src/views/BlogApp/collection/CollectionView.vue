<style scoped>

</style>
<template>
    <div>
      <div style="margin: 30px;margin-bottom: 50px;margin-top: 40px">
        <span style="color: rgba(179,134,0,0.4);font-size: 20px;font-weight: bolder;font-family: 微软雅黑">
            收藏夹
            <span class="ji-iconfont-favorfill" style="font-size: 25px"></span>
          </span>
        <hr color="#D0D0D0"/>
      </div>

      <div id="collectionView">
        <div v-for="item in collectionList">
          <common-content-show :commonData="item"/>
        </div>
      </div>
    </div>
</template>

<script>
  import CommonContentShow from '../../../components/CommonContentShow'
    export default {
        name: "collection-view",
        props: {},
        components: {
          'common-content-show':CommonContentShow,
        },
        data() {
            return {
              loading1:'',
              collectionList:[],
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
              background: 'rgba(255, 255, 255, 0.8',
              target: document.querySelector('.viewsFrame')
            });
          },
          init_1(){
            let vm = this ;
            vm.$http.get('/api/homeList').then(function (xhr) {
              let data = xhr.body.data ;
              if(data){
                if(data.data.length>0) {
                  vm.collectionList = data.data;
                  vm.loading1.close();
                }
              }
            })
          }
        },
    }
</script>
