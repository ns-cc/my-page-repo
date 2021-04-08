<template>
  <div>
    <button @click="handleGenerate">generate</button>
    <button @click="handleMatch" :disabled="matchDisable">
      {{ matchDisable ? 'matching' : 'match' }}
    </button>
  </div>
</template>

<script>
import commonMixins from '@/mixins/common'

export default {
  name: 'pick-number',
  components: {},
  props: {},
  mixins: [commonMixins],
  data() {
    return {
      redArr: [],
      blueArr: [],
      matchDisable: false,
    }
  },
  methods: {
    handleMatch() {
      this.matchDisable = true
      const config = {
        maxTry: 40000000,
        matchOrigin: '815222331710',
      }
      console.log('选择 08 15 22 23 31  07 10')
      console.log(`运行上限 ${config.maxTry}次`)
      console.log('运行中...')
      const matchWorker = new Worker('workers/matchNumberWorker.js')
      matchWorker.onmessage = (event) => {
        console.log(event.data)
        this.matchDisable = false
      }

      matchWorker.postMessage(config)
    },
    handleGenerate() {
      console.log(
        `%c ${this.shuffle(this.redArr)
          .slice(0, 5)
          .sort((a, b) => a - b)
          .join('')}`,
        'background:#FA7E74;color: black;'
      )
      console.log(
        `%c ${this.shuffle(this.blueArr)
          .slice(0, 2)
          .sort((a, b) => a - b)
          .join('')}`,
        'background:#6894F0;color: black;'
      )
    },
  },
  created() {},
  mounted() {
    for (let i = 1; i < 36; i++) {
      this.redArr.push(i)
    }
    for (let i = 1; i < 13; i++) {
      this.blueArr.push(i)
    }
  },
}
</script>
<style lang="scss" scoped></style>
