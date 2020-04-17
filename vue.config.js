const px2rem = require('postcss-px2rem')
const postcss = px2rem({
  remUnit: 16  //基准大小 baseSize，需要和rem.js中相同
})

module.exports = {
  css: {   // 移动端自适应:css 配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  }
}