<template>
  <div v-title data-title="主页">
    <div @click="handleRouterPush">Hello World!!!</div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'index',
  data() {
    return {

    }
  },
  methods:{
    handleRouterPush(){
      this.$router.push({ name: 'page1' })
    }
  }
})
</script>

<style lang="less" scoped>

</style>
