import api from '@/api'
import http from './axiosConfig.js'

/**
 * 
 * data param 单写 
 */

export function getTopics(params){
  return http.get(api.topics,{params})
}

export function getTopic(topicID,params){
  return http.get(`${api.topicDetail}${topicID}`,{params})
}

export function addCollection(data){
  return http.post(api.collect,data)
}

export function cancelCollection(data){
  return http.post(api.cancelcollect,data)
}

export function getUserCollection(userID){
  return http.get(`${api.userCollection}${userID}`)
}

export function getUserProfile(userID){
  return http.get(`${api.user}${userID}`)
}

export function login(data){
  return http.post(api.login,data)
}

export function getUnreadMsg(){
  return http.get(api.msgCount)
}

export function getAllMsg(){
  return http.get(api.fetchMsg)
}

export function markAllMsg(){
  return http.post(api.msgMarkAll)
}

export function reply(topicID,data){
  return http.post(`${api.replies}${topicID}`,data)
}

export function newTopic(data){
  return http.post(api.newTopic,data)
}

export function togglelike(replyID,data){
  return http.post(`${api.like}${replyID}`,data)
}

export function updataTopic(data){
  return http.post(api.updateTopic,data)
}