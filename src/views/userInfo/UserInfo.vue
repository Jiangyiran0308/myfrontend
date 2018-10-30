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
          <span>{{userName}}</span>
          <span v-if="loginflag" class="ji-iconfont-triangledownfill" style="font-size: 15px"></span>
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
              headPortrait:defaultPic,
              userName:"登录",
              loginflag:true,
            }
        },
        mounted() {

        },
        methods: {}

    }
</script>
