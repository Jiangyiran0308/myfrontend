<style scoped>

</style>
<template>
    <div>
      <div style="margin-top: 15px;width: 500px">
        <el-input placeholder="请输入内容" v-model="searchInfo" class="input-with-select">
          <el-select v-model="searchChoose" slot="prepend" placeholder="请选择">
            <el-option label="标签" value="1"></el-option>
            <el-option label="作者" value="2"></el-option>
            <el-option label="文章" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
</template>

<script>
    export default {
        name: "hot-tag",
        props: {},
        components: {},
        data() {
            return {
              searchInfo:'',
              searchChoose:'',
            }
        },
        mounted() {

        },
        methods: {}

    }
</script>
