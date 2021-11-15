const webpack = require('webpack');
const { name } = require('./package');
module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',
  entry:  __dirname + "/src/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
    library: `${name}-[name]`,
    libraryTarget: 'umd',
    jsonpFunction: `webpackJsonp_${name}`,
    globalObject: 'window',
  },
  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    inline: true,
    hot:true,
    progress: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  } ,
  module: {
    rules: [
      {
				test: /(\.jsx|\.js)$/,
				exclude:/node_modules/,
				use: ['babel-loader']
      },
      {
	      test: /\.css$/,
	      use: [
		      {
		        loader: "style-loader"
		      }, 
		      {
            loader: "css-loader",
		      }, 
		    ]
	    },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()//热加载插件
  ]
}