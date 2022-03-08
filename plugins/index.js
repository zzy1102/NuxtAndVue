/**
 * api导出
 */
import Vue from 'vue'
import demoApi from './api/demo' // 支付中心

var api = {
  demoApi,
}

Vue.prototype.$api = api
