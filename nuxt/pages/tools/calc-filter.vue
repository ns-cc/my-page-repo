<template>
  <div v-title data-title="Calc Filter" class="filter-calc-container">
    <el-collapse class="desc-wrapper">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="el-icon-warning-outline title-icon"></i
          ><span style="margin-left: 8px">About</span>
        </template>
        <div>这个工具用来将黑色元素 使用css filter 转成任意一个指定的颜色</div>
        <div>
          算法：<a
            href="https://www.w3.org/TR/filter-effects-1/#feColorMatrixElement"
            >feColorMatrixElement</a
          >
        </div>
        <div>使用场景：转换一个svg，png图表的颜色等</div>
      </el-collapse-item>
    </el-collapse>
    <div class="func-wrapper flex">
      <div class="title">目标:</div>
      <input type="color" v-model="inputColor" />
      <span class="desc">{{ inputColor }}</span>
    </div>
    <div class="func-wrapper flex">
      <div class="title">结果:</div>
      <div :style="`${filterResult}`" class="color-box"></div>
      <span class="desc">{{ countText }}</span>
    </div>
    <div class="func-wrapper flex">
      <span @click="handleClickDuplCss">{{ filterResult }}</span>
    </div>
    <div class="func-wrapper flex">
      <span>{{ lossMsg }}</span>
    </div>
    <div class="func-wrapper flex">
      <button
        class="btn"
        :disabled="calcLoading"
        @click="handleCalcFilterValue"
      >
        {{ calcLoading ? '计算中..' : '计算' }}
      </button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Color, Solver, hexToRgb } from '@/plugins/calcFilterFunc'
export default Vue.extend({
  data() {
    return {
      inputColor: '#000000',
      calcLoading: false,
      filterResult: '',
      lossMsg: '',
      calcWorker: '',
      countText: '',
    }
  },
  mounted() {
    this.calcWorker = new Worker('workers/calcWorker.js')
  },
  methods: {
    handleCalcFilterValue() {
      this.calcLoading = true
      this.calcWorker.onmessage = (event) => {
        this.calcLoading = false
        this.countText = `共进行了${event.data.calcCount}组计算`
        if (event.data.resultList.length === 0) {
          this.countText += ' 未找到较为精确的解'
          return
        }

        this.filterResult = event.data.resultList[0].filter
      }
      this.calcWorker.onerror = (error) => {
        console.log(error.message)
      }
      this.calcWorker.postMessage(this.inputColor)
    },
    handleClickDuplCss() {},
  },
})
</script>

<style lang="scss" scoped>
$maxBodyWidth: 960px;
.filter-calc-container {
  height: 100%;
  .desc-wrapper {
    margin: 0 auto 2vh auto;
    max-width: $maxBodyWidth;
    .title-icon {
      font-size: 20px;
    }
  }

  .func-wrapper {
    max-width: $maxBodyWidth;
    margin: 0 auto 18px auto;
    line-height: 27px;
    .title {
      margin-right: 24px;
    }
    .desc {
      margin-left: 24px;
    }
    .btn {
      height: 36px;
    }

    .color-box {
      background-color: black;
      width: 36px;
      height: 36px;
    }
  }
}
</style>
