/*
1.引入axios
2.设置请求超时时间
3.token处理
4.设置拦截  请求拦截 响应拦截
5.请求封装
*/

import axios from 'axios'
// import store from '../store'
// import { Toast } from "vant";
import changeCookie from '@/static/js/changeCookie'
var CancelToken = axios.CancelToken
function requireAxios(url) {
  const serveice = axios.create({
    baseURL: url,
    timeout: 6000,
  })
  //设置拦截
  //请求拦截
  serveice.interceptors.request.use(
    //设置请求头
    (config) => {
      //开始loading
      startLoading()
      config.headers['tenant-id'] = changeCookie.getCookie('tenant-id')
      config.headers['X-Access-Token'] =
        changeCookie.getCookie('X-Access-Token')
      //  'application/x-www-form-urlencoded;charset=utf-8'

      // config.headers.Authorization = changeCookie.getCookie('token')
      // addLoading();
      // console.log('params', params)
      if (config.method == 'get' || config.method == 'delete') {
        config.params = config.data
        delete config.data
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  //响应拦截
  serveice.interceptors.response.use(
    (response) => {
      //结束loading
      endLoading()
      if (response.status === 200) {
        return Promise.resolve(response)
      } else {
        return Promise.reject(response)
      }
    },
    // 服务器状态码不是200的情况
    (error) => {
      //结束loading
      endLoading()
      var message = ''
      if (error && error.response) {
        switch (error.response.status) {
          case 302:
            message = '接口重定向了！'
            break
          case 400:
            message = '参数不正确！'
            break
          case 401:
            message = '您未登录，或者登录已经超时，请先登录！'
            break
          case 1067: //token失效
            message = ''
            changeCookie.delCookie('token')
            localStorage.clear()
            break
          case 403:
            message = '您没有权限操作！'
            break
          case 404:
            message = `请求地址出错: ${error.response.config.url}`
            break
          case 408:
            message = '请求超时！'
            break
          case 409:
            message = '系统已存在相同数据！'
            break
          case 500:
            message = '服务器内部错误！'
            break
          case 501:
            message = '服务未实现！'
            break
          case 502:
            message = '网关错误！'
            break
          case 503:
            message = '服务不可用！'
            break
          case 504:
            message = '服务暂时无法访问，请稍后再试！'
            break
          case 505:
            message = 'HTTP版本不受支持！'
            break
          default:
            message = '异常问题，请联系管理员！'
            break
        }
        if (error.message.includes('timeout')) message = '网络请求超时！'
        if (error.message.includes('Network'))
          message = window.navigator.onLine
            ? '服务端异常！'
            : '请检查您的网络！'
        // Toast({
        //   message: message,
        //   duration: 1500
        // });
      }
      return Promise.reject(error.response)
    }
  )
  return serveice
}
export default requireAxios

/**
 * 封装axios
 */
let baseInstance = requireAxios(process.env.BASE_URL)
export function request(params) {
  return new Promise((resolve, reject) => {
    // 取消请求
    params.cancelToken = new CancelToken(function (cancel) {})
    baseInstance(params)
      .then(({ data }) => {
        if (data.code === 0 || data.error_code === '1') {
          resolve(data)
        } else if (data.code === 1004) {
          resolve(data)
          if (data.msg !== '不可以升级' && data.msg !== '您已达到购买上限') {
            // Toast({
            //   message: data.msg,
            //   duration: 3000,
            // })
          }
        } else {
          reject(data)
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}
/**
 * loading
 * **/
// var loading = ''
function startLoading() {
  // 开始加载
  // loading = this.$loading({
  //   lock: true,
  //   text: 'Loading',
  //   spinner: 'el-icon-loading',
  //   background: 'rgba(0, 0, 0, 0.7)',
  // })
  // Toast.loading({
  //   message: "加载中...",
  //   forbidClick: true
  // });
}
function endLoading() {
  // 结束加载
  // loading.close()
  // Toast.clear()
}
