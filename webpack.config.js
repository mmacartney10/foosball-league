const webpack = require('webpack');
const path = require('path');

const config = {
  entry: [
    'webpack-dev-server/client?http://localhost:7000',
    'webpack/hot/only-dev-server',
    './app/index.js'
  ],
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'app')
    }]
  },
  devServer: {
    contentBase: './',
    port: 7000,
    hot: true
  }
}

module.exports = config;
