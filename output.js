{
  mode: 'development',
  context: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist',
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/dist/undefinedundefined',
    filename: 'js/[name].js',
    publicPath: '/',
    chunkFilename: 'js/[name].js'
  },
  resolve: {
    alias: {
      '@': '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/src',
      vue$: 'vue/dist/vue.runtime.esm-bundler.js',
      '@assets': '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/src/assets',
      '@scss': '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/src/assets/scss',
      '@images': '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/src/assets/images',
      '@compononts': '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/src/components',
      '@layout': '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/src/components/layout',
      '@modal': '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/src/components/modal',
      '@router': '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/src/router',
      '@store': '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/src/store',
      '@views': '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/src/views',
      '@public': '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/public',
      '@api': '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/src/api',
      '@utils': '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/src/utils'
    },
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules',
      '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/@vue/cli-service/node_modules'
    ],
    plugins: [
      /* config.resolve.plugin('pnp') */
      {}
    ]
  },
  resolveLoader: {
    modules: [
      '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/@vue/cli-plugin-babel/node_modules',
      'node_modules',
      '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules',
      '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/@vue/cli-service/node_modules'
    ],
    plugins: [
      /* config.resolve.plugin('pnp-loaders') */
      {}
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          /* config.module.rule('vue').use('cache-loader') */
          {
            loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/cache-loader/dist/cjs.js',
            options: {
              cacheDirectory: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/.cache/vue-loader',
              cacheIdentifier: 'bed2b1c8'
            }
          },
          /* config.module.rule('vue').use('vue-loader') */
          {
            loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/vue-loader-v16/dist/index.js',
            options: {
              cacheDirectory: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/.cache/vue-loader',
              cacheIdentifier: 'bed2b1c8',
              babelParserPlugins: [
                'jsx',
                'classProperties',
                'decorators-legacy'
              ]
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          /* config.module.rule('images').use('url-loader') */
          {
            loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          /* config.module.rule('svg').use('file-loader') */
          {
            loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/file-loader/dist/cjs.js',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          /* config.module.rule('media').use('url-loader') */
          {
            loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          /* config.module.rule('fonts').use('url-loader') */
          {
            loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').oneOf('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              /* config.module.rule('pug').oneOf('pug-vue').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').oneOf('pug-template') */
          {
            use: [
              /* config.module.rule('pug').oneOf('pug-template').use('raw') */
              {
                loader: 'raw-loader'
              },
              /* config.module.rule('pug').oneOf('pug-template').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('css').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../'
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('css').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../'
                }
              },
              /* config.module.rule('css').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('css').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../'
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              /* config.module.rule('css').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../'
                }
              },
              /* config.module.rule('css').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('postcss').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../'
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('postcss').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../'
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('postcss').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../'
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('postcss').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../'
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('scss').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../'
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('sass-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.32.8\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.5\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  prependData: '\n          @import "~@assets/helpers/_var.scss";\n          @import "~@assets/helpers/_mixins.scss";\n        '
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('scss').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../'
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('sass-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.32.8\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.5\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  prependData: '\n          @import "~@assets/helpers/_var.scss";\n          @import "~@assets/helpers/_mixins.scss";\n        '
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('scss').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../'
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('sass-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.32.8\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.5\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  prependData: '\n          @import "~@assets/helpers/_var.scss";\n          @import "~@assets/helpers/_mixins.scss";\n        '
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('scss').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../'
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('sass-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.32.8\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.5\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  prependData: '\n          @import "~@assets/helpers/_var.scss";\n          @import "~@assets/helpers/_mixins.scss";\n        '
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('sass').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../'
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('sass-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.32.8\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.5\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('sass').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../'
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('sass-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.32.8\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.5\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('sass').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../'
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('sass-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.32.8\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.5\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              /* config.module.rule('sass').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../'
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('sass-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.32.8\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.5\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('less').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../'
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('less').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../'
                }
              },
              /* config.module.rule('less').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('less').oneOf('vue').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('less').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../'
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              /* config.module.rule('less').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../'
                }
              },
              /* config.module.rule('less').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('less').oneOf('normal').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('stylus').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../'
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('stylus').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../'
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('stylus').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../'
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              /* config.module.rule('stylus').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  hmr: true,
                  publicPath: '../'
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          /* config.module.rule('js').use('cache-loader') */
          {
            loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/cache-loader/dist/cjs.js',
            options: {
              cacheDirectory: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/.cache/babel-loader',
              cacheIdentifier: '71cb7fce'
            }
          },
          /* config.module.rule('js').use('babel-loader') */
          {
            loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/babel-loader/lib/index.js'
          }
        ]
      },
      /* config.module.rule('eslint') */
      {
        enforce: 'pre',
        test: /\.(vue|(j|t)sx?)$/,
        exclude: [
          /node_modules/,
          '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/@vue/cli-service/lib'
        ],
        use: [
          /* config.module.rule('eslint').use('eslint-loader') */
          {
            loader: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/eslint-loader/index.js',
            options: {
              extensions: [
                '.js',
                '.jsx',
                '.vue'
              ],
              cache: true,
              cacheIdentifier: '77a59de6',
              emitWarning: true,
              emitError: false,
              eslintPath: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/node_modules/eslint',
              formatter: undefined
            }
          }
        ]
      }
    ]
  },
  optimization: {
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
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('feature-flags') */
    new DefinePlugin(
      {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false'
      }
    ),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          VUE_APP_MODENAME: '"dev"',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('extract-css') */
    new MiniCssExtractPlugin(
      {
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].css'
      }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        title: 'vue3_todolist',
        templateParameters: function () { /* omitted long function */ },
        template: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/public/index.html'
      }
    ),
    /* config.plugin('preload') */
    new PreloadPlugin(
      {
        rel: 'preload',
        include: 'initial',
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch') */
    new PreloadPlugin(
      {
        rel: 'prefetch',
        include: 'asyncChunks'
      }
    ),
    /* config.plugin('copy') */
    new CopyPlugin(
      [
        {
          from: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/public',
          to: '/Users/easonchen/Desktop/__空間整理/創作區/個人/vue3_todolist/dist/undefinedundefined',
          toType: 'dir',
          ignore: [
            '.DS_Store',
            {
              glob: 'index.html',
              matchBase: false
            }
          ]
        }
      ]
    )
  ],
  entry: {
    app: [
      './src/main.js'
    ]
  }
}
