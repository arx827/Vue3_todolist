const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

module.exports = {
  publicPath: process.env.VUE_APP_CONTEXT_PATH,
  outputDir: 'dist/' + process.env.MODE + process.env.VUE_APP_CONTEXT_PATH,
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@scss', resolve('src/assets/scss'))
      .set('@images', resolve('src/assets/images'))
      .set('@compononts', resolve('src/components'))
      .set('@layout', resolve('src/components/layout'))
      .set('@modal', resolve('src/components/modal'))
      .set('@router', resolve('src/router'))
      .set('@store', resolve('src/store'))
      .set('@views', resolve('src/views'))
      .set('@public', resolve('public'))
      .set('@api', resolve('src/api'))
      .set('@utils', resolve('src/utils'))
  },
  configureWebpack: config => {
    config.optimization = {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          bootstrap: {
            name: 'bootstrap',
            test: /[\\/]node_modules[\\/]bootstrap[\\/]/,
            priority: 10
          },
          bootstrapVue: {
            name: 'bootstrap-vue',
            test: /[\\/]node_modules[\\/]bootstrap-vue[\\/]/,
            priority: 10
          }
        }
      }
    }
  },
  css: {
    extract: {
      // filename: 'css/[name].css',
      chunkFilename: 'css/[name].css'
    },
    sourceMap: IS_PROD,
    loaderOptions: {
      scss: {
        // prependData: `
        //   @import "~@assets/helpers/_var.scss";
        //   @import "~@assets/helpers/_mixins.scss";
        // `
        additionalData: `
          @import "~@assets/helpers/_var.scss";
          @import "~@assets/helpers/_mixins.scss";
        `
      }
    }
  },
  // devServer: {
  //   port: 8080,
  //   proxy: {
  //     '/oto/cdm': {
  //       target: process.env.VUE_APP_API_URL,
  //       changOrigin: true
  //     }
  //   }
  // },
  productionSourceMap: false
}