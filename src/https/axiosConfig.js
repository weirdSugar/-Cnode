/**
 * @file axios http request config
 */
import axios from 'axios'
import NProgress from 'nprogress'

const http=axios.create({
  baseURL:'https://cnodejs.org/api/v1/',
  timeout:6000,

})