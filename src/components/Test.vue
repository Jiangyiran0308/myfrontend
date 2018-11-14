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
      // this.$http.get(this.hytGlobal.parent_url+'/data').then(function (xhr) {
      //   console.log(xhr);
      // })
      var user = new URLSearchParams();
      user.append("user","jiangyiran");

      let uu = {
        username:"jiangyiran",
        password:"123456"
      };

      this.$axios.post('/data',uu)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    methods: {},
  }
</script>
