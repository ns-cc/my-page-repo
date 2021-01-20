import Vue from 'vue'
import setTitle from '@/directive/setTitle'

const SetTitle = Vue.directive('title', setTitle)

export default setTitle
