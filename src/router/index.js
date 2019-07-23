const router=new Router({
  mode:'history',
  routes:[
    {
      name:'home',
      path:'/',
      component:()=> import('@/view/homepage.vue')
    },
    {
      name:'message',
      path:'/message',
      component:()=> import('@/view/message.vue')
    }
  ]
})