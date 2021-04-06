<template>
  <div class="page-container">
    <header class="page-header">
      <div class="header-start"></div>
      <div class="header-middle"></div>
      <div class="header-end">
        <el-dropdown @command="handleChangeLanguage">
          <span class="lang-btn">
            {{ $t('language')
            }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="cn">中文</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
    <main class="page-body"><Nuxt /></main>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {}
  },
  async mounted() {},
  methods: {
    handleChangeLanguage(val) {
      this.$i18n.setLocale(val)
    },
  },
})
</script>

<style lang="less">
@import '@/assets/css/layout.less';
@import '@/assets/css/common.less';
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  scrollbar-arrow-color: red;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
* {
  font-family: PingFangSC, PingFangSC-Regular;
}
</style>
