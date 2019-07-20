/**
 * @file axios http request config
 */
import axios from 'axios'
import {state} from '@/http/store.js'
import NProgress from 'nprogress'
import {Message as $message} from 'iview'

const http=axios.create({
  baseURL:'https://cnodejs.org/api/v1/',
  timeout:6000,
})

http.interceptors.request.use(config =>{
  NProgress.start();
  config.params.accesstoken=state.accessToken
  return config
}, error=>{
  NProgress.done()
  $message.warning('请求失败，请稍后再试')
  return Promise.reject(error)
})

http.interceptors.response.use(res =>{
  NProgress.done()
})