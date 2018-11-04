<style scoped>
  .essay_frame{
    border: 1px solid #FFFFFF;
    /*border-radius: 15px;*/
    position: relative;
    padding: 16px;
    margin: 30px;
    height: 580px;
    min-width: 700px;
    box-shadow:0 0 10px 2px #C7C7C7;
  }
</style>
<template>
  <!--富文本编辑器-->
  <div class="essay_frame">
    <el-form ref="form" label-width="60px" size="small" v-model="blogData">
      <el-form-item label="原创:" required>
        <el-switch v-model="blogData.createFlag"/>
      </el-form-item>
      <el-form-item v-if="!blogData.createFlag" label="来源:" required>
        <el-input v-model="blogData.blogFrom"/>
      </el-form-item>
      <el-form-item label="标题:" required >
        <el-input v-model="blogData.blogTitle"/>
      </el-form-item>
      <el-form-item label="标签:">
        <el-input v-model="blogData.blogTagInput" readonly/>
      </el-form-item>
      <!--内容编辑区-->
      <div style="height: 330px">
        <script id="editor" type="text/plain"></script>
      </div>
      <!--提交，预览区 -->
      <div style="float: left">
        <el-button @click="showBlog" size="small" type="primary">
          预览<i class="el-icon-document el-icon--right"></i>
        </el-button>
      </div>
      <div style="float: right">
        <el-button @click="submitBlog" size="small" type="primary">
          发布<i class="el-icon-upload el-icon--right"></i>
        </el-button>
        <el-button @click="saveBlog" size="small">
          存草稿
        </el-button>
        <el-button @click="deleteBlog" size="small">
          清空
        </el-button>
      </div>
    </el-form>
    <el-dialog
      :title="blogData.blogTitle"
      :visible.sync="showWindowflag"
      width="920px"
      center>
      <div style="padding: 10px" >
        <div id="BlogShow"></div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import '../../static/UEditor/ueditor.config.js'
  import '../../static/UEditor/ueditor.all.min.js'
  import '../../static/UEditor/lang/zh-cn/zh-cn.js'
  import '../../static/UEditor/ueditor.parse.min.js'
  import ElSwitch from "element-ui/packages/switch/src/component";
  import $ from 'jquery'
    export default {
        name: "write-blog-u-editor",
        props: {},
        components: {ElSwitch},
        data() {
            return {
              editor: null,
              config: {
                initialFrameHeight: 200,
                initialFrameWeight: 100
              },
              defaultMsg:"请驶入内容",
              showWindowflag:false,
              firstShowFlag:true,
              loading1:'',
              blogData: {
                blogTitle: '',
                createFlag: true,
                blogFrom: '',
                blogTagInput: '',
                blogTagList:[],
                blogContent: ''
              },
            }
        },
        mounted() {
          const vm = this ;
          vm.editor = UE.getEditor('editor',vm.config).render('editor');
        },
        methods: {
          getUEContent(){
            // return this.editor.getContent();
          },
          showBlog(){
            let vm =this ;
            $("#BlogShow").html(vm.blogData.blogContent);
            //首次预览加载2s
            if(vm.firstShowFlag){
              vm.loading1 = this.$loading({
                lock: true,
                text: '正在加载',
                // spinner: 'el-icon-loading',
                background: 'rgba(255, 255, 255, 0.2)',
                target: document.querySelector('essay_frame'),
              });

              setTimeout(()=>{
                vm.loading1.close();
                vm.showWindowflag = true ;
              },2000)
            }else{
              vm.showWindowflag = true ;
            }
          },
          submitBlog(){
            let vm = this ;
            console.log(vm.blogData);
          },
          saveBlog(){

          },
          deleteBlog(){

          }
        }

    }
</script>
