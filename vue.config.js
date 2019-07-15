const moment= require('moment')
const path=require('path')
const builtDate=moment().format('YYYYMMDDhhmmss')
const isDev=process.env.NODE_ENV==='development'
module.exports = {
  publicPath: isDev ? '/CNode/' : '/',

  css: {
    // modules: true,
    extract:{
      filename:`css_[name]_${builtDate}.css`,
      chunkFilename:`css_[name]_${builtDate}.css`
    },
    loaderOptions:{
      css:{
        localIdentName:'[name]-[hash]',
        camelCase:'only'
      },
      sass:{
        data: `@import "~@/assets/style/variables.scss";`
      }
    }
  },
  configureWebpack:{
    output:{
      filename: `js_[name]_${builtDate}.js`,
      chunkFilename: `js_[name]_${builtDate}.js`
    }
  },
  // chainWebpack:config=>{
  //   const oneOfsMap = config.module.rule('scss').oneOfs.store
  //   console.log(oneOfsMap)
  //   oneOfsMap.forEach(itm =>{
  //     itm
  //     .use('sass-resources-loader')
  //     .loader('sass-resources-loader')
  //     .option({
  //       resources:path.resolve(__dirname,'./src/assets/styles/variables.scss')
  //     })
  //     .end()
  //   })
  // },
  devServer:{
    port:5533,
    open:true,
    hot:true
  }
}