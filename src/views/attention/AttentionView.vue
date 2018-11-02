<style scoped>

</style>
<template>
    <div>
      <div v-for="item in attentionList">
        <common-content-show :commonData="item"/>
      </div>
    </div>
</template>

<script>
  import CommonContentShow from '../../components/CommonContentShow'
    export default {
        name: "attention-view",
        props: {},
        components: {
          'common-content-show':CommonContentShow,
        },
        data() {
            return {
              attentionList:[],
            }
        },
        mounted() {
          let vm = this ;
          this.init_1();
        },
        methods: {
          init_1(){
            let vm = this ;
            let list = [];
            vm.$http.get('/api/attentionList').then(function (xhr) {
              let data = xhr.body.data ;
              if(data){
                if(data.data.length>0) {
                  vm.attentionList = data.data;
                }
              }
            })
          }
        },
    }
</script>
