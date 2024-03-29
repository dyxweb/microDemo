const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    publicPath: '/child/micro-react/build/',
  },
  plugins: [
    // 将css独立打包
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
    }),
    // 压缩css代码
    new CssMinimizerWebpackPlugin(),
    // 开启gzip压缩
    new CompressionPlugin({
      algorithm: 'gzip',
      test: new RegExp('\\.(js|css)$'),
      include: new RegExp('static'),
      threshold: 10240,
      minRatio: 0.8
    }),
  ]
}