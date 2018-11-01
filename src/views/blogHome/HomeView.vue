<style scoped>

</style>
<template>
    <div>
      <hot-tag></hot-tag>
      <user-home></user-home>
    </div>
</template>

<script>
    import HotTag from './HotTag'
    import UserHome from './UserHome'
    export default {
        name: "home-view",
        props: {},
        components: {
          UserHome,
          HotTag,
          'hot-tag':HotTag,
          'user-home':UserHome
        },
        data() {
            return {}
        },
        mounted() {
        },
        methods: {},
    }
</script>
