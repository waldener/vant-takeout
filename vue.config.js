module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },

  //添加这些代码之后不需要在axios.create里重新定义baseUrl
  publicPath: './',
  devServer: {
    port:8000,
    proxy: {
      '': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          //直接用'api/接口名'进行请求.
        }
      }
    }
  }
}