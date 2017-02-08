var path = require('path');
var webpack = require('webpack');

const config = {
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.dev.js',
    publicPath: '/public/'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: path.join(__dirname, 'app'),
      exclude: /node_modules/,
      loader: ['babel-loader']
    }]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './',
    port: 7000,
    historyApiFallback: true
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendorDev",
      filename: "vendor.dev.js"
    })
  ],
};

module.exports = config;
