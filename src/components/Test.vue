<style scoped>

</style>
<template>
  <div>
    test!!!!!!!!!!
    后端传来的数据为：
    {{testData}}
  </div>
</template>

<script>
  export default {
    name: "test",
    props: {},
    components: {},
    data() {
      return {
        testData:'',

      }
    },
    mounted() {
      let vm = this ;
      this.$http.get('http://localhost:8080/data').then(function (xhr) {
        console.log(xhr);
      })
    },
    methods: {},
  }
</script>
