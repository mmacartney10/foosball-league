var path = require('path');
var webpack = require('webpack');

const config = {
  devtool: 'source-map',
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.prod.js',
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': JSON.stringify('production') }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendorProd",
      filename: "vendor.prod.js"
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      debug: true,
      minimize: true,
      sourceMap: true,
      output: {comments: false},
      compressor: {warnings: false}
    })
  ],
};

module.exports = config;
