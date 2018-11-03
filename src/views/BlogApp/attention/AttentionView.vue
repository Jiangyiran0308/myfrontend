<style scoped>

</style>
<template>
    <div id="attentionView" style="margin-top: 50px">
      <div v-for="item in attentionList">
        <common-content-show :commonData="item"/>
      </div>
    </div>
</template>

<script>
  import CommonContentShow from '../../../components/CommonContentShow'
    export default {
        name: "attention-view",
        props: {},
        components: {
          'common-content-show':CommonContentShow,
        },
        data() {
            return {
              loading1:'',
              attentionList:[],
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
              background: 'rgba(0, 0, 0, 0.7)',
              target: document.querySelector('#attentionView')
            });
          },
          init_1(){
            let vm = this ;
            let list = [];
            vm.$http.get('/api/attentionList').then(function (xhr) {
              let data = xhr.body.data ;
              if(data){
                if(data.data.length>0) {
                  vm.attentionList = data.data;
                  vm.loading1.close();
                }
              }
            })
          }
        },
    }
</script>
