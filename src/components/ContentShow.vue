<style scoped>
  .essay_frame{
    border: 1px solid #FFFFFF;
    /*border-radius: 15px;*/
    padding: 16px;
    margin: 30px;
    height: 120px;
    min-width: 700px;
    box-shadow:0 0  10px 2px #C7C7C7;
  }
</style>
<template>
    <div>
      <div v-for="item in contentData" class="essay_frame">
        <span>{{item.title}}</span><br/>
        <span>发表日期：{{format(item.date,"yyyy-MM-dd hh:mm")}}</span>
        <span style="margin-left: 50px">作者：{{item.author}}</span><br/>
        <span v-for="item1 in item.tag">{{item1}},</span><br/>
        <div style="height:35px">
          <span>{{item.data}}</span>
        </div>
        <div>
          <span class="Jiconfont ji-iconfont-favor_light" style="font-size: 25px ; float: right"></span>
          <span class="Jiconfont ji-iconfont-appreciate_light" style="font-size: 25px ; float: right;margin-right: 10px;"></span>
          <span class="Jiconfont ji-iconfont-comment_light" style="font-size: 25px ; float: right;margin-right: 10px"></span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "content-show",
        props: {
          contentData:{
            type:Array,
            default: () => []
          }
        },
        components: {},
        data() {
            return {}
        },
        mounted() {
          // setTimeout(function () {
          //   console.log(this.contentData)
          // },2000)
        },
        methods: {
          format(date,fmt) { //author: meizz
            var o = {
              "M+": date.getMonth() + 1, //月份
              "d+": date.getDate(), //日
              "h+": date.getHours(), //小时
              "m+": date.getMinutes(), //分
              "s+": date.getSeconds(), //秒
              "q+": Math.floor((date.getMonth() + 3) / 3), //季度
              "S": date.getMilliseconds() //毫秒
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
              if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
          },
        }

    }
</script>
