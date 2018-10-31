<style scoped>
  .profilDiv{
    display:inline-block;
    margin:5px auto;
    width:38px;
    height:38px;
    border-radius:38px;
    -webkit-border-radius:38px;
    -moz-border-radius:38px;
    border:2px solid #fff;
    /*box-shadow:0 0 3px #ccc;*/
    overflow:hidden;
    float: left;
  }
</style>
<template>
    <div>
        <div class="profilDiv">
          <!--头像圆形显示-->
          <img :src="headPortrait" style="width: auto;height: auto;max-width: 100%;max-height: 100%"/>
        </div>
        <div style="height:50px;color: #FFFFFF;float: left;line-height: 50px;margin-left: 15px;margin-right: 15px">
          <span @click="">{{userName}}</span>
          <span v-if="loginflag" class="ji-iconfont-triangledownfill" style="font-size: 12px;margin-left: 5px"></span>
        </div>
    </div>
</template>

<script>
    import defaultPic from '../../assets/picture/defaulthead.png'
    export default {
        name: "user-info",
        props: {},
        components: {},
        data() {
            return {
              userId:'',
              headPortrait:defaultPic,//默认头像
              userName:"登录",
              loginflag:false, //默认false状态，不显示按钮

              userSettingflag:false,
            }
        },
        mounted() {
          this.getUserInfo();
        },
        methods: {
          getUserInfo(){
            let  vm = this ;
            vm.$http.get('/api/userInfo').then(function (xhr) {
              let data = xhr.body.data ;
              console.log(data);
              if(data){
                if(data.id && data.id.length > 0){
                  vm.userId = data.id;
                  vm.loginflag = true;
                  vm.userName = data.name ;
                }
              }
            })
          },
          clickUserSettting(){

          }
        }

    }
</script>
