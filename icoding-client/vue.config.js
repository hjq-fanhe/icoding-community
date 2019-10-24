//vue配置

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'utils': '@/utils',
        'router': '@/router',
        'store': '@/store',
        'view': '@/view'
      }
    }
  },
  devServer: {
    port: 8487,    //配置默认端口号
    proxy: {
      '/github': {
        target: 'https://github.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/github':'/'
        }
      }
    }
  }
}
