<style scoped>

</style>
<template>
    <div>
      <hot-tag/>
      <div style="margin-left: 30px;margin-right: 30px;margin-bottom: 30px">
        <span style="color: #245B90;font-size: 20px;font-weight: bolder;font-family: 微软雅黑">
            推荐
            <span class="ji-iconfont-formfill" style="font-size: 25px"></span>
          </span>
        <hr color="#D0D0D0"/>
      </div>
      <div v-for="item in homeList" style="margin: 12px">
        <author-content :briefData="item"/>
      </div>
    </div>
</template>

<script>
    import HotTag from './HotTag'
    import UserHome from './UserHome'
    import AuthotContent from '../../components/AuthorContentShow'
    export default {
        name: "home-view",
        props: {},
        components: {
          'hot-tag':HotTag,
          'author-content':AuthotContent
        },
        data() {
            return {
              homeList:[],
            }
        },
        mounted() {
          this.inithome()
        },
        methods: {
          inithome(){
            let vm =this ;
            vm.$http.get('/api/homeList').then(function (xhr) {
              let data = xhr.body.data ;
              if(data){
                if(data.data.length>0){
                  vm.homeList = data.data ;
                }
              }
            })
          }
        },
    }
</script>
