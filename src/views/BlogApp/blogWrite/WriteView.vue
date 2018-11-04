<style scoped>

</style>
<template>
    <div>
      <div>
        <write-blog-u-editor/>
      </div>
    </div>
</template>

<script>
  import WriteBlogUEditor from '../../../components/WriteBlogUEditor'
    export default {
        name: "write-view",
        props: {},
        components: {WriteBlogUEditor},
        data() {
            return {}
        },
        mounted() {
        },
        methods: {},
    }
</script>
