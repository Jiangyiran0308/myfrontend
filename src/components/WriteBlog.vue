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
    <div class="essay_frame" id="WriteBlog">
      <el-form ref="form" :rules="rules" label-width="60px" size="small" v-model="blogData">
        <el-form-item label="原创:">
          <el-switch v-model="blogData.createFlag"/>
        </el-form-item>
        <el-form-item v-if="!blogData.createFlag" prop="blogFrom" label="来源:">
          <el-input v-model="blogData.blogFrom"/>
        </el-form-item>
        <el-form-item label="标题:" prop="blogTitle">
          <el-input v-model="blogData.blogTitle"/>
        </el-form-item>
        <el-form-item label="标签:">
          <el-input v-model="blogData.blogTagInput" readonly/>
        </el-form-item>
        <!--内容编辑区-->
        <div style="height: 330px">
          <quill-editor style="height: 250px"
            v-model="blogData.blogContent"
            ref="myQuillEditor"
            :options="blogData.editorOption"
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
          </quill-editor>
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
  import { quillEditor } from 'vue-quill-editor'
  import ElSwitch from "element-ui/packages/switch/src/component";
  import $ from 'jquery'
    export default {
        name: "write-blog",
        props: {},
        components: {ElSwitch},
        data() {
            return {
              showWindowflag:false,
              firstShowFlag:true,
              loading1:'',
              blogData: {
                blogTitle: '',
                createFlag: true,
                blogFrom: '',
                blogTagInput: '',
                blogTagList:[],
                blogContent: '',
                editorOption: {}
              },
              rules:{
                // blogTitle:[
                //   { required: true,message:'请输入标题', trigger: 'blur'},
                //   { min: 1, max: 50, message: '长度在 0 到 50 个字符', trigger: 'blur'}
                // ],
                // blogFrom:[
                //   { required:true,message:'请输入来源', trigger: 'blur'},
                //   { min: 1, max: 50, message: '长度在 0 到 50 个字符', trigger: 'blur'}
                // ]
              }
            }
        },
        mounted() {

        },
        methods: {
          onEditorBlur(){//失去焦点事件
          },
          onEditorFocus(){//获得焦点事件
          },
          onEditorChange(){//内容改变事件
          },
          showBlog(){
            let vm =this ;
            $("#BlogShow").html(vm.blogData.blogContent);

            if(!vm.blogData.blogTitle.length>0){
              vm.$message({
                showClose:true,
                type: 'warning',
                message: '标题不能为空！'
              });
              return ;
            }

            if(!vm.blogData.blogContent.length>0){
              vm.$message({
                showClose:true,
                type: 'warning',
                message: '内容不能为空！'
              });
              return ;
            }

            //首次预览加载2s
            if(vm.firstShowFlag){
              vm.loading1 = this.$loading({
                lock: true,
                text: '正在加载',
                // spinner: 'el-icon-loading',
                background: 'rgba(255, 255, 255, 0.2)',
                target: document.querySelector('#WriteBlog'),
              });
              setTimeout(()=>{
                vm.loading1.close();
                vm.showWindowflag = true ;
                vm.firstShowFlag = false ;
              },2000)
            }else{
              vm.showWindowflag = true ;
              console.log(vm.blogData.blogContent);
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
