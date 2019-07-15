<template>
  <div id="app">
    <div class="go-top user-select-none">
      <p>回</p>
      <p>顶</p>
      <p>部</p>
    </div>
  </div>
</template>

<style lang="scss">
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
