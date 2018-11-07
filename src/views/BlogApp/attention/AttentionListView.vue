<style scoped>

</style>
<template>
    <div>
      <div style="margin: 20px;color: #CCCCCC">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/my.j.blog/attention' }">关注</el-breadcrumb-item>
          <el-breadcrumb-item>关注列表</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div>
        <simple-user-show/>
      </div>
    </div>
</template>

<script>
  import SimpleUserShow from '../../../components/SimpleUserShow'
    export default {
        name: "attention-list-view",
        props: {},
        components: {SimpleUserShow},
        data() {
            return {}
        },
        mounted() {

        },
        methods: {}

    }
</script>
