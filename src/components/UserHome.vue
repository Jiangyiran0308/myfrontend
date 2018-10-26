<style>
  .essay_frame{
    border: 1px solid #9F9F9F;
    border-radius: 15px;
    padding: 16px;
    margin: 30px;
    height: 250px;
    min-width: 700px;
    box-shadow:5px 5px  10px 2px #C7C7C7;
  }

  /*分页样式修改*/
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #A8A8A8;
    color: #fff;
  }
  .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #B1B1B1;
  }
  .el-select .el-input.is-focus .el-input__inner {
    border-color: #484848;
  }
  .el-pagination__sizes .el-input .el-input__inner:hover {
    border-color: #484848;
  }
  .el-select-dropdown__item.selected {
    color: #9D9D9D;
    font-weight: 700;
  }
</style>
<template>
    <div  style="height: 95%; overflow:auto;margin-top: 5px;margin-bottom: 5px">
      <div v-for="item in essaydata" class="essay_frame">
        <span>{{item.title}}</span><br/>
        <span>发表日期：{{format(item.date,"yyyy-MM-dd hh:mm")}}</span>
        <span style="margin-left: 50px">作者：{{item.author}}</span><br/>
        <span v-for="item1 in item.tag">{{item1}},</span><br/>
        <div>
          <span>{{item.data}}</span>
        </div>
          <span class="Jiconfont el-icon-taobao-communityfill" style="font-size: 40px"></span>
      </div>
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
  import 'element-ui'
  import '../assets/icon/iconfont.css'

    export default {
        name: "user-home",
        components: {},
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
