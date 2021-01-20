<template>
  <div v-title data-title="主页">
    <div @click="handleRouterPush">Hello World!!!</div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {

    }
  },
  methods:{
    handleRouterPush(){
      this.$router.push({ path: '/more-pages/page1' })
    }
  }
})
</script>

<style lang="less" scoped>

</style>
