<style scoped>

</style>
<template>
    <div>
      <full-content-show :blogData="blogData"/>
    </div>
</template>

<script>

  import FullContentShow from '../../../components/FullContentShow'
    export default {
        name: "full-blog-view",
        props: {},
        components: {FullContentShow},
        data() {
            return {
              blogData:{
                id:'null'
              },
            }
        },
        mounted() {
          let vm = this ;
          vm.blogData = this.$route.query.data;
        },
        watch:{

        },
        methods: {

        },
    }
</script>
