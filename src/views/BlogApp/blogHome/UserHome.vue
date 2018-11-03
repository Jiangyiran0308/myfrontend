<style scoped>
</style>
<template>
    <div  style="height: 98%;margin-top: 5px;margin-bottom: 5px">
      <div style="margin-left: 30px;margin-right: 30px">
        <span style="color: #245B90;font-size: 20px;font-weight: bolder;font-family: 微软雅黑">
            推荐
            <span class="ji-iconfont-formfill" style="font-size: 25px"></span>
          </span>
        <hr color="#D0D0D0"/>
      </div>
      <content-show :contentData="essaydata" />

      <div style="margin-top: 32px;margin-bottom: 32px;text-align: center;">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pagestar"
          :page-sizes="[10,20,50,100]"
          :page-size="pagelength"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="pagenum">
        </el-pagination>
      </div>
    </div>
</template>

<script>
    import ContentShow from '../../components/ContentShow'
    export default {
        name: "user-home",
        components: {
          'content-show':ContentShow
        },
        data() {
            return {
              essaydata:[],
              pagenum:500,    //总页数
              pagestar:1,   //当前选择页
              pagelength:10,
              showfilter:{},


              testAlldata:[],
            }
        },
        mounted() {
          this.init();
        },
        methods: {
          init(){
            let vm = this ;
            vm.hometest();
          },
          handleSizeChange(val){
            let vm = this ;
            vm.pagestar = 1 ;
            vm.pagelength = val ;
            vm.essaydata = vm.testAlldata.slice(vm.pagestar*vm.pagelength-vm.pagelength,vm.pagestar*vm.pagelength);
          },
          handleCurrentChange(val){
            let vm = this ;
            let tt = vm.pagestar
            vm.pagestar = val ;
            vm.essaydata = vm.testAlldata.slice(vm.pagestar*vm.pagelength-vm.pagelength,vm.pagestar*vm.pagelength);
          },

          hometest(){
            let vm = this ;
            for(let i = 0 ; i < 486 ; i++ ){
              let data = {
                index:i,
                title:"title",
                date:new Date(),
                author:"name",
                tag:['tag_1','tag_2','tag_3'],
                data:"content" + (i + 1)
              }
              vm.testAlldata.push(data);
            }
            vm.pagelength = 10 ;
            vm.pagestar = 1 ;
            vm.pagenum = vm.testAlldata.length;
            vm.essaydata = vm.testAlldata.slice(vm.pagestar*vm.pagelength-vm.pagelength,vm.pagestar*vm.pagelength);

          },
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
        },
    }
</script>
