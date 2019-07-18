<template>
  <footer>
    <div :class="$style.footer">
      <div :class="$style['source-code']">
        <a href="https://github.com/weirdSugar/Cnode" target="_blank" rel="noopener noreferrer">源码地址</a>
      </div>
      <div :class="$style.vendor">
        <div :class="$style.cnode">
          <span>Cnode社区提供API</span>
          <a href="https://cnodejs.org" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/logo.svg" alt="cnode" />
          </a>
        </div>
        <div :class="$style.cnode">
          <span>github-pages提供网站托管</span>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/github.svg" alt="github" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style lang="scss" module>
footer {
  width: 100vw;
  background: #fff;
  .footer {
    width: 70vw;
    margin: 0 auto;
    padding: 25px 0 35px 0;
    .source-code {
      a:hover {
        text-decoration: underline;
      }
    }
    .vendor {
      display: flex;
      .cnode {
        margin:15px 30px 0 0;
        span{
          margin-right: 10px
        };
        img {
          width: 100px;
        }
      }
    }
  }
  @media screen and(max-width:$width) {
    .footer {
      width: 100vw !important;
      padding-left: 10px !important;
    }
  }
}
</style>
