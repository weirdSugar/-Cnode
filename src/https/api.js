const API={
  topics:'topics',
  topicDetail:'topic/',
  collect:'topic_collect/collect',
  cancelCollect:'topic_collect/de_collect',
  userCollection:'topic_collect/',// :loginname
  user:'user/',//:loginname
  login:'accesstoken',
  msgCount:'message/count',
  fetchMsg:'message',
  msgMarkAll:'message/mark_all',
  msgMarkOne:'message/mark_one/',//:msg_id
  
  // 新建评论 /topic/:topic_id/replies
  replies: '/api/v1/topic/',
  // 新建主题
  newTopics: '/api/v1/topics',
  // 编辑主题
  updateTopics: '/api/v1/topics/update',
}

export default API