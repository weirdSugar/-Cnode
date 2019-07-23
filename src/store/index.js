import Vue from 'vue'
const state = Vue.observable({
  accesstoken:window.localStorage.accesstoken || '',
  isLogin:false,
})