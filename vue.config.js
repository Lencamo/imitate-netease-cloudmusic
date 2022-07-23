const { defineConfig } = require('@vue/cli-service')

// vant样式变量而需要的绝对路径
const path = require('path')
// const lessPath = path.join(__dirname, '/src/styles/vant-cover.less')
// 或者：
const lessPath = path.resolve('src/styles/vant-cover.less')

module.exports = defineConfig({
  transpileDependencies: true,
  // 拓展：ESLint关闭
  // lintOnSave: false

  // vant样式变量配置
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 方式1：直接覆盖变量
            // 'cell-font-size': '18px'
            // 方式2：通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "${lessPath}";`
          }
        }
      }
    }
  }
})
