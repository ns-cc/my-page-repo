<template>
  <div v-title data-title="主页" class="index-page">
    <div class="huge-title">Index:</div>
    <div class="links-wrapper">
      <span
        class="links"
        v-for="(item, index) in btnList"
        :key="index"
        @click="handleClickBtn(index)"
        >{{ item }}</span
      ><br />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      btnList: ['Change svg color'],
    }
  },
  methods: {
    handleClickBtn(val) {
      if (val === 0) {
        this.$router.push({
          path: `${
            this.$i18n?.localeProperties?.code === 'cn'
              ? ''
              : this.$i18n?.localeProperties?.code
          }/tools/calc-filter`,
        })
        return
      }
    },
    handleRouterPush() {
      this.$router.push({ path: '/more-pages/page1' })
    },
  },
})
</script>

<style lang="less" scoped>
.index-page {
  .huge-title {
    font-size: 28px;
  }
  .links-wrapper {
    padding: 3vh 0 0 5vw;
    .links {
      cursor: pointer;
    }
    .links:hover {
      color: #67c23a;
    }
  }
}
</style>
