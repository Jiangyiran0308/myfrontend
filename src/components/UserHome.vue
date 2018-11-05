<style scoped>
  .homeFrame{
    margin: 20px;
    padding: 15px;
    background-color: rgba(0, 85, 179, 0.11);
    height: 100px;
  }
  .contentFrame{
    width: 700px;
    float: left;
    margin-left: 20px;
    /*padding: 15px;*/
    /*background-color: rgba(0, 85, 179, 0.11);*/
    /*height: 100px;*/
  }
  .otherFrame{
    width: 180px;
    float: right;
    margin-left: 20px;
    margin-right: 20px;
    padding: 15px;
    background-color: rgba(0, 85, 179, 0.11);
    height: 100px;
  }
  .profilDiv{
    display:inline-block;
    margin:5px auto;
    width:80px;
    height:80px;
    border-radius:100px;
    -webkit-border-radius:100px;
    -moz-border-radius:100px;
    border:3px solid #fff;
    box-shadow:0 0 20px #fff;
    overflow:hidden;
    float: left;
    cursor:pointer;
  }
  .userName{
    height: 65px;
    width: 770px;
    line-height: 90px;
    color: #0055B3;
    font-size: 25px;
    font-family: 方正兰亭超细黑简体;
  }
  .userIntroduction{
    line-height: 20px;
    color: #8A8A8A;
    font-size: 13px;
    font-weight: 300;
  }
  .attentionStyle{
    margin-top: 32px;
    float: right;
  }
</style>
<template>
  <div>
    <div class="homeFrame">
        <div class="profilDiv" style="margin-left: 10px" @click="clickUser">
          <!--头像圆形显示-->
          <!--<img v-if="briefData.userPic!==''&&briefData.userPic.length>0" :src="briefData.userPic" style="width: auto;height: auto;max-width: 100%;max-height: 100%"/>-->
          <img  :src="defaultPic" style="width: auto;height: auto;max-width: 100%;max-height: 100%"/>
      </div>
      <div style="margin-left: 30px;float: left;height: 100px;">
        <div class="userName">
          测试用户
          <el-button class="attentionStyle" size="small" round>
            关注&nbsp;<span class="ji-iconfont-likefill" style="font-size: 12px"></span>
          </el-button>
        </div>
        <div class="userIntroduction">
          暂无
        </div>
      </div>
    </div>
    <div class="contentFrame">
      <label v-for="item in blogDataList">
        <content-show :blogData="item"/>
      </label>
    </div>
    <div class="otherFrame">

    </div>
  </div>
</template>

<script>
  import defaultPic from '../assets/picture/defaulthead.png'
  import ContentShow from './ContentShow'
    export default {
        name: "user-home",
        props: {},
        components: {ContentShow},
        data() {
            return {
              defaultPic:defaultPic,
              blogDataList:[],
            }
        },
        mounted() {
          this.init_1();
        },
        methods: {
          init_1(){
            let vm = this ;
            vm.$http.get('/api/homeList').then(function (xhr) {
              let data = xhr.body.data ;
              if(data){
                if(data.data.length>0){
                  vm.blogDataList = data.data ;
                  // vm.loading1.close();
                }
              }
            });
          },
          clickUser(){
            let vm = this ;
            vm.$router.push({path:'/my.j.blog/setting/editHeadProfile'});
          }
        }

    }
</script>
