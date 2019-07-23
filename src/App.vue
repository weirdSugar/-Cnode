<template>
  <div id="app">
    <div :class="[$style['go-top'],'user-select-none']" @click="goTop">
      <p>回</p>
      <p>顶</p>
      <p>部</p>
    </div>
    <Header></Header>
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
export default {
  name:'App',
  components:{
    Header,
    Footer
  },
  setup(){
    const goTop=()=>{
      window.scrollTo(0,0)
    }
    return {
      goTop
    }
  }
}
</script>

<style lang="scss" module>
.block{
  height: 1500px;
  background:#222
}
.go-top{
  box-sizing: border-box;
  padding: 5px 10px;
  position: fixed;
  right: 15px;
  bottom: 30px;
  z-index: 666;
  border: 1px solid #e1e1e1;
  border-radius: 3px;
  cursor: pointer;
  background: #fff;

  &:hover{
    background: #f6f6f6
  }
  p{
    color: #666
  }
}
</style>
