const webpack = require('webpack');
// Module to provide plugins by default, in this case BrowserSyncPlugin
// or CleanWebpackPlugin (valid for jQuery too, see previous version)
const path = require('path');
// Module path require to define entry and out point, and the public folder
const HtmlWebpackPlugin = require('html-webpack-plugin')

const port = process.env.PORT || 3000;

module.exports = {
  // Development Mode [is] optimized for speed and developer experience
  mode: 'development',

  // Entry point to compile and create bundle
  entry: `${path.resolve(__dirname, 'src')}/js/index.js`,

  // Outpoint to compile in bundle.js all the files
  output: {
    path: path.join(__dirname, 'dist'),
    // Path to output
    filename: 'bundle.[hash].js',
    // This is the result, bundle.[hash].js
    // [hash] is a portion of the filename that will be replaced every time
    // you bundle => helps with caching
    publicPath: '/',
    // Where the files are available in the server
  },

  devtool: 'inline-source-map',
  // Tool to map Sass and javascript

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: 'localhost',
    port: port,
    compress: true,
    historyApiFallback: true,
    open: true,
    stats: 'errors-only',
  },
  // Webpack Server

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico'
    })
  ]

}
