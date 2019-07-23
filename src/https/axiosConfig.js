/**
 * @file axios http request config
 */
import axios from 'axios'
import state from '@/store'
import NProgress from 'nprogress'
import ivew from 'iview'

const $message=ivew.Message
const http=axios.create({
  baseURL:'https://cnodejs.org/api/v1/',
  timeout:6000,
})

http.interceptors.request.use(config =>{
  NProgress.start();
  if(config.method===get){
    config.params.accesstoken=state.accesstoken
  }else if(config.post===post){
    config.data.accesstoken=state.accesstoken
  }
  return config
}, error=>{
  NProgress.done()
  $message.warning('请求失败，请稍后再试')
  return Promise.reject(error)
})

http.interceptors.response.use(res =>{
  NProgress.done()
  return res
},error =>{
  if(e.response.status === 404){
    $message.warning('404 Not Found!')
  }else{
    $message.warning('请求超时！')
  }
  NProgress.done()
  return Promise.reject(error)
})

export default http