<template>
  <div v-title data-title="Page1">
    <div @click="handleRouterPush">this is page1</div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'page1',
  data() {
    return {

    }
  },
  methods:{
    handleRouterPush(){
      this.$router.push({ name: 'page2' })
    }
  }
})
</script>

<style lang="less" scoped>

</style>
