const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    port: 8001,
    client: {
      overlay: false,
    },
  },
  plugins: [
    // 将css独立打包
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css',
    }),
    // 状态重置问题（更改相关代码保存后，state状态会重置）
    new ReactRefreshWebpackPlugin({
      overlay: false,
    }),
  ]
}