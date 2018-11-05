<style scoped>

</style>
<template>
    <div>
      <el-table
        :data="blogData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <!--@current-change="clickTitle"-->
        <el-table-column type="selection" width="55"/>
        <el-table-column prop="title" label="标题" width="550"/>
        <el-table-column prop="createTime" label="日期" sortable width="180"/>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" icon="el-icon-tickets" circle @click="blogView(scope.row)"/>
            <el-button size="mini" icon="el-icon-edit" circle @click="clickTitle(scope.row)"/>
            <el-button size="mini" icon="el-icon-delete" circle @click="deleteOne(scope.row)"/>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin: 20px;float: right">
        <el-button size="mini" type="danger" plain @click="clickTitle(scope.row)">
          删除
        </el-button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "large-delete-show",
        props: {
          blogData:{
            type:Array,
            default:()=>[]
          }
        },
        components: {},
        data() {
            return {
              blogSelection:[],
            }
        },
        mounted() {

        },
        methods: {
          handleSelectionChange(val){
            this.blogSelection = val ;
          },
          clickTitle(val){
            console.log("进入草稿编辑");
          },
          blogView(val){

          },
          deleteOne(val){
            console.log(val);
          }
        }

    }
</script>
