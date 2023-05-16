const { defineConfig } = require('@vue/cli-service')
const path = require('path');
const { name } = require('./package');

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: path.resolve(__dirname, './build'),
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/microVue/',
  devServer: {
    port: 8002,
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
})
