<style scoped>

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
            default:[]
          }
        },
        components: {},
        data() {
            return {}
        },
        mounted() {

        },
        methods: {}

    }
</script>
