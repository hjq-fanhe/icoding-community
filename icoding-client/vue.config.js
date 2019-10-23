//vue配置
const path = require('path')

function resolve(dir){
  return path.join(__dirname,dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('assets',resolve('@/assets'))
      .set('components',resolve("@/components"))
      .set('network',resolve('@/network'))
      .set('router',resolve('@/router'))
      .set('store',resolve('@/store'))
      .set('view',resolve('@/view'))
  }
}
