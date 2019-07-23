import Vue from 'vue'
const state = Vue.observable({
  accesstoken:window.localStorage.accesstoken || '',
  isLogin:false,
  messagecount:0
})

export function logOut(){
  state.accesstoken=''
  state.isLogin=false
}