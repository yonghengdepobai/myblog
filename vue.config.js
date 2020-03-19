module.exports = {
    publicPath:'./',
    // devtools: false,
    configureWebpack:{
        resolve: {
            alias: {
              'assets': '@/assets',
              'common': '@/common',
              'components': '@/components',
              'network': '@/network',
              'views': '@/views',
              'plugins': '@/plugins',
            }
          }
    },
    pwa: {
        iconPaths: {
          favicon32: './favicon.ico',
          favicon16: './favicon.ico',
          appleTouchIcon: './favicon.ico',
          maskIcon: './favicon.ico',
          msTileImage: './favicon.ico'
        }
      }
}