<style scoped>
  .userFrame{
    border: 1px solid #FFFFFF;
    /*border-radius: 15px;*/
    padding: 10px;
    height: 70px;
    width: 270px;
    /*min-width: 700px;*/
    box-shadow:0 0 10px 2px #C7C7C7;
  }
</style>
<template>
    <div class="userFrame">
      <div class="profilDiv_big" style="width:70px;height: 70px;box-shadow:0 0 0 #fff;" @click="clickUser">
        <!--头像圆形显示-->
        <!--<img v-if="briefData.userPic!==''&&briefData.userPic.length>0" :src="briefData.userPic" style="width: auto;height: auto;max-width: 100%;max-height: 100%"/>-->
        <img  :src="defaultPic" style="width: auto;height: auto;max-width: 100%;max-height: 100%"/>
      </div>
    </div>
</template>

<script>
  import defaultPic from '../assets/picture/defaulthead.png'
    export default {
        name: "simple-user-show",
        props: {},
        components: {},
        data() {
            return {
              defaultPic:defaultPic,
            }
        },
        mounted() {

        },
        methods: {
          clickUser(){

          }
        }

    }
</script>
