<template>
  <header class="header">
    <router-link to='/' class='logo user-select-none'>
      <img src="@/assets/logo.svg" alt="logo">
    </router-link>
    <nav class='nav'>
      <router-link :to="{ name:'home'} ">首页</router-link>
      <router-link v-if='isLogin' :to="{ name:'message'}">未读消息</router-link>
      <a href="https://github.com/weirdSugar" target="_blank" rel="noopener noreferrer">关于作者</a>
      <span v-if='isLogin' @click="logOut">退出</span>
      <router-link v-else :to="{name:'login'}">登录</router-link>
    </nav>
  </header>
</template>
