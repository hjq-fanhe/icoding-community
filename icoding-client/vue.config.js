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
        'plugins': '@/plugins',
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
      },
      '/icoding':{
        target: process.env.VUE_APP_ICODING_ADDR,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/icoding': '/'
        }
      },
      '/gitee': {
        target: process.env.VUE_APP_GITEE_APIURL,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/gitee': ''
        }
      }
    }
  }
}
