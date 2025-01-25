const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // devServer: {
  //   // 只需要写基础路径
  //   proxy: 'http://localhost:5000'
  // }

  devServer: {
    proxy: {
      '/zjy': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/zjy': '' },
        ws: true,
        changeOrigin: true
      },
      '/lsr': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/lsr': '' },
        ws: true,
        changeOrigin: true
      }
    }
  }
})
