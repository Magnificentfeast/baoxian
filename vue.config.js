module.exports = {
  publicPath: './',
  devServer: {
    port: 3000,
    open: true,
    hotOnly: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:30001',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  lintOnSave: false,
  runtimeCompiler: true,
  productionSourceMap: false,
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      return {
        externals: {
          vue: 'Vue',
          'element-ui': 'ELEMENT'
        }
      }
    }
  }
}
