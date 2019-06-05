var path = require('path')

function resolve(dir) {
  console.log(__dirname)
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src/components'))
      .set('static', resolve('/src'))
      .set('common', resolve('src/common'))
      .set('views', resolve('src/views'))
  }
}
