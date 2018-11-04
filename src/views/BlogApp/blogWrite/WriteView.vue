<style scoped>

</style>
<template>
    <div>
      <div>
        <!--<write-blog-u-editor/>-->
        <write-blog/>
      </div>
    </div>
</template>

<script>
  import WriteBlogUEditor from '../../../components/WriteBlogUEditor'
  import WriteBlog from '../../../components/WriteBlog'
    export default {
        name: "write-view",
        props: {},
        components: {
          WriteBlog,
          WriteBlogUEditor},
        data() {
            return {}
        },
        mounted() {
        },
        methods: {},
    }
</script>
